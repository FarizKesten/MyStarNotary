const Web3 = require('web3');
// let web3 = new Web3('ws://localhost:9545');
let web3 = new Web3('wss://rinkeby.infura.io/ws/v3/51929b79a0174a839c640f093d5f2b8d');
web3.eth.getChainId().then(function(chainId){
	console.log(chainId);
});
