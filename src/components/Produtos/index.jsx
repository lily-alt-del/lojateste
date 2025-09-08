import React from 'react';
import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Novidades</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam animi debitis fuga facere aperiam praesentium veniam sapiente quibusdam fugiat similique ex atque maiores, voluptatem, necessitatibus qui suscipit optio deserunt!</p>

                <div className='produtos_grid'>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sandalia espadrille" />
                            <span className='badge-venda'>Mais Vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Couro</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>


                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="Sandalia rosa" />
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Couro</h3>
                            <p className='preco'>R$ 229,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                        <div className='card'>
                            <div className='card-image'>
                                <img src={tamanco} alt="Tamanco" />
                                <span className='badge-desconto'>-10%</span>
                            </div>
                            <div className='card-info'>
                                <h3>Tamanco Couro</h3>
                                <p className='preco'>R$ 369,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-image'>
                                <img src={bolsa} alt="Bolsa Vermelha" />
                                <span className='badge-desconto'>-10%</span>
                            </div>
                            <div className='card-info'>
                                <h3>Bolsa Shopper Nylon</h3>
                                <p className='preco'>R$ 269,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-image'>
                                <img src={note} alt="Porta Notebook" />
                            </div>
                            <div className='card-info'>
                                <h3>Porta Notebook Nylon</h3>
                                <p className='preco'>R$ 269,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card-image'>
                                <img src={tenis} alt="Tenis preto e branco" />
                                <span className='badge-venda'>Mais Vendido</span>
                            </div>
                            <div className='card-info'>
                                <h3>Tênis Couro Camurça</h3>
                                <p className='preco'>R$ 169,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}