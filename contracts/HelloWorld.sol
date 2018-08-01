pragma solidity ^0.4.24;

contract HelloWorld {
  string public word;

  event Set(address sender, string newWord);

  constructor() public {
    word = "Hello World!";
  }

  function get() public view returns (string) {
    return word;
  }

  function set(string newWord) public {
    word = newWord;
    emit Set(msg.sender, newWord);
  }
}
