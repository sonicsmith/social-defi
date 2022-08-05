import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTransfers } from "../../hooks/useTransfers";
import TransferItem from "./TransferItem";

const Feed = (props: {}) => {
  const transfers = useTransfers();

  return (
    <Box>
      {transfers.map((transaction) => {
        return <TransferItem transaction={transaction} key={Math.random()} />;
      })}
    </Box>
  );
};

export default Feed;
