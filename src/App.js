import React, { Component } from 'react';

import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

//@material-ui imports
import {withStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette:{
    primary:{
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary:{
      
        light: '#82e9de',
        main: '#4db6ac',
        dark: '#00867d',
        contrastText: '#000',
      
    },
    typography: {
      useNextVariants: true,
    },
  }
})

const styles = (theme) => ({
  typography:{
    padding:10
  }
})

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tabValue:0
    }
  }

  handleChange(e, tabValue){
    this.setState({tabValue})
  }

  render() {
    const {tabValue} = this.state;
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <div>
        <AppBar position='static' >

          <Typography className={classes.typography} component='h4' variant='h4' color='inherit' align='center'>Blake Buck</Typography>
          <Tabs  
            value={tabValue} 
            onChange={(e, tabValue)=>this.handleChange(e, tabValue)}
            centered={true}
            style={{backgroundColor:theme.palette.primary.light}}
          >
            <Tab label='About'/>
            <Tab label='Projects'/>
          </Tabs>

        </AppBar>

        {tabValue === 0 && <About />}
        {tabValue === 1 && <Projects />}
        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
