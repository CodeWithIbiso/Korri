import React, { useEffect, useState } from 'react'
import {CircularProgress, Typography} from '@material-ui/core'
import { makeStyles,Button } from '@material-ui/core' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google'; 

import TextField from '@mui/material/TextField';
import { LockOutlined } from '@material-ui/icons' 

import { useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    error:{
        color:'white',
        background:'#5c6bc0',
        padding:'10px',
        paddingLeft:'50px',
        fontFamily:'segoe ui',
        paddingRight:'70px',
        marginTop:'7px',  
        borderRadius:5,
        minHeight:40
    },
    pTag:{
        color:'red',
        fontFamily:'segoe ui',
        padding:0,
        margin:0, 
    },
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
        // display:'flex',
        // flexDirection:'column',

        width: 500,
        maxWidth: '70%',
        maxHeight: '700px',
        marginBottom:'9px', 
        background:"",
        // border:'1px solid black'
        // border:'1px solid green',borderRadius:'4px'
    },
    input2:{
        width: 500,
        maxWidth: '70%',
        maxHeight: '700px',
        marginBottom:'9px', 
        background:"",
        marginRight:5
    },
    input3:{
        width: 500,
        maxWidth: '70%',
        maxHeight: '700px',
        marginBottom:'9px', 
        background:"",
        marginLeft:5
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
export default function Formikk({setSigning,signing,handleSubmit}) {
    const classes = useStyles()
    const  loading =useSelector((state)=>state.loading.isLoading)  
    const  error =useSelector((state)=>state.error.isError)  
    const  invalid =useSelector((state)=>state.error.isExist)  
    
    // const submiting=(values)=>{
    //     handleSubmit(values)
    // }
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            contact:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15,"Must be 15 characters or less").required("Required *"),
            lastName: Yup.string().max(20,"Must be 20 characters or less").required("Required *"),
            contact: Yup.string().max(20,"Must be 20 characters or less").required("Required *"),
            email: Yup.string().email("Invalid email address").required("Required *"),
            password: Yup.string().min(6,"Password must be at least 6 characters").required("Required *"),
            confirmPassword :Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match').required("Required *"),
        }),
        onSubmit:(values)=>{
            // console.log(values) 
            handleSubmit(values)
            formik.resetForm()

        }
    }) 
    // formik 2
    const formik2 = useFormik({
        initialValues:{ 
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required *"),
            password: Yup.string().min(6,"Password must be at least 6 characters").required("Required *"),
            // password: Yup.string().max(50,"Must be 50 characters or less").required("Required *"),
        }),
        onSubmit:(values)=>{
            handleSubmit(values)
            // console.log(values) 
            formik2.resetForm()
        }
    }) 
    const dispatch = useDispatch()
    const handleTouch=()=>{
        setSigning(!signing) 
        formik.resetForm()            
        formik2.resetForm()
        dispatch({type:'REMOVE_ERROR'})

    }
    const location = useLocation()
    useEffect(()=>{
        dispatch({type:'REMOVE_ERROR'})

    },[location])
    // console.log(formik.touched)
    // console.log(formik.errors) 
    // console.log(formik.values)
  return (
                    <div className={classes.griditems} >
                      
                                <div><Typography variant='h4' style={{fontFamily: 'Segoe UI',color:'',fontWeight:'bold',padding:'12px'}}>{signing === true ?  'Create Account':'Login'}</Typography></div>
                                    {/* <div  className={classes.icon} >
                                    <FacebookOutlinedIcon   className={classes.icons}/>
                                    <InstagramIcon  className={classes.icons}/>
                                    <LinkedInIcon  className={classes.icons}/>
                                    <GoogleIcon  className={classes.icons}/>
                                    </div> */}
                                <div> 
                                {signing === true &&<Typography onClick={handleTouch} variant='body2'>Already have an account ? <strong>Login</strong></Typography>} 
                                {signing === false &&<Typography onClick={handleTouch} variant='body2'>Create new account ? <strong>Sign up</strong></Typography>}
                                </div>
                                {error===true && signing === true && <Typography variant='body2' className={classes.error}>User already exists !</Typography>}
                                {error===true && signing === false && invalid===false && <Typography variant='body2' className={classes.error}>User does not exist!</Typography>}
                                {error===true && signing === false && invalid===true && <Typography variant='body2' className={classes.error}>Invalid password!</Typography>}
                                {error===false  && 
                                <div  className={classes.error} style={{background:'transparent'}}>
                                   </div>}
                                
                               {signing === true ?  
                                <form className={classes.griditems}  onSubmit={formik.handleSubmit}>
                                    
                                    <div className={classes.input} style={{marginTop:'10px',display:'flex',flexDirection:'row'}}>
                                    {/* <div className={classes.input} style={{marginTop:'15px',display:'flex',flexDirection:'row'}}> */}
                                    <div className={classes.input2} > 
                                        <TextField  name='firstName' error={ formik.touched.firstName && formik.errors.firstName && 'true'}   fullWidth label="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
                                        {formik.touched.firstName && formik.errors.firstName?<p className={classes.pTag}>{formik.errors.firstName}</p>:null}</div> 
                                    <div className={classes.input3}>
                                        <TextField name='lastName' error={ formik.touched.lastName && formik.errors.lastName && 'true'}  fullWidth label="Last Name"type="text"     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/>
                                        {formik.touched.lastName && formik.errors.lastName?<p className={classes.pTag}>{formik.errors.lastName}</p>:null}</div> 
                                     </div>
                                     <div className={classes.input}>
                                        <TextField name='contact' error={ formik.touched.contact && formik.errors.contact && 'true'}  fullWidth label="contact"type="text"     onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact}/>
                                        {formik.touched.contact && formik.errors.contact?<p className={classes.pTag}>{formik.errors.contact}</p>:null}
                                    </div> 
                                   
                                    <div className={classes.input}>
                                        <TextField name='email' error={ formik.touched.email && formik.errors.email && 'true'}     fullWidth label="Email"    type='email'    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                                        {formik.touched.email && formik.errors.email?<p className={classes.pTag}>{formik.errors.email}</p>:null}</div> 
                                    <div className={classes.input}>
                                        <TextField name='password' error={ formik.touched.password && formik.errors.password && 'true'}  fullWidth label="Password" type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                                        {formik.touched.password && formik.errors.password?<p className={classes.pTag}>{formik.errors.password}</p>:null}</div> 
                                    <div className={classes.input}>
                                        <TextField name='confirmPassword' error={ formik.touched.confirmPassword && formik.errors.confirmPassword && 'true'} fullWidth label="Confirm Password" type='password'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}/>
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword?<p className={classes.pTag}>{formik.errors.confirmPassword}</p>:null}</div> 
                                        {/* {loading===true?
                                    <div style={{marginTop:'15px',display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                                    :<Button className={classes.btn} style={{paddingBottom:0,marginBottom:0}} color='primary' variant='contained' type='submit'>Sign Up</Button>
                                } */}
                                <Button className={classes.btn} style={{paddingBottom:0,marginBottom:0}} color='primary' variant='contained' type='submit'>
                                {loading===true&&
                                    <div style={{ marginRight:4}}><CircularProgress color='inherit' size='10px'/></div>
                                }
                                    Sign Up</Button>
                               </form>
                               :
                                <form className={classes.griditems}  onSubmit={formik2.handleSubmit}>
                                   <div className={classes.input} style={{marginTop:'10px'}}><TextField  name='email' error={ formik2.touched.email && formik2.errors.email && 'true'}  fullWidth label="Email" onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.email}/>
                                   {/* <div className={classes.input} style={{marginTop:'40px'}}><TextField  name='email' error={ formik2.touched.email && formik2.errors.email && 'true'}  fullWidth label="Email" onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.email}/> */}
                                   {/* <div className={classes.input} style={{marginTop:'45px'}}><TextField  name='email' error={ formik2.touched.email && formik2.errors.email && 'true'}  fullWidth label="Email" onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.email}/> */}
                                   {formik2.touched.email && formik2.errors.email?<p className={classes.pTag}>{formik2.errors.email}</p>:null}</div> 
                                   <div className={classes.input}><TextField name='password' error={ formik2.touched.password && formik2.errors.password && 'true'} fullWidth label="Password"   onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.password}/>
                                        {formik2.touched.password && formik2.errors.password?<p className={classes.pTag}>{formik2.errors.password}</p>:null}</div>
                                   {/* {loading===true?
                         <div style={{marginTop:'15px',display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                         :<Button className={classes.btn} color='secondary' variant='contained' type='submit'>Sign In</Button>
                                   } */}
                         <Button className={classes.btn} color='secondary' variant='contained' type='submit'>
                         {loading===true&&
                                    <div style={{ marginRight:4}}><CircularProgress color='inherit' size='10px'/></div>
                                }
                                   
                             Sign In</Button>
                        
                                </form>
                               }
                               
                                {/* <Button className={classes.btn} color='secondary' variant='contained' onClick={handleLogOut}>Logout</Button> */}

                            </div>
  )
}
