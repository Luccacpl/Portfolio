import React from 'react';
import { Link } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";

import '../styles/Pagina.css';

function Pagina(){
    return(
        <main id="wrapper">
            <div id="home">
                <header>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Portfólio</li> 
                        <li className="pt-br">pt</li>
                        <li className="barra">/</li>
                        <Link to="/en" className="link">
                            <li className="en-br">en</li>
                        </Link>
                    </ul> 
                </header>
                <aside className="direita">
                    <div className="container">
                        <div className="perfil">
                        </div>
                    </div>
                </aside>

                <div className="esquerda">
                    <div className="container-esquerda">
                        <div className="animacao1-br">
                            <p className="p-br">Bem-vindo ao meu site!</p>
                        </div>
                        <div className="animacao2-br">
                            <h1>Lucca Lopes</h1>
                        </div>
                        <div className="animacao">
                            <h2>Desenvolvedor Web</h2>
                        </div>
                        <h3>
                            Meu nome é Lucca Lopes, tenho 21 anos e sou estudante <br/>
                            de Análise e Desenvolvimento de Sistemas pela Faculdade <br/>
                            de Tecnologia Rubens Lara (FATEC).
                        </h3>
                        <div className="botoes">
                                <button className="botao1">Meus projetos</button>
                                <button className="botao2">Fale comigo!</button>
                        </div>
                    </div>
                </div>
                <footer>
                   <a href="#Sobre"><FiChevronDown className="icone"/></a>
                </footer>
            </div>

            <div id="Sobre">
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>90<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">html</h2>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>50<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">CSS</h2>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>60<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">React</h2>
                    </div>
                </div>

                <footer>
                   <a href="#Sobre"><FiChevronDown className="icone"/></a>
                </footer>
            </div>
        </main>
    );
}

export default Pagina;
 