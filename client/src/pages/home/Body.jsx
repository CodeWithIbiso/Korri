import React, { useState ,useEffect} from 'react'
import {CircularProgress, Grid, Typography} from '@material-ui/core'
import {makeStyles , Container } from '@material-ui/core';
import Sidebar from './Sidebar';
import CardItems from './CardItems';
import { useSelector } from 'react-redux';
    

const useStyles = makeStyles({
      container:{
          paddingTop:'10px',
          fontWeight:'450',
          fontSize:'15px',
          textTransform:' ',
          fontFamily: ' BlinkMacSystemFont', 
          paddingBottom:'55px'
        } ,
        row:{
            paddingBottom:'10px',

            // minHeight:'100%',
         },
        heading:{
            paddingTop:'30px'
        },
        bottomText:{ 
            padding:'0px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'right',
            fontFamily:'IBM Plex Sans, sans-serif',alignItems:'right',
        },
        font:{
            fontFamily: ' BlinkMacSystemFont',  
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',

        },
        cardobjectsNew:{
            fontFamily: 'Segoe UI', 
            fontSize:'12px',
            maxWidth:'270px'
        },
        cardgrid:{
            height:'250px',
            marginBottom:'110px'
        },
        card:{ 
            width:'100%' ,
            height:'100%' ,
            borderRadius:'0px'
        },
        cardMedia:{
            width:'100%',
            minHeight:'100%'
        } ,
        font2:{
            // fontFamily: ' segoe ui',  
            fontFamily:'IBM Plex Sans, sans-serif',
            padding:'0px',
            margin:'0px',
            fontSize:'14px',
            fontWeight:'bold'
        },
        font3:{
            fontFamily: ' segoe ui',  
            fontFamily:'IBM Plex Sans, sans-serif',
            padding:'0px',
            margin:'0px',
            paddingLeft:'24px',
            fontSize:'14px',
            fontWeight:'bold'
        },
        cardobjects:{
            // fontFamily: 'Segoe UI', 
            fontFamily:'IBM Plex Sans, sans-serif',
            fontSize:'12px'
        },
        bottomText:{ 
            marginTop:'22px',
            marginBottom:'22px',
            padding:'0px',
            display:'flex',
            fontFamily:'IBM Plex Sans, sans-serif',
            flexDirection:'row', 
            // justifyContent:'right',
            // alignItems:'right',
            justifyContent:'center',
            alignItems:'center',
        },


})
function useWindowDimemsions(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
  
    const updateWidthAndHeight=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect
    (() => {
    window.addEventListener("resize",updateWidthAndHeight)
    })
    return{
        width,
        height
    }
  }
export default function Body() { 
    const {width,height} = useWindowDimemsions()

    const  loading =useSelector((state)=>state.loading.isLoading) 
    const classes  = useStyles()
  return (
    <Container  maxWidth='lg'> 

        <Grid container className={classes.container}> 
            <Grid item sm={width >  1017?9:12} xs={12}className={classes.row}>
        
               <Typography  className={classes.font2} >CURRENT LISTINGS</Typography> 
                                           
                {loading ===true?
                <div style={{display:'flex',minHeight:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                // :<h1>here</h1>
                :<CardItems classes={classes}/>
                }
            </Grid>
            {width >  1017 &&
            <Grid item sm={3} className={classes.row}>
                <Typography  className={classes.font3}>FIND PROPERTIES</Typography>
                <Sidebar  classes={classes}/>
            </Grid>
            }
        </Grid>
    </Container>
  )
}
