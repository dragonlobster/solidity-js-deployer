// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Example {

    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}