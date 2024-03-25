const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("coffee"); 
  const coffee = await Coffee.deploy(); 

  await coffee.deployed();

  console.log("Deployed contract address:",`${coffee.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0xb27CCe2d2560360BBf2b1A1da2023d357B154B87
