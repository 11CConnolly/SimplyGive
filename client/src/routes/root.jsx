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
          <Link to={`charity-portal`}>
            <Button className="root-button" colorScheme="teal" variant="ghost">
              Charities
            </Button>
          </Link>
          <Link to={`about-us`}>
            <Button className="root-button" colorScheme="teal" variant="ghost">
              About
            </Button>
          </Link>
          <Link to={`contact`}>
            <Button className="root-button" colorScheme="teal" variant="ghost">
              Contact
            </Button>
          </Link>
          <Link to={`sign-in`}>
            <Button className="root-button" colorScheme="teal" variant="ghost">
              Sign In
            </Button>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Root;
