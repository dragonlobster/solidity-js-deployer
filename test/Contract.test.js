require('dotenv').config()
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { abi, evm } = require('../compile')

let accounts;
let contract;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()

    // Use one of those accounts to deploy the contract
    contract = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ["Hello World!"] }) // use this if have arguments
        // .deploy({ data: evm.bytecode.object })
        .send({ from: accounts[0], gas: '1000000' }) // need to send a transaction to network with gas limit in order to deploy contract

})

describe(process.env.CONTRACT_NAME, () => {
    // test that the contract deployed
    it('deploys a contract', () => {
        assert.ok(contract.options.address)
    })

    /* tests for example contract
    it('has a default message', async () => {
        const message = await contract.methods.message().call() // referencing smart contracts method message()
        assert.equal(message, "Hello World!")
    })

    it('can change the message', async () => {
        let newMessage = 'bye'
        await contract.methods.setMessage(newMessage).send({from: accounts[0]})
        updatedMessage = await contract.methods.message().call()
        assert.equal(newMessage, updatedMessage)
    })
    */
})