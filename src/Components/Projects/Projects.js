import React,{Component} from 'react';
import Project from './Project/Project';

//@material-ui/core
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import Slide from '@material-ui/core/Slide';

class Projects extends Component{
    
    render(){
        return(
            <Slide direction='left' in={true}>
            <List>
            <Grid container justify='center'>
                <Project
                    iconSrc='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/knight%20head.png?alt=media&token=5f72548b-5657-4f3c-a311-c4fc547b3c7c'
                    title='Long Distance Crits'
                    subtitle='A virtual tabletop application'
                    cardText='Long Distance Crits is a web application that allows a user to play Dungeons & Dragons or any other table-top rpg long distance. Users can draw, upload images to use as tokens, roll virtual dice, and more all in real time. '
                    cardImage='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/Long%20Distance%20Crits%20Canvas.png?alt=media&token=b7dee323-d9cf-4750-a769-58be5d7cf56f'
                    githubLink='https://github.com/blake-buck/long-distance-crits'
                    hostedLink='https://www.longdistancecrits.com/'
                    isHosted={true}
                />

                <Project
                    iconSrc='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/boot-print-hi.png?alt=media&token=f6a44c04-3490-4ada-b446-1f0eede78373'
                    title='Well Tread'
                    subtitle="A web app for tracking outdoor trails"
                    cardText='Well Tread allows a user to search for hiking, mountain biking, and running trails all over the United States. Trails can be favorited and marked complete, and this info will be tracked on the users profile. In addition, it is possible to leave reviews of trails.'
                    cardImage='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/Well%20Tread%20Search%20Page.png?alt=media&token=6caff567-d10e-418a-b1b6-5d85856d9903'
                    githubLink='https://github.com/well-tread/well-tread'
                    hostedLink='https://www.welltread.co/home'
                    isHosted={true}
                />

                <Project
                    iconSrc='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/template1600.png?alt=media&token=a9c60711-911f-45e1-8a3a-0a714a766765'
                    title='react-portfolio-template'
                    subtitle='Framework for this site'
                    cardText='react-portfolio-template is designed to be a simple framework for React developers to build a portfolio site off of. It works both as an out of the box solution or as something to customize.'
                    cardImage='https://firebasestorage.googleapis.com/v0/b/portfolio-site-69f34.appspot.com/o/Template%20About%20Page.png?alt=media&token=af32de3c-129f-4b70-80a5-a8086eb1cad4'
                    githubLink='https://github.com/blake-buck/react-portfolio-template'
                    hostedLink=''
                    isHosted={false}
                />
            </Grid>
            </List>
            </Slide>
        )
    }
}

export default Projects;