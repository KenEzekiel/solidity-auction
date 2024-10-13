import { useSDK } from "@metamask/sdk-react";
import { useEffect, useState, useCallback } from "react";
import Web3 from "web3";
import { setupContractEventListeners } from "../eth/app";
import { useToast } from "@chakra-ui/react";

export const LOCAL_CHAIN_ID = "0x7A69"; // Chain ID for localhost
const LOCAL_RPC_URL = "http://127.0.0.1:8545"; // RPC URL for local network

export function useWeb3() {
  const { sdk, ...sdkRelated } = useSDK();
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [auctionEnded, setAuctionEnded] = useState(false); // State to track if auction is ended
  const toast = useToast();

  const handleContractEvent = useCallback(
    (eventName: string, data: unknown) => {
      if (eventName === "MewAuctionEnd") {
        // Set auctionEnded state to true
        setAuctionEnded(true);

        // Display a toast notification
        toast({
          title: "Auction Ended",
          description: "The auction has ended successfully!",
          status: "info",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
      if (eventName === "MewAuctionNewBid") {
        toast({
          title: "New Bid",
          description: "New Bid added!",
          status: "info",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: eventName,
          description: `Event received: ${JSON.stringify(data)}`,
          status: "info",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      }
    },
    [toast]
  );

  async function connect() {
    try {
      if (!sdk) {
        console.error("SDK is not initialized!");
        return;
      }

      const accounts = await sdk.connect();
      if (!accounts || accounts.length === 0) {
        toast({
          title: "No accounts found.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        return;
      }

      // Attempt to switch to the local network
      try {
        await sdkRelated.provider?.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: LOCAL_CHAIN_ID }],
        });
      } catch (e) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (e.code === 4902) {
          try {
            await sdkRelated.provider?.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: LOCAL_CHAIN_ID,
                  chainName: "Localhost 8545",
                  rpcUrls: [LOCAL_RPC_URL],
                  nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                },
              ],
            });
          } catch (addError) {
            console.error("Error adding the local network:", addError);
            toast({
              title: "Failed to add local network",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top",
            });
            return;
          }
        } else {
          console.error("Failed to switch to the local network:", e);
          toast({
            title: "Failed to switch to local network",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          return;
        }
      }

      setAccount(accounts[0]);
      toast({
        title: "Connected",
        description: `Connected to account: ${accounts[0]}`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });

      // Initialize Web3 with the local provider
      const web3Instance = new Web3(LOCAL_RPC_URL);
      setWeb3(web3Instance);

      // Set up event listeners
      setupContractEventListeners(web3Instance, handleContractEvent);

      // Log network information
      // const networkId = await web3Instance.eth.net.getId();
      // console.log("Network ID:", networkId);
      // const web3Accounts = await web3Instance.eth.getAccounts();
      // console.log("Accounts:", web3Accounts);
      // const gasPrice = await web3Instance.eth.getGasPrice();
      // console.log("Gas Price:", gasPrice);
    } catch (e) {
      console.error("Connection error: ", e);
      toast({
        title: "Connection failed",
        description: (e as Error).message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }

  async function disconnect() {
    try {
      await sdk?.disconnect();
      setAccount(null);
      setWeb3(null);
      toast({
        title: "Disconnected",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      console.error("Disconnection error: ", e);
    }
  }

  useEffect(() => {
    if (web3) {
      setupContractEventListeners(web3, handleContractEvent);
    }
  }, [web3, handleContractEvent]);

  return { account, connect, disconnect, web3, auctionEnded };
}
