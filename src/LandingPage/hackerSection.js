import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hacker from '../img/why-hacker.png'

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
    <React.Fragment    >
        <CssBaseline />
        <Container   maxWidth="sm" >
          <Typography component="div" style={{ paddingTop:'15%',height: '10vh',fontSize:'50px', textAlign:'center'}} > Our Services </ Typography>
        </Container>
    </React.Fragment>      
   
<div className={classes.root}>
    <Grid container>
   
        <Grid item xs={12} lg={6} style={{paddingLeft:'5%',paddingBottom:"2%"}}>
        <br/>  <br/>  <br/>  <br/> <br/>  <br/>  
        <Typography variant="h4" component="div"> WHy Hacker ? </ Typography>
        <Typography style={{lineHeight:'35px'}} variant="p" component="div"  > 
        <br/>In our modern age of individualism and progress, we tend to want to do everything ourselves. People often toss out old ideas, saying that they no longer apply to our modern world. As developers, we are often charged with blowing away the past and building the future.While it’s often positive to move away from the past, we may also accidentally throw out things that may help us in our quest to be better people. The deeper questions of life—including purpose—have been explored by others for millennia. Sometimes, instead of using introspection to find meaning, we can look to these previous thinkers and take meaning from their works. If introspection isn’t your thing, look to your bookshelf for advice.
        </ Typography>
            
        </Grid>

        <Grid direction="row"
    justify="center"
    alignItems="center"
  item xs={12} lg={6} >
        <br/>  <br/>  <br/>   
            <img  className={classes.imgHacker} src={Hacker}   alt="Hacker" ></img>
            
        </Grid>
    </Grid>
    </div>

    

    </div>
  );
}