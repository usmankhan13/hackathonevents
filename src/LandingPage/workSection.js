import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import workingimg from '../img/workWork.png'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
      },
  
    paper: {
    paddingTop: '20%',
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  imgHacker: {
    textAlign: 'center',
    backgroundcolor: 'black',
    width: '100%' ,
    height: '90%',
  },


}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>

         {/* Heading */}   
    <React.Fragment >
        <CssBaseline />
        <Container   maxWidth="sm" style={{paddingTop:'5%'}}>
          {/* <Typography component="div" style={{ height: '10vh',fontSize:'50px', textAlign:'center', fontFamily:'Courier New' }} > Our Services </ Typography> */}
         <Typography variant="h2" component="div" style={{textAlign:'center'}}><br/><br/> Work </ Typography>
        </Container>
    </React.Fragment>      
   
    {/* Work */}
    <div className={classes.root}>
    <Grid container >
        <Grid  item xs={12} sm={6} >
            <img  className={classes.imgHacker} src={workingimg}   alt="Smiley face" ></img>
        </Grid>
        <Grid item xs={12} sm={6} style={{paddingLeft:'5%',paddingBottom:"5%"}}>
        {/* <Typography variant="h4" component="div"> Work </ Typography> */}
         <Typography variant="p" component="div" style={{paddingTop:'0px'}}  > 
      
        <br/><br/>1.     In our modern age of individualism and progress, we tend to want 
        <br/><br/>2.     to do everything ourselves. People often toss out old ideas, saying 
        <br/><br/>3.     that they no longer apply to our modern world. As developers, we
        <br/><br/>4.     are often charged with blowing away the past and building the
        <br/><br/>5.	    future.While it’s often positive to move away from the past, we 
        <br/><br/>6.     may also accidentally throw out things that may help us in
        <br/><br/>7.     our quest to be better people. The deeper questions of life
        <br/><br/>
        </ Typography>
        </Grid>
    </Grid>
    </div>
    <br/><br/>
    </div>
  );
}