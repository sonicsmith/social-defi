import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { getAddressPreview, getFormattedDate } from "../../utils/misc";
import Avatar from "../Avatar";

const AddressAndTime = (props: { address: string; timestamp: string }) => {
  const { address, timestamp } = props;
  return (
    <HStack>
      <Avatar address={address} />
      <Box>
        <Link href={`/accounts/${address}`}>
          <Text fontSize="md" fontWeight={"bold"} cursor={"pointer"}>
            {getAddressPreview(address)}
          </Text>
        </Link>
        <Text fontSize="xs">{getFormattedDate(timestamp)}</Text>
      </Box>
    </HStack>
  );
};

export default AddressAndTime;
