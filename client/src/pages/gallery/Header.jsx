import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles,Grid } from '@material-ui/core'  
// import img from '../assets/images/d.jpg'
import img from '../../assets/images/j.jpg'
// import img from '../assets/images/download.jpg'
import { createTheme } from '@material-ui/core'
const theme = createTheme();
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
    }


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
            <Grid item  sm={10} className={classes.gridItem}>
                <Typography variant='h6' style={{fontSize:'15px'}}>Learn with KORRI</Typography>
                <Typography variant='h4'>Today <strong>Today  </strong>and <br/>Build <strong>Solid</strong> Career<br/> with <strong>Larna</strong></Typography>
                <Typography variant='h4'style={{fontSize:'12px'}}>With Korri . We've got you Covered</Typography>
                <div style={{marginTop:'25px'}}>
                    <Button color='primary' variant='contained'>JOIN TODAY</Button>
                </div>
         </Grid>
        </Grid>
    </Paper>
  )
}
