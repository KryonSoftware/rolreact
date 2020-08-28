import React from 'react';
import '../styles/Header.css';
import logo from '../images/logoIldanneth.png';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
  /*al clicar hay que volver a la home*/ 
}

export default function Header() {
    return (
        <header className="header">
            <div className="tit-div">
                <h1 className="titulo">
                    Îldanneth
                </h1>
                <img className="logo" src={logo} alt="logo"/>
                <p className="alpha">alpha</p>
            </div>
            <div className="sub-div">
                <p className="subtitulo"><i>Guía de contexto global para jugadores y dungeon masters</i></p>
            </div>
        </header>
    )
}