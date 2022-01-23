import React from "react";
import { Box } from "@chakra-ui/react";

export const Card = ({ children, ...props }) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      background={"white"}
      p="1rem"
      borderRadius="10"
      {...props}
    >
      {children}
    </Box>
  );
};
