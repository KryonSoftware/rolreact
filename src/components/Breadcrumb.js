import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="contrastText">Breadcrumb</Typography>
    </Breadcrumbs>
  );
   /*  if(props.numero === "1") {
        return (
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Material-UI
              </Link>
              <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Core
              </Link>
              <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
          );
    }
    else {
        return (
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Îldanneth
              </Link>
              <Typography color="textPrimary">Índice</Typography>
            </Breadcrumbs>
          );
    } */
}