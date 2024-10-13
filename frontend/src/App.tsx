import { Box, Text, Image, Input, Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import cat from "./assets/cat.png";
import { useWeb3 } from "./hooks/useWeb3";
import { getGasPrice, getMaxBidAmount, getWinner } from "./eth/app";
import AuctionButtons from "./AuctionButtons";

function App() {
  const { account, connect, disconnect, web3, auctionEnded } = useWeb3();
  const [highestPrice, setHighestPrice] = useState("0");
  const [bidAmount, setBidAmount] = useState("");
  const [gasPriceTime, setGasPriceTime] = useState(0);
  const [winner, setWinner] = useState("");
  const toast = useToast();

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  async function updatePrice() {
    // console.log("web3:", web3);
    if (web3) {
      try {
        const price = await getMaxBidAmount(web3);
        setHighestPrice(price.toString());
      } catch (e) {
        console.error("Failed to update price:", e);
      }
    }
  }

  async function updateGasPriceTime() {
    if (web3) {
      try {
        const price = await getGasPrice(web3);
        setGasPriceTime(Number(price) / 1_000_000_000);
      } catch (e) {
        console.error("Failed to update gas price:", e);
      }
    }
  }

  async function updateWinner() {
    if (web3) {
      try {
        const winner = await getWinner(web3);
        setWinner(winner);
      } catch (e) {
        console.error("Failed to update winner:", e);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!auctionEnded) {
        updateGasPriceTime();
        updatePrice();
        updateWinner();
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      {/* Header */}
      <Box padding={4} backgroundColor="blue.500" color="white" display="flex">
        <Box>
          <Text fontWeight="bold" fontSize="xl">
            Auction App
          </Text>
        </Box>
        <Box marginLeft="auto" display="flex" alignItems="center">
          {account ? (
            <Box>Account: {account}</Box>
          ) : (
            <Button onClick={connect}>Login</Button>
          )}
        </Box>
        {account && (
          <Button onClick={disconnect} marginLeft={2}>
            Logout
          </Button>
        )}
      </Box>

      {/* Main content */}
      <Box
        padding={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          marginBottom={4}
          textAlign="center"
        >
          <Text fontSize="2xl">Current Auction Object</Text>
          <Image src={cat} alt="cat" marginBottom={3} />
          <Text fontSize="2xl">Cat</Text>
          <Text fontSize="2xl">Highest Price: {highestPrice} ETH</Text>
          {winner &&
            winner !== "0x0000000000000000000000000000000000000000" && (
              <Text fontSize="xl">Winner: {winner}</Text>
            )}
        </Box>

        <Box minWidth="25%">
          <Text fontSize="2xl" marginBottom={3}>
            Insert your offer
          </Text>
          <Input
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={handleBidAmountChange}
            mb={3}
          />
          <Text>Gas Price: {gasPriceTime} gwei</Text>

          <AuctionButtons
            web3={web3}
            account={account}
            bidAmount={parseFloat(bidAmount)}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
