import { format } from "date-fns";

export const getAddressPreview = (address: string) => {
  const start = address.substring(0, 4);
  const end = address.substring(address.length - 5, address.length - 1);
  return `${start}...${end}`;
};

export const getFormattedDate = (timestamp: string) => {
  return format(new Date(timestamp), "MMMM d 'at' h':'mm a");
};

const getDecimalForTokenId = (tokenId: string) => {
  return { ACA: 12, AUSD: 12, DOT: 10 }[tokenId];
};

// TODO: Improve this function
export const getFormattedAmount = (options: {
  amount: string;
  tokenId: string;
  sf?: number;
}) => {
  const { amount, tokenId, sf } = options;

  const decimals = getDecimalForTokenId(tokenId);
  if (!decimals) {
    return amount;
  }
  const end = amount.length - 1;
  let integral = amount.substring(0, end - decimals) || "0";
  let fractional = amount.substring(end - decimals, end);
  // Remove trailing zeros
  fractional = fractional.replace(/0+$/, "");
  const value = `${integral}.${fractional}`;
  return value.substring(0, (sf || end) + 1);
};
