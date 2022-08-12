import { useQuery } from "@tanstack/react-query";

const fetchTransfers = async () => {
  const res = await fetch("/api/transfers");
  return res.json();
};

export const useTransfers = () => {
  return useQuery(["transfers"], fetchTransfers);
};
