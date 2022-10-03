import React, { useEffect } from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { removeFromGlobalQueue } from '../../actions/globalQueue'
import { useNavigate } from 'react-router-dom'
import { getGlobalProperties } from '../../actions/globalProperties'

const useStyles=makeStyles({ 
    container:{ 
        paddingLeft:'25px', 
    },
    img:{
        maxWidth:'65px',
        minHeight:'55px',
        borderRadius:'5px', 
    },
    textHead:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'25px'
    }
})
const values =[1,2]
export default function Sidebar(props) {
    const  {queue:reduxStoreQueue} =useSelector((state)=>state.globalQueue)
     
    const dispatch = useDispatch() 
    const propClass = props.classes
    const classes=useStyles()
    
    useEffect(()=>{
        dispatch(getGlobalProperties)
    })
    
    const deque=({index})=>{
        dispatch(removeFromGlobalQueue(index))  
    }
    const navigate = useNavigate()
    // console.log(reduxStoreQueue)
    return (
        <Container className={propClass.heading}>
           {reduxStoreQueue.map((each,index)=>  
            <div className={classes.textHead} key={each?._id}>
                {/* {reduxStoreQueue[index]} */}
                <img onClick={()=>navigate(`/store/product/${each?._id}`)} src={each?.Image[0]} className={classes.img}/>
                <div className={classes.container}>
                    <Typography variant='caption'><strong>{each?.GlobalLocation}...</strong></Typography><br/>
                    {/* <Typography variant='caption'><strong>889 Palmerstone Ave {each.Location}...</strong></Typography><br/> */}
                    <Typography variant='caption'>{each?.PropertyType} | {each?.Designation}<br/></Typography>
                    <Typography variant='caption'><strong>${each?.GlobalPrice}| </strong><strong style={{color:'orange'}}  onClick={()=>deque({index:each._id})}>Remove</strong></Typography>
                </div>
            </div> 
            )}
        </Container>
    )
}
