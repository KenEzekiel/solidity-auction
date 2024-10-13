import Web3 from "web3";
import { Box, Button } from "@chakra-ui/react";
import { bid, withdraw, endAuction } from "./eth/app"; // Make sure this import path is correct

const AuctionButtons = ({ web3, account, bidAmount }) => {
  const handleBid = async () => {
    try {
      await bid(web3, account, bidAmount);
      console.log("Bid submitted successfully");
    } catch (error) {
      console.error("Error submitting bid:", error);
    }
  };

  const handleWithdraw = async () => {
    try {
      await withdraw(web3, account);
      console.log("Withdrawal successful");
    } catch (error) {
      console.error("Error withdrawing:", error);
    }
  };

  const handleEndAuction = async () => {
    try {
      await endAuction(web3, account);
      console.log("Auction ended successfully");
    } catch (error) {
      console.error("Error ending auction:", error);
    }
  };

  return (
    <Box marginTop={3} display="flex" gap={3}>
      <Button onClick={handleBid} disabled={!web3 || !account}>
        Submit Bid
      </Button>
      <Button onClick={handleWithdraw} disabled={!web3 || !account}>
        Withdraw
      </Button>
      <Button onClick={handleEndAuction} disabled={!web3 || !account}>
        End Auction
      </Button>
    </Box>
  );
};

export default AuctionButtons;
