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
                I am a highly motivated junior web developer that enjoys building web applications that push the limit of 
                my current understanding of programming. I love the challenge of learning something difficult and using that
                 skill in a practical way quickly. I am willing to relocate or work remotely. When I'm not coding, I'm either 
                hiking or playing D&D.
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(AboutCard);