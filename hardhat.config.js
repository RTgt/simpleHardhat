require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: "0.8.4",
  networks:{
    ropsten:{
      url: "https://speedy-nodes-nyc.moralis.io/9c98c27a796624d19d38c6da/eth/ropsten",
      accounts: ["2a2d50bdca90f52e101e6b9d1c40629ce38231ff56215edc402e738ed620057d"]
    }
  }
};
