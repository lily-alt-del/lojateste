import './App.css';
import Topo from './components/Topo';
import Capa from './components/Capa';
import Produtos from './components/Produtos';
import Colecoes from './components/Colecoes';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <header>
        <Topo/>
      </header>
      <main>
        <Capa/>
        <Produtos/>
        <Colecoes/>
      </main>
      <Footer/>
    </>
  )
}

export default App
