import React, { useEffect, useState } from 'react'
import {Card, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties, removeProperties } from '../../actions/properties'
import { getGlobalProperties, removeGlobalProperties } from '../../actions/globalProperties';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment'
import decode from 'jwt-decode'
import { PaginationItem } from '@mui/material';
import { getAllPropertiesByPage } from '../../actions/allProperties';

 
export default function CardItems({classes,page,numberOfPages,setInputData,inputData,handleClear,at}) {
  const dispatch = useDispatch()  
  const location = useLocation()
  const navigate = useNavigate()
  
  const user = JSON.parse(localStorage.getItem('userProfile'))
  const  {properties,numberOfPages :pageG} =useSelector((state)=>state.creator)
  const autoLogOut=()=>{

    const token = user?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({type:'LOGOUT'})
        navigate('/')
      }
    }
  }
  autoLogOut()
  useEffect(()=>{
  autoLogOut()

  },[location])
  const localStorageDataId = JSON.parse(localStorage.getItem('userProfile'))?.result?._id
  // const localStorageDataId = JSON.parse(localStorage.getItem('userProfile')).result?._id




  
  
  const logOutAction=()=>{
        const localStorageData = JSON.parse(localStorage.getItem('userProfile'))
        localStorageData === null && navigate('/') 
    }
  
  
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
const editProperty=(each,index)=>{
  // inputData.Update ===true && setInputData({ ...inputData,Update:false})
  handleClear()
  logOutAction()
  setInputData({ ...each,Update:true })
  scrollToTop()
 }
const editGlobalProperty=(each,index)=>{
  // inputData.Update === true && setInputData({ ...inputData,Update:false})

  handleClear()
  logOutAction()
 
  setInputData({ ...each,Update:true ,GlobalUpdate:true})
  scrollToTop()
 } 
 const  loading =useSelector((state)=>state.loading.isLoading)  
 const parts = window.location.href.split('/')  

 let result
 const popped=parts.pop() 
 if(popped.includes('?')){
   const r  = popped.split('?')[1] 
  //  result = r.split('&')[0]
   result = r.split('&')[0]
 }else{ 
   result = at
 }
    
//  let page
//  const LIMIT=8
//  if(window.location.href.includes('?')){  
//  const part2 = window.location.href.split('?')
//  const part2split = part2[1].split('=') 
//  const thePage = part2split.length-1
//  page = part2split[thePage]
// }else{
//  page = 1
// }

// useEffect(() => {
//   page=1
// }, [at])

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
     const leM = 125
  
function useWindowDimemsions(){
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)
  const location = useLocation() 
  const updateWidthAndHeight=()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
  }
  useEffect
  (() => {
  window.addEventListener("resize",updateWidthAndHeight)
  },[location])
  return{
      width,
      height
  }
}
const {width } = useWindowDimemsions()
  return (
    <> 
     <Grid container className={classes.heading}  style={{minHeight:483}} spacing={3}>  
                        {
                       loading ===true &&at==='properties'?
                       <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit' size='40px'/></div>
                       :
                        at==='properties'&& properties?.length >0 ?
                        properties?.map((each,index) =>( 
                          each.Image.length >0 && each.creator===localStorageDataId? 

                                <Grid key={index} item xs={12} sm={width<=840 ?4:3} className={classes.cardgrid} style={{marginBottom:leM}}> 
                                    <Card raised className={classes.card} component={Link} to={`/product/${each?._id}`} state={{index,properties,theType:'properties'}}>
                                    <CardMedia className={classes.cardMedia}  image={each.Image[0]}  title='Products' />  
                                    </Card>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                    <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each.GlobalPropertyType!==''&& (each.GlobalPropertyType + ' | ')} {each.PropertyType!=='' && (each.PropertyType + ' | ')}
                                        {each.DateAvailable!==''&& 'Available '+moment(each.DateAvailable).fromNow() + ' | '}
                                        {each.GlobalLocation!==''&& 'Located in : '+each.GlobalLocation + ' | '}{each.Location!==''&& 'Located in : '+each.Location + ' | '}
                                        {each.Bedrooms!==''&& (each.Bedrooms + ' Bedrooms | ')}{each.Baths!==''&& each.Baths + ' Baths | '}{each.Baths!==''&& each.Baths + ' Baths | '}
                                        {each.Designation!==''&& 'Designated '+(each.Designation + ' | ')}{each.GlobalQuantity!=='' &&  ' Quantity : '+ each.GlobalQuantity +' | ' }
                                        {each.Furnishing!==''&& (each.Furnishing + ' | ')}{each.RoomDimensions!==''&& each.RoomDimensions + ' | '}
                                        {each.GlobalPrice!==''&& (each.GlobalPrice)}{each.PriceMonthlyYearly!==''&& (each.PriceMonthlyYearly)}
                                        
                                     </Typography> 
                                             {/*stuff under property detail  */}
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}>
                                              <strong  onClick={()=>{
                                                dispatch(removeProperties(each._id))  
                                                //  dispatch(removeProperties(index))  
                                                if(inputData.updateId===index){
                                                  handleClear()
                                                }
                                            }}
                                            style={{ color:'red',paddingRight:'4px'}}>Delete Property</strong>
                                            </Typography> 
                                            
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong>|</strong>
                                            </Typography>
                                            
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong  onClick={()=>{
                                                // totalImage.filter((targetIs)=> targetIs !== mediaPreprocessor))
                                                editProperty(each,index) 
                                            }}
                                                style={{paddingLeft:'4px',color:'orange'}}> Edit Property </strong></Typography>
                                            </div> 
                                    </div>                                      
                                    
                                <div> 
                                </div>
                                </Grid>

                                :
                                <div key={index}></div>
                        )):
                        at === 'properties' &&
                        <div style={{display:'flex',minWidth:'100%', flexDirection:'column' , alignItems:'center'}}>
                          
                          <h2 style={{fontFamily:'segoe ui'}}>No item found!</h2>
                          
                        </div> 
                        
                        } 
                         {
                         loading ===true &&at==='store'?
                         <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit'   size='40px'/></div>
                         :
                        at==='store'&&properties?.length>0 ?
                        properties.map((each,index) =>( 
                          each.Image.length >0  && each.creator===localStorageDataId? 

                                <Grid key={index} item xs={12} sm={3} className={classes.cardgrid} style={{marginBottom:leM}}> 
                                    <Card raised className={classes.card} component={Link} to={`/store/product/${each?._id}`} state={{index,reduxStoreProperties:properties,theType:'globalProperties'}}>
                                    <CardMedia className={classes.cardMedia}  image={each.Image[0]}  title='Products' />  
                                    </Card>
                                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                       <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each.GlobalPropertyType!==''&& (each.GlobalPropertyType + ' | ')} {each.PropertyType!=='' && (each.PropertyType + ' | ')}
                                        {each.DateAvailable!==''&& 'Available '+moment(each.DateAvailable).fromNow() + ' | '}
                                        {each.GlobalLocation!==''&& 'Located in : '+each.GlobalLocation + ' | '}{each.Location!==''&& 'Located in : '+each.Location + ' | '}
                                        {each.Bedrooms!==''&& (each.Bedrooms + ' Bedrooms | ')}{each.Baths!==''&& each.Baths + ' Baths | '}{each.Baths!==''&& each.Baths + ' Baths | '}
                                        {each.Designation!==''&& 'Designated '+(each.Designation + ' | ')}{each.GlobalQuantity!=='' &&  ' Quantity : '+ each.GlobalQuantity +' | ' }
                                        {each.Furnishing!==''&& (each.Furnishing + ' | ')}{each.RoomDimensions!==''&& each.RoomDimensions + ' | '}
                                        {each.GlobalPrice!==''&& (each.GlobalPrice)}{each.PriceMonthlyYearly!==''&& (each.PriceMonthlyYearly)}
                                        </Typography> 
                                          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                       
                                     
                                     <Typography onClick={()=>{
                                            dispatch(removeGlobalProperties(each._id)
                                            )
                                            // Update:false,updateId:'',GlobalUpdate:false
                                            if(inputData.GlobalUpdate === true && inputData.updateId===index){
                                              handleClear()
                                            } 
                                        }} variant='body2' align='center'className={classes.cardobjectsNew}><strong
                                        style={{ color:'red'}}
                                        >Delete Property</strong><strong style={{color:'orange',paddingRight:'4px'}}> - G</strong></Typography> 
                                      
                                        
                                        <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong>|</strong>
                                        </Typography>
                                         
                                         <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong  onClick={()=>{
                                            // totalImage.filter((targetIs)=> targetIs !== mediaPreprocessor))
                                            editGlobalProperty(each,index) 
                                        }}
                                            style={{paddingLeft:'4px',color:'orange'}}> Edit Property </strong></Typography>
                                          </div> 
                                     </div>
                                {/* <div> </div> */}
                                </Grid>

                                :
                                <div key={index}></div>
                        )):
                        at === 'store' &&
                        <div style={{display:'flex',minWidth:'100%', flexDirection:'column' , alignItems:'center'}}>
                          
                          <h2 style={{fontFamily:'segoe ui'}}>No item found!</h2>
                          
                        </div> 
                        
                        } 
                        {
                         loading ===true &&at==='search'?
                         <div style={{display:'flex',minHeight:'100%',minWidth:'100%', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}><CircularProgress color='inherit'   size='40px'/></div>
                         :
                        at==='search'&&properties?.length>0 ?
                        properties.map((each,index) =>( 
                          each.Image.length >0  && each.creator===localStorageDataId? 

                                <Grid key={index} item xs={12} sm={3} className={classes.cardgrid} style={{marginBottom:leM}}> 
                                    <Card raised className={classes.card} component={Link} to={`/store/product/${each?._id}`} state={{index,reduxStoreProperties:properties,theType:'globalProperties'}}>
                                    <CardMedia className={classes.cardMedia}  image={each.Image[0]}  title='Products' />  
                                    </Card>
                                    <div style={{display:'flex',flexDirection:'column',  justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                    <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each.GlobalPropertyType!==''&& (each.GlobalPropertyType + ' | ')} {each.PropertyType!=='' && (each.PropertyType + ' | ')}
                                        {each.DateAvailable!==''&& 'Available '+moment(each.DateAvailable).fromNow() + ' | '}
                                        {each.GlobalLocation!==''&& 'Located in : '+each.GlobalLocation + ' | '}{each.Location!==''&& 'Located in : '+each.Location + ' | '}
                                        {each.Bedrooms!==''&& (each.Bedrooms + ' Bedrooms | ')}{each.Baths!==''&& each.Baths + ' Baths | '}{each.Baths!==''&& each.Baths + ' Baths | '}
                                        {each.Designation!==''&& 'Designated '+(each.Designation + ' | ')}{each.GlobalQuantity!=='' &&  ' Quantity : '+ each.GlobalQuantity +' | ' }
                                        {each.Furnishing!==''&& (each.Furnishing + ' | ')}{each.RoomDimensions!==''&& each.RoomDimensions + ' | '}
                                        {each.GlobalPrice!==''&& (each.GlobalPrice)}{each.PriceMonthlyYearly!==''&& (each.PriceMonthlyYearly)}
                                        </Typography> 
                                        {each.PropertyType!==''&&
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}>
                                              <strong  onClick={()=>{
                                                dispatch(removeProperties(each._id))  
                                                //  dispatch(removeProperties(index))  
                                                if(inputData.updateId===index){
                                                  handleClear()
                                                }
                                            }}
                                            style={{ color:'red',paddingRight:'4px'}}>Delete Property</strong>
                                            </Typography> 
                                            
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong>|</strong>
                                            </Typography>
                                            
                                            <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong  onClick={()=>{
                                                // totalImage.filter((targetIs)=> targetIs !== mediaPreprocessor))
                                                editProperty(each,index) 
                                            }}
                                                style={{paddingLeft:'4px',color:'orange'}}> Edit Property </strong></Typography>
                                            </div> } 
                                          {each.PropertyType===''&&
                                          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                       
                                     
                                     <Typography onClick={()=>{
                                            dispatch(removeGlobalProperties(each._id)
                                            )
                                            // Update:false,updateId:'',GlobalUpdate:false
                                            if(inputData.GlobalUpdate === true && inputData.updateId===index){
                                              handleClear()
                                            } 
                                        }} variant='body2' align='center'className={classes.cardobjectsNew}><strong
                                        style={{ color:'red'}}
                                        >Delete Property</strong><strong style={{color:'orange',paddingRight:'4px'}}> - G</strong></Typography> 
                                      
                                        
                                        <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong>|</strong>
                                        </Typography>
                                         
                                         <Typography  variant='body2' align='center'className={classes.cardobjectsNew}><strong  onClick={()=>{
                                            // totalImage.filter((targetIs)=> targetIs !== mediaPreprocessor))
                                            editGlobalProperty(each,index) 
                                        }}
                                            style={{paddingLeft:'4px',color:'orange'}}> Edit Property </strong></Typography>
                                          </div>}
                                     </div>
                                {/* <div> </div> */}
                                </Grid>

                                :
                                <div key={index}></div>
                        )):
                        at === 'search' &&
                        <div style={{display:'flex',minWidth:'100%', flexDirection:'column' , alignItems:'center'}}>
                          
                          <h2 style={{fontFamily:'segoe ui'}}>No item found!</h2>
                          
                        </div> 
                        
                        } 
         </Grid> 
  {pageG>1 &&
        <Grid container>
            <Grid item className={classes.bottomText}  xs={12} sm={12}>
                 <Pagination 
                  style={{borderRadius:'50%' }}
                  count={pageG}
                  page={Number(page) || 1} 
                  renderItem={(item)=>(
                    searchState===0 ?
                    <PaginationItem {...item} component={Link} to={`/account?page=${item.page}`}/>
                    : 
                    <PaginationItem {...item} component={Link} to={`/${linked}&page=${item.page}`}/> 
                  )}
                 />
            </Grid>
           
        </Grid>  }
    </>
  )
}
