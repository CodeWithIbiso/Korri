import React from 'react';
import {Facebook, Search} from '@material-ui/icons'
import {AppBar,Button,Grid,InputBase,Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
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
        color:'#fff',
        paddingLeft:'0px',
        paddingRight: '30px',
        fontSize:'13px'
    },
    direction:{
        flexDirection: 'column'
    },
    logo:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#eeeeebc'
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
    backgroundColor: 'transparent' //'#fff'
    }
})
function Navbar() {
    const classes = useStyles()
  return (

    <>
    {/* <AppBar className={classes.root} position='static'> */}
    <AppBar className={classes.root}  elevation={'none'}>
        <Toolbar disableGutters variant='dense'> 
             <Grid container alignItems='center'>
                <Grid item sm={2}>
                    <Typography variant='h6' className={classes.logo}>Logo</Typography>
                </Grid>
                <Grid item  sm={6} style={{display:'flex'}}>
                    <Typography variant='h6' className={classes.menu}>Home</Typography>
                    <Typography variant='h6' className={classes.menu}>About</Typography>
                    <Typography variant='h6' className={classes.menu}>Course</Typography>
                    <Typography variant='h6' className={classes.menu}>Instruction</Typography>
                    <Typography variant='h6' className={classes.menu}>News</Typography>
                    <Typography variant='h6' className={classes.menu}>Contact</Typography>
                </Grid>
                <Grid item sm={4}> 
                    <Grid container>
                        <Grid item>
                            <Button className={classes.btn} color='secondary' variant='contained'>Get App</Button>
                        </Grid>
                        <Grid item  >
                            <InputBase
                            className={classes.search}
                                placeholder='placeholder'
                                startAdornment={<Search fontSize='small'   />}
                            />
                        </Grid>
                        <Grid item  >
                            <Facebook color='secondary' /> 
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