// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MewToken is ERC20, Ownable {
    constructor(
        address owner,
        uint256 initialValue
    ) ERC20("MewToken", "Mew") Ownable(owner) {
        _mint(address(this), initialValue);
    }

    error NotEnoughBalanceToBurn();

    function mint(uint256 amount) public onlyOwner {
        _mint(address(this), amount);
    }

    function burn(uint256 amount) public onlyOwner {
        if (amount > balanceOf(address(this))) {
            revert NotEnoughBalanceToBurn();
        }

        _burn(address(this), amount);
    }

    function buy(uint256 amount) public payable {
        _transfer(address(this), msg.sender, amount);
    }

    function sell(uint256 amount) public {
        _transfer(msg.sender, address(this), amount);
    }
}
