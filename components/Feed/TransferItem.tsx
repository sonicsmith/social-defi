import Image from "next/image";
import { Box, Text, HStack, Input } from "@chakra-ui/react";
import Avatar from "../Avatar";
import {
  getAddressPreview,
  getFormattedAmount,
  getFormattedDate,
} from "../../utils/misc";
import CommentInput from "../CommentInput";
import { useState } from "react";

const TransferItem = (props: { transaction: any }) => {
  const { transaction } = props;
  const { amount, fromId, timestamp, toId, tokenId } = transaction;

  const [comment, setComment] = useState("");

  return (
    <Box m={4} bg={"gray.300"} boxShadow={"md"} rounded={"md"} pb={1}>
      <HStack backgroundColor={"gray.200"} borderTopRadius={"md"} p={4}>
        <Avatar address={fromId} />
        <Box>
          <Text fontSize="md" fontWeight={"bold"}>
            {getAddressPreview(fromId)}
          </Text>
          <Text fontSize="xs">{getFormattedDate(timestamp)}</Text>
        </Box>
      </HStack>
      <HStack p={4}>
        <Text fontSize="md">
          Transfered {getFormattedAmount({ amount, tokenId, sf: 6 })} {tokenId}{" "}
          to{" "}
        </Text>
        <Text fontSize="md" fontWeight={"bold"}>
          {getAddressPreview(toId)}
        </Text>
      </HStack>
      <CommentInput comment={comment} setComment={setComment} />
    </Box>
  );
};

export default TransferItem;
