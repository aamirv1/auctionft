import {
  Box,
  Image,
  Spacer,
  Heading,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";

const arr = [
  {
    title: "Malik Cupang",
    cost: "$235.00",
    lastseen: "2 hours ago",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    title: "Irul Lele",
    cost: "$230.00",
    lastseen: "12 hours ago",
    url: "https://via.placeholder.com/600/771796",
  },
  {
    title: "Seto Kodok",
    cost: "$220.00",
    lastseen: "20 hours ago",
    url: "https://via.placeholder.com/600/24f355",
  },
  {
    title: "Majid Welut",
    cost: "$210.00",
    lastseen: "22 hours ago",
    url: "https://via.placeholder.com/600/d32776",
  },
];

const Card = ({ item, index }) => {
  return (
    <Box>
      <Flex
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        key={item.title}
        p="1.5rem"
      >
        <Image
          src={`https://i.pravatar.cc/50?img=${index}`}
          w="50"
          h="50"
          borderRadius="full"
        />
        <Flex ml="1rem" direction={"column"} justifyContent={"space-evenly"}>
          <Heading size="md">{item.title}</Heading>
          <Text fontSize="sm">{item.lastseen}</Text>
        </Flex>
        <Spacer />
        <Text fontSize="xl">{item.cost}</Text>
      </Flex>
      <Divider orientation="horizontal" />
    </Box>
  );
};

export const RightBar = ({ ...props }) => {
  return (
    <Box bg="#FFFFFF" h="100%" pos="absolute" right="0" {...props}>
      <Box p="1.5rem">
        <Text align="left" fontWeight={"600"} fontSize="3xl">
          Top Bidder
        </Text>
      </Box>
      <Divider orientation="horizontal" />
      {arr.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </Box>
  );
};
