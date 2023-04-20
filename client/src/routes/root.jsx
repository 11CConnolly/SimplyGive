import { Box, Button, Image } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

import LogoSGmin from "../LogoSGmin.png";

const Root = () => {
  return (
    <>
      <Box className="navbar">
        <Box className="nav-image">
          <Image width="200px" src={LogoSGmin} alt="Simply Give Logo" />
        </Box>
        <Box className="nav-buttons">
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
          <Link to={`contact`}>
            <Button className="root-button" colorScheme="teal" variant="ghost">
              Subscriptions
            </Button>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Root;
