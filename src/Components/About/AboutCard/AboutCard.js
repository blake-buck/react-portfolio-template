import React,{Component} from 'react';

//@material-ui imports 
import {withStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles =(theme) => ({
    card:{
        maxWidth:350,
        padding:10,
        
    },
    cardMedia:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'inline'
        },
        
    }
})

class AboutCard extends Component{
    render(){
        const {classes, image} = this.props;

        return(
            <Card className={classes.card}>
                <CardHeader title='About Me' titleTypographyProps={{component:'h4', variant:'h4', align:'center'}} />
                <CardMedia 
                    className={classes.cardMedia}
                    image={image} 
                    component='img' 
                />
                <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut hendrerit diam risus, eu malesuada magna dapibus eget. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Aenean nec nisi et est sodales tristique ut eget nulla. 
                     Nunc quis justo vel mauris commodo accumsan. Quisque ante quam, 
                     imperdiet varius erat nec, sodales tempus leo. Fusce euismod posuere 
                     sagittis. Aliquam lorem risus, eleifend eget massa vitae, semper 
                     congue nunc. Nunc imperdiet ullamcorper odio, vitae volutpat mauris
                      accumsan sed.
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(AboutCard);