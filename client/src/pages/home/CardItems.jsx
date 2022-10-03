import React from 'react'
import {Card,  CardMedia, Grid, Typography  } from '@material-ui/core';
 
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addQueue, removeFromQueue } from '../../actions/queue';
import { setQueueVisibility } from '../../actions/queueState';
  

export default function CardItems({classes}) {
  // const  reduxStoreProperties =[]
  const  reduxStoreProperties =useSelector((state)=>state.properties?.properties)
  const  { ids,totalCued:reduxStoreQueueFull} =useSelector((state)=>state.queue) 
  const  queue =useSelector((state)=>state.queueState) 
  const navigate = useNavigate()

  // const [reduxStoreQueueFull,setReduxStoreQueueFull] = useState(0)
  const dispatch = useDispatch() 
  const deque=({index})=>{
    // setReduxStoreQueueFull(reduxStoreQueueFull-1)
    dispatch(removeFromQueue(index))  
  }
  return (
    <> 
     <Grid container className={classes.heading}  style={{minHeight:'100%',minWidth:'100%'}} spacing={3}> 
                    {
                    reduxStoreProperties?.length > 0?
                    reduxStoreProperties.map((each,index) =>(
                        <Grid item xs={12} key={each._id} sm={6}  lg={4} style={{ width:'100%'}} className={classes.cardgrid}> 
                            <Card raised className={classes.card} key={each._id} component={Link} to={`/product/${each?._id}`} state={{index,reduxStoreProperties,theType:'properties'}}>

                                <CardMedia className={classes.cardMedia}  image={each.Image[0]}  title='Products' />  
                            </Card>
                            <div style={{marginTop: '15px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each.PropertyType!==''&& (each.PropertyType + ' | ')}{each.DateAvailable!==''&& 'Available since '+each.DateAvailable + ' | '}{each.Location!==''&& 'Located in : '+each.Location + ' | '}
                                        {each.Bedrooms!==''&& (each.Bedrooms + ' Bedrooms | ')}{each.Baths!==''&& each.Baths + ' Baths | '}
                                        {each.Designation!==''&& 'Designated '+(each.Designation + ' | ')}{each.Kitchen!==''&& each.Kitchen + ' Kitchens | '}
                                        {each.Furnishing!==''&& (each.Furnishing + ' | ')}{each.RoomDimensions!==''&& each.RoomDimensions + ' | '}
                                        {each.PriceMonthlyYearly!==''&& (each.PriceMonthlyYearly)}                                        
                                      
                                    </Typography>
                                    <div>
                                        {ids.includes(each._id)?
                                      <Typography variant='body2' align='center'className={classes.cardobjectsNew}><strong>Queued | <strong style={{color:'orange'}} onClick={()=>deque({index:each._id})}>Deque |</strong></strong>
                                      <Link style={{textDecoration:'none',color:'black' }} to={'/gallery' }><strong onClick={()=> queue === false && dispatch(setQueueVisibility())}  > view queue</strong></Link></Typography> 
                                     :
                                     <div>{
                                     reduxStoreQueueFull<5 && !ids?.includes(each._id) &&<Typography variant='body2'onClick={(e)=>{ dispatch(addQueue(each)) ;}}   align='center'className={classes.cardobjectsNew}><strong>Add to queue</strong>  </Typography> 
                                    }{ reduxStoreQueueFull>4 && !ids?.includes(each._id) && <Typography variant='body2'  align='center'className={classes.cardobjectsNew} style={{color:'gray',textDecoration:''}}><strong>Add to queue</strong>  </Typography> 
                                      }
                                    </div>
                                      }
                                      </div>
                            </div> 
                        </Grid>
                    ))
                    :
                        <div style={{display:'flex',minWidth:'100%', flexDirection:'column' , alignItems:'center'}}>
                          
                          <h2 style={{fontFamily:'segoe ui'}}>No item found!</h2>
                          
                        </div>  
                        
                    }
    </Grid> 
        <Grid container>
            <Grid item className={classes.bottomText} xs={12} sm={12}>
                 {/* <Pagination count={10} /> */}
                {/* <Typography className={classes.cardobjects}> SEE MORE...</Typography> */}
                <Typography onClick={()=>navigate('/gallery')} className={classes.font2}>{' CHECK OUT OUR GALLERY >>'}</Typography>
                </Grid>
        </Grid>
    </>
  )
}
