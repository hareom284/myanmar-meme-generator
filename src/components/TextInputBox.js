import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

const TextInputBox = ({ selectedImage, handleText, inputText }) => {
  const [boxCount, setBoxCount] = useState(1); //default box count value

  useEffect(() => {
    setBoxCount(selectedImage.box_count);
  }, [selectedImage]);

  return (
    <Box>
      {[...Array(boxCount)].map((x, i) => (
        <Input
          placeholder={`Text Input #${i}`}
          mb={3}
          value={inputText.text}
          onChange={(e) => handleText(i, e)}
        />
      ))}
    </Box>
  );
};

export default TextInputBox;
