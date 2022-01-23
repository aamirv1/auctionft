import {
  AspectRatio,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import { Card } from "./Card";
import { Owner } from "./Owner";
import { toFixedDecimal } from "../library/helper";

export const OrderCardSkeleton = () => {
  return (
    <Card
      cursor="pointer"
      transition={"transform 0.25s ease"}
      _hover={{ transform: "scale(1.05)" }}
      display="inline-block"
      h="22rem"
    >
      <Skeleton w="100%" h="75%" />
      <SkeletonText my="1rem" noOfLines={1} />
      <Flex direction="row">
        <SkeletonCircle size="10" />
        <SkeletonText ml="0.5rem" mt="0.5rem" noOfLines={2} w="50%" />
      </Flex>
    </Card>
  );
};

export const OrderCard = ({ data, ...props }) => {
  return (
    <Link
      passHref
      href={`/nft/${data?.asset?.assetContract?.address}/${data?.asset?.tokenId}`}
    >
      <Card
        cursor="pointer"
        transition={"transform 0.25s ease"}
        _hover={{ transform: "scale(1.05)" }}
        display="inline-block"
        {...props}
      >
        <AspectRatio ratio={1}>
          <Image
            transition={"transform 0.25s ease"}
            _hover={{ transform: "scale(1.06)" }}
            src={data?.asset?.imagePreviewUrl}
            borderRadius={"0.5rem"}
            alt={data?.asset?.name}
          />
        </AspectRatio>
        <Text
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          py="0.75rem"
          fontSize={"xl"}
          fontWeight={"bold"}
        >
          {data?.asset?.collection?.name} {data?.asset?.name}
        </Text>
        <Flex direction="row" justifyContent="space-between">
          <Owner {...data?.makerAccount} avatarProps={{ size: "xs" }} />
          <Flex>
            <FaEthereum
              fontSize={"1.25rem"}
              style={{ display: "inline-block" }}
            />
            <Text fontSize={"md"} ml="0.25rem" fontWeight={"bold"}>
              {toFixedDecimal(data?.paymentTokenContract?.ethPrice, 2)}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};
