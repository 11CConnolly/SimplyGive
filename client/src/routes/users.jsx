import { Button, Box, Flex } from "@chakra-ui/react";
import "../index.css";

const Users = () => {
  const users = ["Bob", "Jim", "Garry", "Stephen"];
  return (
    <Box className="page-container users-box">
      <Flex flexDirection="column">
        {users.map((user) => (
          <Button className="page-button" colorScheme="whiteAlpha">
            {user}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Users;
