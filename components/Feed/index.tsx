import { Box, Center, Spinner } from "@chakra-ui/react";
import { useTransfers } from "../../hooks/useTransfers";
import TransferItem from "../TransferItem";

type TransferTransaction = {
  tokenId: string;
  amount: string;
  timestamp: string;
  fromId: string;
  toId: string;
  __typename: string;
};

const Feed = (props: {}) => {
  const { data, isLoading, error } = useTransfers();

  if (error) {
    // TODO
  }

  if (isLoading) {
    return (
      <Center>
        <Spinner size={"xl"} thickness="4px" />
      </Center>
    );
  }

  return (
    <Box>
      {data.data.map((transaction: TransferTransaction[]) => {
        return <TransferItem transaction={transaction} key={Math.random()} />;
      })}
    </Box>
  );
};

export default Feed;
