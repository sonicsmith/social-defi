import { Box, Flex, HStack } from "@chakra-ui/react";
import SearchBox from "../SearchBox";
import TopBarMenu from "./TopBarMenu";
import WalletConnection from "../WalletConnection";
import { useContext } from "react";
import Web3Context, { Web3ContextValue } from "../../context/Web3Context";
import Logo from "../Logo";

const TopBar = (props: {}) => {
  const { injector } = useContext<Web3ContextValue>(Web3Context);
  return (
    <Box bg={"gray.300"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          {!injector && <Logo />}
          {!!injector && <TopBarMenu />}
        </HStack>
        {!!injector && <SearchBox />}
        <Flex alignItems={"center"}>
          <WalletConnection />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;
