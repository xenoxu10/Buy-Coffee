import { watchOptions } from 'nodemon/lib/config/defaults';
import { Button, Col ,Row,Form} from 'react-bootstrap';

import './Main.css';
export const Main=({state})=>{
    console.log(state.contract)
  
   
    const submit=async(event)=>
    {
        event.preventDefault();
        
      
        const name=document.querySelector("#name").value;
        console.log(name)
        const msg=document.querySelector("#msg").value;
        console.log(msg)
        var frm = document.getElementsByName('contact-form')[0];
        if(name=="")
        {
            alert("please enter the name!");
        }
        else{
            try{
           
            
           
        
                const contract=state.contract;
                await contract.buy(name,msg,{value: 5});
                alert("transaction successfull!");
                frm.reset();

              
               
            }catch{
                alert("transaction unsuccessfull!");
            }
           

        }
      
       
        
    }
    return(
        <div className='formback'>
              <Form  name='contact-form' onSubmit={submit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="msg">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Message" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Pay
        </Button>
      </Form>
        



        </div>
      
       
    )
}