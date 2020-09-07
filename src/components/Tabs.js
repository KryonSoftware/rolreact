import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import '../styles/Tabs.css';
import Construccion from '../landings/Construccion';
import Home from '../landings/Home';
import Reinos from '../landings/Reinos';
import Religiones from '../landings/Religiones';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0} className="box">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function Tabear() {
  
    const matches = useMediaQuery('(max-width:1080px)');
    if (matches) {
      return <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab label="Inicio" {...a11yProps(0)} />
      <Tab label="Reinos" {...a11yProps(1)} />
      <Tab label="Religiones" {...a11yProps(2)} />
      <Tab label="Cronología" {...a11yProps(3)} />
      <Tab label="Mapas" {...a11yProps(4)} />
      <Tab label="Campañas y Aventuras" {...a11yProps(5)} />
    </Tabs>
    } else {
      return <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            aria-label="scrollable auto tabs example"
            centered
          >
            <Tab label="Inicio" {...a11yProps(0)} />
            <Tab label="Reinos" {...a11yProps(1)} />
            <Tab label="Religiones" {...a11yProps(2)} />
            <Tab label="Cronología" {...a11yProps(3)} />
            <Tab label="Mapas" {...a11yProps(4)} />
            <Tab label="Campañas y Aventuras" {...a11yProps(5)} />
          </Tabs>
    }
  }

  return (
    <React.Fragment className={classes.root}>
      <Toolbar id="back-to-top-anchor" className="backtotop"/>
      <AppBar position="sticky" color="primary" className="bar">
      <Tabear value={value}/>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Reinos />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Religiones />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Construccion />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Construccion />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Construccion />
      </TabPanel>
    </React.Fragment>
  );
}