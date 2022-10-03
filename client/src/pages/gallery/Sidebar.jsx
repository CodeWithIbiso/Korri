import React from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

import img from '../../assets/images/download.jpg'
import { collapseClasses } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromQueue } from '../../actions/queue'
import { useNavigate } from 'react-router-dom'
import { getPropertiesById } from '../../actions/properties'

const useStyles=makeStyles({ 
    container:{ 
        paddingLeft:'25px', 
    },
    img:{
        maxWidth:'65px',
        minWidth:'65px',
        maxHeight:'65px',
        minHeight:'65px',
        borderRadius:'5px', 
    },
    textHead:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'25px'
    }
})
const values =[1,2]
export default function Sidebar({classes:propClass,reduxStoreQueueFull,setReduxStoreQueueFull}) {
    const  cue=useSelector((state)=>state.queue) 
  const   reduxStoreQueue=cue?.queue//.reverse()
  const    cueIds = cue?.ids 
//   console.log(cueIds)
    const dispatch = useDispatch() 
    // const propClass = props.classes
    const classes=useStyles()
    
    const deque=({index})=>{
        setReduxStoreQueueFull(reduxStoreQueueFull-1)
        dispatch(removeFromQueue(index))  
    } 
    const navigate = useNavigate()
    return (
        <Container className={propClass.heading}>
             {/* {reduxStoreProperties.filter((single)=> single._id !== 5)} */}
           {reduxStoreQueue.map((each,index)=>  
            <div className={classes.textHead} key={each._id}>
                {/* {reduxStoreQueue[index]} */}
                <img onClick={()=>navigate(`/product/${each?._id}`)} src={each?.Image[0]} className={classes.img}/>
                <div className={classes.container}>
                    <Typography variant='caption'><strong>{each?.Location}...</strong></Typography><br/>
                    {/* <Typography variant='caption'><strong>889 Palmerstone Ave {reduxStoreProperties[reduxStoreQueue[index]].Location}...</strong></Typography><br/> */}
                    <Typography variant='caption'>{each?.RoomDimensions} | {each?.Designation}<br/></Typography>
                    <Typography variant='caption'><strong>{each?.PriceMonthlyYearly} | </strong><strong style={{color:'orange'}}  onClick={()=>deque({index:each._id})}>Remove</strong></Typography>
                </div>
            </div> 
            )}
        </Container>
    )
}
