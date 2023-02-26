const fs = require("fs");
const uuid = require("uuid");
const { CSVPATH } = require("./config/index");
const { getAccounts } = require("./config/web3-config");
const { uploadFile } = require("./config/ipfs-config");
const dashCamContract = require("./config/chain-config");

const writeDataToCSV = (data) => {
    fs.appendFile(CSVPATH, data, (err) => {
        console.log(err);
        return false;
    });
    return true;
}

const execute = async () => {
    const response = await uploadFile();
    const mapId = uuid.v4();
    const address = await getAccounts();

    let blockchainData = [];
    blockchainData.push(response.path);
    blockchainData.push(response.size);
    blockchainData.push(`${new Date()}`);
    blockchainData.push(address[0]);

    await dashCamContract.methods.uploadVideo(mapId, blockchainData).send({
        from: address[0],
        gas: '1000000'
    });

    let data = `${mapId}, ${response.path}, ${response.size}, ${new Date()}, ${address[0]} \n`;
    writeDataToCSV(data);
}

execute();
