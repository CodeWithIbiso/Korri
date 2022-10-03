import React ,{useEffect, useState}from 'react'
import {Chip, Grid, InputBase, Typography} from '@material-ui/core'
import {makeStyles , Container } from '@material-ui/core';
import Sidebar from './Sidebar';
import CardItems from './CardItems';
import { addQueue, clearQueue } from '../../actions/queue'; 
import { useDispatch, useSelector } from 'react-redux';
import { setQueueVisibility } from '../../actions/queueState';
import { LaptopWindows, Search } from '@material-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPropertiesByGallerySearch } from '../../actions/search';
import { getProperties } from '../../actions/properties';
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
            color:'navy',
            background:'white',
            border:'2px solid orange',
            marginBottom:'8px',
            // fontSize:'11px'

            // fontWeight:"bold"
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
            border:'2px solid orange',
            marginBottom:'8px' ,

            fontWeight:'bold',
             color:'gray', 
             width:'250px',
            paddingLeft:'10px',
            paddingRight:'15px',  
            fontFamily:'segoe ui', 
            '& ::placeholder':{
                color:'black',
                fontWeight:'bold',
                // fontSize:'12px'
            }
        }


})

export default function Body() {
    
        const [current,setCurrent]=useState('')
        const [search,setSearch]=useState('')
        const [searchWait,setSearchWait]=useState('')

        const navigate = useNavigate()
const dispatch =useDispatch()
    const [pageSet,setPageSet]= useState(1)
    const [searchTag,setSearchTag]= useState(false)
    const parts = window.location.href.split('/')
    const result=parts.pop() 
    // console.log(window.location.href)

    const  {properties:reduxStoreProperties,numberOfPages} =useSelector((state)=>state.properties)
    // console.log(reduxStoreProperties.length)
     let result2
    const popped=parts.pop() 
    if (popped.slice(0,3) === 'buy'){
       result2 = 'buy'
    }else if (popped.slice(0,3) === 'ren'){
       result2 = 'rent'
    } if (popped.slice(0,3) === 'gal'){
        result2 = 'gallery'
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
            setSearchWait(search)
            const theLink = `/gallery?searchQuery=${search || 'none'}&page=${page}`//${tags.Category && '&Category='+tags.Category}${tags.minPrice && '&minPrice='+tags.minPrice}${tags.Baths && '&Baths='+tags.Baths}${tags.Furnished && '&Furnished='+tags.Furnished}${tags.Type && '&Type='+tags.Type}${tags.maxPrice && '&maxPrice='+tags.maxPrice}${tags.Bedroom && '&Bedroom='+tags.Bedroom}${tags.roomSize && '&roomSize='+tags.roomSize}`
             // console.log(page)
            navigate(theLink)  
            // console.log(theLink)
            setSearchTag(true)
            dispatch(getPropertiesByGallerySearch({search,page}))

            // console.log(search)
            // setSearch('') 
            setCurrent('search')

        }else{
            // console.log('caught')
            navigate('/gallery')
        }
}
useEffect(()=>{
// console.log('search'+searchTag)
// console.log('ccurrent'+current)
// console.log(part2split?.length>2)
// console.log('page'+page)
// console.log(page,pageSet,search,searchWait,current) 
},[window.location.href,reduxStoreProperties ]) 


useEffect(()=>{
if (page !== pageSet &&  current ==='gallery' ) dispatch( getProperties(page)|| 1)
if (page !== pageSet &&  current ==='buy' ) dispatch(getPropertiesByGallerySearch({search:"For Sale",page}))
if (page !== pageSet &&  current ==='rent' ) dispatch(getPropertiesByGallerySearch({search:"For Rent",page})) 
if (page !== pageSet &&  current ==='search' ) dispatch(getPropertiesByGallerySearch({search,page}))
if (page !== pageSet &&  current ==='apartments' ) dispatch(getPropertiesByGallerySearch({search:["bungalow","duplex" ],page}))  
if (page !== pageSet &&  current ==='shops' ) dispatch(getPropertiesByGallerySearch({search:"shop",page}))
if (page !== pageSet)  setPageSet(page)
},[current,page])

const  cue=useSelector((state)=>state.queue) 
const   reduxStoreQueue=cue?.queue
const    cueIds = cue?.ids
    const  queue =useSelector((state)=>state.queueState)
    // const [queue,setQueue]=useState(false)
    // const [queue,setQueue]=useState(reduxStoreQueue.length>0 ? true: false)
    const classes  = useStyles()
    // const handleQueue=()=>{  
    //     setQueue((queue)=>!queue)  
    //   } 
    const handleQueue=()=>{  
        dispatch(setQueueVisibility()) 
      } 
      
      const clearAllQueue=()=>{
          dispatch(clearQueue())  
        }

    
    const handleKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
            // e.preventDefault()
            page=1
            searchProperty()
        
        }
    }
    // console.log(current)
    const location = useLocation()
    // console.log(result)
    useEffect(()=>{  
        let result3
        if(result.includes('search')){
            result3='search'
        }else{
            const result2 = result.includes('?')? result.split('?')[1]: result
            result3 = result2.includes('&')? result2.split('&')[0] : result2
        } 
        // console.log(result3)
        // console.log('here',current.length)  

        result3 === 'gallery' &&  current.length ===0&&    navigate('/gallery') 
        result3 === 'gallery' &&  current.length===0&&    setCurrent('gallery') 
        result3 === 'gallery' &&  current==='gallery'&&    dispatch(getProperties(page)) 
        result3 === 'gallery' &&  current==='gallery'&&    setCurrent('gallery')
        result3 === 'gallery' &&  current==='apartments'&&    dispatch(getPropertiesByGallerySearch({search:["bungalow","duplex"],page}))  
        result3 === 'gallery' &&  current==='apartments'&&    setCurrent('apartments')
        result3 === 'gallery' &&  current==='shops'&&    dispatch(getPropertiesByGallerySearch({search:"shop",page}))
        result3 === 'gallery' &&  current==='shops'&&    setCurrent('shops')
        result3 === 'buy'  &&  current!=='buy'&&    dispatch(getPropertiesByGallerySearch({search:"For Sale",page}))
        result3 === 'buy'  &&  current!=='buy'&&    setCurrent('buy')
        result3 === 'rent'&&  current!=='rent'&&        dispatch(getPropertiesByGallerySearch({search:"For Rent",page})) 
        result3 === 'rent'&&   current!=='rent'&&     setCurrent('rent')

    },[location])
// },[location,reduxStoreProperties])

    const currentProperties=()=>{
        // console.log('we are here')
        page=1
        navigate('/gallery')
        setSearch('')
        setCurrent('')
        part2split?.length!==3 && dispatch(getProperties(page)) 
    }
    const forSale=()=>{
        page=1
        setSearch('')
        navigate('/buy') 
        setCurrent('buy')
        // console.log(page)
        dispatch(getPropertiesByGallerySearch({search:"For Sale",page}))
    }
    const forRent=()=>{
        page=1
        setSearch('')
        navigate('/rent') 
        setCurrent('rent')
        dispatch(getPropertiesByGallerySearch({search:"For Rent",page})) 
    }
    const apartments=()=>{
        page=1
        setSearch('')
        // console.log('caught')
        setCurrent('apartments') 
        navigate('/gallery')
        dispatch(getPropertiesByGallerySearch({search:["bungalow","duplex"],page}))  

    }
    const shops=()=>{
        page=1
        setCurrent('shops') 
        setSearch('')
        navigate('/gallery')
        dispatch(getPropertiesByGallerySearch({search:"shop",page})) 

    }
    const [reduxStoreQueueFull,setReduxStoreQueueFull] = useState(0)
//     function useWindowDimemsions(){
//         const [width,setWidth] = useState(window.innerWidth)
//         const [height,setHeight] = useState(window.innerHeight)
//         const location = useLocation() 
//         const updateWidthAndHeight=()=>{
//             setWidth(window.innerWidth)
//             setHeight(window.innerHeight)
//         }
//         useEffect
//         (() => {
//         window.addEventListener("resize",updateWidthAndHeight)
//         },[location])
//         return{
//             width,
//             height
//         }
//       }
//   const {width} = useWindowDimemsions()

//    console.log(queue,width)
  return (
    <Container  maxWidth='lg'>
        
        <Grid container className={classes.container}> 
            <Grid item sm={queue === false || reduxStoreQueue.length<1?12:9} className={classes.row}>
                <div style={{fontWeight:"bold"}}>
                   {result === 'gallery' && current==='gallery' ?  
                    <Chip label='CURRENT PROPERTIES' variant='outlined'  style={{color:'white',background:'#263238',borderColor:'orange'}}   className={classes.font2}/>
                    :<Chip label='CURRENT PROPERTIES' onClick={currentProperties}  variant='outlined'   className={classes.font2}/>
                    }
                     
                    { result === 'buy' && <Chip label='FOR SALE' variant='outlined'   className={classes.font2}  style={{color:'white',background:'#263238',borderColor:'orange'}}/>}
                    {result !=='buy'&&  
                    <Chip label='FOR SALE' variant='outlined' onClick={forSale}  className={classes.font2}/>
                    }
                    { result === 'rent'&&<Chip label='FOR RENT' variant='outlined'   className={classes.font2} style={{color:'white',background:'#263238',borderColor:'orange'}}/>}
                    { result !=='rent'&&
                    <Chip label='FOR RENT' variant='outlined' onClick={forRent}    className={classes.font2} />
                    } 
                    {current === 'apartments'?
                    <Chip label='APARTMENTS' variant='outlined' onClick={()=>setCurrent('apartments')}  style={{color:'white',background:'#263238',borderColor:'orange'}}   className={classes.font2}/>
                    :<Chip label='APARTMENTS' variant='outlined' onClick={apartments}    className={classes.font2}/>
                    }
                    {current === 'shops'?
                    <Chip label='SHOPS' variant='outlined' onClick={()=>{setCurrent('shops')}}  style={{color:'white',background:'#263238',borderColor:'orange'}} className={classes.font2}/> 
                    :<Chip label='SHOPS' variant='outlined' onClick={()=>{shops();setCurrent('shops')}}  className={classes.font2}/> 
                    }
                    {reduxStoreQueue.length>=1 &&<Chip onClick={handleQueue} label={queue===false? 'OPEN QUEUE':'CLOSE QUEUE'} variant='outlined'   className={classes.font2}/>}                
                   
                    <InputBase 
                    className={classes.input1}
                    style={{float:reduxStoreQueue.length>0 && queue === true ?'left':'right'}}
                    placeholder='Search Properties'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    endAdornment={<Search fontSize='small' style={{fontSize:'14px',fontWeight:'bold',color:'orange'}}   />}
                    />
                </div>
                    
                    <CardItems  reduxStoreQueueFull={reduxStoreQueueFull}setReduxStoreQueueFull={setReduxStoreQueueFull}classes={classes} shift={queue === false || reduxStoreQueue.length<1 ?3:4} queue={queue} page={page} result={result2}/>
            </Grid>
            {(queue === true &&  reduxStoreQueue.length>0) &&
            <Grid item sm={3} className={classes.row} style={{paddingTop:120}}>
{/* 160,120 */}
            {/* {reduxStoreQueue.length>0 &&<h2 onClick={clearAllQueue}>'clear queue'</h2>} */}
                <Typography  className={classes.font3}><strong onClick={()=>{clearAllQueue();handleQueue()}}> Clear Queue</strong></Typography>
                {/* <Typography  className={classes.font3}>Items on Queue|<strong onClick={()=>{clearAllQueue();handleQueue()}}> Clear Queue</strong></Typography> */}
                <Sidebar  classes={classes} reduxStoreQueueFull={reduxStoreQueueFull}setReduxStoreQueueFull={setReduxStoreQueueFull}/> 
            </Grid>}
        </Grid>
    </Container>
  )
}
