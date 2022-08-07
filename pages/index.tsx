import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import TopBar from "./../components/TopBar";
import Feed from "../components/Feed";
import { useContext } from "react";
import Web3Context, { Web3ContextValue } from "../context/Web3Context";

const Home: NextPage = () => {
  const { injector } = useContext<Web3ContextValue>(Web3Context);
  return (
    <Box height={"100%"}>
      <TopBar />
      {injector && <Feed />}
    </Box>
  );
};

export default Home;
