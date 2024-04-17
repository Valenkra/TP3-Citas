import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import CrearCita from './components/CrearCita/CrearCita';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo="ADMINISTRADOR DE PACIENTES"></Titulo>
        <CrearCita></CrearCita>
      </header>
    </div>
  );
}

export default App;
