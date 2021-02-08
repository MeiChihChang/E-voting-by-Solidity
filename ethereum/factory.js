import Web3 from 'web3';
import CampaignFactory from './build/CampaignFactory.json';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ) {
     web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/tr8BwSstUepWd1GnTm4c');
  web3 = new Web3(provider);
};

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1A4c70D78949809862f2311EDf94D8b36dbE76DD'
);

export default instance;
