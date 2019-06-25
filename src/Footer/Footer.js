import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../img/logo.JPG';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
   width:'100%',
   height:'20%',
   marginTop:'5%',
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  
  Foooter: {
   
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


 
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    
    <Paper className={classes.paper}>
    <Grid container >
     
    
        <Grid style={{ }} item lg={3} xs={12}>
        <a href="/" ><img  className={classes.hovv} href="https://dmttech.io" src={logo} style={{width:'60%',paddingTop:'5%',paddingBottom:'5%'}}  alt="footer" />
        </a></Grid>
        <Grid style={{ textAlign:'center', paddingTop:'3%', paddingBottom:'2%'}}  item lg={6} xs={12}>
           <Typography>© 2019 - Hackathon Events | Developed by <a href="https://dmttech.io" >DMT Tech-Sol. </a></Typography>
        </Grid>
        <Grid style={{ textAlign:'center', paddingTop:'2%'}}  item lg={3} xs={12}>
        <a href="https://www.facebook.com/" > <img src={'https://img.icons8.com/material/44/000000/facebook.png'}  alt="footer"/></a>
        <a href="https://instagram.com" ><img src={'https://img.icons8.com/material/44/000000/instagram-new.png'}  alt="footer"/></a>
        <a href="https://www.linkedin.com" ><img src={'https://img.icons8.com/material/44/000000/linkedin.png'} alt="footer"/></a>
        <a href="https://twitter.com/" > <img  src={'https://img.icons8.com/material/44/000000/twitter.png'}  alt="footer"/></a>
        </Grid>
    </Grid>
    </Paper>

  );
}