import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import Identicon from "./../../externalLibs/react-identicon";

const Avatar = (props: { address: string }) => {
  const { address } = props;
  if (!address) {
    return <ChakraAvatar size={"sm"} src={undefined} />;
  }

  return <Identicon value={address} size={32} theme={"polkadot"} />;
};

export default Avatar;
