import React from 'react'
import {Card,  CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
 import { setGlobalQueueVisibility } from '../../actions/globalQueueState';
import { addGlobalQueue, removeFromGlobalQueue } from '../../actions/globalQueue';
import { PaginationItem } from '@mui/material';


export default function CardItems({classes,shift }) { 
  const  {properties:reduxStoreProperties,numberOfPages} =useSelector((state)=>state.globalProperties)
  const  { totalCued:reduxStoreQueueFull,ids:cueIds} =useSelector((state)=>state.globalQueue) 
   
 
  const  queue =useSelector((state)=>state.globalQueueState) 
   
  const dispatch = useDispatch() 
       
const initQueue=()=>{  
        queue === false && dispatch(setGlobalQueueVisibility())
        
      }  
  const deque=({index})=>{
     dispatch(removeFromGlobalQueue(index))  

  }
  const  loading =useSelector((state)=>state.loading.isLoading) 
  const parts = window.location.href.split('/')  

   
  let result
  const popped=parts.pop() 
  if(popped.includes('?')){
    const r  = popped.split('?')[1] 
    result = r.split('&')[0]
  }else{ 
    result = popped
  }
     
  // const result ='store'
  let page
  if(window.location.href.includes('?')){  
  const part2 = window.location.href.split('?')
  const part2split = part2[1].split('=') 
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
         <Grid container className={classes.heading} style={{minHeight:483}} spacing={3}> 
                       {loading ===true?
                        <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                        :
                        reduxStoreProperties?.length > 0?
                        reduxStoreProperties?.map((each,index) =>( 
                                each.Image.length >0?   
                                <Grid key={index} item xs={12} sm={shift===4?6:4} lg={shift} className={classes.cardgrid}> 
                                    <Card raised className={classes.card} component={Link} to={`/store/product/${each?._id}`} state={{index:[each?._id],reduxStoreProperties,theType:'globalProperties'}}>
                                     <CardMedia className={classes.cardMedia}  image={each?.Image[0]}  title='Products' />  
                                    </Card>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                    <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                    {each?.GlobalPropertyType!==''&& (each?.GlobalPropertyType + ' | ')}
                                    {each?.GlobalLocation!==''&& 'Located in : '+each?.GlobalLocation + ' | '}
                                    {each?.Designation!==''&& 'Designated '+(each?.Designation + ' | ')}{each?.GlobalQuantity!=='' &&  ' Quantity : '+ each?.GlobalQuantity +' | ' }
                                    {each?.GlobalPrice!==''&& 'Price: $ '+ (each?.GlobalPrice)}
                                    </Typography>
                                    <div>
                                    {cueIds?.includes(each._id) &&
                                      <Typography variant='body2' align='center'className={classes.cardobjectsNew}><strong>Queued | <strong style={{color:'orange'}} onClick={()=>deque({index:each?._id})}>REMOVE FROM QUEUE</strong></strong></Typography> 
                                       }
                                      {reduxStoreQueueFull<5 && !cueIds?.includes(each._id) &&  
                                     <Typography variant='body2' 
                                                onClick={
                                                  (e)=>{
                                                  dispatch(addGlobalQueue(each)) 
                                                  initQueue()  
                                                    }
                                                  }   align='center'className={classes.cardobjectsNew}><strong>Add to queue</strong>  
                                     </Typography> 
                                      }{reduxStoreQueueFull>4 && !cueIds?.includes(each._id) &&  
                                        <Typography variant='body2' align='center'className={classes.cardobjectsNew} style={{color:'gray',textDecoration:'',fontFamily:'IBM Plex Sans, sans-serif',}}><strong>Add to queue</strong>  
                                        {/* <Typography variant='body2' align='center'className={classes.cardobjectsNew} style={{color:'gray',textDecoration:'line-through'}}><strong>Add to queue</strong>   */}
                                          </Typography>  }
                                          </div>
                                    </div>                                      
                                    {/* <Typography variant='body2' align='center'className={classes.cardobjects}>20 Durhum Road, San Anselmo $1.655M</Typography>
                                        <Typography variant='body2' align='center'className={classes.cardobjects}>5 BD . BA .1,740 + SQFT</Typography>
                                        <Typography variant='body2' align='center'className={classes.cardobjects}>VIEW LISTING -</Typography> */}
      
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
        {/* <Typography variant='body2'onClick={handleQueue}  align='center'className={classes.cardobjects}>ADD TO QUEUE</Typography> */}

        {numberOfPages>1 &&     <Grid item className={classes.bottomText} xs={12} sm={12}>
                 <Pagination 
                    style={{borderRadius:'50%'}}
                    count={numberOfPages}
                    page={Number(page) || 1} 
                    renderItem={(item)=>(
                      searchState===0 ?
                      <PaginationItem {...item} component={Link} to={`/store?${result}&page=${item.page}`}/>
                      : <PaginationItem {...item} component={Link} to={`/${linked}&page=${item.page}`}/>
                    
                    )}
                    />
            
            </Grid>
            }
        </Grid>
    </>
  )
}
