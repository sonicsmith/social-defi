import type { NextApiRequest, NextApiResponse } from "next";
import { request, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_SUBQUERY_ENDPOINT!;

type TransfersResponse = {
  data: Transfer[];
};

type Comment = {
  text: string;
  author: string;
  timestamp: string;
};

type Transfer = {
  id: string;
  amount: string;
  fromId: string;
  timestamp: string;
  toId: string;
  tokenId: string;
  comments: Comment[];
};

const query = gql`
  {
    transfers(first: 5) {
      nodes {
        id
        tokenId
        amount
        timestamp
        fromId
        toId
      }
    }
  }
`;

// TODO: Get comments from database
const getCommentsForTransaction = (transactionId: string): Comment[] => {
  const comment: Comment = {
    text: "Seeing a lot of action on this coin 🔥",
    author: "5DArTiDZGGxXsm5PUYurAtCjHoWEE1CoA9xQg2j1QQhHwnhe",
    timestamp: "2022-05-13T12:26:36.486",
  };
  const comment2: Comment = {
    text: "Does anyone know more about the team behind this?",
    author: "5DArTiDZGGxXsm5PUYurAtCjHoWEE1CoA9xQg2j1QQhHwnhe",
    timestamp: "2022-05-13T12:26:36.486",
  };
  return [comment, comment2];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransfersResponse>
) {
  request(endpoint, query).then((response) => {
    const data = response.transfers.nodes.map((transfer: Transfer) => {
      const comments = getCommentsForTransaction(transfer.id);
      return {
        ...transfer,
        comments,
      };
    });
    res.status(200).json({ data });
  });
}
