import React, {   useState } from 'react'
import { Button,  Grid, InputBase, makeStyles, Paper,  Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons' 
import { useNavigate} from 'react-router-dom'
import { getPropertiesBySearch } from '../../actions/search';
import { useDispatch } from 'react-redux';

const useStyles=makeStyles({ 
    container:{ 
        padding:'0px', 
        margin:'0px',
        fontFamily:'segeo ui'
    },
    btn:{
        minWidth:'50px',
        borderRadius:'50%', 
    },
    textHead:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'25px'
    },
    theText:{
        // fontSize:'1.075vw',
        fontSize:'0.875rem',
        fontFamily:'IBM Plex Sans, sans-serif',
        color:'#3e5060',
        fontWeight:'bold',
        // paddingLeft:'10px',
        // paddingBottom:'5px'
    },
    theInput:{
        border:'2px solid #263238',
        background:'white',
        color:'black',
        width:'80%',
        // paddingLeft:'10px',
        // paddingRight:'10px', 
        // paddingTop:'3px',
        // paddingBottom:'3px',
        borderRadius:'10px',
        fontSize:'14px',
        fontFamily:'segoe ui', 
 
        paddingRight:'5px', 

    },
})
const values =['Abia','Umuahiah','Lagos','PortHarcourt','Owerri','Abia','Umuahiah','Lagos','PortHarcourt','Owerri']
const numbers =['3','53','2','34','4','3','53','2','34','4']

 
export default function Sidebar() { 
    const classes=useStyles()
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
    const handleKeyPress=(e)=>{ 
        if(e.key==='Enter'){ 
               searchProperty()
        }
    }
    const searchChange=(e)=>setSearch(e.target.value)
    const handleValue=(e)=>{
        setTags({...tags,[e.target.name]:e.target.value})
        // console.log(tags)
    }

    
     
    // console.log(width)
    return (

        <>
        
        <Paper  style={{padding:'15px',paddingTop:'30px',marginLeft:'15px',marginTop:'30px'}}>
             <InputBase 
                    style={{border:'2px solid gray',width:'100%',paddingLeft:'10px',paddingRight:'10px',borderRadius:'12px',fontSize:'14px',fontFamily:'segoe ui',marginBottom:'15px'}}
                    placeholder='Find a property'
                    value={search}
                    onChange={searchChange}
                    onKeyPress={handleKeyPress}
                    endAdornment={<Search fontSize='small' style={{fontSize:'12px',color:'gray'}}   />}
                />
         <Grid container  spacing={2} style={{background:'',height:'200px',padding:'15px'}}>
                <Grid item xs={6}> 
                <div className={classes.secondDiv}><Typography className={classes.theText}>Category</Typography><InputBase name={'Category'} className={classes.theInput} onChange={handleValue} value={tags.Category} placeholder={'For sale'} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Min price</Typography><InputBase name={'minPrice'}  className={classes.theInput} onChange={handleValue} value={tags.minPrice} placeholder={'50000'} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Baths</Typography><InputBase name={'Baths'}  className={classes.theInput} onChange={handleValue} value={tags.Baths} placeholder={'3'}  startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Furnished</Typography><InputBase name={'Furnished'}  className={classes.theInput} onChange={handleValue} placeholder={'yes'}  value={tags.Furnished} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                </Grid>
                <Grid item xs={6}> 
                <div className={classes.secondDiv}><Typography className={classes.theText}>Type</Typography><InputBase name={'Type'}  className={classes.theInput} placeholder={'Bungalow'}  onChange={handleValue} value={tags.Type} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Max price</Typography><InputBase name={'maxPrice'}  className={classes.theInput} placeholder={'10000'}  onChange={handleValue} value={tags.maxPrice} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Bedrooms</Typography><InputBase name={'Bedroom'}  className={classes.theInput} placeholder={'2'}  onChange={handleValue} value={tags.Bedroom} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>
                <div className={classes.secondDiv}><Typography className={classes.theText}>Size</Typography><InputBase name={'roomSize'}  className={classes.theInput} placeholder={'5x12'}  onChange={handleValue} value={tags.roomSize} startAdornment={<Typography fontSize='small' style={{fontSize:'12px',color:'gray',paddingRight:'5px'}}></Typography>}/></div>

                    {/* <Test text={'Type'}/>
                    <Test text={'Max price'}/>
                    <Test text={'Bedroom'}/>
                    <Test text={'Room size'}/> */}
                </Grid>
         </Grid>
            <Button onClick={searchProperty} style={{minWidth:'100%',marginTop:'52px',borderRadius:'0px',background:'',fontSize:'12px'}} color='primary' variant='contained'>Search</Button>
        </Paper >
        <Paper style={{padding:'15px',marginLeft:'15px',marginTop:'30px'}}>
            <Typography variant='body2' style={{paddingBottom:'15px'}}><strong>Properties in Nigeria</strong></Typography>
            {values.map((value,index)=>   
            <Grid key={index} container style={{marginBottom:"6px"}}>
                 <Grid item xs={9}>
                 <Typography style={{color:'#263238',fontSize:'14px',fontFamily:'segoe ui',fontWeight:'600'}}>{value}</Typography>
                 </Grid>
                 <Grid item xs={3}>
                 <Typography style={{color:'#263238',fontSize:'14px',fontFamily:'segoe ui',fontWeight:'600'}}>{numbers[index]}</Typography>
                    {/* <Typography style={{fontFamily:'segeo ui',margin:'0px',fontWeight:'800',color:'gray'}}>{value}</Typography>            */}
                 </Grid>
            </Grid> 
            )}
        </Paper>
        </>
    )
}
