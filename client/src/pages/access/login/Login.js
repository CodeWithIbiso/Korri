import { Container, Grid, Typography} from '@material-ui/core'
import React from 'react'
import { makeStyles,Button } from '@material-ui/core'
import Footer from '../../../components/Footer'
import img from '../../../assets/images/d.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
 
  

const useStyles = makeStyles({
    main:{
        // marginTop:'25px',
        background:'white',
        minHeight:'100vh',
        padding:'0px'
    },
    left:{ 
        backgroundImage:`url(${img})`, 
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat', 
        height:'100vh'
    },
    leftItem:{
        // background:'rgba(0,0,0,0.25)',
        minHeight:'100vh',
        padding:'0px'
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
})
export default function Register() {
    const classes = useStyles()
  return (
      <>
        <Container maxWidth='' bg='white' className={classes.main}>
            <Grid container>
                <Grid item xs={12} sm={7} className={classes.left}>
                    <Container  className={classes.leftItem}>
                        <div style={{padding:'25px'}}>
                            <Typography variant='h4' component={Link} to='/'  style={{textDecoration:'none',fontFamily: 'Segoe UI',color:'black',fontWeight:'bold',padding:'12px'}}>Logo</Typography> 
                        </div> 
                        <div
                            style={{
                            padding:'25px', 
                            color: "black", 
                            paddingBottom:'0px',
                            marginTop:'80px'
                            }}
                        >
                             <Typography variant='h5' style={{fontFamily: 'Segoe UI',color:'',fontWeight:'bold',padding:'12px'}}>Welcome Back</Typography> 
                        </div>
                        <div
                            style={{
                            padding:'25px', 
                            paddingTop:'0px',
                            color: "black" 
                            }}
                        >
                            <Typography variant='body2' style={{fontFamily: 'Segoe UI',color:'',fontWeight:'bold',padding:'12px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mauris, facilisis non augue non, auctor vehicula erat. Fusce vel diam lacinia, rhoncus nulla vitae, tincidunt tellus. Aenean laoreet aliquet nisi at posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu dolor et felis sodales ultricies non eu metus.
                            </Typography> 
                         </div>
                    </Container> 
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Container  className={classes.rightItem}>
                        <Grid container className={classes.grid}>
                            <Grid item sm={12} className={classes.griditems}>
                               <div><Typography variant='h4' style={{fontFamily: 'Segoe UI',color:'',fontWeight:'bold',padding:'12px'}}>Login</Typography></div>
                               <div  className={classes.icon} >
                                   <FacebookOutlinedIcon   className={classes.icons}/>
                                   <InstagramIcon  className={classes.icons}/>
                                   <LinkedInIcon  className={classes.icons}/>
                                   <GoogleIcon  className={classes.icons}/>
                                </div>
                               <div><Typography variant='body2'>or use your email for register</Typography></div> 
                               <div className={classes.input} style={{marginTop:'45px'}}><TextField fullWidth label="Email" /></div> 
                               <div className={classes.input}><TextField fullWidth label="Password" /></div> 
                               <Button className={classes.btn} color='secondary' variant='contained'>Sign In</Button>
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
