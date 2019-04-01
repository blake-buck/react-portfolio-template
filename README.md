## react-portfolio-template

This is a basic portfolio site created with React and MaterialUI that is designed to be readable, professional, and
mobile responsive. 

### Example Screenshots

### Installation

Fork and clone this repository<br>
Cd into the project directory
Run NPM install<br>
Run NPM start
Begin making modifications<br>

### Setup

#### App

Change the typography component in Appbar to your name

#### About Component

Img -- change the image property in state to whatever picture of yourself you'd like

#### ActionButtons/ActionButton Components

isLink<br>
if true, opens a new tab with the provided link prop
if false, copies the link prop to the users clipboard, with a message notifying them <br>

src -- provides the img for the icon button 

link is either the url to where you're trying to direct the user or text you want to copy<br>

The default buttons are for GitHub, LinkedIn, and email, but they could be for anything



#### AboutCard

The image prop should be the same image as the one in state. This is for mobile responsiveness purposes,
below a certain screen width and the image appears inside the card instead of beside it.<br>

Inside the AboutCard component you can change the body of the card content.

#### Projects

iconSrc -- a simple icon to identify your project, ideally a logo or .ico file you used for your website<br>
title -- the title of your project
subtitle -- summarize your project in a few words<br>
cardText -- describe your project more in more detail using a few sentences
cardImage -- add a screenshot or image related to your project here. Note: this should be a different photo from your iconSrc<br>
githubLink -- link to the repository of your project
hostedLink -- link to your hosted project if applicable<br>
isHosted -- if false, it disables the 'View Hosted Example' button

#### Changing/Removing the page transitions

To remove, simply delete the Slide component from the Projects and About component<br>
To modify/replace, take a look at https://material-ui.com/utils/transitions/

To change the dialog opening/closing animation modify the TransitionComponent prop in Project.js

### Deployment

Deployment guide from create-react-app: https://facebook.github.io/create-react-app/docs/deployment<br>

Deploy with Digital Ocean(useful if you've added a back-end): https://github.com/devmountain/Hosting-Digital-Ocean

## Special thanks to..

create-react-app : https://github.com/facebook/create-react-app<br>
@material-ui : https://github.com/mui-org/material-ui
react-copy-to-clipboard : https://github.com/nkbt/react-copy-to-clipboard
