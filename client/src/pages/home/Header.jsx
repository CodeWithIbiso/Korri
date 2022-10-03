import {  InputBase, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles,Grid } from '@material-ui/core'  
// import img from '../assets/images/d.jpg'
import img from '../../assets/images/download.jpg'
// import img from '../assets/images/download.jpg'
// import {useNavigate} from 'react-router-dom'
// import { createTheme } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPropertiesBySearch } from '../../actions/search'
// const theme = createTheme();
// console.log(theme.Typography.h6)

const useStyles = makeStyles({
    root:{
        backgroundImage:`url(${img})`, 
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat', 
        height:'450px',
    },
    grid:{
        // background:'#100000',//3
        // background:'#260000',//3
        // background:'#263238',//3
        background:'rgba(0,0,0,0.55)',//3
        width:'100%',
        height:'100%'
    },
    gridItem:{
        marginTop:'100px',//'50px', 
        color:'#eeeeff',
        fontWeight:'small'  
    },
    texts:{
        fontFamily:'Segoe UI'
    },
    btn:{
        fontFamily:'Segoe UI',
        marginRight:'10px'
    },
    input1:{
        background:'white',
        color:'gray',
        border:'1px solid orange',
        // borderLeft:'2px solid orange',
        // borderTop:'2px solid orange',
        width:'30%',
        paddingLeft:'10px',
        paddingRight:'15px',
        borderRadius:'2px',
        // borderRadius:'12px',
        fontSize:'14px',
        fontFamily:'segoe ui',
        marginBottom:'15px',
        height:'35px',
        '& ::placeholder':{
            color:'black',
            fontWeight:'bold',
            // fontSize:'12px'
        }
    },
    
    input2:{
        background:'white',
        color:'gray',
        border:'2px solid #000010', 
        width:'90%',
        paddingLeft:'10px',
        paddingRight:'15px',
        borderRadius:'25px', 
        fontSize:'14px',
        fontFamily:'segoe ui',
        marginBottom:'15px',
        height:'65px',
        '& ::placeholder':{
            color:'black',
            fontWeight:'bold',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            // fontSize:'12px'
        }
    }

})


function useWindowDimemsions(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    const updateWidthAndHeight=()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect
    (() => {
      window.addEventListener("resize",updateWidthAndHeight)
    })
    return{
        width,
        height
    }
}

export default function Header() {
    const {width } = useWindowDimemsions()
    // console.log(width,'header')
    const searchParams={ Category:'',minPrice:'',Baths:'',Furnished:'' ,
    Type:'' ,maxPrice:'',Bedroom:'',roomSize:''
}
const dispatch = useDispatch()
const navigate = useNavigate()
const [search,setSearch]=useState('')
const [tags ,setTags]=useState(searchParams)
    const searchProperty=()=>{
        if(search.trim() || tags){ 
            // console.log(theLink)

            dispatch(getPropertiesBySearch({search,tags,navigate}))

            // navigate(theLink)
            setTags(searchParams)  
            setSearch('') 
        }else{
            navigate('/')
        }
}
    const classes= useStyles()
    // const navigate = useNavigate()
    const [theLink,setTheLink]=useState('')
    const handleKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
            console.log(e.target.value)
              window.location.href=e.target.value
        }
    }
    const searchChange=(e)=>setSearch(e.target.value)
    const handleSearchKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
               searchProperty()
        }
    }
  return (
      <>
      {width < 1018 ?
         <Grid container   style={{marginTop:50,width:'100%' }}> 
             <Grid item sm={12} xs={12}  style={{display:'flex',width:'100%',height:90,justifyContent:'center',alignItems:'center'}}>
             
             <InputBase 
                    className={classes.input2}
                    style={{fontSize:20,display:'flex',color:'#000030',justifyContent:'center',alignItems:'center'}}
                    placeholder='Search properties...'
                    value={search}
                    onChange={searchChange}
                    onKeyPress={handleSearchKeyPress}
                    startAdornment={<Search fontSize='small' style={{display:'flex', justifyContent:'center',alignItems:'center',fontSize:25 ,marginRight:19,fontWeight:'bold',color:'gray'}}   />}
             />
             </Grid>
            </Grid>
             
             :
         <Paper  square elevation={0}  className={classes.root}>
         <Grid container  className={classes.grid}>
            <Grid item sm={2}>
                
            </Grid>
            <Grid item  sm={10} className={classes.gridItem}>
                <Typography variant='h6' style={{fontSize:'14px',fontWeight:'500'}} className={classes.texts}>Hi Ibiso, partner with us today!</Typography>
                <Typography variant='h4' className={classes.texts}><strong>Buy, Rent  </strong>and <br/><strong>Sell</strong> Properties<br/> and <strong>more</strong> with <strong>Korri</strong></Typography>
                <Typography variant='h4'style={{fontWeight:'bold',fontSize:'12px',marginTop:'10px',textTransform:'',fontStyle:'italic'}} className={classes.texts}>With Korri . We've got you Covered ...</Typography>
                <div style={{marginTop:'25px'}}>
                <InputBase 
                    className={classes.input1}
                    placeholder='Enter Property Id or Link'
                    value={theLink}
                    onChange={(e)=>setTheLink(e.target.value)}
                    onKeyPress={handleKeyPress}
                    endAdornment={<Search fontSize='small' style={{fontSize:'14px',fontWeight:'bold',color:'orange'}}   />}
                />
                     </div>
         </Grid>
        </Grid>
        </Paper>
    }
    </>
  )
}
