import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import DisplayText from "./displayText";

const ImageEditor = ({ selectedImage, inputText }) => {

  const inputItems = [];
  for (let index = 0; index < selectedImage.box_count; index++) {

    inputItems.push(<DisplayText inputText={inputText[index]} key={index} />);
  }

  return (
    
    <Grid
    h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}> {inputItems}</GridItem>
      <GridItem colSpan={4}><Image  boxSize="full" src={selectedImage.url} alt={selectedImage.name} /></GridItem>
     
    </Grid>
  );
};

export default ImageEditor;
