import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import "../../custom.css"

const HorizontalImageList = ({ images, setSelectedImage }) => {
  return (
    <HStack overflow="scroll" p="4" mr="10" className="box-size">
      { 
      images.map((img, i) => (
          <Image
            key={i}
            boxSize="100px"
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
