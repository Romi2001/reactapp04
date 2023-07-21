import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';
import C05operador from './component/C05operador';
import C06matriz from './component/C06matriz';
import C07MatrizOperaciones from './component/C07MatrizOperaciones';

function App() {
  return (
    <div >
      <h1>componete 01</h1>
     <C01componente/>

     <h1>componente 02</h1>
     <C02contador/>

     <h1>componente 03</h1>
     <C03dobleestado/>

     <h1>componente 04</h1>
     <C04variable xVariable="hola mundo..." />

     <h1>componente 05</h1>
     <C05operador />

     <h1>componente 06</h1>
     <C06matriz/>

     <h1>componente 07</h1>
     <C07MatrizOperaciones/>
    </div>
  );
}

export default App;
