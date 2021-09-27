import React from "react";
import { HStack, Image } from "@chakra-ui/react";

const HorizontalImageList = ({ images, setSelectedImage }) => {
  return (
    <HStack overflow="scroll" py={4}>
      {images &&
        images.map((img, i) => (
          <Image
            key={i}
            boxSize="70px"
            objectFit="cover"
            src={img.url}
            alt={img.name}
            onClick={() => setSelectedImage(img)}
          />
        ))}
    </HStack>
  );
};

export default HorizontalImageList;
