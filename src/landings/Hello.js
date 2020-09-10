import React from 'react';
import '../styles/Main.css';
import rick from '../images/rick.jpg';

function Home() {
  return (
    <div className="todo">
      <div className="content">
        <figure className="marco" elevation="2">
          <img src={rick} className="foto" elevation="3" alt="foto"/>
        </figure>
        <div className="saludo">
          <h1 className="bienv">Hey, I'm Jose.</h1>
          <h2 className="bienv2">I'm a junior fullstack developer from Mallorca, Spain. I've been working on
          tourism-focused backend java applications. I'm also studying ML to move forward on my career and improve my skills :)</h2>
        </div>
      </div>
      <div className="content-white">
        <figure className="marco-p" elevation="2">
          <img src={rick} className="portrait" elevation="3" alt="foto"/>
        </figure>
        <div className="saludo-p">
          {/* <h1 className="bienv black-font">Hey, I'm Jose.</h1> */}
          <h2 className="bienv2 black-font">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
          <p className="alignright black-font">
            -Superman.
            </p>
        </div>
      </div>
      <div className="content-grey">
        <figure className="marco-p" elevation="2">
          <img src={rick} className="portrait" elevation="3" alt="foto"/>
        </figure>
        <div className="saludo-p">
          {/* <h1 className="bienv black-font">Hey, I'm Jose.</h1> */}
          <h2 className="bienv2 black-font">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
          <p className="alignright black-font">
            -Jesucristo blablabla blablabla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
