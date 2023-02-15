import React, { useState } from "react";
import {
  Checkbox,
  Box,
  Stack,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Input,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

import client from "../utils/client";
import "../index.css";
import { categories, formatAsGBP, parseAsGBP } from "../utils/constants";

const Main = () => {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [amount, setAmount] = useState("5.00");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());

  const checkCheckedItem = (checkboxString) =>
    checkedItems.includes(checkboxString)
      ? setCheckedItems(checkedItems.filter((x) => x !== checkboxString))
      : setCheckedItems(checkedItems.concat(checkboxString));

  const buttonClick = () => {
    addUser()
      .then(() => {
        getUserID().then((id) => {});
      })
      .catch((err) => {
        console.log(err);
      });
    // Make a single request to add a subscription
    // email
    // name
    // amount
    // dateToTakePayment - maybe just a month?
    // categories
  };

  // Should be able to add a user with an email and name - [ ]
  // So single request to add a user - maybe this is best of as a form? But I want to make it super simple
  // Once that's clear, make a request to add a subscription
  // Should be able to, from a list of categories, select a single charity - [X]
  // Should be able to add a subscription with the email, list of categories, and rest of the required categories - [ ]

  const addUser = () => {};

  // @returns - string with the user's ID
  const getUserID = () => {
    return client
      .post("/api/user/findByEmail", {
        email,
      })
      .then((res) => res.data.userId)
      .catch((err) => console.log(err));
  };

  const getCharityFromSelection = async () => {
    return client
      .post("/api/charity/findSingleByCategory", {
        categories: checkedItems,
      })
      .then((res) => res.data.charity)
      .catch((err) => console.log(err));
  };

  var someDate = new Date();
  var numberOfDaysToAdd = 5;
  var minimumDate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  return (
    <Box className="page-container main-container">
      <Text>Choose the things that matter most to you</Text>
      <Stack spacing={3} direction="column">
        <Checkbox onChange={() => checkCheckedItem(categories.HEALTH)}>
          Health
        </Checkbox>
        <Checkbox onChange={() => checkCheckedItem(categories.WELFARE)}>
          Welfare
        </Checkbox>
        <Checkbox onChange={() => checkCheckedItem(categories.ANIMAL)}>
          Animal
        </Checkbox>
        <Checkbox onChange={() => checkCheckedItem(categories.CRISIS)}>
          Crisis
        </Checkbox>
        <Checkbox onChange={() => checkCheckedItem(categories.CULTURAL)}>
          Cultural
        </Checkbox>
      </Stack>
      <Text>
        Enter your email to receive donation updates and create an account
      </Text>
      <Input width={"20rem"} onChange={(e) => setEmail(e.target.value)} />
      <Text>What's your name?</Text>
      <Input width={"20rem"} onChange={(e) => setName(e.target.value)} />
      <Text>Choose your donation amount</Text>
      <NumberInput
        defaultValue={5}
        precision={2}
        step={0.01}
        onChange={(valueString) => setAmount(parseAsGBP(valueString))}
        value={formatAsGBP(amount)}
      >
        <NumberInputField />
        <NumberInputStepper></NumberInputStepper>
      </NumberInput>
      <Box>
        <Text>Choose the date of your donation</Text>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={setDate}
          minDate={minimumDate}
        />
      </Box>
      <Button
        className="page-button"
        colorScheme="orange"
        onClick={buttonClick}
      >
        OK
      </Button>
    </Box>
  );
};

export default Main;
