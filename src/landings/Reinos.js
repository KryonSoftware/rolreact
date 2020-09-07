import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Ashtur from './reinos/Ashtur';
import Eral from './reinos/Tierraseral';
import Plib from './reinos/PuertoLibre';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

const SubAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiAccordionDetails);

export default function Reinos() {

  return (
    <div className="todo">
        <div className="content">
          <h2 className="bienv2">Divisiones políticas y culturales en Îldanneth</h2>
          <Typography>
              El mundo de Îldanneth tiene dos continentes. El más grande se conoce como Viejo Îldanneth y el más pequeño como Nuevo Îldanneth. 
              Ésto es debido a que son los Meridionitas quienes los nombraron, siendo Viejo Îldanneth su continente natal.
              <br/>
              Las regiones polares se conocen como Tierras Indómitas, ya que son los territorios menos explorados. Son las Tierras 
              Indómitas del Pilar de Eral, en el norte, y Tierras Indómitas del Pilar de Khôrn, en el sur. Los nombres se deben a la creencia generalizada 
              de que en ambas zonas se encuentran sendos pilares levantados por dichos dioses, aunque nunca nadie los ha encontrado.
              <br/>
              <br/>
              A continuación tienes toda la información de cada reino y región necesaria para crear aventuras y trasfondo divididas de manera geográfica.
          </Typography>
        </div>
        <div className="content tabbed">
        <Accordion square>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Viejo Îldanneth</Typography>
          </AccordionSummary>
          <SubAccordionDetails>

            <div className="content tabbed">
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Imperio Ashtur</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Ashtur />
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Confederación de Ciudades Libres</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Reino de Ferethion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Trestanna</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Meredion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Nepher Eh Hephetekh</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Tribus Salvajes de las Sabanas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Roth</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>https://sebkay.com/cus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Reinos Rotos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Rottgarth</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Umbria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Cónclave del Magisterium</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Yggdshrunaval</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Diôrbhaïl</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Brysna</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Dara</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Unión Insular de Îbalara</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Eldaria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Puerto Libre</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Plib />
                </AccordionDetails>
              </Accordion>
            </div>

          </SubAccordionDetails>
        </Accordion>
        <Accordion square>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nuevo Îldanneth</Typography>
          </AccordionSummary>
          <SubAccordionDetails>
            
          <div className="content tabbed">
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Amoxochoxtl</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Ashtur />
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Canowicakte</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Sumeen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Blockai</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Nadaj</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Vipona</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Kenisana</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Eldaria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>https://sebkay.com/cus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Tihindet</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Wyspaźcz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Lxiuécatl</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Islas sin Ley</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </SubAccordionDetails>
        </Accordion>
        <Accordion square>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Tierras Indómitas</Typography>
          </AccordionSummary>
          <SubAccordionDetails>

            <div className="content tabbed">
              <Accordion >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Tierras Indómitas del Pilar de Eral</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Eral />
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Tierras Indómitas del Pilar de Khôrn</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </SubAccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}