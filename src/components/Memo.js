import { useState,useEffect } from "react";


export const Memo=({state})=>
{
    const [statememo,setmemo]=useState([])
    const {contract}=state;
    useEffect(()=>
    {
        const memomessage=async()=>{
            const memos=await contract.getMemo();
            setmemo(memos)
        }
        contract && memomessage()
    },[contract])

    return(<>
    <p>Records!</p>
        {statememo.map((memo)=>{return(
          <div className="container text-center">
          <div className="row">
            <div className="col">
              {memo.name}
            </div>
            <div className="col">
              {memo.message}
            </div>
            <div className="col">
              {String(memo.timestamp)}
            </div>
            <div className="col">
              {memo.from}
            </div>
          </div>
        </div>
        )})}
    </>
    );
    
   
        

}