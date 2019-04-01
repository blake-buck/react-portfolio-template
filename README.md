## react-portfolio-template

This is a basic portfolio site created with React and MaterialUI that is designed to be readable, professional, and
mobile responsive. 

### Example Screenshots

#### Desktop-View About page
![View of Desktop About page](https://firebasestorage.googleapis.com/v0/b/long-distance-crits.appspot.com/o/displayImages%2FScreenshot_2019-04-01%20Sheev%20Palpatine.png?alt=media&token=249923b5-79c7-4c24-b867-0574b134f85b "View of Desktop About page")

#### Mobile-View About page
![View of Mobile About](https://firebasestorage.googleapis.com/v0/b/long-distance-crits.appspot.com/o/displayImages%2FAbout%20Mobile.png?alt=media&token=5e6bd2f0-c296-4522-b6d3-97e8f1afba5d "View of Mobile About page")

#### Desktop-View Projects page
![View of Desktop Projects](https://firebasestorage.googleapis.com/v0/b/long-distance-crits.appspot.com/o/displayImages%2FProjects%20Desktop.png?alt=media&token=d75c6f3c-5bd9-486d-8605-94f06696ac4d "View of Desktop Projects page")

#### Mobile-View Projects page
![View of Mobile Projects](https://firebasestorage.googleapis.com/v0/b/long-distance-crits.appspot.com/o/displayImages%2FProjects%20Mobile.png?alt=media&token=009b7273-9746-459d-8336-f8ac92846bdb "View of Mobile Projects page")

### Installation

Fork and clone this repository<br>
Cd into the project directory<br>
Run NPM install<br>
Run NPM start<br>
Begin making modifications<br>

### Setup

#### App
To modify the color scheme, change the theme declared in App.js<br>

Change the typography component in Appbar to your name<br>

#### About Component

Img -- change the image property in state to whatever picture of yourself you'd like<br>

#### ActionButtons/ActionButton Components

isLink<br>
if true, opens a new tab with the provided link prop<br>
if false, copies the link prop to the users clipboard, with a message notifying them <br>

src -- provides the img for the icon button <br>

link is either the url to where you're trying to direct the user or text you want to copy<br>

The default buttons are for GitHub, LinkedIn, and email, but they could be for anything<br>



#### AboutCard

The image prop should be the same image as the one in state. This is for mobile responsiveness purposes,
below a certain screen width and the image appears inside the card instead of beside it.<br>

Inside the AboutCard component you can change the body of the card content.<br>

#### Projects

iconSrc -- a simple icon to identify your project, ideally a logo or .ico file you used for your website<br>
title -- the title of your project<br>
subtitle -- summarize your project in a few words<br>
cardText -- describe your project more in more detail using a few sentences<br>
cardImage -- add a screenshot or image related to your project here. Note: this should be a different photo from your iconSrc<br>
githubLink -- link to the repository of your project<br>
hostedLink -- link to your hosted project if applicable<br>
isHosted -- if false, it disables the 'View Hosted Example' button<br>

#### Changing/Removing the page transitions

To remove, simply delete the Slide component from the Projects and About component<br>
To modify/replace, take a look at https://material-ui.com/utils/transitions/ <br>

To change the dialog opening/closing animation modify the TransitionComponent prop in Project.js <br>

### Deployment

Deployment guide from create-react-app: https://facebook.github.io/create-react-app/docs/deployment<br>

Deploy with Digital Ocean(useful if you've added a back-end): https://github.com/devmountain/Hosting-Digital-Ocean <br>

## Special thanks to..

create-react-app : https://github.com/facebook/create-react-app <br>
@material-ui : https://github.com/mui-org/material-ui <br>
react-copy-to-clipboard : https://github.com/nkbt/react-copy-to-clipboard <br>
