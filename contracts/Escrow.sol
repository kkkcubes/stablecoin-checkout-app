// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Escrow {
    address public buyer;

    address public seller;

    uint256 public amount;

    constructor(
        address _buyer,
        address _seller
    ) payable {
        buyer = _buyer;
        seller = _seller;
        amount = msg.value;
    }

    function release() external {
        payable(seller).transfer(amount);
    }

    function refund() external {
        payable(buyer).transfer(amount);
    }
}