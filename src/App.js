import React,{useEffect, useState} from 'react';
import { Button, Accordion,Alert } from 'react-bootstrap';
import { ReactComponent as ReactIcon} from './assets/dragon.svg';

import './App.css';

function App() {
  const [stateCar,setStateCar] = useState(false);
  const [contar,setContar] = useState(0)

  

  useEffect(()=>{
    console.log("Total: " + contar)
  },[])

  const encenderApagar =()=>{
    // console.log("Encender / Apagar")
    // setStateCar(!stateCar);
    setStateCar(preValue=>!preValue);
    setContar(contar+1)
  };

  return (
    <div className='App'>
      <h1>React Boostrap</h1>
      <ReactIcon/>
      <Button variant="secondary" onClick={() => console.log("Hola")} size="lg">
        Block level button
      </Button>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <Alert variant="primary">
          This is a alert—check it out!
      </Alert>

      <h3>El conche esta: {stateCar ? "Encendido": "Apagado"} </h3>
      <button onClick={encenderApagar}>Encender/Apagar</button>



      <h4>click: {contar}</h4>
    </div>
  );
}

export default App;
