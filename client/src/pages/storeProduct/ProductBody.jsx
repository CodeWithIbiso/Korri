import React, { useEffect, useState } from "react";
import {Container,Grid, Paper, Typography,Button, InputBase} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import img from "../../assets/images/download.jpg"; 
import AccRel from "./AccRel";
import { Search } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {getGlobalPropertiesById} from '../../actions/globalProperties' 
const useStyles = makeStyles({ 
  main: {
    background: "",
    width: "100%",
  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    minWidth:'100%' ,
    display:'flex'
  },
  container: {
    height: "450px",
    background: "",
  },
  gallery: {
    height: "70px"
  } 
});
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
export default function ProductBody() { 
  const {width } = useWindowDimemsions()
  const dispatch = useDispatch()
  const handleClick=()=>{
    mediaSet === 'image' && setMedia(()=>'video')
    mediaSet === 'video' && setMedia(()=>'image')
  }
  const [got,setGot]=useState(false)
  const location = useLocation() 
  const parts = window.location.href.split('/')
  const result=parts.pop() 

  const [mediaSet,setMedia]=useState('image') 

  const   {properties:reduxStoreProperties} =useSelector((state)=>state.globalProperties)
  const theType= 'globalProperties'
  const _id = result
  // console.log(result)
  got === false && dispatch(getGlobalPropertiesById(_id))  
  got === false && setGot(true)
  // got === false && console.log(got)
  const theProperty = useSelector((state)=>state.globalPropertyById)
  // const theProperty = reduxStoreProperties.filter((property)=>property._id === _id) 

  const each = theProperty[0]

  const [currentImage,setCurrentImage]=useState(0) 
  const classes = useStyles();
  return (
      <Container maxWidth={'xl'} style={{background:'',padding:'0px',paddingTop:0}}> 
        <Grid container style={{background:'black'}}> 
            <Grid item  xs={12} sm={12} style={{maxHeight:'80vh',minHeight:'80vh',padding:'15px',paddingLeft:'2vw',paddingRight:'2vw'}}>
             {mediaSet === 'image'&&      
                <div style={{backgroundImage: `url(${theProperty[0]?.Image[currentImage]})`,backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat",minHeight: "100%",minWidth:'100%',display:'flex'}}>
                 
                <div style={{display: "flex",color: "white",fontWeight: "500px",width: "100%",justifyContent: "center",alignItems:'self-end'}}>
                
                {theProperty[0]?.Image.map((image,index)=>
                <Typography  key={index} variant="body1" style={{padding:'10px',color:currentImage===index?'orange':'white'}} onClick={()=>setCurrentImage(index)}>{"o"}</Typography>  
                )}
                
                </div> 
                
              </div>
                }
            {mediaSet === 'video'&&  
            // <video src={theProperty[0].Video}  width='300px' height='240px' autoPlay loop muted  controls/>
            <div style={{backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat",height: "100%",width:'100%',display:'flex'}}>
                    <video src={theProperty[0].Video}  width='100%' height='100%' autoPlay loop muted  controls/>
            </div>
            }
   

            </Grid> 
        </Grid>
            {/* Property info*/}
          <Container   style={{paddingLeft:'3vw',paddingRight:'3vw',paddingBottom:'35px'}}>
          {/* sm={6} */}
           <Grid container spacing={2} style={{fontWeight:'bold', paddingTop:15}}>
                      <Grid item xs={12}sm={12}>
                      {/* <Grid item sm={3}> */}
                        <div  style={{display:'flex',flexDirection:'row',width:'100%' }}>
                        <Button onClick={()=>setMedia(()=>'image')}variant='outlined' style={{borderRadius:0, fontFamily:'segoe ui',minHeight:'55px',fontSize:12,padding:25}} >Image View</Button>
                        <Button onClick={()=>setMedia(()=>'video')}variant='outlined' style={{borderRadius:0, fontFamily:'segoe ui',minHeight:'55px',fontSize:12,padding:25}} >Video</Button>
                        <Button variant='outlined' style={{borderRadius:0, fontFamily:'segoe ui',minHeight:'55px',fontSize:12,padding:25}}>Map View</Button>
                        <Button variant='outlined' style={{borderRadius:0, fontFamily:'segoe ui',minHeight:'55px',fontSize:12,padding:25}}>Booking</Button>
                        </div>
                      </Grid>
            </Grid>
            <Grid container style={{paddingTop:'15px'}} spacing={3}> 
               <Grid item sm={6} style={{background:''}}>
                    <Paper style={{borderRadius:0,fontFamily:'segoe ui' ,lineHeight:'5px', padding:15,minWidth:'50px',background:'#ede7f6',minHeight:'50px'}}>
                     <strong style={{fontWeight:500,lineHeight:'25px'}}><h3 style={{marginTop:0, fontWeight:500}}>PROPERTY DESCRIPTION:</h3>{each?.Description ===''?<p style={{color:'gray'}}>No property description found !</p>:each?.Description}</strong>
                 {theType === 'properties' &&  
                 <Grid container style={{marginTop:70,fontFamily:'segoe ui'}}>
                      <Grid item sm={6}>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong> Property type : </strong>{each?.PropertyType}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Baths :</strong> {each?.Baths} </Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Designation :</strong> {each?.Designation} </Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Kitchens :</strong>  {each?.Kitchen}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Furnishing :</strong>  {each?.Furnishing} </Typography>
                      </Grid>
                      <Grid item sm={6}>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Location :</strong>  {each?.Location}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Room size :</strong>  {each?.RoomDimensions}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Price :</strong> {each?.PriceMonthlyYearly}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Owner details :</strong> Hidden</Typography> 
                      </Grid>
                      </Grid>
                      }
                      {theType === 'globalProperties'&&  <Grid container style={{marginTop:70,fontFamily:'segoe ui'}}>

                        <Grid item sm={6}>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong> Property type : </strong>{each?.GlobalPropertyType}</Typography>
                         <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Designation :</strong>  {each?.Designation} </Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Quantity :</strong> {each?.GlobalQuantity} </Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Location :</strong>  {each?.GlobalLocation}</Typography>
                      </Grid>
                      <Grid item sm={6}>
                        {/* <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Location :</strong>  {each.Location}</Typography> */}
                         <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Price :</strong> {each?.GlobalPrice}</Typography>
                        <Typography variant='body2' style={{paddingBottom:5,fontFamily:'segoe ui'}}><strong>Owner details :</strong> Hidden</Typography> 
                      </Grid>
                    </Grid>}
                    </Paper>
                    <Paper style={{borderRadius:0,fontFamily:'segoe ui' ,lineHeight:'5px', padding:15,minWidth:'50px',background:'#ff80ab',minHeight:'50px',marginTop:10,color:''}}>
                      <strong style={{fontWeight:700,lineHeight:'25px'}}><h3 style={{marginTop:0, fontWeight:500,marginBottom:0}}>DISCLAIMER:</h3>This property is a five bedroom flat with a pool in the 
                      living room, it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.</strong>
                    </Paper>
               </Grid>
               <Grid item sm={6}>
                <Paper style={{borderRadius:0,fontFamily:'segoe ui' ,lineHeight:'5px', padding:15,minWidth:'50px',background:'#e1f5fe',minHeight:'50px' ,color:''}}>
                      <strong style={{fontWeight:700,color:'#263238',lineHeight:'25px'}}><h3 style={{marginTop:0, fontWeight:700,marginBottom:0}}>NOTICE:</h3>This property is a five bedroom flat with a pool in the 
                      living room, it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered. it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.
                      <br/>1. Lorem ipsum dolor siti amen fit solos po
                      <br/>2. Lorem ipsum dolor siti amen fit solos po
                      <br/>3. Lorem ipsum dolor siti amen fit solos po
                      <br/>4. Lorem ipsum dolor siti amen fit solos po
                      <br/>5. Lorem ipsum dolor siti amen fit solos po
                    </strong>
                    </Paper>
                    <div style={{minHeight:'170px',maxWidth:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <InputBase 
                      style={{border:'2px solid gray',width:'90%',paddingLeft:'10px',paddingRight:'10px',textAlign:'center',borderRadius:'5px',fontSize:'14px',fontFamily:'segoe ui' }}
                      placeholder='Enter your token'
                      endAdornment={<Search fontSize='small' style={{fontSize:'12px',color:'gray'}}   />}/>
                    <Button variant='contained' color='secondary' style={{minWidth:'90%',fontFamily:'segoe ui',marginTop:10,fontWeight:'300'}}>Verify token</Button>
                    <Button variant='contained' color='secondary'  style={{minWidth:'90%',background:'#01579b',marginTop:10,fontFamily:'segoe ui',fontWeight:'300'}}>Book</Button>
                    </div>
                    </Grid>
            </Grid> 
          </Container>
          <Grid xs={12} item className={classes.main}> 
            {/* Related Products*/}
            <AccRel classes={classes} propT={each} mediaSet={mediaSet} handleClick={handleClick}/> 
          </Grid  > 
      </Container>
      
  );
}
