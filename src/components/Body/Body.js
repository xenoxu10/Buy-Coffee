import { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';
export const Body=({state})=>{
    const [memos,setmemo]=useState("");
    console.log(state);
    console.log(state.contract)
    useEffect(()=>{
        const contract=state.contract;
        console.log(contract);
        const getmemo=async()=>{
            const memmoo=await contract.getMemo();
            setmemo(memmoo);
           
        }
         contract && getmemo();

        
    },[state]);
    console.log(memos)
    return(
        <div className="Log">
        <Container>
            <Row>
                <Col>Name</Col>
                <Col>Message</Col>
                <Col>timestamp</Col>
            </Row>
            <Row >
      
        {memos!=="" && memos.map((memo)=>{
            return(
                <Row>
                    <Col>{memo.name}</Col><Col>{memo.message}</Col><Col>{memo.timestamp.toString()}</Col>

                    </Row>
                

            );
           
        })}
         </Row>
       
      
    </Container>

        </div>
    );

}