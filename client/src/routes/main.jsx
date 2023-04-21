import React from "react";
import {
  Box,
  VStack,
  Center,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "../index.css";
import { zIndexLevels } from "../utils/constants";

const Main = () => {
  // @params  - Registration request
  // @returns - Created subscription
  // const registerRequest = async () => {
  //   return client
  //     .post("/api/register", {
  //       name: username,
  //       email,
  //       amount,
  //       dateToTakePayment: date.toISOString().split("T")[0],
  //       categories: checkedItems,
  //     })
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  // };
  // TODO Turn the boxes into a component

  return (
    <VStack className="page-container" spacing={1}>
      {/* FIRST BOX */}
      <Flex className="landing-section" w={"100%"} h="2xl">
        <Box className="first-box-left">
          <Heading size="2xl">
            SimplyGive makes it easier for to support the issues that are
            closest to your heart.
          </Heading>
          <br></br>
          <br></br>
          <Heading size="2xl">
            It's your subscription to make the world a better place
          </Heading>
        </Box>
        <Box className="first-box-right">
          <Center>Img</Center>
        </Box>
      </Flex>

      {/* SECOND BOX */}
      <Center
        className="landing-section"
        h="md"
        width="100%"
        backgroundColor={"white"}
      >
        <Box
          borderRadius="lg"
          h="lg"
          width="80%"
          backgroundColor="black"
          zIndex={zIndexLevels.LEVEL_MED}
        ></Box>
      </Center>

      {/* THIRD BOX */}
      <Flex h="xl" w={"100%"} className="landing-section">
        <Box className="section-box-left">
          <Heading size="4xl" textAlign={"center"}>
            Step 1
          </Heading>
          <br></br>
          <br></br>
          <Text fontSize="2xl" as={"b"} textAlign={"center"}>
            Select the issues most important to you
          </Text>
        </Box>
        <Box className="section-box-right">
          <Grid
            h="250px"
            w="xl"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={5}
            className="grid"
          >
            <GridItem rowSpan={1} colSpan={1} bg="tomato" className="griddy">
              <Text as={"b"}>Healthcare</Text>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              bg="papayawhip"
              className="griddy"
            >
              <Text as={"b"}>Animals</Text>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              bg="papayawhip"
              className="griddy"
            >
              <Text as={"b"}>Welfare</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="tomato" className="griddy">
              <Text as={"b"}>Culture</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="tomato" className="griddy">
              <Text as={"b"}>Crisis</Text>
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={1}
              bg="papayawhip"
              className="griddy"
            >
              <Text as={"b"}>Education</Text>
            </GridItem>
          </Grid>
        </Box>
      </Flex>

      {/* FOURTH BOX */}
      <Flex h="lg" w={"100%"} className="landing-section"></Flex>

      {/* FIFTH BOX */}
      <Flex h="lg" w={"100%"} className="landing-section"></Flex>
    </VStack>
  );
};

export default Main;
