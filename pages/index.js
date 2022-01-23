import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNFT } from "../components/Provider/NFTProvider";
import { MainContainer } from "../container/MainContainer";
import { OpenSeaService } from "../services/opensea";
import { OrderCard, OrderCardSkeleton } from "../components/OrderCard";

const Homepage = () => {
  const { order, setOrder } = useNFT();

  const fetch_orders = async () => {
    const response = await OpenSeaService.list();
    setOrder(response);
  };

  useEffect(() => {
    fetch_orders();
  }, []);

  return (
    <MainContainer>
      <Box p="2rem">
        <Heading pb="1rem">Welcome to the world of NFTs!</Heading>
        <Text fontSize={"xl"} pb="2rem">
          Everything for you to bid on.
        </Text>
        <SimpleGrid columns={5} w="100%" spacing={8}>
          {order &&
            order.orders.map((item) => <OrderCard key={item.id} data={item} />)}
          {!order &&
            [...Array(15).keys()].map((item, index) => (
              <OrderCardSkeleton key={index} />
            ))}
        </SimpleGrid>
      </Box>
    </MainContainer>
  );
};

export default Homepage;
