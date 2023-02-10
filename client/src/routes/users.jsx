import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import useDataApi from "../hooks/useDataApi";

const Users = () => {
  // The data I expect returned from this is a list of users
  const [dataState] = useDataApi("/api/user");

  return (
    <Box className="page-container users-box">
      <Flex flexDirection="column">
        {dataState.data.users &&
          dataState.data.users.map((user) => (
            <Button
              className="page-button"
              colorScheme="whiteAlpha"
              key={user.email}
            >
              {user.name}
            </Button>
          ))}
      </Flex>
    </Box>
  );
};

export default Users;
