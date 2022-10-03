import React, { useEffect, useState } from 'react'
import {Chip, Grid, InputBase, Typography} from '@material-ui/core'
import {makeStyles , Container } from '@material-ui/core';
import Sidebar from './Sidebar';
import CardItems from './CardItems';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalProperties } from '../../actions/globalProperties';
import { getProperties } from '../../actions/properties';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import { getGlobalPropertiesByStoreSearch, getPropertiesByCreator } from '../../actions/search';
// import { Chip } from '@mui/material';


const useStyles = makeStyles({
      container:{
          paddingTop:'10px',
          fontWeight:'450',
          fontSize:'15px',
          textTransform:' ',
          fontFamily: ' BlinkMacSystemFont', 
        //   paddingBottom:'15px',
            marginBottom:'34px'
        } ,
        row:{
            // paddingBottom:'10px'
        },
        cardobjects:{
            fontFamily: 'Segoe UI', 
            fontSize:'12px'
        },
        cardobjectsNew:{
            fontFamily: 'Segoe UI', 
            fontSize:'12px',
            maxWidth:'270px'
        },
        heading:{
            marginTop:'30px', 
            // marginBottom:'64px'

        },
        bottomText:{ 
            marginTop:'22px',
            marginBottom:'22px',
            padding:'0px',
            display:'flex',
            flexDirection:'row', 
            // justifyContent:'right',
            // alignItems:'right',
            justifyContent:'center',
            alignItems:'center',
        },
        font:{ 
            fontFamily: 'Segoe UI', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            fontWeight:'bold'

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
            fontFamily: ' Segoe UI',  
            padding:'0px',
            marginRight:'10px',
            marginBottom:'10px',
            fontSize:'small'
            // fontWeight:"bold"
        },
        font3:{
            fontFamily: ' Segoe UI',  
            padding:'0px',
            margin:'0px',
            paddingLeft:'24px',
            fontSize:'12px',
            textTransform:'uppercase',
            fontWeight:'bold'
        },
        input1:{
            float:'right',
            fontFamily: ' Segoe UI',  
            padding:'0px',
            margin:'0px',
            marginRight:'4px',
             background:'white',
            border:'2px solid #263238',
            marginBottom:'8px' ,

            fontWeight:'bold',
             color:'gray', 
             width:'250px',
            paddingLeft:'10px',
            paddingRight:'15px',  
            fontFamily:'segoe ui', 
            '& ::placeholder':{
                color:'#263238',
                fontWeight:'bold',
                // fontSize:'12px'
            }
        }


})

export default function Body({savedData,setInputData,inputData,handleClear}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [current,setCurrent]=useState('') 
     const [at,setAt]=useState('properties')

    const  {properties:reduxStoreProperties,numberOfPages :pageG} =useSelector((state)=>state.creator)
    const location = useLocation()
//    console.log(reduxStoreProperties)
    const localStorageDataId = JSON.parse(localStorage.getItem('userProfile'))?.result?._id

    // const reduxStoreProperties= reduxStorePropertiess.filter((each) =>( 
    //     each.creator===localStorageDataId))
    // const reduxGlobalStoreProperties= reduxGlobalStorePropertiess.filter((each) =>( 
    //     each.creator===localStorageDataId))
            
    // console.log(reduxStoreProperties)
    // console.log(reduxGlobalStoreProperties)
    let page 
    let part2split 
    if(window.location.href.includes('?')){ // when search or page changes
        const part2 = window.location.href.split('?')
        part2split = part2[1].split('=')
        // console.log(part2split) 
        // console.log(part2split.length!==3) 
        const thePage = part2split.length-1
        page = part2split[thePage] 
        // console.log(page)
    }else{
        page = 1
        // setPage(1)
    }
  
  
  useEffect(() => { 
    // page=1
    dispatch(getPropertiesByCreator({search,page:1,creator:localStorageDataId,propertyType : at})) 
    // dispatch(getPropertiesByCreator({page:1,creator:localStorageDataId,propertyType : 'store'})) 
    // dispatch(getPropertiesByCreator({page,PropertyType : at})) 
    
  }, [at])
  useEffect(() => { 
    dispatch(getPropertiesByCreator({search,page:page,creator:localStorageDataId,propertyType : at})) 
    // dispatch(getPropertiesByCreator({page:1,creator:localStorageDataId,propertyType : 'store'})) 
    // dispatch(getPropertiesByCreator({page,PropertyType : at})) 
    
  }, [page])
  
  const [search,setSearch]=useState('')
  const [searchWait,setSearchWait]=useState('')
  const [searchTag,setSearchTag]= useState(false)
  const searchProperty=()=>{
    if(search.trim()){  
        setSearchWait(search)
        // const theLink = `/account?page=${page}`//${tags.Category && '&Category='+tags.Category}${tags.minPrice && '&minPrice='+tags.minPrice}${tags.Baths && '&Baths='+tags.Baths}${tags.Furnished && '&Furnished='+tags.Furnished}${tags.Type && '&Type='+tags.Type}${tags.maxPrice && '&maxPrice='+tags.maxPrice}${tags.Bedroom && '&Bedroom='+tags.Bedroom}${tags.roomSize && '&roomSize='+tags.roomSize}`
        const theLink = `/account?searchQuery=${search || 'none'}&page=${page}`//${tags.Category && '&Category='+tags.Category}${tags.minPrice && '&minPrice='+tags.minPrice}${tags.Baths && '&Baths='+tags.Baths}${tags.Furnished && '&Furnished='+tags.Furnished}${tags.Type && '&Type='+tags.Type}${tags.maxPrice && '&maxPrice='+tags.maxPrice}${tags.Bedroom && '&Bedroom='+tags.Bedroom}${tags.roomSize && '&roomSize='+tags.roomSize}`
        // console.log(theLink)
        navigate(theLink)  
        setSearchTag(true)

         dispatch(getPropertiesByCreator({search,page,creator:localStorageDataId}))

          
        setCurrent('search')
        setAt('search')
    }else{
        navigate('/store')
    }
}
  const [done,setDone]=useState('')
  const classes  = useStyles()
  const scrollToTop=()=>{
      window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
    }
    let properties;
    let numberOfPages
    // console.log(done ==='properties')
    if(at === 'properties'  && done !=='properties' ){properties=reduxStoreProperties}
    if(at === 'properties'  && done !=='properties' ){numberOfPages=pageG}
    if(at === 'store'  ) {properties=reduxStoreProperties}
    if(at === 'store'  ) {numberOfPages=pageG}

    const handleKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
            page=1

            searchProperty()
        }
    }
    const propertiesSet=()=>{
        navigate('/gallery')
        console.log('here')
        setAt('properties') 
        page=1
    }
    const storeSet=()=>{
        setAt('store')
        page=1 
    }
    useEffect(()=>{
        if(at === 'properties' ) {properties=reduxStoreProperties}
        if(at === 'store'  )     {properties=reduxStoreProperties}
        // console.log(page)
        // at === 'notifications'
    },[at]) 
    useEffect(() => {
    //   console.log('effct works')
    //   dispatch(getPropertiesByCreator({page:page,creator:localStorageDataId,propertyType : at})) 
      if(reduxStoreProperties?.length===0 && done!=='properties') {
        // console.log('effct works')
        navigate('/account')
        setDone('properties')
        dispatch(getPropertiesByCreator({page:1,creator:localStorageDataId,propertyType : 'properties'})) 

    }
    }, [location])
    // page=1
    // console.log(page)
    // console.log(numberOfPages)
    return (
    <Container >        
        <Grid container className={classes.container}> 
            <Grid item sm={12} className={classes.row}>
                <div style={{fontWeight:"bold"}}>
                    {at==='properties'?<Chip label='PROPERTIES' onClick={()=>propertiesSet}  className={classes.font2}/>
                    :<Chip label='PROPERTIES' onClick={()=>{setAt('properties');navigate('/account?page=1');setSearch('')}}   variant='outlined'  className={classes.font2}/>}
                    {/* :<Chip label='PROPERTIES' onClick={()=>{setAt('properties');page=1}}   variant='outlined'  className={classes.font2}/>} */}
                    {/* <Chip label='ALL PROPERTIES'  className={classes.font2}/> */}
                    {/* <Chip label='APARTMENTS' variant='outlined' className={classes.font2}/> */}
                    {/* <Chip label='RECENT PROPERTIES' variant='outlined' className={classes.font2}/> */}
                    {at==='store'?<Chip label='STORE PROPERTIES' onClick={()=>storeSet} className={classes.font2}/>
                    :<Chip label='STORE PROPERTIES' onClick={()=>{setAt('store');navigate('/account?page=1');setSearch('')}}   variant='outlined'className={classes.font2}/>}
                    {/* <Chip label='GLOBAL STORE PROPERTIES' variant='outlined'className={classes.font2}/> */}
                    {at==='notifications'?<Chip label='NOTIFICATIONS' onClick={()=>setAt('notifications')} className={classes.font2}/>
                    :<Chip label='NOTIFICATIONS' onClick={()=>setAt('notifications')}  variant='outlined'className={classes.font2}/>}
                    {/* <Chip label='PROPERTIES SOLD' variant='outlined'className={classes.font2}/> */}
                    {/* <Chip label='DELETED/REMOVED PROPERTIES' variant='outlined'className={classes.font2}/> <br/> */}
                    <Chip label='ADD NEW' onClick={scrollToTop} variant='outlined'className={classes.font2}/> 
                    {/* <Typography variant='caption'  className={classes.font2}>ALL PROPERTIES | </Typography>
                    <Typography variant='caption'  className={classes.font2}>RECENT PROPERTIES | </Typography>
                    <Typography variant='caption'  className={classes.font2}>CURRENT PROPERTIES | </Typography>
                    <Typography variant='caption'  className={classes.font2}>PROPERTIES SOLD | </Typography>
                    <Typography variant='caption'  className={classes.font2}>DELETED/REMOVED PROPERTIES | </Typography>  */}
                    <InputBase 
                    className={classes.input1}
                    placeholder='Search Properties'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    endAdornment={<Search fontSize='small' style={{fontSize:'14px',fontWeight:'bold',color:'#263238'}}   />}
                    />
                </div>
               <CardItems properties={properties} page={page} numberOfPages={numberOfPages} classes={classes} savedData={savedData} at={at} setInputData={setInputData} inputData={inputData} handleClear={handleClear}/>
            </Grid>
            {/* <Grid item sm={3} className={classes.row}>
                <div style={{marginTop:'93px'}}>
                    <Typography  className={classes.font3}>Notifications</Typography>
                    <Sidebar  classes={classes}/>
                </div>
            </Grid> */}
        </Grid>
    </Container>
  )
}
