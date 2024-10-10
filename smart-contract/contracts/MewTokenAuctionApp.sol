// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./MewToken.sol";

contract MewTokenAuctionApp  {
    constructor(address _admin, uint256 _minimalBid, MewToken _token) {
        // TODO: Implement the constructor
    }

    function endAuction() public {
        // TODO: Implement the endAuction function
    }

    function getWinner() public view returns (address) {
        // TODO: Implement the getWinner function
    }

    function getMaxBidAmount() public view returns (uint256) {
        // TODO: Implement the getMaxBidAmount function
    }

    function newBid(uint256 bidAmount) public {
        // TODO: Implement the newBid function
    }

    function withdraw() public { 
        // TODO: Implement the withdraw function
    }
}