require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(
    process.env.WALLET_SECRET, // wallet secret key
    process.env.INFURA_NODE // infura node
)

const web3 = new Web3(provider)

const deploy = async() => {

    const accounts = await web3.eth.getAccounts()

    console.log('Deplying from: ', accounts[0])

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Hello World'] }) // use this if you have arguments
        // .deploy({ data: evm.bytecode.object })
        .send({ gas: '1000000', from: accounts[0] })
        
    console.log('Contract deployed to: ', result.options.address)
    provider.engine.stop()
}

deploy()