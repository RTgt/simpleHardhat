//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Donation {
    address payable public owner;
    address[] public donators;

    constructor() {
        owner = payable (msg.sender);
    }

    function gatherDonation() public payable {
        require(msg.value >= .001 ether);
        donators.push(msg.sender);
    }
    function transferToOwner() external {
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }
    function getDonators() public view returns(address[] memory){
        return donators;
    }
    
}
