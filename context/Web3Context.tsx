import { ApiPromise } from "@polkadot/api";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface InjectedAccountWithMeta {
  address: string;
  meta: {
    genesisHash?: string | null;
    name?: string;
    source: string;
  };
  type?: string;
}

export interface InjectedExtension {
  name: string;
  version: string;
  accounts: any;
  metadata?: any;
  provider?: any;
  signer: any;
}

export interface Web3ContextValue {
  injector: InjectedExtension | null;
  setInjector: Dispatch<SetStateAction<InjectedExtension | null>>;
  api: ApiPromise | null;
  setApi: Dispatch<SetStateAction<ApiPromise | null>>;
  accounts: InjectedAccountWithMeta[] | null;
  setAccounts: Dispatch<InjectedAccountWithMeta[] | null>;
}

const value: any = null;

const Web3Context = createContext(value);

export default Web3Context;

export const Web3ContextProvider = (props: { children: any }) => {
  const [injector, setInjector] = useState<InjectedExtension | null>(null);
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | null>(
    null
  );
  const value: Web3ContextValue = {
    injector,
    setInjector,
    api,
    setApi,
    accounts,
    setAccounts,
  };
  return (
    <Web3Context.Provider value={value}>{props.children}</Web3Context.Provider>
  );
};

export const Web3ContextConsumer = Web3Context.Consumer;
