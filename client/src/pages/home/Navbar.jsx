import React,{ useEffect, useState } from 'react';
import {Facebook, Search} from '@material-ui/icons'
import {AppBar,Button,Grid,InputBase,Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'
import UnstyledSelectsMultiple from '../../components/Selects2';
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
        color:'#fafafa'

    },
    menu2:{
        textDecoration:'none',
        paddingLeft:'9px',
        paddingRight: '20px',
        fontSize:'13px',
        fontFamily: 'Segoe UI',
        fontWeight:'100',
        color:'#fafafa',
        letterSpacing:'1px'

    },
    direction:{
        flexDirection: 'column'
    },
    logo:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#eeeeebc',
        fontFamily:'Segoe UI'
    },
    search:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '& :hover':{
                backgroundColor:'#f2f2f2'
        }
    },
    root:{
        backgroundColor: 'transparent', //'#fff'
    },
    changed:{
        backgroundColor: '#263238'
    }
})
function Navbar() {
    const classes = useStyles()

    const [navBackground, setNavBackground] = useState('root')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 0;
            // const show = window.scrollY > 310
            if (show) {
                setNavBackground('changed')
            } else {
                setNavBackground('root')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (

    <>
    {/* <AppBar className={classes.root} position='static'> */}
    <AppBar className={classes[navRef.current]}  elevation={'none'}>
        <Toolbar disableGutters variant='dense'> 
             <Grid container alignItems='center'>
                <Grid item sm={2}>
                    <Typography variant='h6' className={classes.logo}>Logo</Typography>
                </Grid>
                <Grid item  sm={6} style={{display:'flex'}}>
                    <Typography variant='h6' component={Link} to='/'  className={classes.menu}>Home</Typography>
                    <Typography variant='h6' component={Link} to='/product'  className={classes.menu}>Buy</Typography>
                    <Typography variant='h6' component={Link} to='/gallery'  className={classes.menu}>Rent</Typography>
                    <Typography variant='h6' component={Link} to='/gallery'  className={classes.menu}>Sell</Typography>
                    <Typography variant='h6' component={Link} to='/signup' className={classes.menu}>Sign up</Typography>
                    <Typography variant='h6' component={Link} to='/about'  className={classes.menu}>Contact Us</Typography>
                    <Typography variant='h6' component={Link} to='/about'  className={classes.menu}>FaQs</Typography>                     
                    <Typography variant='h6' component={Link} to='/about'  className={classes.menu}><div style={{color:'orange',fontWeight:'600',fontStyle:'italic'}}>Check out our Store !</div></Typography> 
                </Grid>
                <Grid item sm={4}> 
                    <Grid container>
                        {/* <Grid item>
                            <Button className={classes.btn} color='secondary' variant='contained'>Get App</Button>
                        </Grid> */}
                        <Grid item  >
                          <UnstyledSelectsMultiple/>
                        </Grid>
                        <Grid item  >
                            {/* <Facebook color='secondary' />  */}
                            <Typography variant='h6' component={Link} to='/about'  className={classes.menu2}><strong style={{color:'orange',fontStyle:'italic'}}>Contact us:</strong>   email@gmail.com</Typography> 
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