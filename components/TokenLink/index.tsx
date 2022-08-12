import Link from "next/link";
import { Text } from "@chakra-ui/react";

const TokenLink = (props: { id: string }) => {
  const { id } = props;
  return (
    <Link href={`/tokens/${id}`}>
      <Text fontSize="md" fontWeight={"bold"} cursor={"pointer"}>
        {id}
      </Text>
    </Link>
  );
};

export default TokenLink;
