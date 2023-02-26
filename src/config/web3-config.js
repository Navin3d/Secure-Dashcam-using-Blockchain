const Web3 = require("web3");
var web3 = new Web3("http://localhost:7545");

const getAccounts = async () => await web3.eth.getAccounts();

module.exports = {
    web3,
    getAccounts
};
