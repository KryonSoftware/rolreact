import React from 'react';
import '../styles/Main.css';
import Shit from '../images/shit.png';

function Construccion() {
  return (
    <div className="todo">
      <div className="content">
        <img src={Shit} alt="En construcción"/>
        <h3>Sección en construcción</h3>
        <p> Lo sentimos, estamos trabajando en esta sección :( </p>
      </div>
    </div>
  );
}

export default Construccion;