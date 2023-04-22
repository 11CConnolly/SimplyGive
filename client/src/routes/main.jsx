import React from "react";
import {
  Box,
  VStack,
  StackDivider,
  Center,
  Text,
  Flex,
  Heading,
  Grid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  Image,
  Button,
  HStack,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import "../index.css";

import client from "../utils/client";
import { categories, zIndexLevels } from "../utils/constants";
import charity from "../charity.jpg";
import LogoSGmin from "../LogoSGmin.png";

const Main = () => {
  //@params  - Registration request
  //@returns - Created subscription
  const registerRequest = async () => {
    return client
      .post("/api/register", {
        name: "Callum",
        email: "callumc11@gmail.com",
        amount: 5.0,
        categories: [categories.HEALTH, categories.EDUCATION],
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const [value, setValue] = React.useState(5);
  const handleChange = (value) => setValue(value);

  return (
    <>
      <VStack className="page-container" spacing={0}>
        {/* FIRST BOX */}
        <Flex
          className="landing-section background-charity"
          w={"100%"}
          h="2xl"
          backgroundImage={charity}
          backgroundSize={"cover"}
        >
          <Box className="first-box-left">
            <Heading size="2xl" textColor={"#FEFEEE"}>
              SimplyGive makes it easier for to support the issues that are
              closest to your heart.
            </Heading>
            <br />
            <br />
            <Text as={"b"} fontSize={"xl"} textColor={"#FEFEEE"}>
              It's your one subscription to make the world a better place.
            </Text>
            <br />
            <Text as={"b"} fontSize={"xl"} textColor={"#FEFEEE"}>
              Learn more about how it works below.
            </Text>
          </Box>
          <Box className="first-box-right"></Box>
        </Flex>

        {/* SECOND BOX */}
        <Center
          className="landing-section"
          h="md"
          width="100%"
          backgroundColor={"#262729"}
        >
          <Box
            borderRadius="lg"
            h="lg"
            width="80%"
            backgroundColor="#EFF0E1"
            zIndex={zIndexLevels.LEVEL_MED}
          >
            <Center>
              <Heading size={"md"} paddingTop={"20px"}>
                Here what we've done so far:
              </Heading>
            </Center>
            <HStack
              divider={<StackDivider borderColor="#F8586A" />}
              spacing={4}
              display={"flex"}
              align="start"
              justifyContent={"space-evenly"}
              alignContent={"center"}
              paddingLeft={"20px"}
              paddingRight={"20px"}
              paddingTop={"50px"}
            >
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel>Categories of Charity</StatLabel>
                  <StatNumber textColor={"#F8586A"}>8</StatNumber>
                  <StatHelpText>
                    Based on Feedback from 1000 of people
                  </StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel>Total Donations</StatLabel>
                  <StatNumber textColor={"#F8586A"}>£1605.00</StatNumber>
                  <StatHelpText>Since we launched</StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel as={"b"}>Charities Helped</StatLabel>
                  <StatNumber textColor={"#F8586A"}>120</StatNumber>
                  <StatHelpText>Across England and Wales</StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel>Average Donation</StatLabel>
                  <StatNumber textColor={"#F8586A"}>£10.00</StatNumber>
                  <StatHelpText>From over 100 givers</StatHelpText>
                </Stat>
              </Box>
            </HStack>

            <Center>
              <Heading size={"lg"} paddingTop={"50px"}>
                Our Principles
              </Heading>
            </Center>

            <HStack
              spacing={4}
              display={"flex"}
              align="start"
              justifyContent={"space-evenly"}
              alignContent={"center"}
              paddingLeft={"20px"}
              paddingRight={"20px"}
              paddingTop={"25px"}
            >
              <Center flexBasis={"30%"} flexDirection={"column"}>
                <Heading>Privacy</Heading>
                <Text>We never sell or pass on your data,</Text>
              </Center>

              <Center flexBasis={"30%"} flexDirection={"column"}>
                <Heading>Transparency</Heading>
                <Text>
                  All our costs are broken down and shown to you when you make
                  your donation. We include a small processing fee. Each Quarter
                </Text>
              </Center>

              <Center flexBasis={"30%"} flexDirection={"column"}>
                <Heading>Simplicity</Heading>
                <Text>
                  One Direct Debit a month. One email a month. We make it simple
                  to make any changes to your subscription, or cancel your
                  subscription at any time.
                </Text>
              </Center>
            </HStack>
          </Box>
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
              Select the causes closest to your heart
            </Text>
          </Box>
          <Box className="section-box-right">
            <Grid
              h="250px"
              w="xl"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={6}
              className="grid"
            >
              <Button
                rowSpan={1}
                colSpan={1}
                className="griddy"
                height="100%"
                bg="#F8586A"
              >
                <Text as={"b"} className="griddy-text">
                  Healthcare
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                className="griddy"
                bg="#F8586A"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Animals
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="#F8586A"
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
                bg="#F8586A"
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
                bg="#F8586A"
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
                bg="#F8586A"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Education
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="#F8586A"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  LGBTQ+
                </Text>
              </Button>
              <Button
                rowSpan={1}
                colSpan={1}
                bg="#F8586A"
                className="griddy"
                h="100%"
              >
                <Text as={"b"} className="griddy-text">
                  Economic Development
                </Text>
              </Button>
            </Grid>
          </Box>
        </Flex>

        {/* FOURTH BOX */}
        <Flex
          h="sm"
          w={"100%"}
          className="landing-section"
          backgroundColor={"#282c34"}
        >
          <Box className="section-box-left">
            <Heading size="4xl" textAlign={"center"} textColor={"ivory"}>
              Step 2
            </Heading>
            <br></br>
            <br></br>
            <Text
              fontSize="2xl"
              as={"b"}
              textAlign={"center"}
              textColor={"ivory"}
            >
              Choose your Monthly Donation
            </Text>
          </Box>
          <Box className="section-box-right">
            <Center w={"sm"} margin={"auto"}>
              <NumberInput
                maxW="100px"
                mr="2rem"
                min={5}
                value={value}
                onChange={handleChange}
                textColor={"ivory"}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper color={"ivory"} />
                  <NumberDecrementStepper color={"ivory"} />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                min={5}
                focusThumbOnChange={false}
                value={value}
                onChange={handleChange}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="#F8586A" />
                </SliderTrack>
                <SliderThumb boxSize="32px" />
              </Slider>
            </Center>
          </Box>
        </Flex>

        {/* FIFTH BOX */}
        <Flex h="sm" w={"100%"} className="landing-section">
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

        <Flex
          h="md"
          w={"100%"}
          className="landing-section"
          backgroundColor={"#282c34"}
          textColor={"ivory"}
        >
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
            <VStack paddingTop={"50px"} textAlign={"left"}>
              <Text paddingRight={"20px"}>Amount: £5.00</Text>
              <Text paddingRight={"20px"}>Categories: Animal, LGBTQ+</Text>
              <Text paddingRight={"20px"}>Name: Callum</Text>
              <Text paddingRight={"20px"}>Email: callumc11@gmail.com</Text>
              <Box padding={"10px 0px 0px 100px"}>
                <Button textColor={"#282c34"} onClick={() => registerRequest()}>
                  Submit
                </Button>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </VStack>
      <Center className="footer" h={"100px"}>
        <Box w={"200px"}>
          <Image width="150px" src={LogoSGmin} alt="Simply Give Logo" />
        </Box>
        <Text color={"whitesmoke"}>
          SimplyGive, Registered Charity: 89003883
        </Text>
      </Center>
    </>
  );
};

export default Main;
