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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  Button,
} from "@chakra-ui/react";
import "../index.css";
import { zIndexLevels } from "../utils/constants";

import charity from "../charity.jpg";

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
    <>
      <VStack className="page-container" spacing={1}>
        {/* FIRST BOX */}
        <Flex
          className="landing-section"
          w={"100%"}
          h="2xl"
          backgroundImage={charity}
          backgroundSize={"contain"}
          backgroundPosition={"25rem"}
        >
          <Box className="first-box-left">
            <Heading size="2xl" textColor={"ivory"}>
              SimplyGive makes it easier for to support the issues that are
              closest to your heart.
            </Heading>
            <br></br>
            <br></br>
            <Heading size="2xl" textColor={"ivory"}>
              It's your subscription to make the world a better place
            </Heading>
          </Box>
          <Box className="first-box-right"></Box>
        </Flex>

        {/* SECOND BOX */}
        <Center
          className="landing-section"
          h="lg"
          width="100%"
          backgroundColor={"lightslategrey"}
        >
          <Box
            borderRadius="lg"
            h="xl"
            width="80%"
            backgroundColor="#282c34"
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
              gap={6}
              className="grid"
            >
              <Button
                rowSpan={1}
                colSpan={1}
                bg="tomato"
                className="griddy"
                height="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Healthcare
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="papayawhip"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Animals
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="papayawhip"
                className="griddy"
                h="100%"
              >
                <Text className="griddy-text" as={"b"}>
                  Welfare
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="tomato"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Culture
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="tomato"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Crisis
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="papayawhip"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Education
                </Text>
              </Button>
            </Grid>
          </Box>
        </Flex>

        {/* FOURTH BOX */}
        <Flex h="md" w={"100%"} className="landing-section">
          <Box className="section-box-left">
            <Heading size="4xl" textAlign={"center"}>
              Step 2
            </Heading>
            <br></br>
            <br></br>
            <Text fontSize="2xl" as={"b"} textAlign={"center"}>
              Choose your Monthly Donation
            </Text>
          </Box>
          <Box className="section-box-right">
            <Slider aria-label="slider-ex-1" defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Flex>

        {/* FIFTH BOX */}
        <Flex h="md" w={"100%"} className="landing-section">
          <Box className="section-box-left">
            <Heading size="4xl" textAlign={"center"}>
              Step 3
            </Heading>
            <br></br>
            <br></br>
            <Text fontSize="2xl" as={"b"} textAlign={"center"}>
              Add a few details to know how your donation is helping
            </Text>
          </Box>
          <Box className="section-box-right">
            <VStack paddingTop={"50px"}>
              <Text paddingRight={"20px"}>Name</Text>
              <Input w="xs" variant={"outline"} />
              <Text paddingRight={"20px"}>Email</Text>
              <Input w="sm" variant={"outline"} />
            </VStack>
          </Box>
        </Flex>

        <Flex h="md" w={"100%"} className="landing-section">
          <Box className="section-box-left">
            <Heading size="4xl" textAlign={"center"}>
              Step 4
            </Heading>
            <br></br>
            <br></br>
            <Text fontSize="2xl" as={"b"} textAlign={"center"}>
              Review your subscription and start making change right away
            </Text>
          </Box>
          <Box className="section-box-right">
            <VStack paddingTop={"50px"}>
              <Text paddingRight={"20px"}>Amount</Text>
              <Input w="xs" variant={"outline"} />
              <Text paddingRight={"20px"}>Chosen Charities</Text>
              <Input w="sm" variant={"outline"} />
              <Box paddingTop={"10px"} display={"flex"}>
                <Button>Submit</Button>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </VStack>
      <Center className="footer" h={"100px"}>
        <Text color={"whitesmoke"}>
          SimplyGive, Registered Charity: 89003883
        </Text>
      </Center>
    </>
  );
};

export default Main;
