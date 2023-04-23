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
import charity from "../charity.jpg";
import {
  categories,
  categoriesToDisplayText,
  colours,
  zIndexLevels,
} from "../utils/constants";
import Footer from "../components/Footer";
import CharityButton from "../components/CharityButton";
import PageSection from "../components/PageSection";

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
        {/* MAIN IMAGE BOX */}
        <PageSection
          className="background-charity"
          h="2xl"
          backgroundImage={charity}
          backgroundSize={"cover"}
        >
          <Box className="first-box-left">
            <Heading size="2xl" textColor={colours.IVORY}>
              SimplyGive makes it easier to support the issues that are closest
              to your heart.
            </Heading>
            <br />
            <br />
            <Text as={"b"} fontSize={"xl"} textColor={colours.IVORY}>
              It's your one subscription to make the world a better place.
            </Text>
            <br />
            <Text as={"b"} fontSize={"xl"} textColor={colours.IVORY}>
              Learn more about how it works below.
            </Text>
          </Box>
          <Box className="first-box-right"></Box>
        </PageSection>

        {/* OVERVIEW CONTAINER BOX */}
        <PageSection
          h="md"
          backgroundColor={colours.NAVY}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            borderRadius="lg"
            h="lg"
            width="80%"
            backgroundColor={colours.IVORY}
            zIndex={zIndexLevels.LEVEL_MED}
          >
            <Center>
              <Heading size={"md"} paddingTop={"20px"}>
                Here what we've done so far:
              </Heading>
            </Center>
            <HStack
              divider={<StackDivider borderColor={colours.SIMPLYGIVEPINK} />}
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
                  <StatNumber textColor={colours.SIMPLYGIVEPINK}>8</StatNumber>
                  <StatHelpText>
                    Based on Feedback from 1000 of people
                  </StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel>Total Donations</StatLabel>
                  <StatNumber textColor={colours.SIMPLYGIVEPINK}>
                    £1605.00
                  </StatNumber>
                  <StatHelpText>Since we launched</StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel as={"b"}>Charities Helped</StatLabel>
                  <StatNumber textColor={colours.SIMPLYGIVEPINK}>
                    120
                  </StatNumber>
                  <StatHelpText>Across England and Wales</StatHelpText>
                </Stat>
              </Box>
              <Box flexBasis={"25%"}>
                <Stat>
                  <StatLabel>Average Donation</StatLabel>
                  <StatNumber textColor={colours.SIMPLYGIVEPINK}>
                    £10.00
                  </StatNumber>
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
        </PageSection>

        {/* STEP 1 BOX */}
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
              {Object.values(categoriesToDisplayText).map((val) => (
                <CharityButton key={val} text={val} />
              ))}
            </Grid>
          </Box>
        </Flex>

        {/* STEP 2 BOX */}
        <PageSection h="sm" backgroundColor={colours.NAVY}>
          <Box className="section-box-left">
            <Heading size="4xl" textAlign={"center"} textColor={colours.IVORY}>
              Step 2
            </Heading>
            <br></br>
            <br></br>
            <Text
              fontSize="2xl"
              as={"b"}
              textAlign={"center"}
              textColor={colours.IVORY}
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
                textColor={colours.IVORY}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper color={colours.IVORY} />
                  <NumberDecrementStepper color={colours.IVORY} />
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
                  <SliderFilledTrack bg={colours.SIMPLYGIVEPINK} />
                </SliderTrack>
                <SliderThumb boxSize="32px" />
              </Slider>
            </Center>
          </Box>
        </PageSection>

        {/* STEP 3 BOX */}
        <PageSection h="sm">
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
              <Input placeholder="name" w="xs" variant={"outline"} />
              <Input placeholder="email" w="sm" variant={"outline"} />
            </VStack>
          </Box>
        </PageSection>

        {/* STEP 4 BOX */}
        <PageSection h="md" backgroundColor={colours.NAVY} textColor={"ivory"}>
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
                <Button
                  textColor={colours.NAVY}
                  onClick={() => registerRequest()}
                >
                  Submit
                </Button>
              </Box>
            </VStack>
          </Box>
        </PageSection>
      </VStack>
      <Footer />
    </>
  );
};

export default Main;
