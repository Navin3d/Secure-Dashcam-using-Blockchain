// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract DashCam {

    struct VideoData {
        string hash;
        uint256 size;
        string time;
        address uploadedBy;
    }
    address rto;
    mapping(string => VideoData) public records;

    constructor() {
        rto = msg.sender;
    }

    modifier hasRightsToView(string calldata dataId) {
        VideoData storage data = records[dataId];
        require(data.uploadedBy == msg.sender || rto == msg.sender, "You don't have rights to View.");
        _;
    }

    function payFine() public payable returns(uint){
        address payable rtoAccount = payable(rto);
        rtoAccount.transfer(msg.value);
        return 0;
    }

    function getData(string calldata dataId) public view hasRightsToView(dataId) returns(VideoData memory) {
        VideoData memory data = records[dataId];
        return data;
    }

//  ["hbdchjbhub","20","mon","0xdD870fA1b7C4700F2BD7f44238821C26f7392148"]
    function uploadVideo(string calldata id, VideoData memory videoData) public returns(uint256) {
        records[id] = videoData;
        return 0;
    }

}
