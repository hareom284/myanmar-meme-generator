import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ImageEditor = ({ selectedImage, inputText }) => {
  console.log("inputText", inputText);
  return (
    <Box>
      <h1>{inputText[0]}</h1>
      <Image boxSize="full" src={selectedImage.url} alt={selectedImage.name} />
      <h1>{inputText[1]}</h1>
    </Box>
  );
};

export default ImageEditor;
