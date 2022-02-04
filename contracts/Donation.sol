//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2;

import "hardhat/console.sol";

contract Donation {
    address payable public owner;
    
    struct Donator {
        address adress;
        uint value;
    }
    Donator[] public donators;

    constructor() {
        owner = payable (msg.sender);
    }

    function gatherDonation() public payable {
        require(msg.value >= .001 ether);
        donators.push(Donator(owner, msg.value));
    }

    function transferToOwner() external {
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }

    function getDonators() public view returns(Donator[] memory){
        return donators;
    }
    
}
