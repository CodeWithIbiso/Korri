import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography} from '@material-ui/core'
import { makeStyles,Button } from '@material-ui/core' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google'; 

import TextField from '@mui/material/TextField';
import { LockOutlined } from '@material-ui/icons' 


const useStyles = makeStyles({
    main:{
        // marginTop:'25px',
        background:'white',
        minHeight:'100vh',
        padding:'0px',
        minWidth:'100%',
        // paddingBottom:80
    }, 
    leftItem:{
        // background:'rgba(0,0,0,0.25)',
        minHeight:'100vh',
        padding:'0px',
        // margin:0
        // background:'green'
    },
    rightItem:{
        // background:'rgba(0,0,0,0.25)',
        minHeight:'100vh',
        display:'flex',
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        paddingTop:'80px',
        paddingBottom:'80px'
    },
    grid:{ 
        // background:'#eeeeee',
    },
    griditems:{ 
        display:'flex',
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        paddingBottom:'10px'
    }, 
    icons:{
        padding:'4px',
        marginLeft:'10px'
    },
    input:{
        width: 500,
        maxWidth: '70%',
        maxHeight: '700px',
        marginBottom:'9px', 
        background:"",
        // border:'1px solid black'
        // border:'1px solid green',borderRadius:'4px'
    },
    btn:{
        borderRadius:'30px',
        fontSize:'15px',
        width:'215px',
        marginTop:'34px',
        // textTransform:'capitalize',
        fontFamily: 'sans-serif'
    },
    link:{
        textDecoration:'none',
        color:'black',
        fontFamily: 'Segoe UI',
        fontWeight:'bold',
        padding:'12px'
    },
    arrange:{
        background:'rgba(0,0,0,0.5)',
        minHeight:'100%',
        // paddingBottom:80
        minHeight:'100vh',
        padding:'0px',
    }
})
export default function Original({formData,handleChange,setSigning,signing,handleSubmit}) {
    const classes = useStyles()
  return (
    <form className={classes.griditems} onSubmit={handleSubmit}>
                                <div><Typography variant='h4' style={{
                                //    'Segoe UI'   '  sans-serif'
                                   fontFamily: 'Segoe UI',color:'',fontWeight:'bold',padding:'12px'}}>{signing === true ?  'Create Account':'Login'}</Typography></div>
                               <div  className={classes.icon} >
                                   <FacebookOutlinedIcon   className={classes.icons}/>
                                   <InstagramIcon  className={classes.icons}/>
                                   <LinkedInIcon  className={classes.icons}/>
                                   <GoogleIcon  className={classes.icons}/>
                                </div>
                                <div>
                                 {signing === true &&<Typography onClick={()=>setSigning(!signing)} variant='body2'>Already have an account ? <strong>Login</strong></Typography>} 
                                 {signing === false &&<Typography onClick={()=>setSigning(!signing)} variant='body2'>Create new account ? <strong>Sign up</strong></Typography>}
                                 </div>
                                
                               {signing === true ?  
                                <>
                               <div   className={classes.input} style={{marginTop:'15px'}}><TextField  name='firstName' onChange={handleChange}  fullWidth label="First Name" value={formData.firstName} /></div> 
                               <div   className={classes.input}><TextField  name='lastName' onChange={handleChange}  fullWidth label="Last Name" value={formData.lastName} /></div> 
                               <div   className={classes.input}><TextField name='email' onChange={handleChange} fullWidth label="Email"  value={formData.email} type='email'/></div> 
                               <div   className={classes.input}><TextField name='password' onChange={handleChange} fullWidth label="Password"  value={formData.password} type='password'/></div> 
                               <div   className={classes.input}><TextField name='confirmPassword' onChange={handleChange} fullWidth label="Confirm Password" value={formData.confirmPassword} style={{}}/></div> 
                               <Button className={classes.btn} style={{paddingBottom:0,marginBottom:0}} color='primary' variant='contained' type='submit'>Sign Up</Button>
                               </ >
                               :
                                <>
                                <div className={classes.input} style={{marginTop:'45px'}}><TextField  name='email' onChange={handleChange} fullWidth label="Email"  value={formData.email}/></div> 
                               <div className={classes.input}><TextField name='password' onChange={handleChange} fullWidth label="Password"  value={formData.password}/></div> 
                               <Button className={classes.btn} color='secondary' variant='contained' type='submit'>Sign In</Button>
                          
                                </>
                               }
                               
                                {/* <Button className={classes.btn} color='secondary' variant='contained' onClick={handleLogOut}>Logout</Button> */}

                            </form>
  )
}
