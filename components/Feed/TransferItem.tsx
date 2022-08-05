import Image from "next/image";
import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import Avatar from "../Avatar";

const TransferItem = (props: { transaction: any }) => {
  const { transaction } = props;
  const { amount, fromId, timestamp, toId, tokenId } = transaction;
  return (
    <Box m={4} bg={"gray.200"} boxShadow={"sm"} rounded={"md"} p={4}>
      <Avatar address={fromId} />
    </Box>
  );
};

export default TransferItem;
