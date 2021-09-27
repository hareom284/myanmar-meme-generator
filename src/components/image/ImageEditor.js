import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ImageEditor = ({ selectedImage }) => {
  return (
    <Box>
      <Image
        boxSize="full"
        src={selectedImage.url}
        alt={selectedImage.name}
      />
    </Box>
  );
};

export default ImageEditor;
