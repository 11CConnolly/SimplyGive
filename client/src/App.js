import React, { useState } from "react";
import {
  Checkbox,
  Stack,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import "./App.css";
import client from "./utils/client";
import { categories, formatAsGBP, parseAsGBP } from "./utils/constants";

function App() {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [amount, setAmount] = useState("5.00");

  const checkCheckedItem = (checkboxString) =>
    checkedItems.includes(checkboxString)
      ? setCheckedItems(checkedItems.filter((x) => x !== checkboxString))
      : setCheckedItems(checkedItems.concat(checkboxString));

  const buttonClick = () => {
    getCharityFromSelection().then((res) =>
      alert(`You have set up a payment of £${amount} to go to ${res.name}`)
    );
  };

  // @params  - List of categories
  // @returns - Single charity object
  const getCharityFromSelection = async () => {
    return client
      .post("/api/charity/findSingleByCategory", {
        categories: checkedItems,
      })
      .then((res) => res.data.charity)
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
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
        <Text>Choose your payment amount</Text>
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
        <Button className="OkButton" colorScheme="orange" onClick={buttonClick}>
          OK
        </Button>
      </header>
    </div>
  );
}

export default App;
