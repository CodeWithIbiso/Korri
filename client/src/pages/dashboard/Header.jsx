import { Button, ButtonGroup, Chip, CircularProgress, InputBase, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { makeStyles,Grid,Container } from '@material-ui/core'   
import img from '../../assets/images/download.jpg' 
import { createTheme } from '@material-ui/core'  
import { Skeleton, Stack } from '@mui/material'
import UnstyledSelectsMultipleG from './SelectsG'
import UnstyledSelectsMultiple from './Selects'
import FileBase from 'react-file-base64' 
import Body from './Body'
import { useDispatch, useSelector } from 'react-redux'
import { createProperties, getProperties, updateProperties } from '../../actions/properties'
import { createGlobalProperties, updateGlobalProperties } from '../../actions/globalProperties'
import Props from './Props'
import MultipleSelectPlaceholder from '../test/Fourth'


const useStyles = makeStyles({
    root:{ 
        paddingBottom:'25px'
    },
    grid:{ 
        width:'100%',
        height:'100%',
        // overflow:'hidden',
        // paddingBottom:'200px',
    },
    gridItem:{   
        background:'rgba(0,0,0,0.15)',
        marginTop:'20px',
        // minHeight:'410px',
        // maxHeight:'410px',
        // overflow:'hidden' 
    }, 
    font5:{
        marginTop:'21px',
        marginRight:'9px',
        fontFamily: ' Segoe UI',  
        padding:'0px',
        fontSize:'small',
        width:'125px',
        background:'#152238',
        color:'white',
        borderRadius:'0px',
        padding:'' 
    },
     imageTrue:{
        backgroundImage:`url(${img})`, 
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',   
        // height:'250px',
        // width:'80%',
        borderRadius:'12px',
        },
    imageFalse:{
        background:'#EDE7F6'
    }  ,
    firstDiv:{  
        marginTop:'10px',
    },
    firstDivNext:{  
        marginTop:'10px',
        marginBottom:'20px',
    },
    secondDiv:{  
        marginTop:'12px',
    },
    lastDiv:{  
        marginTop:'12px',
        // marginBottom:'5px',
    },
    theInput:{
        border:'2px solid black',
        // border:'2px solid #263238',
        // border:'2px solid white',
        background:'white',
        color:'black',
        width:'80%',
        paddingLeft:'10px',
        paddingRight:'10px',
        paddingTop:'3px',
        paddingBottom:'3px',
        borderRadius:'10px',
        fontSize:'14px',
        fontFamily:'segoe ui', 
    },
    theText:{
        fontSize:'0.875rem',
        fontFamily:'IBM Plex Sans, sans-serif',
        color:'#3e5060',
        fontWeight:'bold',
        paddingLeft:'10px',
        paddingBottom:'5px'
    },
    errorClass:{
        color:'red',
        
        marginTop:'21px', 
        fontFamily: ' Segoe UI',   
        fontSize:'medium',   
        marginLeft:'15px',
        fontWeight:'bold'
    }

})

function useWindowDimemsions(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    const updateWidthAndHeight=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(() => {
      window.addEventListener("resize",updateWidthAndHeight)
    })
    return{
        width,
        height
    }
}

export default function Header() {
    const {width,height} = useWindowDimemsions()
    // console.log(width,height)
    const navigate = useNavigate()
    const logOutAction=()=>{
        const localStorageData = JSON.parse(localStorage.getItem('userProfile'))
        localStorageData === null && navigate('/') 
    }


    const dispatch =useDispatch()
    const addNew= {
        PropertyType: '',Bedrooms: '',Baths: '',Designation: '',
        Kitchens: '',Furnishing: '',Location: '',RoomDimensions: '',
        PriceMonthlyYearly: '',DateAvailable: '',Image:[],Description: '', Video:'',

        GlobalPropertyType:'',GlobalPrice:'',GlobalQuantity:'',GlobalLocation:'',
        Update:false,GlobalUpdate:false
    }
    const  loading =useSelector((state)=>state.loading.isLoading)  

    const [totalImage,setTotalImage]=useState([])
    const [errorState,setErrorState]=useState('')
    const [inputData,setInputData]=useState(addNew)
    const [savedData,setSavedData]=useState([addNew])
    const [seeDesc,setSeeDesc] = useState(false)
    const [currentImage,setCurrentImage] = useState(null)
    const [imageIndex,setImageIndex] = useState(null)
    const [fileB,setFileB] = useState(false)
    const [fileA,setFileA] = useState(false)
    const [descriptionText,setdescriptionText] = useState('')
    const [globalPropertyType,setGlobalPropertyType] = useState('')
    const [globalPrice,setGlobalPrice] = useState('')
    const [globalQuantity,setGlobalQuantity] = useState('')
    const [globalLocation,setGlobalLocation] = useState('')
    const [globalSet,setGlobal]= useState(false) 
    const [Kitchens,setKitchens]= useState('') 
    const [vidSet,setVid]= useState(false)
    const [updating,setUpdating]=useState(inputData.Update)
// console.log('updaet'+inputData.GlobalPropertyType)
// inputData.Update === true && inputData.GlobalUpdate ===undefined  && setGlobal(false)
inputData.GlobalUpdate !== undefined && inputData.GlobalUpdate ===true && globalSet===false &&setGlobal(true) 

 
useEffect(() => {   
    // console.log(inputData)
    // console.log(inputData.Image.length)
    // if you use && it still doesnt matter,youre overidding update to false
    if (inputData.Update === true ){
        inputData.GlobalUpdate === false && setGlobal(false)
        inputData.GlobalUpdate === true && setGlobal(true)
        setVid(false) 
    // console.log(inputData.Image.length)
        setFileA(!fileA)
        setFileB(!fileB)
        inputData.GlobalPropertyType!=='' &&setGlobalPropertyType(inputData.GlobalPropertyType)
         setSeeDesc(false)
        setFileB((fileA)=>!fileA)
        setFileB((fileB)=>!fileB) 
        setInputData({...inputData, Update:false})
         setUpdating(true)
        setTotalImage(inputData.Image)  
    }
}, [inputData]) 
// }, [inputData.Update]) 



const handleUpdate=()=>{
        setUpdating(false)
        logOutAction()
        setKitchens('')

        setInputData({...inputData, Update:false})
        

        setInputData({...addNew,Update:false})

        inputData.GlobalUpdate === true && setGlobal(false) 
        globalSet === false && dispatch(updateProperties(inputData)) 
        globalSet === true && dispatch(updateGlobalProperties(inputData)) 
        setTotalImage([])
        setGlobalPropertyType('')
        setGlobalPrice('')
        setGlobalQuantity('')
        setGlobalLocation('') 
    }
    // const theCurrentDate=()=>{
    //     const today = new Date();
    //     const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //     const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     const dateTime = date+' '+time;
    //     const data = dateTime
    
    //     return data 
    // }  
    const handleSave=()=>{  
        if (globalSet===false? inputData.PropertyType==='' || inputData.Designation==='' ||inputData.Image.length<1 ||inputData.Location==='' ||inputData.PriceMonthlyYearly==='' 
           :globalSet===true && inputData.GlobalPropertyType==='' || inputData.Designation===''  ||inputData.Image.length<1 ||inputData.GlobalLocation==='' ||inputData.GlobalPrice===''){
            if(globalSet===false){
                if (inputData.PropertyType==='') setErrorState('Property type')
                else if (inputData.Designation==='')setErrorState('Designation')
                else if (inputData.Image.length<1) setErrorState('an Image')
                else if (inputData.Location==='') setErrorState('Location')
                else if (inputData.PriceMonthlyYearly==='')setErrorState('Price')  
                // else if (inputData.Kitchens==='')setErrorState('Kitchens')
            } 
            if(globalSet===true){
                if (inputData.GlobalPropertyType==='') setErrorState('a Property type')
                else if (inputData.Designation==='')setErrorState('Designation')
                else if (inputData.Image.length<1) setErrorState('an Image')
                else if (inputData.GlobalLocation==='') setErrorState('Location')
                else if (inputData.GlobalPrice==='')setErrorState('Price')

            }

        }else{
            setKitchens('')
            setErrorState('')
            logOutAction()
            setSavedData([...savedData,inputData])
            handleClear()
            setSeeDesc(false)
            setFileB((fileA)=>!fileA)
            setFileB((fileB)=>!fileB) 
 
            setInputData({...addNew, Update:false})

            globalSet === false && dispatch(createProperties({...inputData,DateAvailable: new Date() })) 
            // globalSet === false && dispatch(createProperties({...inputData,DateAvailable: theCurrentDate()})) 
            globalSet === true && dispatch(createGlobalProperties({...inputData,DateAvailable: new Date() })) 
            setTotalImage([])
            setGlobalPropertyType('')
            setGlobalPrice('')
            setGlobalQuantity('')
            setGlobalLocation('') 

            inputData.GlobalUpdate === true && setGlobal(false)
            
        } 
    } 
    const handleClear=()=>{
        // dispatch(getProperties())
        setErrorState('')
        setKitchens('')
        
        logOutAction()
 
        setGlobalPropertyType('') 
        setInputData(addNew) 
        // setTotalImage([])
        setdescriptionText('')
        setGlobal(false)
        setVid(false)
        setFileA(!fileA)
        setFileB(!fileB)
        setImageIndex(null)
        updating === true && setUpdating(false)

        setTotalImage([])
        // console.log(inputData.GlobalUpdate) 
    }
    const consoleLog=()=>{
       
        // console.log(savedData)
        // console.log(globalSet+'globalset')
        // console.log(savedData[0].Description)
        console.log(totalImage.length+'image length')

        console.log(imageIndex+'image index')
        console.log(inputData.Image.length+'image inputdata')
        console.log(globalSet+'globalSet')
        console.log( inputData.GlobalUpdate+'inputData.GlobalUpdate ')
        console.log( updating+'updating ')
        console.log('kitchens'+inputData.Kitchens)

    }
    const imgProcessor=  imageIndex==null?inputData.Image[(inputData.Image.length-1)]:inputData.Image[imageIndex]
    const vidProcessor=inputData.Video
    const mediaPreprocessor = vidSet === false?imgProcessor:vidProcessor
    
    const handleLeft=()=>{
        // imageIndex===null? setImageIndex(inputData.Image.length-2) : setImageIndex(imageIndex-1) 

        (inputData.Image.length>1 && imageIndex!==0) && (imageIndex===null? setImageIndex(inputData.Image.length-2) : setImageIndex(imageIndex-1) )
        
    }
    const handleRight=()=>{
        // setImageIndex(imageIndex+1)
        
        (inputData.Image.length>1 && imageIndex!==inputData.Image.length-1 && imageIndex!==null )&& (setImageIndex(imageIndex+1))
    }
    // const mediaPreprocessor =inputData.Image.slice(inputData.Image.length-1)
    const newDetails = [
        inputData.PropertyType,inputData.Bedrooms,inputData.Baths,
        inputData.Designation,inputData.Kitchens,inputData.Furnishing,
        inputData.Location,inputData.RoomDimensions,inputData.PriceMonthlyYearly,
        inputData.DateAvailable,mediaPreprocessor,inputData.Description,
    ]
    const handleDesc=()=>{
        vidSet === false && setSeeDesc(!seeDesc) 
        vidSet === true && setVid(false)
        // setVid(!vidSet)
    }
    useEffect(()=>{
        // console.log(inputData.Image.length)
        // console.log(totalImage.length)

         totalImage.length!=0 && setInputData(()=>({...inputData,Image:totalImage}))
        //  setInputData(()=>({...inputData,Image:totalImage}))


        // inputData.GlobalUpdate === undefined && setInputData(()=>({...inputData,Image:totalImage}))
        // console.log(totalImage)
    },[totalImage])

    // useEffect(()=>{
    //     console.log(imageIndex)
    // },[inputData.Image,imageIndex])
    
    
    useEffect(()=>{
        inputData.PropertyType === 'Other' ? setInputData(addNew):setInputData(inputData)
        inputData.PropertyType === 'Other' && setGlobal(true)
        inputData.PropertyType === 'Other' && setErrorState('')
        inputData.PropertyType === 'Other' && setKitchens('')
        inputData.PropertyType === 'Other' && setTotalImage([])
        inputData.PropertyType === 'Other' && setUpdating(false)
        
        // globalSet === true && console.log(inputData.PropertyType)
    },[inputData.PropertyType])
    
    const handleDelete=()=>{
        imageIndex === null && setTotalImage(()=>totalImage.filter((targetIs)=> targetIs !== mediaPreprocessor))
        imageIndex !== null && setTotalImage(()=>totalImage.filter((targetIs,index)=> index !== imageIndex))
        setFileB(!fileB)
        // imageIndex !== null && setImageIndex(null) // this works too instead of the two lines below
        imageIndex === 0  && setImageIndex(imageIndex)
        imageIndex >0  && setImageIndex(imageIndex-1)
        // console.log(totalImage[0]==mediaPreprocessor)
        // console.log(totalImage[1]==mediaPreprocessor)
        console.log(totalImage.length+'image length')
        console.log(imageIndex+'image index')
        

    } 
    const handleDeleteVideo=()=>{
        setInputData({...inputData,Video:''})    
        setFileA(!fileA)


    }
    const handleDescText=(e)=>{
        setdescriptionText(e.target.value)
    }
    useEffect(() => {
        setInputData({...inputData ,Description:descriptionText}) 
     }, [descriptionText])
    
     const handleGlobalPropertyType=(e)=>{
        setGlobalPropertyType(e.target.value)
    }  
    const handleKitchens=(e)=>{
        setKitchens(e.target.value)
        setInputData({...inputData,Kitchens:e.target.value})
    }  
    const handleGlobalPrice=(e)=>{
        setGlobalPrice(e.target.value) 
    } 
    const handleGlobalQuantity=(e)=>{
        setGlobalQuantity(e.target.value)
    } 
    const handleGlobalLocation=(e)=>{
        setGlobalLocation(e.target.value) 
    } 
    useEffect(() => { 
        setInputData({...inputData ,GlobalLocation:globalLocation}) 
     }, [globalLocation ])
     useEffect(() => { 
        setInputData({...inputData ,GlobalQuantity:globalQuantity})   
     }, [ globalQuantity ])
     useEffect(() => {
        setInputData({...inputData ,GlobalPrice:globalPrice})  
     }, [ globalPrice])
     useEffect(() => {
        setInputData({...inputData ,GlobalPropertyType:globalPropertyType})  
     }, [globalPropertyType])
      
    const handleVid=()=>{
        setVid((vidSet)=>!vidSet)
    }
    const classes= useStyles() 

    // const r =useSelector((state)=>state.properties.properties)
    // console.log(r)
  return (  
        <>
        <Container  maxWidth='lg'   className={classes.root}> 
        <Grid container  className={classes.grid}>
           <Grid item sm={12}xs={12} style={{}}> 
                    <Paper  square elevation={0}  className={classes.gridItem} >
                        <Grid container style={{flexDirection:width<=840 &&'column-reverse'}} >
                        {/* <Grid container > */}
                            <Grid item xs={12}   sm={width<=840 ?12:8}>
                              
                                <Container style={{marginTop:'10px',fontFamily:' Segoe UI', fontWeight:'bold' }}>
                                    <Typography  style={{marginTop:'10px',fontFamily:' Segoe UI', fontWeight:'bold' }}> <strong style={{color:'#f44336'}}>  Please fill in the Property Type first !</strong></Typography>
                                    {globalSet === false &&
                                    <Grid container>
                                        <Grid item sm={width<=840 ?6:4} xs={6}>                              
                                        {/* Land, other ... */}
                                             <MultipleSelectPlaceholder props={Props?.PropertyType}  setInputData={setInputData} inputData={inputData} propNameData={inputData.PropertyType}/> 
                                            <MultipleSelectPlaceholder props={Props?.Designation}  setInputData={setInputData} inputData={inputData} propNameData={inputData.Designation}/> 
                                            <MultipleSelectPlaceholder props={Props?.Bedrooms}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.Bedrooms}/> 
                                            <MultipleSelectPlaceholder props={Props?.Baths}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.Baths}/> 
                                         </Grid>
                                        <Grid item sm={width<=840 ?6:4} xs={6}>
                                             <MultipleSelectPlaceholder props={Props?.Kitchens}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.Kitchens}/> 
                                             <MultipleSelectPlaceholder props={Props?.Furnishing}  setInputData={setInputData} inputData={inputData} propNameData={inputData.Furnishing}/> 
                                             <MultipleSelectPlaceholder props={Props?.Location}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.Location}/> 
                                             <MultipleSelectPlaceholder props={Props?.RoomDimensions}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.RoomDimensions}/> 
                                         </Grid>
                                        <Grid item  sm={width<=840 ?6:4} xs={6}>
                                           <MultipleSelectPlaceholder props={Props?.PriceMonthlyYearly}  setInputData={setInputData} inputData={inputData}   propNameData={inputData.PriceMonthlyYearly}/> 
                                            <div>
                                            { totalImage.length>=1  &&
                                            <Typography onClick={()=>{ handleDelete()// setInputData(inputData.map((eachOne)=>[...eachOne])) // console.log(currentImage+'current image')// console.log(inputData.Image)
                                            }} style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                            fontWeight:'bold',color:'#dd2c00',fontWeight:'bold',fontSize: '0.875rem',
                                            margin: '10px 0',marginBottom:' 4px',marginLeft: '10px'}}>
                                            {imageIndex===0 || totalImage.length===1?'Delete cover photo':`Delete photo ${imageIndex===null?totalImage.length:imageIndex+1}`}
                                            </Typography>} 
                                            
                                            {totalImage.length<1 &&
                                            <Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                            fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',
                                            marginLeft: '10px',color:'#3E5060' }}>Enter Image
                                            </Typography>}
                                            {fileB===false && 
                                            <>
                                            <FileBase
                                                type='file'
                                                multiple={false}
                                                onDone = {({base64})=>{
                                                    totalImage===null&& setTotalImage(()=>[base64])
                                                    totalImage!==null&& setTotalImage(()=>[...totalImage,base64])
                                                    // console.log(base64.length+' image 1')
                                                    setImageIndex(null)
                                                    vidSet === true && setVid(false)
                                                    setSeeDesc(false)
                                                }}/>
                                            </>    
                                            }
                                            {fileB===true && <FileBase
                                                type='file'
                                                multiple={false}
                                                onDone = {({base64})=>{ 
                                                    totalImage===null&& setTotalImage(()=>[base64])
                                                    totalImage!==null&& setTotalImage(()=>[...totalImage,base64])
                                                    // console.log(base64.length+' image 1')
                                                    setImageIndex(null)
                                                    vidSet === true && setVid(false)
                                                    setSeeDesc(false)
                                                }}/>}
                                            </div>  
                                            <div>
            { inputData.Video.length>=1  &&
            <Typography onClick={()=>{ handleDeleteVideo()// setInputData(inputData.map((eachOne)=>[...eachOne])) // console.log(currentImage+'current image')// console.log(inputData.Image)
            }} style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
            fontWeight:'bold',color:'#dd2c00',fontWeight:'bold',fontSize: '0.875rem',
            margin: '10px 0',marginBottom:' 4px',marginLeft: '10px'}}>
            Delete video
            </Typography>} 
            { inputData.Video.length<1  &&<Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                            fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',
                                            marginLeft: '10px',color:'#3E5060' }}>Choose a  Video
                                            </Typography>}
                                            {fileA === false && <FileBase
                type='file'
                multiple={false}
                onDone = {({base64})=>{ 
                     setInputData(()=>({...inputData,Video:base64})) 
                    vidSet === false && setVid(true) 
                    setSeeDesc(false)
                }}/>}
                {fileA !== false && <FileBase
                    type='file'
                    multiple={false}
                    onDone = {({base64})=>{ 
                         setInputData(()=>({...inputData,Video:base64})) 
                        vidSet === false && setVid(true)
                        setSeeDesc(false)
                    }}/>}
                                              </div>
                                            <div>
                                            <Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',marginLeft: '10px',color:'#3E5060' }}>Description</Typography>
                                            <InputBase style={{paddingLeft:'10px',paddingRight:'10px',width:'170px',paddingTop:'6px',paddingBottom:'6px',minHeight:'62px',borderRadius:'5px',fontSize:'14px',fontFamily:'segoe ui',background:'white'}}
                                                onChange={handleDescText}
                                                onClick={()=>setSeeDesc(true)}
                                                value={inputData.Description}
                                                // value={descriptionText}
                                                placeholder='Enter a description'/>
                                            </div>
                                            {/* <UnstyledSelectsMultiple title='Description'/> */}
                                        </Grid>
                                    </Grid> 
                                    }{globalSet === true &&
                                    <Grid container spacing={4}>
                                    <Grid item sm={4}>                              
                                    {/* Land, other ... */}
                                    <MultipleSelectPlaceholder props={Props?.GlobalPropertyType}  setInputData={setInputData} inputData={inputData} propNameData={inputData.GlobalPropertyType}/>   
                                    <MultipleSelectPlaceholder props={Props?.Designation}  setInputData={setInputData} inputData={inputData} propNameData={inputData.Designation}/>   
                                    <MultipleSelectPlaceholder props={Props?.GlobalPrice}  setInputData={setInputData} inputData={inputData} propNameData={inputData.GlobalPrice}/>   
                                    <MultipleSelectPlaceholder props={Props?.GlobalQuantity}  setInputData={setInputData} inputData={inputData} propNameData={inputData.GlobalQuantity}/>   
                                                                                                                                                                                    
                                        
                                    </Grid>
                                        <Grid item sm={4}>        
                                        <MultipleSelectPlaceholder props={Props?.GlobalLocation}  setInputData={setInputData} inputData={inputData} propNameData={inputData.GlobalLocation}/>   
                                                
                                        {/* Land, other ... */}
                                        <div>
                                            <Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',marginLeft: '10px',color:'#3E5060' }}>Description</Typography>
                                            <InputBase style={{paddingLeft:'10px',paddingRight:'10px',width:'170px',paddingTop:'6px',paddingBottom:'6px',minHeight:'62px',borderRadius:'5px',fontSize:'14px',fontFamily:'segoe ui',background:'white'}}
                                                onChange={handleDescText}
                                                onClick={()=>setSeeDesc(true)}
                                                value={inputData.Description}
                                                // value={descriptionText}
                                                placeholder='Enter a description'/>
                                            </div>           
                                        </Grid>
                                        <Grid item sm={4}>
                                                                        <div>
                                                                        { totalImage.length>=1  &&
                                                                        <Typography onClick={()=>{ handleDelete()// setInputData(inputData.map((eachOne)=>[...eachOne])) // console.log(currentImage+'current image')// console.log(inputData.Image)
                                                                        }} style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                                                        fontWeight:'bold',color:'#dd2c00',fontWeight:'bold',fontSize: '0.875rem',
                                                                        margin: '10px 0',marginBottom:' 4px',marginLeft: '10px'}}>
                                                                        {imageIndex===0 || totalImage.length===1?'Delete cover photo':`Delete photo ${imageIndex===null?totalImage.length:imageIndex+1}`}
                                                                        </Typography>} 
                                                                        
                                                                        {totalImage.length<1 &&
                                                                        <Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                                                        fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',
                                                                        marginLeft: '10px',color:'#3E5060' }}>Enter Image
                                                                        </Typography>}
                                                                        {fileB===false && 
                                                                        <>
                                                                        <FileBase
                                                                            type='file'
                                                                            multiple={false}
                                                                            onDone = {({base64})=>{
                                                                                totalImage===null&& setTotalImage(()=>[base64])
                                                                                totalImage!==null&& setTotalImage(()=>[...totalImage,base64])
                                                                                setImageIndex(null)
                                                                                setSeeDesc(false)
                                                                                vidSet === true && setVid(false)
                                                                            }}/>
                                                                        </>    
                                                                        }
                                                                        {fileB===true && <FileBase
                                                                            type='file'
                                                                            multiple={false}
                                                                            onDone = {({base64})=>{ 
                                                                                totalImage===null&& setTotalImage(()=>[base64])
                                                                                totalImage!==null&& setTotalImage(()=>[...totalImage,base64])
                                                                                setImageIndex(null)
                                                                                vidSet === true && setVid(false)
                                                                                setSeeDesc(false)
                                                                            }}/>}
                                                                        </div> 
                                        <div>
                                        { inputData.Video.length>=1  &&
                                        <Typography onClick={()=>{ handleDeleteVideo()// setInputData(inputData.map((eachOne)=>[...eachOne])) // console.log(currentImage+'current image')// console.log(inputData.Image)
                                        }} style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                        fontWeight:'bold',color:'#dd2c00',fontWeight:'bold',fontSize: '0.875rem',
                                        margin: '10px 0',marginBottom:' 4px',marginLeft: '10px'}}>
                                        Delete video
                                        </Typography>} 
                                        { inputData.Video.length<1  &&<Typography style={{marginTop:'10px', fontFamily:' IBM Plex Sans, sans-serif',
                                                                        fontWeight:'bold',fontSize: '0.875rem',margin: '10px 0',marginBottom:' 4px',
                                                                        marginLeft: '10px',color:'#3E5060' }}>Choose a  Video
                                                                        </Typography>}
                                                                        {fileA === false && <FileBase
                                            type='file'
                                            multiple={false}
                                            onDone = {({base64})=>{ 
                                                setInputData(()=>({...inputData,Video:base64})) 
                                                vidSet === false && setVid(true) 
                                                setSeeDesc(false)
                                            }}/>}
                                            {fileA !== false && <FileBase
                                                type='file'
                                                multiple={false}
                                                onDone = {({base64})=>{ 
                                                    setInputData(()=>({...inputData,Video:base64})) 
                                                    vidSet === false && setVid(true)
                                                    setSeeDesc(false)
                                                }}/>}
                                        </div>
                                        
                                        </Grid> 
                                    </Grid> 
                                       }


                                    <div style={{display:"flex",justifyConten:'flex-end',paddingBottom:20}}>
                                        <Button onClick={handleClear}  style={{marginTop:'21px',marginRight:'9px',fontFamily: ' Segoe UI',fontSize:'small',width:'125px',background:globalSet === false?'#152238':'#e91e63',color:'white',borderRadius:'0px',padding:'' }}>CANCEL</Button>
                                        {updating === true && <Button onClick={handleUpdate}className={classes.font5}>UPDATE</Button>}
                                        {updating === false && <Button onClick={handleSave}className={classes.font5}>
                                        {loading===true&&
                                            <div style={{ marginRight:4}}><CircularProgress color='inherit' size='10px'/></div>
                                             }  
                                            SAVE</Button>}
                                        <Button onClick={consoleLog}className={classes.font5} style={{display:'none'}}>CHECK</Button>
                                        {errorState !==''&&<Typography className={classes.errorClass}>{`Must include ${errorState} *`}</Typography>}
                                     </div>
                                </Container> 
                            </Grid>
                            <Grid item xs={12}  sm={width<=840 ?12:4}  style={{borderLeft:'1px solid gray'}}>
                                <Stack spacing={1} style={{justifyContent:'center',alignItems:'center',background:'#152238', minHeight:'410px',maxHeight:'410px',}}>
                                    {/* <Skeleton variant="circular" width={40} height={40} /> */}
                                    <div style={{display:'flex',padding:'5px',color:'orange'}}>
                                        <Typography onClick={handleDesc}><strong style={{fontSize:'14px',fontFamily:'segoe ui'}}>{(seeDesc !== true && vidSet !== true)?<strong>See description </strong>:<strong>{'<<< '}Back</strong>}</strong></Typography>
                                        <div style={{paddingLeft:5,paddingRight:5}}>
                                        <Typography ><strong style={{fontSize:'14px'}}>{(seeDesc !== true && vidSet !== true)?<strong> | </strong>: ''}</strong></Typography>
                                        </div>
                                        <Typography onClick={handleVid}><strong style={{fontSize:'14px',fontFamily:'segoe ui'}}>{(seeDesc !== true && vidSet !== true)?<strong>See video </strong>:''}</strong></Typography>
                                    </div>
                                    {(seeDesc !== true)?
                                    <div style={{width:'100%'}}>
                                   <div style={{display:'flex',marginTop:'0px',justifyContent:'center',alignItems:'center'}}>
                                   <Typography onClick={handleLeft} variant='h5'style={{color:(inputData.Image.length>1 && imageIndex!==0) ?'green':'#152238',fontWeight:'bold',marginRight:'15px',marginLeft:'0px'}}>{`<`}</Typography>
                                      
                                     {vidSet === true  &&  <video src={mediaPreprocessor}  width='300px' height='240px' autoPlay loop muted  controls/> }
                                     {vidSet === false &&  <Skeleton variant="rectangular" animation={false}  height={240}  
                                    //  {vidSet === false &&  <Skeleton variant="rectangular" animation={false} width={300} height={240}  
                                     style={
                                         (inputData.Image.length<1)?
                                         {borderRadius:'12px',background:'#EDE7F6',width:'80%'}:
                                         { backgroundImage:`url(${mediaPreprocessor})`,
                                            backgroundPosition:'center',
                                            backgroundSize:'cover',
                                            backgroundRepeat:'no-repeat',
                                            borderRadius:'12px',width:'80%'}}></Skeleton>   }
                                   
                                    <Typography onClick={handleRight} variant='h5'style={{color:(inputData.Image.length>1 && imageIndex!==inputData.Image.length-1 && imageIndex!==null) ?'green':'#152238',fontWeight:'bold',marginRight:'0px',marginLeft:'15px'}}>{`>`}</Typography>
                                     </div>

                                    <div style={{display:'flex',marginLeft:'55px',marginRight:'55px'}}>
                                   {globalSet === false && <Typography variant="h5" style={{textAlign:'center',fontSize:'14px',color:'white',fontFamily:'segoe ui',fontWeight:'600',lineHeight:'20px',padding:'0px'}}> 
                                    {inputData.PropertyType !=='' && inputData.PropertyType + ' | '}  
                                      {inputData.DateAvailable!==''&& 'Available since '+inputData.DateAvailable + ' | '}   
                                      {inputData.Location!==''&& 'Located in : '+inputData.Location + ' | '}   
                                      {inputData.Bedrooms !=='' && inputData.Bedrooms + ' Bedrooms | '}   
                                      {inputData.Baths !=='' && inputData.Baths + ' Baths | '}   
                                      {inputData.Designation !=='' && ' Designated '+inputData.Designation + ' | '}   
                                      {/* {inputData.Toilets !=='' && inputData.Toilets + ' Toilets | '}    */}
                                      {inputData.Kitchens !=='' && inputData.Kitchens + ' Kitchens | '}   
                                      {inputData.Furnishing !=='' && inputData.Furnishing + ' | '}   
                                      {inputData.RoomDimensions !=='' && inputData.RoomDimensions + ' | '}   
                                      {inputData.PriceMonthlyYearly !=='' && inputData.PriceMonthlyYearly}             
                                          
                                    </Typography>}

                                   {globalSet === true &&  <Typography variant="h5" style={{textAlign:'center',fontSize:'14px',color:'white',fontFamily:'segoe ui',fontWeight:'600',lineHeight:'20px',padding:'0px'}}> 
                                      {inputData.GlobalPropertyType!==''&& (inputData.GlobalPropertyType + ' | ')}
                                      {inputData.GlobalLocation!==''&& 'Located in : '+inputData.GlobalLocation + ' | '}
                                       {inputData.Designation !=='' && ' Designated '+inputData.Designation + ' | '}   
                                       {inputData.GlobalPrice !=='' && '$ '+inputData.GlobalPrice}                  
                                      {inputData.GlobalQuantity !=='' && 'Quantity'+inputData.GlobalQuantity}                  
                                      {/* {inputData.GlobalLocation !=='' && ' | Location : '+ inputData.GlobalLocation}              */}
                                         
                                    </Typography>}
                                    </div>
                                    </div>
                                    :
                                    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Paper style={{ background:'#fafafa',width:'80%',fontFamily:'segoe ui', fontWeight:'400',fontSize:'14px',padding:'10px',minHeight:'240px',maxHeight:'240px',overflowX:'hidden',overflowY:'auto'}}>
                                            {inputData.Description}
                                            {/* {descriptionText} */}
                                        </Paper>
                                    </div>
                                    } 
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>  
            </Grid> 
        </Grid>
        <Grid container>
            <Grid item sm={6}>

                    <Paper style={{borderRadius:0,fontFamily:'segoe ui' ,lineHeight:'5px', padding:15,minWidth:'50px',background:'#f8bbd0',minHeight:'50px',marginTop:10,color:''}}>
                      <strong style={{fontWeight:500,lineHeight:'25px'}}><h3 style={{marginTop:0, fontWeight:700,marginBottom:0}}>DISCLAIMER:</h3>This property is a five bedroom flat with a pool in the 
                      living room, it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.it has sharks in the toilet but hold on they work here.
                      So if youre interested ..... check it out , book and lots more. We've
                      got you covered.</strong>
                    </Paper>
            </Grid>
        </Grid>
        </Container> 
        <Body setInputData={setInputData} handleClear={handleClear} inputData={inputData}/> 
        </>
  )
}
