import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HorizontalImageList from "./components/image/HorizonalImageList";
import ImageEditor from "./components/image/ImageEditor";
import TextInputBox from "./components/TextInputBox";
import {  Text } from "@chakra-ui/react";
import api from "./apis";
import './custom.css'
function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  const [inputText, setInputText] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/get_memes");
        const memeImages = data.data.memes;
        setImages(memeImages);
        setSelectedImage(memeImages[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const handleText = (key, e) => {
    const text = e.target.value;
    var input = { ...inputText };

    input[key] = text;
    setInputText(input);
  };
  return (
    <>
      <Header />
      <div className="container-grid">
        <div className="grid-item-1">

          <ImageEditor
            selectedImage={selectedImage}
            inputText={inputText}
          />
        </div>
        <div className="grid-item-2" >
          <Text fontSize="xl">{selectedImage.name}</Text>

          <HorizontalImageList
            images={images}
            setSelectedImage={setSelectedImage}
            className="resize-1"
          />
          <TextInputBox
            selectedImage={selectedImage}
            handleText={handleText}
            inputText={inputText}
            className="resize-2"
          />

        </div>
      </div>
      </>
        );
}

        export default App;
