require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note magic artwork inflict force force giant'; 
let testAccounts = [
"0xf58740e157c77acfd3e25d93721cbcf837b7bc175808b12307db9b2cf727d9ff",
"0x3a69b5ebf6104d2a66480c60781839d71688aa916e729973c3d2c8a3d5efdd9f",
"0x0b4ba8183ea2b67ae7a31f7f3b2895be9bfdc9b03b7ec446dd132624ae425474",
"0x3ce196a2a5928ae9174a24ffcc9defab8e1bd6326ad771ab3c85d36290dee793",
"0x235ea7833b8796ea053d9fdfadfc12f94721bfae3fe34587df82d6db0697a556",
"0x94a58100c6de560e521f49540ed568e8401a71a056d9e336830cdabc1db9f83a",
"0x1d1334e0a8b9dd7bbdb4837a92e72ecfcf2078ba51c53afea4e4fc83eea52317",
"0x52f0a2f963b99564e38fbd073920e8c8429a036fcc97109702fff8b8fba3bdf3",
"0x38a4c5ceaca09ae295bfb0bb6ee831f689f927a05f47f6a7dfae43b82479ca28",
"0x609f92b041fa0e0a3001b12cfb7b70ad195d7de63e0f5f1f8ba8b7a52c107515"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

