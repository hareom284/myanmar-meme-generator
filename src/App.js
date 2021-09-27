import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HorizontalImageList from "./components/image/HorizonalImageList";
import ImageEditor from "./components/image/ImageEditor";
import TextInputBox from "./components/TextInputBox";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import api from "./apis";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  const [inputText, setInputText] = useState([{ text: "" }]);

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
      <Container maxW="container.lg">
        <Box py={12}>
          <SimpleGrid columns={[1, null, 2]} spacing="10px">
            <Box>
              <ImageEditor
                selectedImage={selectedImage}
                inputText={inputText}
              />
            </Box>
            <Box>
              <HorizontalImageList
                images={images}
                setSelectedImage={setSelectedImage}
              />
              <TextInputBox
                selectedImage={selectedImage}
                handleText={handleText}
                inputText={inputText}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default App;
