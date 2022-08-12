import { Box, Text, HStack } from "@chakra-ui/react";
import { getFormattedAmount } from "../../utils/misc";
import CommentInput from "../CommentInput";
import { useState } from "react";
import CommentList from "../CommentList";
import AddressAndTime from "../AddressAndTime";
import AccountLink from "../AccountLink";
import TokenLink from "../TokenLink";

const TransferItem = (props: { transaction: any }) => {
  const { transaction } = props;
  const { amount, fromId, timestamp, toId, tokenId, comments } = transaction;

  const [comment, setComment] = useState("");

  return (
    <Box m={4} bg={"gray.300"} boxShadow={"md"} rounded={"md"}>
      <Box p={4} backgroundColor={"gray.200"} rounded={"md"}>
        <AddressAndTime address={fromId} timestamp={timestamp} />
      </Box>
      <HStack p={4} backgroundColor={"gray.300"}>
        <Text fontSize="lg">
          Transfered {getFormattedAmount({ amount, tokenId, sf: 6 })}
        </Text>
        <TokenLink id={tokenId} />
        <Text fontSize="lg">to</Text>
        <AccountLink address={toId} />
      </HStack>
      <CommentList comments={comments} />
      <CommentInput comment={comment} setComment={setComment} />
    </Box>
  );
};

export default TransferItem;
