import { Button, Box, Flex } from "@chakra-ui/react";
import useDataApi from "../hooks/useDataApi";
import "../index.css";

const Subscriptions = () => {
  const [dataState] = useDataApi("/api/subscription");

  return (
    <Box className="page-container users-box">
      <Flex flexDirection="column">
        {dataState.data.subscriptions &&
          dataState.data.subscriptions.map((subscription, i) => (
            <Button className="page-button" colorScheme="whiteAlpha" key={i}>
              {subscription.charityId}
              {subscription.userId}
              {subscription.amount}
            </Button>
          ))}
      </Flex>
    </Box>
  );
};
export default Subscriptions;
