require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stool response meadow unusual hover arena equal gate'; 
let testAccounts = [
"0x2600f95391426a3b903b4a102e612639b54473904ce022433da0254a440d5c59",
"0xf8a756eb86b33afb8f4ddb8007c95d8dee079db84955aa84a66e4c2672b03a66",
"0xc6ab2facb2cb11da177d1828cfc8ace750144d5377658f74954a9805c01082b6",
"0xdde56e8a1da7e7512348215373f570d8c46a995f2b929edfd05a81c733816603",
"0x9043d5c520daf10a055405e9ad16abfd1f82b1931f682dc0380ff907dac998c5",
"0xe4c9946a6d3d28e1f32d85cb5617d1d35449c74a557744735414f4de6ac975a2",
"0x025162a21bf406a6989f6be35587a95939b6ad008ee98666235b419d6f1cee9d",
"0x8ac6c39632221ffd61e90350e536d468463e87bbc4641d17ceb3818184772a27",
"0x3248434c63d5b072b284ae10bdeb16fe8ef3f968237fe9e14a21dc5cd66d5c18",
"0x309c620b92ce1f50b6d8dc7f2c8f341bcc25ee1332284db40cf28862db30e714"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
