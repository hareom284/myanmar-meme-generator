import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Resizable } from "re-resizable";

const ImageEditor = ({ selectedImage, inputText }) => {
  return (
    <Box>
      <Resizable
        style={{
          border: "1px solid #f00",
        }}
        defaultSize={{
          width: 100,
          height: 60,
        }}
      >
        {inputText[0]}
      </Resizable>
      <Image boxSize="full" src={selectedImage.url} alt={selectedImage.name} />
      <Resizable
        style={{
          border: "1px solid #f00",
        }}
        defaultSize={{
          width: 100,
          height: 60,
        }}
      >
        {inputText[1]}
      </Resizable>
    </Box>
  );
};

export default ImageEditor;
