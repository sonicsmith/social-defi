import { Box, Center, Spinner } from "@chakra-ui/react";
import { useTransfers } from "../../hooks/useTransfers";
import TransferItem from "./TransferItem";

type TransferTransaction = {
  tokenId: string;
  amount: string;
  timestamp: string;
  fromId: string;
  toId: string;
  __typename: string;
};

const Feed = (props: {}) => {
  const { data, loading, error } = useTransfers();

  if (error) {
    // TODO
  }

  if (loading) {
    return (
      <Center>
        <Spinner size={"xl"} thickness="4px" />
      </Center>
    );
  }
  console.log(data);
  return (
    <Box>
      {data.transfers.nodes.map((transaction: TransferTransaction[]) => {
        return <TransferItem transaction={transaction} key={Math.random()} />;
      })}
    </Box>
  );
};

export default Feed;
