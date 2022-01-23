import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Owner } from "../Owner";
import { Card } from "../Card";
import { useNFT } from "../Provider/NFTProvider";

export const DisplayCard = ({ ...props }) => {
  const { asset } = useNFT();
  return (
    <Box {...props}>
      <AspectRatio ratio={1}>
        <Image
          w="100%"
          objectFit={"cover"}
          src={asset?.asset?.imageUrl.replace("s250", "s500")}
          alt={asset?.asset?.name}
        />
      </AspectRatio>
      <Card mt="1rem">
        <Flex direction={"column"} align="start">
          <Text pb="1rem" fontWeight={"bold"} color="gray.500">
            Created By
          </Text>
          <Owner {...asset?.makerAccount} />
        </Flex>
      </Card>
    </Box>
  );
};
