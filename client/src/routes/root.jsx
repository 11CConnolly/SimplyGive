import { Box, Button } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Box className="navbar">
        <Link to={`/`}>
          <Button className="root-button" colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>
        <Link to={`users`}>
          <Button className="root-button" colorScheme="teal" variant="ghost">
            Users
          </Button>
        </Link>
        <Link to={`subscriptions`}>
          <Button className="root-button" colorScheme="teal" variant="ghost">
            Subscriptions
          </Button>
        </Link>
      </Box>
      <Outlet />
    </>
  );
};

export default Root;
