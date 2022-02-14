require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require("@nomiclabs/hardhat-web3");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

module.exports = {};

module.exports = {
  solidity: "0.8.4",
  networks:{
    ropsten:{
      url: process.env.MORALIS_ROPSTEN ,
      accounts:[ process.env.OWNER_ACC]
    }
  }
};  
