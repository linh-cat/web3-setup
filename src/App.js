import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

  async function loadAccount() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }
  async function loadBalance() {
    const network = await web3.eth.net.getNetworkType();
    const balance = await web3.eth.getBalance(account, "latest");
    setBalance(balance);
    setNetwork(network);
  }

  useEffect(() => {
    loadAccount();
  }, []);

  useEffect(() => {
    console.log("switch");
    loadBalance();
  }, [account]);

  console.log(account);
  return (
    <div className="App">
      <p>my account {account}</p>
      <p>network {network}</p>
      <p>balance {balance}</p>
    </div>
  );
}

export default App;
