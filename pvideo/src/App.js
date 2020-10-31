import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar.js'

function App() {

  //Objeto
  const user = {
    nombre: "Heriberto Gonzalez",
    edad: 40,
    color: "Rojo, Verde"
  }

  const  saludarFn = (nombre, edad, color) => {
    console.log(`Hola ${nombre} tiene ${edad} y su color es ${color}`)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
        
      </header>
    </div>
  );
}

export default App;
