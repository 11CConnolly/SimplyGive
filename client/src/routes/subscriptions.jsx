import { Button, Box, Flex } from "@chakra-ui/react";
import "../index.css";

const Subscriptions = () => {
  const subs = ["100", "31", "1313", "3333"];
  return (
    <Box className="page-container users-box">
      <Flex flexDirection="column">
        {subs.map((sub) => (
          <Button className="page-button" colorScheme="whiteAlpha">
            {sub}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Subscriptions;
