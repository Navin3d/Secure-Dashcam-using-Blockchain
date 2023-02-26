const { web3 } = require("./web3-config");

const CONTRACTADDRESS = "0x220764b764bddd2F3B58C94B3A837aCD1f8cAFB9";
const ABICODE = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "dataId",
				"type": "string"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "hash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "size",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "uploadedBy",
						"type": "address"
					}
				],
				"internalType": "struct DashCam.VideoData",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payFine",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "records",
		"outputs": [
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "uploadedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "hash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "size",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "uploadedBy",
						"type": "address"
					}
				],
				"internalType": "struct DashCam.VideoData",
				"name": "videoData",
				"type": "tuple"
			}
		],
		"name": "uploadVideo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const dashCamContract =  new web3.eth.Contract(ABICODE, CONTRACTADDRESS);
module.exports = dashCamContract;
