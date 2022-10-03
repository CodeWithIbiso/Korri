import React, { useEffect, useState } from 'react'
import { CardMedia,Button,CardActions,CardContent,Typography, Card, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesByGallerySearch } from '../../actions/search';
import { getPropertiesById } from '../../actions/properties';

 

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
      // width:'100%' ,
      // height:'100%' ,
      // borderRadius:'12px',
      // borderBottomRightRadius:'25px'
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
export default function AccRel({propT,handleClick,mediaSet}) {
  const navigate = useNavigate
  // const {PropertyType,Location,Description,Furnishing} = propT
  // const [propT,setPropT] = useState('')
  // console.log(PropertyType)
  const PropertyType = propT?.PropertyType
  const theId = propT?._id
  const Location     = propT?.Location
  const Designation  = propT?.Designation
  const Furnishing   = propT?.Furnishing
  const [search,setSearch ]= useState([]) 
  // const [k,setK]=useState()

  const searchList=[PropertyType,Location,Designation,Furnishing]
  const [loaded,setLoaded]=useState(false)
  // console.log(propT) 
  const dispatch =useDispatch()
  useEffect(()=>{                     
  if(loaded ===false && searchList[0] !== undefined && searchList[1] !== undefined && searchList[2] !== undefined && searchList[3] !== undefined) {
  setSearch(searchList)
  const PropertyType = propT?.PropertyType
  const Location     = propT?.Location
  const Designation  = propT?.Designation
  const Furnishing   = propT?.Furnishing
  // console.log(searchList)
  dispatch(getPropertiesByGallerySearch({search})) 
  // dispatch(getPropertiesByGallerySearch({search:[PropertyType,Location,Designation,Furnishing]})) 
  setLoaded(true)
  }
},[propT])
  const r =useSelector((state)=>state.properties.properties)
//  console.log(r)
  const k = r?.filter((each)=>each._id !== theId)
  // setK(r2)
  // console.log(k)
  const scrollToTop=(each)=>{
    window.scrollTo({
      top:0,
      behavior: 'auto'
    })
    // mediaSet === 'video' &&  handleClick()
    navigate(`/product/${each?._id}`)
    dispatch(getPropertiesById(each?._id))
  }
   
     
    // dispatch(getPropertiesByGallerySearch({search:[PropertyType]}))
    // const {properties:reduxStoreProperties} =useSelector((state)=>state.properties)

    // if(reduxStoreProperties.length<1){
    // dispatch(getPropertiesByGallerySearch({search:[Location]}))
    // }else if(reduxStoreProperties.length<1){
    //   dispatch(getPropertiesByGallerySearch({search:[Designation]}))
    // }else if(reduxStoreProperties.length<1){
    //     dispatch(getPropertiesByGallerySearch({search:[Furnishing]}))
    // }

    // const properties= reduxStoreProperties.length>0 ? reduxStoreProperties.filter((each)=>each._id !== theId) : []
let properties   
if(k.length>4){  
     properties= k.slice(0,4)
}else{
      properties= k
}





  // const prop = [propT]
  const classes = useStyles()
  if(properties?.length<1){
    return(<></>)
  }else{
  return ( 
       <Container maxWidth="lg" className={classes.main}>
      
        <Grid container spacing={3} style={{marginBottom:'10px'}}>
          <Grid item sm={12} style={{ height: "" }}> 
          <strong>Related Products</strong>
          </Grid> 
        </Grid>  

        <Grid container spacing={3} style={{paddingBottom:'40px',background:''}}>
          <Grid item  xs={12} sm={12} className={classes.gallery}>
            <Grid container spacing={3} style={{}}>
              {properties?.map((each,index) => (
                <Grid item xs={12}sm={4}  lg={3}   key={each?._id} className={classes.cardgrid}> 
                  <Card raised className={classes.card} onClick={()=>scrollToTop(each)} component={Link} to={`/product/${each?._id}`} state={{index:[each?._id] }}>
                       <CardMedia className={classes.cardMedia}  image={each?.Image[0]}  title='Products' />  
                  </Card>
                  <div style={{display:'flex',justifyContent:'center',marginTop: '15px',alignItems:'center'}}>
                                    <Typography variant='body2' align='center'className={classes.cardobjectsNew}>
                                        {each?.PropertyType!==''&& (each?.PropertyType + ' | ')}{each?.DateAvailable!==''&& 'Available since '+each?.DateAvailable + ' | '}{each?.Location!==''&& 'Located in : '+each?.Location + ' | '}
                                        {each?.Bedrooms!==''&& (each?.Bedrooms + ' Bedrooms | ')}{each?.Baths!==''&& each?.Baths + ' Baths | '}
                                        {each?.Designation!==''&& 'Designated '+(each?.Designation + ' | ')}{each?.Kitchen!==''&& each?.Kitchen + ' Kitchens | '}
                                        {each?.Furnishing!==''&& (each?.Furnishing + ' | ')}{each?.RoomDimensions!==''&& each?.RoomDimensions + ' | '}
                                        {each?.PriceMonthlyYearly!==''&& (each?.PriceMonthlyYearly)}
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
