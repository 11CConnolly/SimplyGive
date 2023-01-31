import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import {
  Checkbox,
  Stack,
  Text,
  HStack,
  VStask,
  CheckboxGroup,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const currency = "£";
const format = (val) => `${currency}` + val;
const parse = (val) => val.replace(/^\£/, "");

let config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const categories = {
  HEALTH: "health",
  WELFARE: "welfare",
  ANIMAL: "animal",
  CRISIS: "crisis",
  CULTURAL: "cultural",
};

function App() {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [amount, setAmount] = useState("5.00");

  const checkCheckedItem = (checkboxString) =>
    checkedItems.includes(checkboxString)
      ? setCheckedItems(checkedItems.filter((x) => x !== checkboxString))
      : setCheckedItems(checkedItems.concat(checkboxString));

  const click = async () => {
    console.log({ categories: checkedItems });
    const charity = await getCharityFromSelection();
    alert(`Your subscription will be ${currency}${amount} to ${charity}`);
  };

  // TODO UPDATE SWAGGER DOCS
  const getCharityFromSelection = async () => {
    axios
      .post(
        "http://localhost:8080/api/charity/findByCategory",
        {
          categories: checkedItems,
        },
        config
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
          onChange={(valueString) => setAmount(parse(valueString))}
          value={format(amount)}
        >
          <NumberInputField />
          <NumberInputStepper></NumberInputStepper>
        </NumberInput>
        <Button className="OkButton" colorScheme="orange" onClick={click}>
          OK
        </Button>
      </header>
    </div>
  );
}

export default App;
