import {Button} from "react-bootstrap";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Abi from "./Abi.json";
import './Wallet.css'
const ethers=require("ethers");



export const Wallet=({savestate})=>
{
  const [connected,setconnect]=useState(false);
  const contractaddress="0xDB1b69f3261e26915C66eC75156937226B863251";
  const init=async()=>{
    try{
      const provider=new ethers.providers.Web3Provider(window.ethereum,"any");
      console.log(provider);
      const { chainId } = await provider.getNetwork();
      if(chainId!==421613)
      {
        alert("please change the network to arbitrum goerli");
        return ;
      }
      else{
        await provider.send("eth_requestAccounts", []);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractaddress,Abi,signer);
        savestate({provider: provider,signer: signer,contract: contract});
        console.log(signer.getAddress());
       
     
        if(!connected)
        {
          setconnect(true);
        }
        
      }
     


    }catch(error)
    {
      alert("please install metamask");
    }
  }
 


  

    return(
      <div className="my">
           <Navbar>
        <Container>
          <Navbar.Brand ><h3>Buy Coffee</h3></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Button onClick={init} disabled={connected}> {!connected?"Connect":`Connected`}</Button>
             
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </div>
     
    );
}