import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";

const ONE_GWEI: bigint = 1_000n;

const MewAuctionApp = buildModule("MewAuctionModule", (m) => {
  const adminAddress = ethers.getAddress(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );
  const minimalBid = ONE_GWEI;

  const auctionModule = m.contract("MewAuctionApp", [adminAddress, minimalBid]);

  return { auctionModule };
});

export default MewAuctionApp;
