import { Button } from "@chakra-ui/react";
import react from "react";

const LinkButton = (props) => {
  return (
    <Button colorScheme="teal" variant="ghost" width="150px">
      {props.text}
    </Button>
  );
};

export default LinkButton;
