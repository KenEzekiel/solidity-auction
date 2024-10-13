import Web3 from "web3";
import MewAuctionApp from "../abi/MewAuctionApp.json";

const CONTRACT_ADDRESS = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

export function getContract(web3: Web3) {
  try {
    const contract = new web3.eth.Contract(MewAuctionApp.abi, CONTRACT_ADDRESS);
    console.log("Contract instance created:", contract);
    return contract;
  } catch (error) {
    console.error("Error creating contract instance:", error);
    return null;
  }
}

export function setupContractEventListeners(
  web3: Web3,
  onEvent: (eventName: string, data: unknown) => void
) {
  const contract = getContract(web3);

  if (!contract) {
    console.error("Contract instance is null. Cannot set up event listeners.");
    return;
  }

  if (!contract.events) {
    console.error(
      "Contract events are undefined. Check your ABI and contract deployment."
    );
    return;
  }

  try {
    if (contract.events.MewAuctionEnd) {
      contract.events
        .MewAuctionEnd({})
        .on("data", (event) => {
          console.log("MewAuctionEnd event received:", event);
          onEvent("MewAuctionEnd", event);
        })
        .on("error", console.error);
    } else {
      console.warn("MewAuctionEnd event is not defined in the contract.");
    }

    if (contract.events.MewAuctionNewBid) {
      contract.events
        .MewAuctionNewBid({})
        .on("data", (event) => {
          console.log("MewAuctionNewBid event received:", event);
          onEvent("MewAuctionNewBid", event);
        })
        .on("error", console.error);
    } else {
      console.warn("MewAuctionNewBid event is not defined in the contract.");
    }
  } catch (error) {
    console.error("Error setting up event listeners:", error);
  }
}

export async function bid(web3: Web3, account: string, value: number) {
  const contract = getContract(web3);

  return contract.methods.newBid().send({
    from: account,
    value: web3.utils.toWei(value.toString(), "ether"),
  });
}

export async function withdraw(web3: Web3, account: string) {
  const contract = getContract(web3);

  return contract.methods.withdraw().send({
    from: account,
  });
}

export async function endAuction(web3: Web3, account: string) {
  const contract = getContract(web3);

  return contract.methods.endAuction().send({
    from: account,
  });
}

export async function getWinner(web3: Web3) {
  const contract = getContract(web3);

  return await contract.methods.getWinner().call();
}

export async function getMaxBidAmount(web3: Web3) {
  const contract = getContract(web3);
  try {
    const currentBid = await contract.methods.getCurrentBid().call();
    console.log("Current bid:", currentBid);
    return Web3.utils.fromWei(currentBid, "ether");
  } catch (error) {
    console.error("Error getting max bid amount:", error);
    throw error;
  }
}

export async function getGasPrice(web3: Web3) {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Current gas price:", gasPrice);
    return gasPrice;
  } catch (error) {
    console.error("Error getting gas price:", error);
    throw error;
  }
}
