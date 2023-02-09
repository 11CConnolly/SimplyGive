import react from "react";
import { Button, Flex } from "@chakra-ui/react";
import "../index.css";

const Users = () => {
  const users = ["Bob", "Jim", "Garry", "Stephen"];
  return (
    <Flex flexDirection="column">
      {users.map((user) => (
        <Button>{user}</Button>
      ))}
    </Flex>
  );
};

export default Users;
