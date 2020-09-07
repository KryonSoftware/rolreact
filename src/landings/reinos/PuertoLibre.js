import React from 'react';
import plib from '../../images/plib.png';
import Typography from '@material-ui/core/Typography';

export default function Plib() {
    return (
        <React.Fragment>
            <div className="content">
                <Typography variant="h4">
                    Puerto Libre
                </Typography>
                <img src={plib} alt="Puerto Libre"/> 
                <h2 className="bienv2">Datos Básicos:</h2>
                <p >

                <b>Capital:</b> Ciudad Flotante de Puertos Libres ({'>'}50.000 hab.)<br/>
                <b>Población:</b> {'>'}50.000  hab. (35% humanos, 30% enanos, 10% medianos, 15% elfos, 10% otros)<br/>
                <b>Forma de Gobierno:</b> anarquía<br/>
                <b>Religiones:</b> 45% Primeras, 20% Segundas, 15% Nuevas, 20% otras o ninguna<br/>
                <b>Importaciones:</b> comida, materias primas<br/>
                <b>Exportaciones:</b> armas mágicas, combustible negro, productos manufacturados de alta calidad, barcos, pólvora<br/>
                <b>Alineamiento:</b> CB,CN,NB,N<br/>
                <b>Idiomas:</b> común, eldar, nepherita, kenisán, otros<br/>

                </p>
                <h2 className="bienv2">Información:</h2>

                <h3>Introducción</h3>
                <p >
                La Ciudad Flotante de Puertos Libres, Puertos Libres, Puerto Libre o Ciudad Flotante a secas, es una ciudad flotante, 
                como su nombre indica, que flota cruzando los mares y océanos de Îldanneth, impulsada por grandes máquinas de combustión 
                alimentadas por un extraño y escasísimo combustible negro líquido que sólo se extrae desde la propia ciudad.
                </p>

                <p >
                Es una de las ciudades más ricas y avanzadas del mundo, si no la que más, y es famosa por sus exportaciones de altísima calidad, 
                por ser un centro neurálgico del comercio y un punto de encuentro de las mentes más ágiles del Viejo y Nuevo Mundo.
                </p>

                <h3>Principales accidentes geográficos</h3>
                <p >
                La Ciudad Flotante de Puertos Libres no tiene una geografía determinada, ya que cada cierto tiempo comienza a desplazarse en busca de 
                mejores condiciones climáticas, zonas de abastecimiento de rutas marítimas y zonas libres de guerra o piratas. Sin embargo sí que 
                tiende a detenerse en aquellas zonas del océano donde la profundidad es más baja y ya ha preestablecido zonas de extracción de combustible negro.
                <br/><br/>
                La ciudad no suele acercarse demasiado a la costa y mucho menos a la de aquellas naciones más beligerantes, sin embargo sí que muchas veces 
                se ve obligada a cruzar estrechos o pasos que pueden pertenecer a otros estados. En esas situaciones, normalmente la ciudad y 
                sus diferentes concejos envían emisarios y embajadores a negociar el paso seguro de la ciudad a través del territorio en cuestión.
                </p>

                <h3>Lugares importantes</h3>

                <p >
                <b>La Cúpula:</b> originalmente conocida como Plaza del Mercado de Puerto Libre es una de las plazas más grandes de Îldanneth. 
                Situada exactamente en el centro de la ciudad y con forma circular, se ve rodeada por edificios por todo su perímetro, 
                sólo interrumpidos por pequeñas callejuelas de acceso o grandes avenidas navegables. Las construcciones de madera e 
                incluso de piedra que la rodean han ido creciendo con el paso de las décadas hasta cerrarle casi por completo el acceso 
                a la luz natural, creando una forma semiesférica que cubre la plaza, a excepción del centro de la misma, dominado por 
                una gargantuesca estatua de oro puro en forma de antorcha que indica cual faro la situación de la ciudad desde la lejanía 
                mediante una intensa luz mágica que brota de su cúspide, atravesando la cúpula por su única parte abierta.
                <br/><br/>
                En La Cúpula se pueden encontrar los mejores y más variados productos de todo Îldanneth, objetos mágicos o divinos de 
                cualquier índole y algunas de las mejores compañías del orbe. Es el centro económico de Puerto Libre.
                <br/><br/>
                <b>Muelles:</b> los muelles de atraque rodean la ciudad por todos sus extremos, salvo en las bocas de las 
                cuatro grandes avenidas navegables que la cruzan. Están divididos según su propiedad, siendo los más grandes 
                e icónicos los muelles del extremo septentrional, conocidos como Puertomármol, decorados con grandes estatuas de 
                mármol y oro, aunque su acceso está restringido a los barcos de la compañía mercante de la Flor Dorada.
                <br/><br/>
                <b>Barrio de las Letras:</b> es el conjunto de calles, zonas y edificios donde la mayoría de bibliotecas, 
                juzgados, colegios y universidades se encuentran. Los espacios tienden a ser más abiertos y dejan entrar mucha 
                más luz. Es una de las zonas más seguras y con más presencia de cuerpos de seguridad. Aquí se encuentran el 
                juzgado de la Unión de Consorcios Libres, el más grande de la ciudad, y el Instituto Tecnológico de Îldanneth, entre otros.
                <br/><br/>
                <b>Sala de Máquinas:</b> a pesar de llamarse sala podría ser una ciudad en sí misma. Poblada mayoritariamente 
                por enanos, medianos y gnomos, aunque también por orcos, semiorcos, kobolds y goblins. Es la zona menos segura 
                de la ciudad, aunque también es uno de los sectores donde más dinero ganan los trabajadores. Las durísimas 
                condiciones de mantenimiento de los distintos motores, de las salas de extracción de combustible negro, los 
                constantes accidentes e incendios, inundaciones -ya que se encuentra en su mayor parte por debajo del nivel del 
                mar- y exigencia de conocimientos técnicos o poco aprecio por la vida de uno mismo son el motivo por el cual a 
                veces cuesta encontrar nuevos empleados.
                </p>

                <h3>Historia de la región</h3>

                <p >
                La ciudad debe su fundación a diversos grupos de contrabandistas, marineros sin bandera y exiliados 
                de diversos reinos que iban encontrándose en alta mar y juntaban sus embarcaciones para darse soporte 
                y ayuda los unos a los otros. Con el paso del tiempo fue tal la cantidad de embarcaciones que se encontraban 
                y se juntaban que siempre había estructuras previas a donde acoplarse. En muy pocas décadas la ciudad pasó 
                de ser un punto de reunión formado por barcos a convertirse en un auténtico puerto flotante donde ya se 
                encontraban pequeñas industrias y diversos gremios ofrecían sus productos y servicios a los barcos que 
                constantemente atracaban en sus lindes. La ciudad nunca llegó a desarrollar un gobierno, ya que la volatilidad 
                de las gentes que la habitaban no lo favorecía.
                <br/><br/>
                Cada cultura, raza y religión que pasaba por la ciudad dejaba su impronta. Muchas de las gentes contribuían 
                a la construcción de nuevos sectores a cambio de poder tener hueco donde construirse una vivienda o un lugar 
                para ejercer su profesión. Surgieron grandes terratenientes que alquilaban espacios en sus estructuras mientras 
                que los más modestos se juntaban en sindicatos o cooperativas para poder seguir ejerciendo poder de decisión cuando 
                los habitantes con propiedad en la ciudad debatían sobre las mejores maneras de construir un alcantarillado, un sistema 
                antiincendios o la gestión de zonas comunes. Pronto surgirían todo tipo de empresas privadas destinadas a ofrecer 
                servicios jurídicos o de protección, aseguradoras y médicos.
                <br/><br/>
                Cuando Puerto Libre creció tanto que moverla fue imposible, dejándola a merced de ataques de potencias celosas de sus 
                riquezas, los ingenieros enanos llegados desde las montañas de Ferethion y Trestanna idearon grandes motores de vapor 
                capaces de generar tanta potencia como para impulsar la ciudad y dirigirla. Puerto Libre se convertía así en la primera 
                y única ciudad móvil de Îldanneth.
                <br/><br/>
                A día de hoy, la ciudad es famosa no sólo por ser segura y pacífica, sino también por su defensa de las libertades 
                de todas las criaturas que en ella habitan, de las grandes fortunas que residen en ella y por su poderosa industria 
                mágica y naval. Su arquitectura no deja a nadie indiferente; ya le pueda parecer grotesca y excesiva o auténticas 
                obras de arte de la ingeniería; sus altísimos edificios, cúpulas, parques  elevados y titánicas chimeneas que ensucian 
                el aire lejos de la población son sin duda únicas en Îldanneth. 
                </p>
                <h3>Grupos, bandas y organizaciones relevantes</h3>
                <p >
                <b>Flor Dorada:</b> la compañía mercante más poderosa de la ciudad. Sus servicios no abarcan sólo el transporte de 
                mercancías, sino que incluso ofrecen servicios de escolta para personas o barcos, servicios bancarios o servicios 
                de explotación minera en las costas.
                <br/><br/>
                El dueño y director de la compañía es un inteligente y perspicaz anciano goblin originario de las tierras 
                rocosas de la frontera entre Rottgarth y los Reinos Rotos llamado <b>Uliozz Flor de Oro</b>. Fue el fundador 
                de la compañía hace ya más de 30 años. Comenzó con un modesto barquito a vela y remos haciendo pequeños 
                encargos y consiguió erigir un imperio comercial él solo. Ahora disfruta de infinidad de riquezas que gasta 
                mayormente en conseguir libros extraños y objetos arqueológicos de gran interés histórico.
                <br/><br/>
                <b>Unión de Consorcios Libres:</b> la unión de empresas y emprendedores más importante de la ciudad. 
                Contratan a aventureros para cumplir pedidos, gestionan sectores de la ciudad, dirigen compañías de 
                seguros o de leyes y son los principales arrendadores y promotores de Puertos Libres. Está formada por 
                infinidad de empresas de todos los tamaños e ingresos. La mayoría de los pequeños comerciantes y artesanos 
                se encuentran entre sus filas, así como algunas de las compañías más potentes. Cada miembro del consorcio 
                tiene un voto único a la hora de tomar las decisiones, sin importar el poderío económico del mismo.
                <br/><br/>
                <b>Junta del Área Central:</b> uno de los grupos más selectos de la Ciudad Flotante. Sus miembros 
                son algunos de los terratenientes más importantes, representantes de compañías, jueces del Sindicato 
                de Justicia, representantes elegidos por los habitantes de diversos sectores y barrios y algunos 
                consejeros elegidos por la propia junta. Gestiona el desarrollo urbanístico y las zonas comunes en el área central de la ciudad.
                <br/><br/>
                Estas Juntas o Cabildos son organizaciones que surgieron por toda la ciudad con la intención de 
                coordinar esfuerzos en materia de gestión de elementos comunes o planificación urbanística en 
                las propiedades cuyos dueños son miembros. Hay diversas Juntas en Puertos Libres, algunas de 
                ellas gestionando las mismas zonas que otras Juntas o Cabildos también gestionan. Estas organizaciones 
                voluntarias son lo más parecido a un gobierno en la Ciudad Flotante.
                <br/><br/>
                <b>Compañía de seguridad Leones de Bronce:</b> son muchas las compañías de seguridad que ejercen por 
                los barrios de Puerto Libre, pero Leones de Bronce es la más grande de todas. En los últimos meses se 
                han vertido acusaciones de corrupción contra la compañía que ha causado el cese de contratos importantes 
                en ciertas áreas de la ciudad. La cúpula organizativa está tratando de limpiar su nombre realizando 
                investigaciones a todos los niveles siguiendo las pistas dejadas por las acusaciones.
                <br/><br/>
                A pesar de su reciente pérdida de presencia, Leones de Bronce sigue siendo la empresa de seguridad 
                más poderosa de la Ciudad Flotante, hasta el punto de que ha llegado a ser contratada como ejército 
                de la ciudad en alguna ocasión donde la ciudad ha necesitado defenderse de ataques realizados por alguna nación celosa.
                </p>
                <h3>Vida y sociedad</h3>
                <p >
                <b>Lenguas:</b>  no existe una lengua institucional en Puertos Libres, sin embargo la mayormente usada es la lengua común. 
                Es habitual que los servicios prestados en la ciudad sean principalmente en común, aunque casi todos estos servicios sean 
                ofrecidos también en otras lenguas, dependiendo de la zona de la ciudad o del sector de la empresa o gremio que ofrezca el 
                servicio. Por ejemplo, la lengua más usada en la Sala de Máquinas es el enano, mientras que en la superficie es el común 
                salvo en ciertas zonas de la ciudad, donde se hablan lenguas del Nuevo Mundo, entre otras.
                <br/><br/>
                <b>Usos y costumbres:</b> a diferencia de otras naciones de Îldanneth, en la Ciudad Flotante no existen gobiernos, 
                familias reales ni personas por encima de otras a nivel legislativo, por muy acaudaladas o poderosas que sean. 
                Ésto se traduce en un comportamiento insumiso entre la población, que reacciona de manera decidida cuando sus libertades 
                son atacadas. Generalmente las medidas punitivas llevadas a cabo son populares, consistiendo en aislar social y 
                económicamente a aquellas personas o empresas que han cometido delitos probados por los sistemas de justicia privados y 
                se niegan a cumplir las condenas. Aunque suene extraño, el sistema lleva funcionando décadas sin sufrir conflictos mayores 
                y se ha convertido en uno de los más eficientes del mundo. Sin embargo, muy de vez en cuando una sentencia puede ser 
                ejecutada contra alguien tan poderoso que consigue no sólo no cumplirla, sino salir relativamente indemne de ella. En esas 
                situaciones generalmente acaba recurriéndose a la fuerza, expropiando al convicto y utilizando sus bienes para indemnizar a los damnificados.
                <br/><br/>
                Podría considerarse una utopía libertaria, con lo que ello conlleva: la mayoría de relaciones laborales acaban requiriendo antes o 
                después plasmar las condiciones en un contrato. Para los extranjeros puede ser apabullante encontrarse de golpe en una sociedad 
                donde no hay leyes que rijan las relaciones y donde cada condición deba quedar plasmada y acordada con anterioridad, por eso 
                uno de los primeros consejos que los habitantes dan a aquellas personas que quieren comenzar una vida en Puertos Libres es el 
                de buscarse un gestor que se encargue de evitar que se abuse de ellos.
                <br/><br/>
                <b>Fiestas:</b> las fiestas, costumbres y celebraciones, así como calendarios y religiones son herencias 
                de las culturas que habitan la ciudad; por lo tanto no existe ninguna propia de Puerto Libre, aunque 
                con el paso de los años algunas hayan cambiado tanto que resultarían extrañas si se compararan con las originales.
                <br/><br/>
                <b>Curiosidades:</b> al ser el principal exportador de objetos mágicos junto con el Cónclave del Magisterium, 
                es frecuente encontrarse por las tiendas herramientas o armas con poderes arcanos. La magia forma parte del día a 
                día, pero no sólo eso, sino que al no existir prejuicios a nivel social como tal contra terceras culturas, en diversos 
                sectores de la ciudad pueden encontrarse paseando por la calle las más bizarras y variadas criaturas, incluyendo seres extraplanares.
                <br/><br/>
                La cantidad de armas de fuego también es sensiblemente superior a la media de Îldanneth. Siguen siendo escasas y caras, pero 
                en la Ciudad Flotante, como principal exportadora de armas de fuego y pólvora, son mucho más asequibles que en otros países, 
                lo que permite ver gente de todos los poderes adquisitivos yendo por las calles poco menos que exhibiendo sus pistolas de protección personal.
                </p>
                <h3>Rasgos opcionales</h3>
                <p >
                <b>Multicultural:</b> estás acostumbrado a ver gentes diferentes y maneras poco comunes de pensar, es difícil sorprenderte o impresionarte.
                <br/><br/>
                Si tu trasfondo te sitúa criado o acostumbrado a la vida en la Ciudad Flotante de Puertos Libres y eres de alineamiento C/B 
                (caótico bueno), obtienes un <b>+1 a tu bonificador de sabiduría</b>.
                <br/><br/>
                <b>Libremercadista:</b> has tenido que pelear siempre por conseguir los mejores contratos, servicios y trabajos. Eres un maestro del regateo.
                <br/><br/>
                Si tu trasfondo te ha permitido vivir de forma independiente en Puerto Libre o has sido miembro de su tejido económico, 
                <b>tienes ventaja de manera natural en todas las tiradas para determinar precios de venta o compra o negociar condiciones de un servicio o contrato</b>.
                <br/><br/>
                </p>
            </div>
        </React.Fragment>
    )
}
