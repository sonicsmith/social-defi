import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import TopBar from "./../components/TopBar";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <Box>
      <TopBar />
      <Feed />
    </Box>
  );
};

export default Home;
