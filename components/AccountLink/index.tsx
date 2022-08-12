import Link from "next/link";
import { Text } from "@chakra-ui/react";

import { getAddressPreview } from "../../utils/misc";

const AccountLink = (props: { address: string }) => {
  const { address } = props;
  return (
    <Link href={`/accounts/${address}`}>
      <Text fontSize="md" fontWeight={"bold"} cursor={"pointer"}>
        {getAddressPreview(address)}
      </Text>
    </Link>
  );
};

export default AccountLink;
