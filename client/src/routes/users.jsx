import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import useDataApi from "../hooks/useDataApi";

const Users = () => {
  // The data I expect returned from this is a list of users
  const [dataState] = useDataApi("/api/user");

  return <></>;
};

export default Users;
