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
  const [username, setUsername] = useState("");
  const [date, setDate] = useState(new Date());

  const checkCheckedItem = (checkboxString) =>
    checkedItems.includes(checkboxString)
      ? setCheckedItems(checkedItems.filter((x) => x !== checkboxString))
      : setCheckedItems(checkedItems.concat(checkboxString));

  const buttonClick = () => {
    // TODO Do some basic FE validation first of all
    console.log(date);
    registerRequest().then((res) => {
      console.log(res);
    });
  };
  // @params  - Registration request
  // @returns - Created subscription
  const registerRequest = async () => {
    return client
      .post("/api/register", {
        name: username,
        email,
        amount,
        dateToTakePayment: date.toISOString().split("T")[0],
        categories: checkedItems,
      })
      .then((res) => res.data)
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
      <Input width={"20rem"} onChange={(e) => setUsername(e.target.value)} />
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
          onDateChange={(e) => setDate}
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
