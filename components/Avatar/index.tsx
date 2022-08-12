import { Avatar as ChakraAvatar, Box } from "@chakra-ui/react";
import Link from "next/link";
import Identicon from "../Identicon";

const Avatar = (props: { address: string | undefined }) => {
  const { address } = props;

  if (!address) {
    return <ChakraAvatar size={"sm"} src={undefined} />;
  }

  return (
    <Link href={`/accounts/${address}`}>
      <a>
        <Identicon
          value={address}
          size={32}
          theme={"beachball"}
          style={{ cursor: "pointer" }}
        />
      </a>
    </Link>
  );
};

export default Avatar;
