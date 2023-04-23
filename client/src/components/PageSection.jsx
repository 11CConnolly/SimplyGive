import React from "react";
import { Flex } from "@chakra-ui/react";

const PageSection = ({ children, ...props }) => {
  return (
    <Flex className="landing-section" width="100%" {...props}>
      {children}
    </Flex>
  );
};

export default PageSection;
