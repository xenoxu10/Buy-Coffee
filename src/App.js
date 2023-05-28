import {Wallet} from './components/Navbar/Wallet.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import {Crousel} from './components/Crousel/Crousel.js';
import {Main} from "./components/Main/Main.js";
import {Body} from "./components/Body/Body.js";
import {Footer} from "./components/Footer/Footer.js"
function App() {
  const [state,setstate]=useState({
    provider: null,
    signer: null,
    contract: null
  });
  const savestate=((state)=>{
    setstate(state);
  });
  console.log(state);

  return (
    <> <Wallet savestate={savestate}></Wallet>
    <Crousel></Crousel>
    <Main state={state}>
     
    </Main>
    <Body state={state}></Body>
    <Footer></Footer>
   </>
    
   
  );
}

export default App;
