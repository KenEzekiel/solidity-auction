import { useSDK } from "@metamask/sdk-react";
import { useEffect, useState } from "react";
import { Web3 } from "web3";

export const SEPOLIA_CHAIN_ID = "0xaa36a7";
export const LOCAL_CHAIN_ID = "0x7a69";
// export const LOCAL_CHAIN_ID = "0x539";

export function useWeb3() {
  const { sdk, ...sdkRelated } = useSDK();
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  async function connect() {
    const accounts = await sdk?.connect();

    await sdkRelated.provider?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: LOCAL_CHAIN_ID }], // Change Chain ID
    });

    setAccount(accounts?.[0] as string);
  }

  useEffect(() => {
    if (account) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    }
  }, [account]);

  async function disconnect() {
    await sdk?.disconnect();
    setAccount(null);
  }

  // const toast = useToast();

  // useEffect(() => {
  //   if (!web3) return;
  //   const contract = getContract(web3);

  //   // Listen to events
  // }, [web3]);

  return { account, ...sdkRelated, sdk, connect, disconnect, web3 };
}
