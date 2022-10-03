import { Button, Container, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles,Grid, TextField } from '@material-ui/core'  
// import img from '../../assets/images/d.jpg'
// import img from '../../assets/images/download.jpg' 
// import img from '../../assets/images/house.jpg' 
import img from '../../assets/images/j.jpg' 
// import { createTheme } from '@material-ui/core'
// const theme = createTheme();
// console.log(theme.Typography.h6)

const useStyles = makeStyles({
    root:{
        backgroundImage:`url(${img})`, 
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat', 
        height:'450px',
    },
    grid:{
        background:'rgba(0,0,0,0.55)',//3
        width:'100%',
        height:'100%'
    },
    gridItem:{
        marginTop:'100px',//'50px', 
        color:'#eeeeff',
        fontWeight:'small'  
    },
    btn:{
        borderRadius:'30px',
        fontSize:'15px',
        width:'100%',
        marginTop:'22px',
        // textTransform:'capitalize',
        fontFamily: 'sans-serif'
    },
    input:{ 
        maxWidth: '100%',
        maxHeight: '50px',
        // marginBottom:'9px',  
        background:"",
        // border:'1px solid black'
        // border:'1px solid green',borderRadius:'4px'
    },


})




export default function Header() {
    const classes= useStyles()
  return (
    <Paper  square elevation={0}  className={classes.root}>
        {/* <img src='assets/images/d.jpg' width={'50'} style={{width:'100%'}}/> */}
        <Grid container  className={classes.grid}>
        {/* <Grid container direction='column' justifyContent='center'alignItems='center'alignContent='center'> */}
            <Grid item sm={2}>
                
            </Grid>
            <Grid item  sm={5} className={classes.gridItem} style={{fontFamily:'segoe ui',fontWeight:'bold'}}>
                <Typography variant='h6' style={{fontSize:'15px'}}>Partner with Us</Typography>
                <Typography variant='h4'> <strong>Today  </strong> <br/>Fullfil <strong>Your</strong> property needs<br/> with <strong>Korri</strong></Typography>
                <Typography variant='h4'style={{fontSize:'12px'}}>With Korri . We've got you Covered</Typography>
                <div style={{marginTop:'25px'}}>
                    <Button color='primary' variant='contained'>JOIN TODAY</Button>
                </div>
            </Grid>
            <Grid item  sm={3} className={classes.gridItem} style={{height:'',marginLeft:''}}>
                <Paper  style={{maxHeight:'320px',maxWidth:'300px',overflow:'hidden'}} > 
                    <Container  style={{marginTop:'15px',marginBottom:'15px'}}>
                        <div  style={{maxHeight:'203', background:' '}}>
                               <Typography variant='body2'><strong>Contact us</strong></Typography> 
                               <Typography variant='caption'><strong>We'd like to hear from you</strong></Typography> 
                               <div className={classes.input}><TextField fullWidth label="Name" /></div> 
                               <div className={classes.input}><TextField fullWidth label="Email" /></div> 
                               <div className={classes.input}><TextField fullWidth label="Password" style={{}}/></div> 
                               <div className={classes.input}><TextField fullWidth label="Confirm Password" style={{}}/></div>    
                        </div>
                        <div  style={{maxHeight:'87', background:' '}}>
                               <Button className={classes.btn} color='secondary' variant='contained'>Send</Button>
                        </div>
                    </Container>
                </Paper>
            </Grid>
            <Grid item sm={2}>
                
            </Grid>
        </Grid>
    </Paper>
  )
}
