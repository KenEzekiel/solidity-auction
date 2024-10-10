import Web3 from "web3";
import MewAuctionApp from "../abi/MewAuctionApp.json";

// const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export function getContract(web3: Web3) {
  throw new Error("Not implemented");
}

export async function bid(web3: Web3, account: string, value: number) {
  throw new Error("Not implemented");
}

export async function withdraw(web3: Web3, account: string) {
  throw new Error("Not implemented");
}

export async function endAuction(web3: Web3, account: string) {
  throw new Error("Not implemented");
}

export async function getWinner(web3: Web3) {
  throw new Error("Not implemented");
}

export async function getMaxBidAmount(web3: Web3) {
  throw new Error("Not implemented");
}

export async function getGasPrice(web3: Web3) {
  throw new Error("Not implemented");
}
