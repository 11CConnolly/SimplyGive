import React from "react";
import { Center, Box, Image, Text } from "@chakra-ui/react";

import LogoSGmin from "../LogoSGmin.png";

const Footer = () => {
  return (
    <Center className="footer" h={"100px"}>
      <Box w={"200px"}>
        <Image width="150px" src={LogoSGmin} alt="Simply Give Logo" />
      </Box>
      <Text color={"whitesmoke"}>SimplyGive, Registered Charity: 89003883</Text>
    </Center>
  );
};

export default Footer;
