import React,{Component} from 'react';

//@material-ui imports
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Grow from '@material-ui/core/Grow';

import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    listItem:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            width:'100vw'
        }
    },
    cardImage:{
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    dialogTitle:{
        display:'flex',
        alignItems:'center',
    },
    dialogContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    closeIcon:{
        width:32,
        height:32
    },
    avatar:{
        width:72,
        height:72
    },


    card:{
        maxWidth:450,
        padding:10,
        margin:16,
        height:'100%'
    },
    gridItem:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    }
})

class Project extends Component{

    constructor(props){
        super(props);
        this.state={
            isDialogOpen:false
        }
    }

    toggleDialog(){
        const {isDialogOpen} = this.state;
        this.setState({isDialogOpen:!isDialogOpen})
    }

    render(){
        const {title, iconSrc, cardText, cardImage, subtitle, classes, isHosted, githubLink, hostedLink} = this.props;
        const {isDialogOpen} = this.state;
        return(
            <div>
            <ListItem className={classes.listItem} button divider onClick={()=>this.toggleDialog()}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar} src={iconSrc}>{title.charAt(0)}</Avatar>
                </ListItemAvatar>

                <ListItemText 
                primaryTypographyProps={{component:'h5', variant:'h5'}}
                secondary={subtitle}
                >
                    {title}
                </ListItemText>
                
                <Dialog open={isDialogOpen} TransitionComponent={Grow}  fullScreen>

                    <DialogTitle className={classes.dialogTitle} disableTypography={true}>
                        <IconButton>
                            <CloseIcon className={classes.closeIcon} />
                        </IconButton> 
                        <Typography component='h5' variant='h5'>
                            Project Details
                        </Typography>
                    </DialogTitle>

                    <Divider />

                    <DialogContent className={classes.dialogContent}>
                        <div>
                            <img className={classes.cardImage} src={cardImage} />
                            <Typography component='h4' variant='h4'>{title}</Typography>
                            <Typography variant='subtitle2'>{cardText}</Typography>
                        </div>
                        <div>
                            <Button fullWidth variant='outlined' component='a' href={githubLink} target='blank'>
                                View GitHub Repository
                            </Button>
                            <Button fullWidth variant='outlined' component='a' href={hostedLink} target='blank' disabled={!isHosted}>
                                View Hosted Example
                            </Button>
                        </div> 
                    </DialogContent>
                </Dialog>

            </ListItem>

            
                <Grid className={classes.gridItem} item xs={12} style={{height:'95%'}}>

                    <Card className={classes.card}>

                        <CardHeader 
                            avatar={<Avatar src={iconSrc}></Avatar>}
                            title={title} 
                            subheader={subtitle}
                            titleTypographyProps={{component:'h4', variant:'h4', align:'left'}} 
                        />   

                        <CardMedia 
                            className={classes.cardImage}
                            image={cardImage} 
                            component='img' 
                        />

                        <CardContent>
                            {cardText}
                        </CardContent>

                        <CardActions>
                            <Button fullWidth variant='outlined' component='a' href={githubLink} target='blank'>
                                View GitHub Repository
                            </Button>
                            <Button fullWidth variant='outlined' component='a' href={hostedLink} target='blank' disabled={!isHosted}>
                                View Hosted Example
                            </Button>
                        </CardActions>

                    </Card>

                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Project);