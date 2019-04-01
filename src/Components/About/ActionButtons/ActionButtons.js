import React,{Component} from 'react';
import ActionButton from './ActionButton/ActionButton';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles =(theme) => ({
    paper:{
        display:'flex',
        justifyContent:'space-around',
    }
})

class ActionButtons extends Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.paper}>
                <ActionButton 
                    isLink={true}
                    src='https://maxcdn.icons8.com/Share/icon/Logos/github_filled1600.png' 
                    link='https://github.com/'
                />

                <ActionButton
                    isLink={true}
                    src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png'
                    link='https://www.linkedin.com/'
                />

                <ActionButton
                    isLink={false}
                    src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fapplication-icons%2Fcircle-icons-by-martz90%2Fpng%2F256x256%2Fgmail.png&f=1'
                    link='blakemanbuck@gmail.com'
                />
            </div>
        )
    }
}

export default withStyles(styles)(ActionButtons);