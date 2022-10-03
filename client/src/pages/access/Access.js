import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography} from '@material-ui/core'
import { makeStyles,Button } from '@material-ui/core'
import Footer from '../../components/Footer'
import img from '../../assets/images/d.jpg'
import img2 from '../../assets/images/house.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {Link, useNavigate,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {signUp,signIn} from '../../actions/auth'

import TextField from '@mui/material/TextField';
import { LockOutlined } from '@material-ui/icons'
import Original from './Original'
import Formik from './Formik'
import Formikk from './Formikk'
 
 

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
        minHeight:'120vh',
        padding:'0px',
    }
})
function useWindowDimemsions(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
    const location = useLocation() 
    const updateWidthAndHeight=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect
    (() => {
    window.addEventListener("resize",updateWidthAndHeight)
    },[location])
    return{
        width,
        height
    }
  }
export default function Access() {
    const localStorageData = JSON.parse(localStorage.getItem('userProfile'))
    const [signing,setSigning] = useState(false) 
    const [user,setUser] = useState(localStorageData)
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
 
    const handleSubmit =(values)=>{ 
        if (signing){
            dispatch(signUp(values,navigate)) 
        }else{
            dispatch(signIn(values,navigate))

        } 
     }  
    const cut = 860
    const {width } = useWindowDimemsions()

  return (
      <>
        {/* <Container style={{background:'',padding:'0px',minWidth:'100%'}}> */}
        <Container className={classes.main}>
            <Grid container>                                             
             {width> cut &&   
              <Grid item xs={12} sm={7} style={{width:'100%', backgroundImage:`url(${signing === true ? img:img2})`, backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat', height:'120vh' }}>
                     <Container  className={signing===false?classes.arrange:classes.leftItem}>
                        <div style={{padding:'25px'}}>
                        <Typography component={Link} to='/'  variant='h4' className={classes.link} style={{color:signing===true?'black':'white'}}>Korri</Typography> 
                         </div> 
                        <div style={{padding:'25px', color: "black", paddingBottom:'0px',marginTop:'80px'}}>
                         <Typography variant='h5' style={{fontFamily: 'Segoe UI',color:signing===true?'black':'white',fontWeight:'bold',padding:'12px'}}>{signing === true ? 'Join Us': 'Welcome Back'}</Typography>  
                         </div>
                        <div style={{ padding:'25px',  paddingTop:'0px', color: "black"  }} >
                            <Typography variant='body2' style={{fontFamily: 'Segoe UI',color:signing===true?'black':'white',fontWeight:'800',padding:'12px',lineHeight:'32px',fontSize:'18px'}}>
                                { signing === true ? 
                               'Tu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mauris, facilisis non augue non, auctor vehicula erat. Fusce vel diam lacinia, rhoncus nulla vitae, tincidunt tellus. Aenean laoreet aliquet nisi at posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu dolor et felis sodales ultricies non eu metus.': 
                               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mauris, facilisis non augue non, auctor vehicula erat. Fusce vel diam lacinia, rhoncus nulla vitae, tincidunt tellus. Aenean laoreet aliquet nisi at posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu dolor et felis sodales ultricies non eu metus.'
                               }
                                
                            </Typography> 
                         </div>
                    </Container> 
                </Grid>}
                <Grid item xs={12} sm={width<cut?12:5}>
                    <Container  className={classes.rightItem}  >
                        <Grid container className={classes.grid} >
                            <Grid item xs={12} sm={12}>
 
                             <Formikk   setSigning={setSigning} signing={signing} handleSubmit={handleSubmit}/>
 

                            </Grid>   
                        </Grid> 
                    </Container> 
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </>
  )
}
