import { ethers } from "ethers";





export const Buy=({state})=>{
    console.log(state)
   
    const {contract}=state
    const buychai=async(event)=>{
        event.preventDefault()
        
        const name=document.querySelector("#name").value;
        const msg=document.querySelector("#msg").value;
        console.log(name,msg)
       
        const amount= {value: ethers.utils.parseEther("0.001")}
        const transaction1=await contract.buy(name,msg,amount)
        await transaction1.wait()
        console.log("done")


    }
    return(<>
       <form onSubmit={buychai}>
        <label>Name</label>
        <input class="form-control" type="text" id="name" placeholder="enter your name"></input><br />
        <label>Message</label>
        <input className="form-control" type="text" id="msg" placeholder="enter msg"></input><br />
      
        <button type="submit"  class="btn btn-primary" disabled={!state.contract}>Pay</button>
       </form>
        </>)
}