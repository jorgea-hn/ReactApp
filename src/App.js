import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  // const username ="Jorge HN";
  // const edad = 25;


  const user={
    nombre:"Juan HN",
    edad:18,
    color:"rojo"
  }

  const saludarfn = name=>{
    console.log("Hola" + name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar name={username} edad={edad}/> */}
        <Saludar userInfo={user} saludarfn={saludarfn}/>
  
      </header>
    </div>
  );
}

export default App;
