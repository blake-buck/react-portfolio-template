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
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary:{
      
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      
    }
  }
})

const styles = (theme) => ({
  
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
        <AppBar position='static'>

          <Typography component='h4' variant='h4' color='inherit' align='center'>Sheev Palpatine</Typography>
          <Tabs  
            value={tabValue} 
            onChange={(e, tabValue)=>this.handleChange(e, tabValue)}
            centered={true}
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
