import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/Pagina-en.css';

function Pagina(){
    return(
        <main id="wrapper-en">
            <div id="home-en">
                <aside className="direita">
                    <div className="container">
                        <header>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li> 
                                <Link to="/" className="link">
                                    <li className="pt">pt</li>
                                </Link>
                                <li className="barra">/</li>
                                <li className="en">en</li>
                            </ul> 
                        </header>
                        <div className="perfil">
                        </div>
                    </div>
                </aside>

                <div className="esquerda">
                    <div className="container-esquerda">
                        <div className="animacao1">
                            <p className="p-en">Welcome to my website!</p>
                        </div>
                        <div className="animacao2">
                            <h1>Lucca Lopes</h1>
                        </div>
                        <div className="animacao-en">
                            <h2>Web Developer</h2>
                        </div>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                            industry. Lorem Ipsum has been the industry's standard dummy <br/>
                            text ever since the 1500s
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Pagina;

// 