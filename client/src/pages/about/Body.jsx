import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'
import {makeStyles , Container } from '@material-ui/core';
import Sidebar from './Sidebar'; 
import Abouts from './Abouts'; 


const useStyles = makeStyles({
      container:{
          paddingTop:'10px',
          fontWeight:'450',
          fontSize:'15px',
          textTransform:' ',
          fontFamily: ' BlinkMacSystemFont', 
          paddingBottom:'55px'
        }  ,
        heading:{
            paddingTop:'30px'
        },
        bottomText:{ 
            padding:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'right',
            alignItems:'right',
        },
        font:{
            fontFamily: ' BlinkMacSystemFont',  
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',

        } ,
        font2:{
            fontFamily: ' BlinkMacSystemFont',  
            padding:'0px',
            margin:'0px', 
            fontFamily: 'Segoe UI',
            color:'',
            fontWeight:'bold', 
            paddingBottom:'25px'
        },
        font3:{
            fontFamily: ' BlinkMacSystemFont',  
            padding:'0px',
            margin:'0px',
            paddingLeft:'24px',
        },
        paper:{
            padding:'25px',
            marginBottom:'15px',
            lineHeight:'25px',
            fontFamily: 'Segoe UI',
            fontSize:'13px'
        }


})

export default function Body() {
    const classes  = useStyles()
  return (
    <Container  maxWidth='lg'>
        
        <Grid container className={classes.container}> 
            <Grid item sm={9} className={classes.row}>
                 <Paper className={classes.paper}>
                     <Typography variant='h6'  className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>ABOUT US</Typography>
                     <Abouts/>
                 </Paper>  
                 <Paper className={classes.paper}>
                     <Typography variant='h6'  className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>FAQs</Typography>
                     <Abouts/>
                 </Paper>
            </Grid>
            {/* <Grid item sm={3} className={classes.row}>
                <Typography  className={classes.font3}>SIDE MENU</Typography>
                <Sidebar  classes={classes}/>
            </Grid> */}
        </Grid>
    </Container>
  )
}
