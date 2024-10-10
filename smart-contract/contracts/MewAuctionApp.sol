// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract MewAuctionApp  {
    mapping(address => uint256) private bidAccount;

    constructor(address _admin, uint256 _minimalBid) {
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

    function newBid() public payable {
        // TODO: Implement the newBid function
    }

}