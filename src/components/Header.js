import React from 'react';
import '../styles/Header.css';
import logo from '../images/logoIldanneth.png';
/* import { makeStyles } from '@material-ui/core/styles'; */

/* function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
  al clicar hay que volver a la home 
} */

/* const useStyles = makeStyles({ */
    /* subtitulo: {
        [theme.breakpoints.up('sm')]: {
            fontSize: 50
        }
    } */
/* }) */

export default function Header() {

    /* const classes = useStyles(); */

    return (
        <header className="header">
            <div className="tit-div">
                <h1 className="titulo">
                    Îldanneth
                </h1>
                <img className="logo" src={logo} alt="logo"/>
                <p className="alpha">beta</p>
            </div>
            <div>
                <p id="subtitulo" className="subtitulo"><i>Guía de contexto global para jugadores y dungeon masters</i></p>
            </div>
        </header>
    )
}