import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { Card } from "../Card";

export const BidCard = ({ ...props }) => {
  const toast = useToast();

  return (
    <Card {...props}>
      <Text fontSize="2xl" fontWeight="900">
        Buy this NFT
      </Text>
      <Flex align={"center"}>
        <InputGroup size={"lg"} alignContent={"center"} my="1rem">
          <InputLeftAddon>
            <FaEthereum display={"inline-block"} fontSize="1rem" />
            <Text ml="0.5rem">ETH</Text>
          </InputLeftAddon>
          <Input isRequired placeholder="85" />
        </InputGroup>
        <Button
          ml="1rem"
          size="lg"
          colorScheme="blue"
          onClick={() =>
            toast({
              title: "Bid Successful.",
              description: "Your Bid was Placed Successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            })
          }
        >
          Place Bid
        </Button>
        <Button ml="1rem" size="lg" colorScheme="blue" variant={"outline"}>
          Connect Wallet
        </Button>
      </Flex>
    </Card>
  );
};
