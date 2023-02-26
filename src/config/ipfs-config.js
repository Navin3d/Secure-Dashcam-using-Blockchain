const fs = require("fs");
const { VIDEOPATH } = require("./index");
const { create } = require("ipfs-http-client");
const client = create();


const uploadFile = async () => {
    const dataBuffer = await fs.readFileSync(VIDEOPATH);
    const response = await client.add(dataBuffer);
    return response;
}

module.exports = {
    uploadFile
}
