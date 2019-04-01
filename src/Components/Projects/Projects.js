import React,{Component} from 'react';
import Project from './Project/Project';

//@material-ui/core
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import Slide from '@material-ui/core/Slide';

class Projects extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <Slide direction='left' in={true}>
            <List>
            <Grid container justify='center'>
                <Project
                    iconSrc='https://cdn2.iconfinder.com/data/icons/star-wars-5/24/Darth-Vader-512.png'
                    title='Darth Vader'
                    subtitle='My greatest apprentice'
                    cardText='Aliquam mattis neque sed mattis bibendum. Suspendisse elit nulla, tempus ut tempus id, vulputate vel mauris. Etiam ac est lorem. Nulla luctus neque et eros gravida, a fermentum lacus eleifend. '
                    cardImage='http://assets2.ignimgs.com/2015/08/06/darth-vader-crossed-arms-1280jpg-88461e1280wjpg-67c0c2_1280w.jpg'
                    githubLink='https://github.com/'
                    hostedLink=''
                    isHosted={false}
                />

                <Project
                    iconSrc='http://img3.wikia.nocookie.net/__cb20130925164228/disney/images/4/46/Galactic_Empire_emblem.svg.png'
                    title='First Galactic Empire'
                    subtitle="My life's work"
                    cardText='Etiam lobortis, nulla nec dignissim auctor, dolor orci pharetra tellus, ultrices finibus odio lectus ac libero. Nam imperdiet sed dui vitae condimentum. Proin tempus metus et ex malesuada, ac sollicitudin nisi dignissim.'
                    cardImage='http://3.bp.blogspot.com/-ZWcv-KHlfVM/VnbjHTls3JI/AAAAAAAAcE8/OPdNS2rzXhY/s1600/Palpatine%2BEmperor.jpg'
                    githubLink='https://github.com/'
                    hostedLink=''
                    isHosted={false}
                />

                <Project
                    iconSrc='https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-2/48/v-35-128.png'
                    title='Unlimited power'
                    subtitle='My best moment'
                    cardText='Nam nibh metus, semper in orci et, feugiat hendrerit massa. Suspendisse faucibus porta sodales. Sed viverra nulla dolor, dapibus feugiat elit finibus et. Curabitur euismod rutrum faucibus. '
                    cardImage='https://i.ytimg.com/vi/DGJSq7Mp92A/maxresdefault.jpg'
                    githubLink='https://github.com/'
                    hostedLink='https://www.youtube.com/watch?v=Q_7KaMDHoGs'
                    isHosted={true}
                />
            </Grid>
            </List>
            </Slide>
        )
    }
}

export default Projects;