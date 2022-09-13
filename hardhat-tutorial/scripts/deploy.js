const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevsTokenContract = await hre.ethers.getContractFactory(
    "CryptoDevToken"
  );
  const cryptoDevToken = await cryptoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );
  await cryptoDevToken.deployed();

  console.log("Crypto Devs Token Contract Address: ", cryptoDevToken.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
