import React,{Component} from 'react';

import AboutCard from './AboutCard/AboutCard';
import ActionButtons from './ActionButtons/ActionButtons';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Slide from '@material-ui/core/Slide'


const styles = (theme) => ({
    img:{
        maxWidth:600,
        maxHeight:450,
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
        
    },
    cardAndImage:{
        marginTop:'1em',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
    },
    encompassingDiv:{
        
        paddingTop:'1em',
        height:'90vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
            height:'auto',
            display:'inline',
            
        }
        
    }
    
})

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            image:'https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/IMG_2180.JPG?alt=media&token=e1c42e9c-e0c1-4c9c-be52-fa17ac7ce403'
        }
    }

    render(){
        const {classes} = this.props;
        const {image} = this.state;
        return(
            <Slide direction='right' in={true}>
                <Paper className={classes.encompassingDiv}>

                    <div className={classes.cardAndImage}>
                        <img src={image} className={classes.img} />
                        <AboutCard image={image}/> 
                    </div>

                    <ActionButtons />


                </Paper>
            </Slide>
        )
    }
}

export default withStyles(styles)(About);