import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HorizontalImageList from "./components/image/HorizonalImageList";
import ImageEditor from "./components/image/ImageEditor";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import api from "./apis";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/get_memes");
        const memeImages = data.data.memes;
        setImages(memeImages);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Container maxW="container.lg">
        <Box py={12}>
          <SimpleGrid columns={[1, null, 2]} spacing="10px">
            <Box>
              <ImageEditor selectedImage={selectedImage} />
            </Box>
            <Box overflow="scroll" py={4}>
              <HorizontalImageList
                images={images}
                setSelectedImage={setSelectedImage}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default App;
