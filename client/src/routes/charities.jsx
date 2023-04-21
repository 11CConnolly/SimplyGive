import React from "react";
import useDataApi from "../hooks/useDataApi";

const Charities = () => {
  // The data I expect returned from this is a list of users
  const [dataState] = useDataApi("/api/user");

  return <></>;
};

export default Charities;
