import React from 'react';
import { useState,useEffect } from 'react'
import abi from "./contractJson/coffee.json"
import {ethers} from "ethers"
import Memos from './components/Memos'
import Buy from './components/Buy'
import coffee from "./coffee.jpg";
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0xb27CCe2d2560360BBf2b1A1da2023d357B154B87";
      const contractABI=abi.abi;
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer =  provider.getSigner(); 
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div >
    <img src={coffee} className="img-fluid" alt=".." width="100%" height="450px" />
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App