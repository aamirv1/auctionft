import { Box, Button, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { MdArrowBackIosNew, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { DescriptionCard } from "../components/ListingPage/DescriptionCard";
import { DisplayCard } from "../components/ListingPage/DisplayCard";
import { useNFT } from "../components/Provider/NFTProvider";
import Link from "next/link";
import { toFixedDecimal } from "../library/helper";

export const Content = ({ ...props }) => {
  const { asset } = useNFT();

  return (
    <Box p="1.5rem" bg="#F8F7FC" position="absolute" h="100%" {...props}>
      <Flex direction={"row"} justifyContent={"space-between"} align={"center"}>
        <Link href="/">
          <IconButton
            size="lg"
            bg="#FFFFFF"
            borderRadius="full"
            border="1px solid #eee"
            icon={<MdArrowBackIosNew />}
          />
        </Link>
      </Flex>
      <Flex py="1.5rem" px="0.25rem" direction={"row"} align={"center"}>
        <Box>
          <Text color="blue.800" fontSize="4xl" fontWeight="900">
            {asset?.asset?.name}
          </Text>
          <Button colorScheme={"blue"} variant={"link"}>
            {asset?.asset?.collection?.name}
          </Button>
        </Box>
        <Spacer />
        <Flex px="2rem">
          <Box pt="0.75rem" px="0.5rem">
            <FaEthereum display={"inline-block"} fontSize="2rem" />
          </Box>
          <Box display="flex" flexDirection={"column"} alignItems={"left"}>
            <Text color="#2A325C" fontSize="4xl" fontWeight="900">
              {toFixedDecimal(asset?.paymentTokenContract?.ethPrice, 2)}
            </Text>
            <Text color="#2A325C" fontSize="sm">
              {asset?.paymentTokenContract?.usdPrice &&
                `(${toFixedDecimal(asset?.paymentTokenContract?.usdPrice, 2)})`}
            </Text>
          </Box>
        </Flex>

        <Box textAlign={"center"}>
          <IconButton
            isRound
            size="lg"
            colorScheme={"blue"}
            icon={<MdOutlineFavoriteBorder />}
          />
          <Text pt="0.5rem" fontSize="sm">
            263
          </Text>
        </Box>
      </Flex>
      <Flex direction={"row"} pt="1rem">
        <DisplayCard w="35%" />
        <DescriptionCard w="65%" />
      </Flex>
    </Box>
  );
};
