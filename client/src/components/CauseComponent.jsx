import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { colours } from "../utils/constants";

// props: {text: String, rowSpan: Number, colSpan: Number, h: String}
const CauseComponent = (props) => {
  const { textHeading, textBody } = props;

  return (
    <Flex w={"calc(100% / 3)"} backgroundColor={colours.BROWN}>
      <Flex
        flexDirection={"column"}
        h={"95%"}
        w={"100%"}
        margin={"0.5rem"}
        backgroundColor={colours.ORANGENEW}
      >
        <Flex
          backgroundColor={colours.WHITE}
          h={"50%"}
          w={"50%"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"0.5rem"}
        ></Flex>
        <Flex h={"50%"} w={"80%"} flexDirection={"column"}>
          <Text>{textHeading}</Text>
          <Text>{textBody}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CauseComponent;
