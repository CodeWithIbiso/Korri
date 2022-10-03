import React from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

import img from '../../assets/images/download.jpg'
import { collapseClasses } from '@mui/material'

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
const values =[1, 2, 3, 4, 5]
export default function Sidebar(props) {
    const propClass = props.classes
    const classes=useStyles()
    return (
        <Container className={propClass.heading}>
           {values.map((value)=> 
           <div className={classes.textHead} key={value}>
                 <img src={img} className={classes.img}/>
                <div className={classes.container}>
                    <Typography variant='caption'><strong>889 Palmerstone Ave ...</strong></Typography><br/>
                    <Typography variant='caption'>3 Bedrooms , 1,488 sqft<br/></Typography>
                    <Typography variant='caption'><strong>$820/mo</strong></Typography>
                </div>
            </div> 
            )}
        </Container>
    )
}
