import './App.css';
import Topo from './components/Topo';
import Capa from './components/Capa';
import Produtos from './components/Produtos';

function App() {

  return (
    <>
      <header>
        <Topo/>
      </header>
      <main>
        <Capa/>
        <Produtos/>
      </main>
    </>
  )
}

export default App
