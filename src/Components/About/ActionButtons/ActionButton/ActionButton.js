import React,{Component} from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    imgIcon:{
        width:75,
        height:75,
        borderRadius:'50%',
    }
})

class ActionButton extends Component{
    constructor(props){
        super(props);
        this.state={
            isSnackbarOpen:false
        }
    }

    toggleSnackbar(){
        const {isSnackbarOpen} = this.state;
        this.setState({isSnackbarOpen:!isSnackbarOpen});
    }
    
    render(){
        const {src, link, classes, isLink} = this.props;
        const {isSnackbarOpen} = this.state;
        
        return(
            <div>
            {isLink ? 
            <IconButton component='a' href={link} target='blank'>
                <img src={src} className={classes.imgIcon} />
            </IconButton>
            :
            <CopyToClipboard text={link} onCopy={()=>this.toggleSnackbar()}>
                <IconButton>
                    <img src={src} className={classes.imgIcon} />
                </IconButton>
            </CopyToClipboard>}

            <Snackbar 
            open={isSnackbarOpen} 
            message={<Typography color='inherit'>Email copied to clipboard!</Typography>}
            onClose={()=>this.toggleSnackbar()} 
            autoHideDuration={2000} 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            />
            </div>
        )
    }
}

export default withStyles(styles)(ActionButton);