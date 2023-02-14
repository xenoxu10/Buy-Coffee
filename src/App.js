import abi from "./contract/chai.json"
import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Buy } from "./components/Buy";
import { Memo } from "./components/Memo";

function App() {
 
  const [state,setState]=useState({
    provide:null,
    signer:null,
    contract:null 
  })
  const [Account,Setaccount]=useState("none")
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractaddres="0x1730E05afc846e0E4221C3D7556bDb9FCa938022";
      const contractabi=abi.abi;
      try{
        const {ethereum}=window
        if(ethereum)
        {
        const account1=await ethereum.request({method:"eth_requestAccounts"});
        console.log(account1)
        Setaccount(account1)

        window.ethereum.on("chainChanged",()=>
        {
          window.location.reload()
        })
         window.ethereum.on("AccountChanged",()=>
         {
          window.location.reload()
         })
      

      
        const provider=new ethers.providers.Web3Provider(ethereum)
        const signer=provider.getSigner();
        const contract=new Contract(contractaddres,contractabi,signer)
        setState({provider,signer,contract})
        }
        else{
          alert("please connect the metamask wallet!")
        }
        
      
      }
      catch(error)
      {
        console.log(error)
      }
    }
    connectWallet()

  },[])
  console.log(state)
  return (
   <div className="container text-center">
    
    <h1>Buy Coffee</h1>
    <p>Connected account={Account}</p>
  
  
    <Buy state={state}></Buy>
    <Memo state={state}></Memo>
   </div>
   
  );
}

export default App;
