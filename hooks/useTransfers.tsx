import { useEffect, useState } from "react";

const subQueryUrl = process.env.NEXT_PUBLIC_SUBQUERY_ENDPOINT || "";

export const useTransfers = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    fetch(subQueryUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{
                transfers (first: 5) {
                    nodes {
                        tokenId
                        amount
                        timestamp
                      fromId,
                      toId
                    }
                }
            }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setTransfers(res.data.transfers.nodes));
  });

  return transfers;
};
