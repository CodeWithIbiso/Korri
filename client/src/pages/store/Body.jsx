import React ,{useEffect, useState}from 'react'
import {Chip, Grid, InputBase, Typography} from '@material-ui/core'
import {makeStyles , Container } from '@material-ui/core';
import Sidebar from './Sidebar';
import CardItems from './CardItems';  
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalQueueVisibility } from '../../actions/globalQueueState';
import { clearGlobalQueue } from '../../actions/globalQueue';
import { getGlobalPropertiesByStoreSearch } from '../../actions/search';
import { getGlobalProperties } from '../../actions/globalProperties';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from '@material-ui/icons';
// import { Chip } from '@mui/material';


const useStyles = makeStyles({
      container:{
        //   paddingTop:'10px',         
          paddingTop:'50px',
          fontWeight:'450',
          fontSize:'15px',
          textTransform:' ',
          fontFamily: ' BlinkMacSystemFont', 
        //   paddingBottom:'15px',
            marginBottom:'34px'
        } ,
        cardobjectsNew:{
            fontFamily: 'Segoe UI', 
            fontSize:'12px',
            maxWidth:'270px'
        },
        row:{
            // paddingBottom:'10px'
        },
        cardobjects:{
            fontFamily: 'Segoe UI', 
            fontSize:'12px'
        },
        heading:{
            paddingTop:'30px', 
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
            // textDecoration:'none',
            // color:'black',
            height:'250px',
            marginBottom:'110px'
        },
        card:{ 
            width:'100%' ,
            height:'100%' ,
            borderRadius:'12px',
            // borderBottomRightRadius:'25px'
        },
        cardMedia:{
            width:'100%',
            minHeight:'100%'
        } ,
        font2:{
            fontFamily: ' Segoe UI',  
            padding:'0px',
            margin:'0px',
            marginRight:'4px',
            color:'white',
            border:'2px solid orange',
            marginBottom:'8px',
            background:'#263238',
            // fontWeight:"bold"
            // '&:hover,&:focus,&:active':{ 
            //     background:'#263238',
            // } 
        },
        font3:{
            fontFamily: ' Segoe UI',  
            padding:'0px',
            margin:'0px',
            paddingLeft:'24px',
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

export default function Body() {
    const [current,setCurrent]=useState('')
    const [search,setSearch]=useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const  {queue: reduxStoreQueue} =useSelector((state)=>state.globalQueue)
    const  queue =useSelector((state)=>state.globalQueueState)
    const classes  = useStyles() 
    const dispatch =useDispatch()
    const [pageSet,setPageSet]= useState(1) 
    const parts = window.location.href.split('/')
    const result=parts.pop()   

    const handleQueue=()=>{  
        dispatch(setGlobalQueueVisibility()) 
      } 
    const clearAllQueue=()=>{
        dispatch(clearGlobalQueue())  
    }
    let result2
    const popped=parts.pop() 
    if (popped.slice(0,3) === 'buy'){
       result2 = 'buy'
    }else if (popped.slice(0,3) === 'ren'){
       result2 = 'rent'
    } if (popped.slice(0,3) === 'sto'){
        result2 = 'store'
    } 
    // console.log(popped.slice(0,3))
 
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
    const searchProperty=()=>{
        if(search.trim()){   
            const theLink = `/store?searchQuery=${search || 'none'}&page=${page}`//${tags.Category && '&Category='+tags.Category}${tags.minPrice && '&minPrice='+tags.minPrice}${tags.Baths && '&Baths='+tags.Baths}${tags.Furnished && '&Furnished='+tags.Furnished}${tags.Type && '&Type='+tags.Type}${tags.maxPrice && '&maxPrice='+tags.maxPrice}${tags.Bedroom && '&Bedroom='+tags.Bedroom}${tags.roomSize && '&roomSize='+tags.roomSize}`
            // console.log(theLink)
            navigate(theLink)    

            // dispatch(getGlobalPropertiesByStoreSearch({search}))
            dispatch(getGlobalPropertiesByStoreSearch({search,page}))

             // console.log(search)
            // setSearch('') 
            setCurrent('search')
        }else{
            navigate('/store')
        }
    }
    // for page change
    useEffect(()=>{
        // dispatch( getGlobalProperties(page)|| 1)
        // console.log('here'+page,pageSet,'current is',current)
        if (page !== pageSet &&  current ==='store' ) dispatch( getGlobalProperties(page)|| 1)
        if (page !== pageSet &&  current ==='buy' ) dispatch(getGlobalPropertiesByStoreSearch({search:"For Sale",page}))
        if (page !== pageSet &&  current ==='rent' ) dispatch(getGlobalPropertiesByStoreSearch({search:"For Rent",page})) 
        // if (page !== pageSet &&  current ==='search' )  dispatch(getGlobalPropertiesByStoreSearch({search:'for rent',page:2}))
        
        if (page !== pageSet &&  current ==='search' ) dispatch(getGlobalPropertiesByStoreSearch({search,page}))
        if (page !== pageSet &&  current ==='cars' ) dispatch(getGlobalPropertiesByStoreSearch({search:["cars","car" ,'ferrari','honda'],page}))  
        if (page !== pageSet &&  current ==='land' ) dispatch(getGlobalPropertiesByStoreSearch({search:['land','lands'],page}))
        if (page !== pageSet &&  current ==='scraps' ) dispatch(getGlobalPropertiesByStoreSearch({search:['scrap','scraps'],page}))
        if (page !== pageSet)  setPageSet(page)
        },[current,page])

    const handleKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
            page=1

            searchProperty()
        }
    }
    // for reload
    useEffect(()=>{ 
        let result3
        if(result.includes('search')){
            result3='search'
        }else{
            const result2 = result.includes('?')? result.split('?')[1]: result
            result3 = result2.includes('&')? result2.split('&')[0] : result2
        } 
        result3 === 'store'&& current!==('store') &&  dispatch(getGlobalProperties(page)) 
        result3 === 'store'&& current!==('store') &&   setCurrent('store')
        result3 === 'buy'  && current!==('buy') &&  dispatch(getGlobalPropertiesByStoreSearch({search:"For Sale",page}))
        result3 === 'buy'  && current!==('buy') &&   setCurrent('buy')
        result3 === 'rent'&&  current!==('rent') &&   dispatch(getGlobalPropertiesByStoreSearch({search:"For Rent",page})) 
        result3 === 'rent'&& current!==('rent') &&    setCurrent('rent')
        result3 === 'cars'&&  current!==('cars') &&   dispatch(getGlobalPropertiesByStoreSearch({search:["ferarri","toyota",'car','cars' ],page})) 
        result3 === 'cars'&& current!==('cars') &&    setCurrent('cars')
        result3 === 'land'&&  current!==('land') &&   dispatch(getGlobalPropertiesByStoreSearch({search:["land",'lands'],page})) 
        result3 === 'land'&& current!==('land') &&    setCurrent('land')
        result3 === 'scraps'&&  current!==('scraps') &&   dispatch(getGlobalPropertiesByStoreSearch({search:["scrap","scraps" ],page})) 
        result3 === 'scraps'&& current!==('scraps') &&    setCurrent('scraps')

    },[location])
    const currentProperties=()=>{ 
        setSearch('')
        page=1
        navigate('/store')
        setCurrent('')
        part2split?.length!==3 && dispatch(getGlobalProperties(page)) 
    }
    const forSale=()=>{ 
        // dispatch(getGlobalProperties()) 
        page=1
        navigate('/store?buy') 
        setSearch('')
        setCurrent('buy') 
        dispatch(getGlobalPropertiesByStoreSearch({search:"For Sale",page}))
    }
    const forRent=()=>{ 
        // dispatch(getGlobalProperties()) 
        page=1
        navigate('/store?rent') 
        setSearch('')
        setCurrent('rent')
        dispatch(getGlobalPropertiesByStoreSearch({search:"For Rent",page})) 
    }
    const cars=()=>{
        page=1 
        setSearch('')
        setCurrent('cars') 
        navigate('/store?cars')
        // dispatch(getGlobalProperties())  
        dispatch(getGlobalPropertiesByStoreSearch({search:["ferarri","toyota",'car','cars' ]}))  

    } 
    const land=()=>{
        page=1
        setCurrent('land') 
        setSearch('')
        navigate('/store?land')
        // dispatch(getGlobalProperties())  
        dispatch(getGlobalPropertiesByStoreSearch({search:["land",'lands']},page)) 

    }
    const scraps=()=>{
        page=1
        setCurrent('scraps') 
        setSearch('')
        navigate('/store?scraps')
        // dispatch(getGlobalProperties())  
        dispatch(getGlobalPropertiesByStoreSearch({search:["scrap","scraps" ],page}))  

    }
   
  return (
    <Container  maxWidth='lg'>
        {/* <h1 onClick={
            ()=>dispatch(getGlobalProperties(3))
        }>here {page !== pageSet}{current ==='search' }{page}{pageSet}{current}</h1> */}
        <Grid container className={classes.container}> 
            <Grid item sm={queue === false || reduxStoreQueue.length<1?12:9} className={classes.row}>
                <div style={{fontWeight:"bold"}}>  

                    {result === 'store' && current==='' ?  
                    <Chip label='CURRENT PROPERTIES' variant='outlined'  style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}}   className={classes.font2}/>
                    :<Chip label='CURRENT PROPERTIES' onClick={currentProperties}  variant='outlined'   className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}}/>
                    }
                    {result === 'buy' ? 
                    <Chip label='FOR SALE' variant='outlined'   className={classes.font2}  style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}}/>
                    :<Chip label='FOR SALE' variant='outlined' onClick={forSale}  className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}}/>
                    }
                   {result === 'rent'? 
                     <Chip label='FOR RENT' variant='outlined'   className={classes.font2} style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}}/>
                    :<Chip label='FOR RENT' variant='outlined' onClick={forRent}    className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}} />
                    }
                    {current === 'apartments'?
                    <Chip label='CARS' variant='outlined' onClick={()=>setCurrent('cars')}  style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}}   className={classes.font2}/>
                    :<Chip label='CARS' variant='outlined' onClick={cars}    className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}} />
                    }
                    {current === 'shops'?
                    <Chip label='LAND' variant='outlined' onClick={()=>{setCurrent('land')}}  style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}} className={classes.font2}/> 
                    :<Chip label='LAND' variant='outlined' onClick={land}  className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}} /> 
                    }
                    {current === 'shops'?
                    <Chip label='SCRAPS' variant='outlined' onClick={()=>{setCurrent('scraps')}}  style={{color:'white',background:'#263238',borderColor:'orange',fontFamily:'IBM Plex Sans, sans-serif',}} className={classes.font2}/> 
                    :<Chip label='SCRAPS' variant='outlined' onClick={scraps}  className={classes.font2} style={{fontFamily:'IBM Plex Sans, sans-serif',}} /> 
                    }
                    {reduxStoreQueue.length>=1 &&<Chip onClick={handleQueue} label={queue===false? 'OPEN QUEUE':'CLOSE QUEUE'} variant='outlined'   className={classes.font2}/>}               
                    
                    <InputBase 
                    className={classes.input1}
                    style={{float:reduxStoreQueue.length>0 && queue === true ?'left':'right'}}
                    placeholder='Search Properties'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    endAdornment={<Search fontSize='small' style={{fontSize:'14px',fontWeight:'bold',color:'#263238'}}   />}
                    />
                    
                    </div>
               <CardItems classes={classes} shift={queue === false || reduxStoreQueue.length<1 ?3:4} />
            </Grid>
            {(queue === true &&  reduxStoreQueue.length>0) &&
            
            <Grid item sm={3} className={classes.row} style={{paddingTop:120}}>

            {/* {reduxStoreQueue.length>0 &&<h2 onClick={clearAllQueue}>'clear queue'</h2>} */}
                <Typography  className={classes.font3}> <strong onClick={()=>{clearAllQueue();handleQueue()}}> Clear Queue</strong></Typography>
                <Sidebar  classes={classes}/> 
            </Grid>
            }
        </Grid>
    </Container>
  )
}
