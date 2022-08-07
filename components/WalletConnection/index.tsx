import { useState, useEffect, useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { options } from "@acala-network/api";
import Web3Context, {
  InjectedAccountWithMeta,
  Web3ContextValue,
} from "./../../context/Web3Context";
import Avatar from "../Avatar";

function WalletConnection() {
  const [error, setError] = useState("");
  const { injector, setInjector, api, setApi, accounts, setAccounts } =
    useContext<Web3ContextValue>(Web3Context);

  useEffect(() => {
    const connectToNetwork = async () => {
      const wsEndpoint = process.env.NEXT_PUBLIC_WS_NODE_ENDPOINT;
      console.log("Connecting to", wsEndpoint);
      const provider = new WsProvider(wsEndpoint);
      const _api = await ApiPromise.create({ provider });
      await _api.isReady;
      setApi(_api);
      console.log(`Api Ready for endpoint: ${wsEndpoint}`);
    };
    if (!api) {
      connectToNetwork();
    }
  });

  const connectToWallet = async () => {
    // dynamic import nessary for NextJS
    const { web3Accounts, web3Enable, web3FromAddress } = await import(
      "@polkadot/extension-dapp"
    );
    const extensions = await web3Enable("sodefi.");
    if (extensions.length === 0) {
      setError("No extension installed!");
      return;
    }
    const _accounts = await web3Accounts();
    if (_accounts.length) {
      setAccounts(_accounts);
      // TODO: Choose specific account
      const _injector = await web3FromAddress(_accounts[0].address);
      setInjector(_injector);
    }
  };

  return (
    <Box>
      <Box>
        {!injector ? (
          <Button onClick={connectToWallet}>+</Button>
        ) : (
          <Avatar address={accounts?.[0].address} />
        )}
      </Box>
    </Box>
  );
}

export default WalletConnection;
