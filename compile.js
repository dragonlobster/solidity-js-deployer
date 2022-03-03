require('dotenv').config()
const contract_file_name = `${process.env.CONTRACT_NAME}.sol`

const path = require('path')
const fs = require('fs')
const solc = require('solc')

const contractPath = path.resolve(__dirname, 'contracts', contract_file_name)
const source = fs.readFileSync(contractPath, 'utf8')



const input = {
    language: 'Solidity',
    sources: {
        contract: {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            }
        }
    }
}

const compiled = JSON.parse(solc.compile(JSON.stringify(input))).contracts['contract'][process.env.CONTRACT_NAME]
module.exports = compiled




