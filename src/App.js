import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';

function App() {
  return (
    <div >
      <h1>componete 01</h1>
     <C01componente/>

     <h1>componente 02</h1>
     <C02contador/>

     <h1>componente 03</h1>
     <C03dobleestado/>
    </div>
  );
}

export default App;
