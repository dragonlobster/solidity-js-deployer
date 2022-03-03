# Test/Deploy Solidity Contracts with Node JS

This project is meant to be a boilerplate for my personal smart contract projects for easy testing/deployment

**Step 1**:

Add your contract(s) to the `contracts/` folder

**Step 2**:

Create a `.env` file in ROOT of the project, and add the following:

```
WALLET_SECRET="<12 word mnemonic separated by space>"

CONTRACT_NAME="<name of contract, exclude .sol>"

INFURA_NODE="<infura node endpoint>"
```

**Step 3**:

Change the `deploy` function in both `test/Contract.test.js` `deploy.js` by either removing the arguments, adding more arguments, or changing the argument depending on your contract constructor. Further, modify `send`, if needed by modifying gas limit or other configuration options


**Step 4**:

Write your tests in `test/Contract.tests.js` file; feel free to add other tests in `test/` directory

**Step 5**:

Run tests by running this command from root
```sh
npm test
```

**Step 6**

Deploy the contract to Ethereum blockchain by running
```sh
npm deploy
```
The specific network the contract is deployed to will be based on your infura node endpoint (feel free to replace infura node endpoint with other node endpoints, for example your own that is connected to an Ethereum blockchain netwrok )