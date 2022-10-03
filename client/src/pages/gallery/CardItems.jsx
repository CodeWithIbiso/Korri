import React, { useEffect, useState } from 'react'
import {Card,  CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';

import img from '../../assets/images/download.jpg'
import img1 from '../../assets/images/j.jpg'
import img2 from '../../assets/images/house.jpg'
// import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { addQueue, clearQueue, removeFromQueue } from '../../actions/queue';
import { setQueueVisibility } from '../../actions/queueState';
import { getProperties, getPropertiesById } from '../../actions/properties';
import {Pagination , PaginationItem } from '@mui/material';
 
 
export default function CardItems({classes,shift}) { 
 // export default function CardItems({classes,shift,queue,setQueue}) { 
  const location = useLocation()
  const  {properties:reduxStoreProperties,numberOfPages} =useSelector((state)=>state.properties)
  // console.log(reduxStoreProperties)
  
  const  cue=useSelector((state)=>state.queue) 
  const   reduxStoreQueue=cue?.queue
  const    cueIds = cue?.ids
  const  reduxStoreQueueFull=cue?.totalCued
  // const [reduxStoreQueueFull,setReduxStoreQueueFull] = useState(0)
  const  queue =useSelector((state)=>state.queueState) 
  const route = location.state
  // console.log(route)//null
  // const scrollToTop=()=>{
  //   window.scrollTo({
  //     top:0,    
  //     behavior: 'smooth'
  //     // behavior:'auto'
  //   })
  // }
  // useEffect(()=>{
  //   console.log(location)
  //   scrollToTop()
  // },[])
  const x=''
      const dispatch = useDispatch() 
       
      const initQueue=()=>{  
        queue === false && dispatch(setQueueVisibility())
        
      }  
       
      // const initQueue=()=>{  
      //   queue!==true && setQueue(true)
        
      // } 
  useEffect(()=>{
  },[reduxStoreQueue])
   
  const deque=({index})=>{
    dispatch(removeFromQueue(index))  
  }
  const  loading =useSelector((state)=>state.loading.isLoading) 

  // function useQuery(){
  //   return new URLSearchParams(useLocation.search) 
  // }
  const parts = window.location.href.split('/')  

   
  let result
  const popped=parts.pop() 
  if (popped.slice(0,3) === 'buy'){
     result= 'buy'
  }else if (popped.slice(0,3) === 'ren'){
     result= 'rent'
  } if (popped.slice(0,3) === 'gal'){
     result = 'gallery'
  } 
  let page
  if(window.location.href.includes('?')){  
  const part2 = window.location.href.split('?')
  const part2split = part2[1].split('=')
  // console.log(part2split)
  // console.log(part2split?.length)
  //  page = part2split[1] 
  const thePage = part2split.length-1
  page = part2split[thePage]
}else{
  page = 1
}
let searchState 
let linked
  if(window.location.href.includes('/')){  
    const part1= window.location.href.split('/')
    const part2=part1[part1.length-1]
    if (part2.includes('?') && !part2.includes('&')){
    const toShow = part2.split('?')
    linked = toShow[0]
    searchState=0
    }
    else if (part2.includes('?') && part2.includes('&')){
      const toShow = part2.split('&')
      linked = toShow[0]
      searchState=1
      }else{
        searchState=0   
        linked = part2
        // if(window.location.href.includes('/'))
      }
    }else{
      linked = window.location.href
    }
 
  return (
     <>  
         <Grid container className={classes.heading} style={{minHeight:483}}  spacing={3}>  
                       {
                       loading ===true?
                        <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                        // <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='80px'/></div>
                        :
                        reduxStoreProperties?.length > 0?
                        reduxStoreProperties?.map((each,index) =>( 
                                each?.Image.length >0?   
                                <Grid key={index} item xs={12} sm={shift===4?6:4} lg={shift} className={classes.cardgrid} style={{marginBottom:180}}> 
                                    <Card raised className={classes.card}  component={Link} to={`/product/${each?._id}`}    state={{index:[each._id],reduxStoreProperties,theType:'properties'}}>
                                    <CardMedia className={classes.cardMedia}  image={each?.Image[0]}  title='Products' />  
                                    </Card>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                    <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each?.PropertyType!==''&& (each?.PropertyType + ' | ')}{each?.DateAvailable!==''&& 'Available since '+each?.DateAvailable + ' | '}{each?.Location!==''&& 'Located in : '+each?.Location + ' | '}
                                        {each?.Bedrooms!==''&& (each?.Bedrooms + ' Bedrooms | ')}{each?.Baths!==''&& each.Baths + ' Baths | '}
                                        {each?.Designation!==''&& 'Designated '+(each?.Designation + ' | ')}{each?.Kitchen!==''&& each?.Kitchen + ' Kitchens | '}
                                        {each?.Furnishing!==''&& (each?.Furnishing + ' | ')}{each?.RoomDimensions!==''&& each?.RoomDimensions + ' | '}
                                        {each?.PriceMonthlyYearly!==''&& (each?.PriceMonthlyYearly)}
                                    
                                  </Typography>
                                  <div>
                                  {cueIds?.includes(each._id)&&
                                  <Typography variant='body2' align='center'className={classes.cardobjectsNew}><strong>Queued | <strong style={{color:'orange'}} onClick={()=>deque({index:each._id})}>REMOVE FROM QUEUE</strong></strong></Typography> 
                                  }
                                  {reduxStoreQueueFull<5 && !cueIds?.includes(each._id) &&  
                                  <Typography variant='body2'   onClick={ (e)=>{dispatch(addQueue(each)) ; initQueue();    ;}  }   align='center'className={classes.cardobjectsNew}><strong>Add to queue</strong>  
                                  </Typography>  } 
                                  {reduxStoreQueueFull>4 && !cueIds?.includes(each._id) &&  
                                  <Typography variant='body2' align='center'className={classes.cardobjectsNew} style={{color:'gray',textDecoration:''}}><strong>Add to queue</strong>  
                                    </Typography>  }
                                    </div>
                                  
                                    </div>                                      
                                    
                                <div> 
                                </div>
                                </Grid>

                                :
                                <div key={index}></div>
                        )):
                        <div style={{display:'flex',minWidth:'100%', flexDirection:'column' , alignItems:'center'}}>
                          
                          <h2 style={{fontFamily:'segoe ui'}}>No item found!</h2>
                          
                        </div> 

                        } 
         </Grid> 
        <Grid container>

            {numberOfPages>1 && <Grid item className={classes.bottomText}xs={12}  sm={12}>
                 <Pagination 
                    style={{borderRadius:'50%'}}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    // variant='outlined'
                    // color='secondary'
                    // onChange={dispatch( getProperties(page))}
                    // onClick={ dispatch( getProperties(page)|| 1)}
                    renderItem={(item)=>(
                      searchState===0 ?
                      <PaginationItem {...item} component={Link} to={`/gallery?${result}&page=${item.page}`}/>
                      // <PaginationItem {...item} component={Link} to={`/${result}?page=${item.page}`}/>
                      : <PaginationItem {...item} component={Link} to={`/${linked}&page=${item.page}`}/>
                      // <PaginationItem {...item} component={Link} to={`/${result}?page=${item.page}`}/>
                    )}
                    // renderItem={(item)=>( 
                    //   <PaginationItem {...item} component={Link} to={`/${result}?page=${item.page}`}/>
                    //   )}
                 />
            </Grid>}
        </Grid>
    </>
  )
}
