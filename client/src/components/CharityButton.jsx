import React from "react";
import { Button, Text } from "@chakra-ui/react";

// props: {text: String, rowSpan: Number, colSpan: Number, h: String}
const CharityButton = (props) => {
  const { text } = props;

  return (
    <Button className="griddy" bg="#F8586A" rowSpan={1} colSpan={1} h={"100%"}>
      <Text className="griddy-text" as="b">
        {text}
      </Text>
    </Button>
  );
};

export default CharityButton;
