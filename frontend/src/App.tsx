import { Box, Text, Image, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import cat from "./assets/cat.png";
import { useWeb3 } from "./hooks/useWeb3";

function App() {
  const { account, connect, disconnect } = useWeb3();
  const [highestPrice] = useState("0");
  const [bidAmount, setBidAmount] = useState("");
  const [gasPriceTime] = useState(0);
  const [winner] = useState("");

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box padding={4} backgroundColor="blue.500" color="white" display="flex">
        <Box>
          <Text fontWeight="bold" fontSize="xl">
            Auction App
          </Text>
        </Box>
        <Box marginLeft="auto" display="flex" alignItems="center">
          {account ? (
            <Box>
              <Box>Account: {account}</Box>
            </Box>
          ) : (
            <Box>
              <Button onClick={connect}>Login</Button>
            </Box>
          )}
        </Box>
        {account && (
          <Box marginLeft={2}>
            <Button onClick={disconnect}>Logout</Button>
          </Box>
        )}
      </Box>
      <Box
        padding={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          textAlign="center"
          flexDirection="column"
          marginBottom={4}
        >
          <Text fontSize="2xl" marginBottom={3}>
            Current Auction Object
          </Text>
          <Image src={cat} alt="cat" marginBottom={3} />
          <Text fontSize="2xl">Cat</Text>
          <Text fontSize="2xl">Highest Price : {highestPrice} ETH</Text>
          {winner != "0x0000000000000000000000000000000000000000" && (
            <Text fontSize="xl">Winner : {winner}</Text>
          )}
        </Box>
        <Box minWidth="25%">
          <Text fontSize="2xl" marginBottom={3}>
            Insert your offer
          </Text>
          <Box>
            <Input
              placeholder="Your offer (ETH)"
              value={bidAmount}
              type="number"
              onChange={(e) => setBidAmount(e.target.value)}
            />
          </Box>
          <Text>Gas Price: {gasPriceTime} gwei</Text>
          <Box marginTop={3} display="flex" gap={3}>
            <Button>Submit</Button>
            <Button>Withdraw</Button>
            <Button>End Auction</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
