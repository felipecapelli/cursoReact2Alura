import React from 'react';
import LinkWrapper from '../../Utils/LinkWrapper';

const Header = () =>{//usando nosso componente LinkWrapper (que usa NavLink ao invés de Link)
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <LinkWrapper to="/" className="brand-logo ml-3" activeStyle={{}}>Casa do Código</LinkWrapper>
                    <ul id="nav-mobile" className="right">
                        <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                        <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
    );
}//esse activeStyle vai sobrescrever o negrito que ta no LinkWrapper (pq esse estilização passada no props vai ser lida por ultimo la dentro do LinkWrapper), e o logo vai ser o único que não vai ficar negrito ao ser clicado

export default Header;

/*
//se fizer desse jeito, não recarrega a página, porém criamos nosso próprio componente LinkWrapper para que o código fique future proof

import { Link } from 'react-router-dom' //para não recarregar a página ao clicar nos links

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <Link to="/" className="brand-logo ml-3">Casa do Código</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/autores">Autores</Link></li>
                        <li><Link to="/livros">Livros</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </div>
            </nav>
    );
}
*/


/*
//se fizer desse jeito, a página será recarregada. para isso não acontecer, tem que usar a tag Link

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="/" className="brand-logo ml-3">Casa do Código</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/autores">Autores</a></li>
                        <li><a href="/livros">Livros</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                    </ul>
                </div>
            </nav>
    );
}*/
