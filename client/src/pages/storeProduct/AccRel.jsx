import React, { useEffect, useState } from 'react'
import { CardMedia, Typography, Card, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalPropertiesByStoreSearch } from '../../actions/search';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import {  getGlobalPropertiesById } from '../../actions/globalProperties';

 

const useStyles = makeStyles({
    
  main: {
    background: "",
    width: "100%",
    color:''
  },
  gallery: {
    // height: "230px",
    color:'' 
  },
  card:{
    // borderBottomRightRadius:'35px',
    // borderTopLeftRadius:'35px',
    // borderRadius:'8px',
    color:' '
  }, 
  cardMedia:{
      width:'100%',
      minHeight:'100%'
  } ,
  cardobjectsNew:{
      fontFamily: 'Segoe UI', 
      fontSize:'12px',
      maxWidth:'270px'
  },
  cardgrid:{
    // textDecoration:'none',
    // color:'black',
    height:'250px',
    marginBottom:'110px'
},
}) 
export default function AccRel() {
  const parts = window.location.href.split('/')
  const result=parts.pop()  
  getGlobalPropertiesById(result)
  const theProperty = useSelector((state)=>state.globalPropertyById)
  const propT=theProperty[0]
  // console.log(theProperty)
  const classes = useStyles()
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const PropertyType = propT?.GlobalPropertyType
  const theId = propT?._id  
  const searchList=[PropertyType]
  // const searchList=[PropertyType,Location,Designation,price]
  const [loaded,setLoaded]=useState(false) 
  const r =useSelector((state)=>state.globalProperties.properties)
  // console.log(r)
  useEffect(()=>{
    // console.log('here boi')
    dispatch(getGlobalPropertiesByStoreSearch({search:searchList}))  
},[theProperty])
  useEffect(()=>{ 
    if(loaded ===false && searchList[0] !== undefined && searchList[1] !== undefined && searchList[2] !== undefined && searchList[3] !== undefined) {
     
    dispatch(getGlobalPropertiesByStoreSearch({search:searchList})) //later i will use this to finetune search
    setLoaded(true)
    
    }  
  },[propT,location]) 
  
  const k = r.filter((each)=>each._id !== theId)
  const scrollToTop=(each)=>{ 
    window.scrollTo({
      top:0,
      // behavior: 'smooth'
      behavior:'auto'
    })
    navigate(`/store/product/${each?._id}`)
    // console.log(each)
    dispatch(getGlobalPropertiesById(each?._id))
  } 
  let properties   
  if(k.length>4){  
      properties= k.slice(0,4)
  }else{
        properties= k
  } 
  // const properties= reduxStoreProperties.length>0 ? reduxStoreProperties.filter((each)=>each._id !== theId) : []
   
    // console.log(properties)


    if(properties?.length<1){
      // if(properties?.length<1){
    return(<></>)
  }else{
  return (
    <Container maxWidth="lg" className={classes.main}   >
      
        <Grid container spacing={3} style={{marginBottom:'10px'}}>
          <Grid item xs={12} sm={12} style={{ height: "" }}> 
          <strong>Related Products</strong>
          </Grid> 
        </Grid>  

        <Grid container spacing={3} style={{paddingBottom:'40px',background:''}}>
          <Grid item xs={12} sm={12} className={classes.gallery}>
            <Grid container spacing={3} style={{}}>
              {properties?.map((each,index) => (
                <Grid item xs={12}sm={4}  lg={3}  key={each?._id} className={classes.cardgrid}> 
                  <Card raised className={classes.card} onClick={()=>scrollToTop(each)} component={Link} to={`/store/product/${each?._id}`} state={{index:[each?._id] }}>
                  {/* <Card raised className={classes.card} onClick={scrollToTop} component={Link} to={`/store/product/${each?._id}`} state={{index:[each?._id] }}> */}
                       <CardMedia className={classes.cardMedia}  image={each?.Image[0]}  title='Products' />  
                  </Card>
                  <div style={{display:'flex',justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                     <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                    {each?.GlobalPropertyType!==''&& (each?.GlobalPropertyType + ' | ')}
                                    {each?.GlobalLocation!==''&& 'Located in : '+each?.GlobalLocation + ' | '}
                                    {each?.Designation!==''&& 'Designated '+(each?.Designation + ' | ')}{each?.GlobalQuantity!=='' &&  ' Quantity : '+ each?.GlobalQuantity +' | ' }
                                    {each?.GlobalPrice!==''&& 'Price: $ '+ (each?.GlobalPrice)}
                                    </Typography>
                                    
                   </div>
                </Grid>
              ))}
            </Grid>
          </Grid> 
        </Grid>  
 

      </Container> 
  )}
}
