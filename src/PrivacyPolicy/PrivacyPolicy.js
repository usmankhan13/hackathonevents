import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hacker from '../img/lock.png'
import Navbar from '../LandingPage/navbar'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
      },
  
    paper: {
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
      paddingTop:'1%',
    textAlign:'center',
    width: '100%' ,
    height: '100%',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
 <div><Navbar/></div> 
 {/* Heading */}   
<React.Fragment >
<CssBaseline />
<Container   maxWidth="sm" >
 <Typography variant="h2" component="div" style={{textAlign:'center'}}><br/><br/> Privacy Privacy </ Typography>
</Container>
</React.Fragment>


 <div className={classes.root}>
    <Grid container>
        <Grid item xs={12} lg={6} style={{paddingLeft:'12%',paddingBottom:"2%"}}>
        <br/>  <br/>  <br/>  <br/> <br/>  <br/>  
        <Typography variant="h4" component="div"> My Privacy Policy </ Typography>
        <Typography  variant="p" component="div" style={{lineHeight:'2'}}  > 
        <br/>
        1. In our modern age of individualism and progress, we tend to want to do 
        <br/>
        2. everything ourselves. People often toss out old ideas, saying that they
        <br/>
        3. no longer apply to our modern world. As developers, we are often charged 
        <br/>
        4. with blowing away the past and building the future.While it’s often 
        <br/>
        5. positive to move away from the past, we may also accidentally throw out 
        <br/>
        6. that may help us in our quest to be better people. The deeper questions
        <br/>
        7. Sometimes, instead of using introspection to find meaning, we can look
        <br/>
        8. to these previous thinkers and take meaning from their works. If 
        <br/>
        9. introspection isn’t your thing, look to your bookshelf for advice.
        </ Typography>
        </Grid>
        <Grid container item   justify="center" alignItems="center" xs={12} lg={6}  >
         
         <img   src={Hacker} style={{width:'35%',paddingTop:'5%'}}  alt="Privacy" />
     </Grid>
        
    </Grid>
    </div>
    </div>
  );
}