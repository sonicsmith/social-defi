import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Web3ContextProvider } from "../context/Web3Context";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Web3ContextProvider>
          <Component {...pageProps} />
        </Web3ContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
