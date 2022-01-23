import { Box, Text } from "@chakra-ui/react";
import { Card } from "../Card";
import { useNFT } from "../Provider/NFTProvider";

export const DescriptionCard = ({ ...props }) => {
  const { asset } = useNFT();

  return (
    <Box w="100%" pl="1rem" {...props}>
      {/* <BidCard mb="1rem" /> */}
      <Card p="1.5rem" mb="1rem">
        <Text pb="0.5rem" fontSize="2xl" fontWeight="900">
          Description
        </Text>
        <Text lineHeight={"1.75rem"}>{asset?.asset?.description}</Text>
      </Card>
      <Card p="1.5rem">
        <Text pb="0.5rem" fontSize="2xl" fontWeight="900">
          About {asset?.asset?.collection?.name}
        </Text>
        <Text lineHeight={"1.75rem"}>
          {asset?.asset?.collection?.description}
        </Text>
      </Card>
    </Box>
  );
};
