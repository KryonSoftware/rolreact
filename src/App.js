import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div>
        <h3>cambio</h3>
        {/* <h5>Esta web te servirá como guía para la creación de tus personajes, sus historias y trasfondo</h5> */}
        <p>Navega entre los distintos apartados para ir centrándote en temas
          concretos,
          desde las razas existentes en el mundo de Îldanneth hasta la cronología de eventos en la fecha actual de la
          campaña en juego.</p>
        <h5>Índice de la guía</h5>

        <h6>DnD 5ª Edición</h6>
        <img src="Imagenes/dyd5.png" alt="DnDLogo"/>
        <p>Esta campaña está pensada para jugarse utilizando el sistema de reglas
          empleado en DnD 5ª Edición.
          Sin embargo, salvo en apartados concretos donde sea conveniente, no se hablará de reglas en esta guía. Este
          hecho permite que puedas emplearla para jugarla
          con tu grupo utilizando otros sistemas de fantasía, como Pathfinder, haciendo pocas adaptaciones. </p>

        <h6>El mundo de Îldanneth</h6>
        <img src="Imagenes/mapaFisico.jpeg" alt="Mapa_Fisico"/>
        <p>Îldanneth (transcripción al alfabeto común del nombre que le dieron los
          primeros elfos al mundo que se encontraron tras el Despertar.
          Se cree que significa Nuevo Mundo) es un mundo de fantasía creado por el DM Kryon. Esta guía plantea el mundo a
          modo de "sandbox" para poder conocer y tener un contexto global del universo y todo lo que hay en él. Es un
          mundo grande con variedad de culturas,
          tanto humanas como no humanas. Se divide en diversos reinos y territorios, cada uno de ellos explicado en su
          respectivo apartado en esta guía-web.
          Este universo tiene también su propio sistema de deidades y mitologías transversales a todas las culturas,
          aunque algunas de ellas, las más aisladas de una u otra manera,
          tienen sus propios dioses y mitos. Esperamos que disfutéis de las aventuras que podáis crear usando este mundo.
          </p>

        <h6>Reinos</h6>
        <img src="Imagenes/fronteras.png" alt="Realms"/>
        <p>
          La división política del mundo de îldanneth, en el año 3987 del Nuevo Comienzo, viene detallada en este mapa a
          nivel general. Se podrá encontrar información detallada de cada reino y región
          concreta en su respectiva entrada del apartado de Reinos, donde se detallarán también las costumbres,
          religiones, fiestas, formas de gobierno, ciudades, grupos de interés, etc.
        </p>

        <h6>Razas</h6>
        <p>El apartado de razas muestra por una parte las criaturas más comunes en
          los sistemas de Dragones y
          Mazmorras y de Pathfinder. Las razas y criaturas de todo tipo de Îldanneth están basadas en los bestiarios y
          expansiones de ambos sistemas. Por otra
          parte se dedica también una entrada a explicar de manera concreta las razas seleccionables como jugables, es
          decir, que pueden ser elegidas en el mundo de Îldanneth como raza de un PJ. </p>

        <h6>Religiones</h6>

        <p> En Îldanneth se encuentran diversas religiones. La mayoría de ellas
          surgieron al inicio del Despertar, cuando las criaturas sensibles
          que aparecieron tuvieron visiones de dioses que les hablaron y guiaron. Estas religiones son clasificadas por
          los eruditos del <i>Maggisterium</i> como las Primeras. Las Primeras
          tienen tanto en común que en la práctica se consideran una sola, aunque ciertos rituales o nombres de dioses
          difieran de una nación a otra.
          Todas las religiones posteriores son conocidas como Segundas, si son una adaptación o reinterpretación de las
          Primeras, como en el caso de la religión Amoxochoxtl; o como Iconoclastas,
          si no tienen nada que ver con las Primeras, como es el caso del <i>Culto Imperatoris</i> de los ashtures.
        </p>
        <h6>Cronología</h6>
        <p> En la sección de cronología se detallará de manera gráfica una línea
          temporal con los eventos más importantes sucedidos en las distintas sociedades
          que se han registrado desde el Despertar hasta la actualidad, así como lo poco previo que se sabe. </p>
    </div>
  );
}

export default App;
