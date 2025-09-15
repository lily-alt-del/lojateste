import './Colecoes.css';
import verao from '../../assets/verao.jpg';
import scarpin from '../../assets/scarpins.jpg';
import bolsas from '../../assets/bolsas.jpg';

export default function Colecoes() {
    return (
        <section className='colecoes'>
            <div className='titulos'>
                <h2>Coleções 2026</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio at quo! Nesciunt, corrupti vel ut similique, repellat sapiente dolor ea tempore eaque, ipsum a temporibus odit quos harum ducimus.
                </p>
                <button className='btn'>Comprar agora</button>
            </div>
            <div className='grid-colecoes'>
                <div className='item'>
                    <img src={verao} alt='colecao verao'/>
                </div>
                <div className='item grande'>
                    <img src={bolsas} alt='Bolsas'/>
                </div>
                <div className='item'>
                    <img src={scarpin} alt='scarpins'/>
                </div>
            </div>
        </section>
    );
}