import React from 'react';
import '../styles/Main.css';
import fisico from '../images/mapaFisico.jpeg';
import front from '../images/fronteras.png';

function Home() {
  return (
    <div className="todo">
      <div className="content">
        <h1 className="bienv">Bienvenido a la guía del jugador del mundo de Îldanneth</h1>
        <h2 className="bienv2">Esta web te servirá como guía para la creación de tus personajes, sus historias y trasfondo</h2>
        <p>Navega entre los distintos apartados para ir centrándote en temas
          concretos,
          desde las razas existentes en el mundo de Îldanneth hasta la cronología de eventos en la fecha actual de la
          campaña en juego.</p>

        <h3>El mundo de Îldanneth</h3>
        <img src={fisico} alt="Mapa_Fisico"/>
        <p>Îldanneth (transcripción al alfabeto común del nombre que le dieron los
          primeros elfos al mundo que se encontraron tras el Despertar.
          Se cree que significa <i>Renacer</i>) es un mundo de fantasía creado por el DM Kryon. Esta guía plantea el mundo a
          modo de «sandbox» para poder conocer y tener un contexto global del universo y todo lo que hay en él. Es un
          mundo grande con variedad de culturas,
          tanto humanas como no humanas. Se divide en diversos reinos y territorios, cada uno de ellos explicado en su
          respectivo apartado en esta guía-web.
          Este universo tiene también su propio sistema de deidades y mitologías transversales a todas las culturas,
          aunque algunas de ellas, las más aisladas de una u otra manera,
          tienen sus propios dioses y mitos. Esperamos que disfutéis de las aventuras que podáis crear usando este mundo.
          </p>

        <h3>Reinos</h3>
        <img src={front} alt="Realms"/>
        <p>
          La división política del mundo de îldanneth, en el año 3987 del Nuevo Comienzo, viene detallada en este mapa a
          nivel general. Se podrá encontrar información detallada de cada reino y región
          concreta en su respectiva entrada del apartado de Reinos, donde se detallarán también las costumbres,
          religiones, fiestas, formas de gobierno, ciudades, grupos de interés, etc.
        </p>

        <h3>Religiones</h3>

        <p> En Îldanneth se encuentran diversas religiones. La mayoría de ellas
          surgieron al inicio del Despertar, cuando las criaturas sensibles
          que aparecieron tuvieron visiones de dioses que les hablaron y guiaron. Estas religiones son clasificadas por
          los eruditos del <i>Magisterium</i> como las Primeras. Las Primeras
          tienen tanto en común que en la práctica se consideran una sola, aunque ciertos rituales o nombres de dioses
          difieran de una nación a otra.
          Todas las religiones posteriores son conocidas como Segundas, si son una adaptación o reinterpretación de las
          Primeras, como en el caso de la religión Amoxochoxtl; o como Iconoclastas,
          si no tienen nada que ver con las Primeras, como es el caso del <i>Culto Imperatoris</i> de los ashtures.
        </p>
        <h3>Cronología</h3>
        <p> En la sección de cronología se detallará de manera gráfica una línea
          temporal con los eventos más importantes sucedidos en las distintas sociedades
          que se han registrado desde el Despertar hasta la actualidad, así como lo poco previo que se sabe. </p>
      </div>
    </div>
  );
}

export default Home;
