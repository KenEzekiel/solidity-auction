// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./MewToken.sol";

contract MewAuctionApp {
    mapping(address => uint256) private bidAccount;
    address private admin;
    uint256 private currentBid;

    // nilai default dari address itu 0
    address private winner;
    bool private auctionEnded = false;
    // MewToken private token;

    event MewAuctionEnd(address winner);
    event MewAuctionNewBid(address user, uint256 amount);

    error MewPermissionNotAllowed();
    error MewBidAmountLessEqThanMaxBid(uint256 currentMax);
    error MewNoBalanceToWithdraw();
    error MewAuctionEnded();

    constructor(address _admin, uint256 _minimalBid) {
        admin = _admin;
        currentBid = _minimalBid;
    }

    function endAuction() public {
        require(!auctionEnded, MewAuctionEnded());
        require(msg.sender == admin, MewPermissionNotAllowed());

        emit MewAuctionEnd(winner);
        auctionEnded = true;
    }

    function getWinner() public view returns (address) {
        // Current highest bidder
        return winner;
    }

    function getCurrentBid() public view returns (uint256) {
        return currentBid;
    }

    function newBid() public payable {
        // payable biar bisa dikirimin uang
        require(!auctionEnded, MewAuctionEnded());
        require(msg.value > currentBid, MewBidAmountLessEqThanMaxBid(currentBid));
        // Manggil fungsi itu bayar, ada orang yang bikin API buat dengerin suatu smart contract isinya apa, jadinya gausah bayar bisa tau
        // Itulah untungnya punya node sendiri juga, jadi bisa independent dan liat sendiri
        bidAccount[winner] += currentBid;
        currentBid = msg.value;
        winner = msg.sender;

        emit MewAuctionNewBid(winner, currentBid);
    }

    function withdraw() public {
        require(bidAccount[msg.sender] > 0, MewNoBalanceToWithdraw());

        uint256 amount = bidAccount[msg.sender];
        bidAccount[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
