import { gql, useQuery } from "@apollo/client";

const query = gql`
  {
    transfers(first: 5) {
      nodes {
        tokenId
        amount
        timestamp
        fromId
        toId
      }
    }
  }
`;

export const useTransfers = () => {
  return useQuery(query);
};
