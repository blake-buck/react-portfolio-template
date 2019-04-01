import React, { Component } from 'react';

import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


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
    );
  }
}

export default withStyles(styles)(App);
