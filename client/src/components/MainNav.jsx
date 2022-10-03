import React,{ useEffect, useState } from 'react';
// import {Facebook, Search} from '@material-ui/icons'
import {AppBar,Grid,Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom'
// import UnstyledSelectsMultiple from './Selects2';
import { useDispatch } from 'react-redux';
// Tabs,Tab,Container,


const useStyles = makeStyles({
    appMain:{
        width:'50%'
    },
    btn:{
        borderRadius:'30px',
        fontSize:'12px'
    },
    menu:{
        textDecoration:'none',
        paddingLeft:'0px',
        paddingRight: '20px',
        fontSize:'14px',
        fontFamily: 'Segoe UI',
        fontWeight:'bold',
        color:'#fafafa',
        fontFamily:'IBM Plex Sans, sans-serif',
    },
    menu2:{
        textDecoration:'none',
        paddingLeft:'9px',
        paddingRight: '20px',
        fontSize:'13px',
        fontFamily: 'Segoe UI',
        fontWeight:'100',
        color:'#fafafa',
        letterSpacing:'1px',
        fontFamily:'IBM Plex Sans, sans-serif',
    },
    direction:{
        flexDirection: 'column'
    },
    logo:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#eeeeebc',
        fontFamily:'Segoe UI',
        fontFamily:'IBM Plex Sans, sans-serif',
    },
    search:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        fontFamily:'IBM Plex Sans, sans-serif', '& :hover':{
                backgroundColor:'#f2f2f2'
        }
    },
    root:{
        backgroundColor: 'transparent', //'#fff'
    },
    changed:{
        // background:'#100000',//3
        backgroundColor: '#263238'
    }
})
function Navbar({comp}) {
    const parts = window.location.href.split('/')
    const result=parts.pop() 
    // console.log(result)

    const classes = useStyles()
    // const location = useLocation()
    const localStorageData = JSON.parse(localStorage.getItem('userProfile'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const x = comp==="Main"
    const y = comp==="About"
    // console.log(y)
    const checked = x===true || y ===true? 'root' : 'changed'
    const [navBackground, setNavBackground] = useState(checked)
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
    
    if(comp==='Dash'|| comp==='Gallery' || 'Product'|| 'Store'|| 'storeProduct'){
        // setNavBackground('changed')

        // console.log(comp+  'jksjdskjdskjdjksdsdjkad')        
        // setNavBackground('root')


    // }
    // else if(comp==='Main' ||comp==='About'){
            const handleScroll = () => {
            const show = window.scrollY > 0;
            // const show = window.scrollY > 310

            if (!show &&  x===true ) {
                setNavBackground('root')
            } 
            else if (!show &&  y===true) {
                setNavBackground('root')
            } else {
                setNavBackground('changed')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }
    // }, [window.location.href])
})
    // console.log(result)
  return (

    <>
    {/* <AppBar className={classes.root} position='static'> */} 
    {/* <AppBar className={classes[navRef.current]}  elevation={'none'} position='fixed' > */}
    <AppBar className={classes[navRef.current]}  elevation={0} position={comp==='Dash'|| comp==='Gallery' || comp==='Product' || comp==='Store'|| comp==='storeProduct' ? 'static':'fixed'}>
        <Toolbar disableGutters variant='dense'> 
             <Grid container alignItems='center'>
                <Grid item sm={2}>
                    <Typography variant='h6' className={classes.logo}>Korri</Typography>
                </Grid>
                <Grid item  sm={6} style={{display:'flex'}}>
                    <Typography variant='h6' component={Link} to='/'      className={classes.menu} style={{color:result===''&& 'orange'}}>Home</Typography>
                    <Typography variant='h6' component={Link} to='/buy' state={'buy'}  className={classes.menu} style={{color:result.slice(0,3)==='buy'&& 'orange'}}>Buy</Typography>
                    <Typography variant='h6' component={Link} to='/rent' state={'rent'} className={classes.menu} style={{color:result.slice(0,4)==='rent'&& 'orange'}}>Rent</Typography>
                    {/* <Typography variant='h6' component={Link} to='/sell'  className={classes.menu}>Sell</Typography> */}
                    
                    { localStorageData ===null && <Typography variant='h6' component={Link} to='/signing' className={classes.menu}>Sign in</Typography>}

                    <Typography variant='h6' component={Link} to='/gallery'  className={classes.menu} style={{color:result.slice(0,7)==='gallery'&& 'orange'}}>Gallery</Typography>
                    <Typography variant='h6' component={Link} to='/about'    className={classes.menu} style={{color:result.slice(0,5)==='about'&& 'orange'}}>FaQs</Typography>  

                    {localStorageData !==null && 
                    <>
                    <Typography variant='h6' component={Link} to='/account'  className={classes.menu} style={{color:result.slice(0,7)==='account'&& 'orange'}}>Account</Typography>                
                    <Typography variant='h6'  className={classes.menu} onClick={()=>{dispatch({type:'LOGOUT'}); navigate('/')}} >Logout</Typography>                  
                    </>
                    }
                    <Typography variant='h6' component={Link} to='/store'  className={classes.menu}><div style={{color:'orange',fontWeight:'600',fontStyle:'italic'}}> Store </div></Typography> 
                    {/* <Typography variant='h6' component={Link} to='/store'  className={classes.menu}><div style={{color:'orange',fontWeight:'600',fontStyle:'italic'}}> {result==='store'?'Find a property !': 'Check out our Store !'}</div></Typography>  */}
                </Grid>
                <Grid item sm={4}> 
                    <Grid container> 
                        <Grid item xs={4}  sm={4} >
                          {/* <UnstyledSelectsMultiple/> */}
                        </Grid>
                        <Grid item  xs={8}  sm={8}  >
                            {/* <Facebook color='secondary' />  */}
                            <Typography variant='h6' component={Link} to='/about'  className={classes.menu2}><strong style={{color:'orange',fontFamily:'IBM Plex Sans, sans-serif',fontStyle:'italic'}}>Contact us:</strong>   email@gmail.com</Typography> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>  
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar