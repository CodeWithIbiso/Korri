import React from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles=makeStyles({ 
    container:{ 
        paddingLeft:'25px', 
    },
    btn:{
        minWidth:'50px',
        borderRadius:'50%', 
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
                <Button variant='outlined' radius='rounded' size='small' className={classes.btn}>
                <Typography>{value}</Typography>
                </Button>
                <div className={classes.container}>
                    <Typography variant='body2' style={{paddingBottom:'5px'}}><strong>Harmony in our life</strong></Typography>
                    <Typography variant='body2'>1,2,44,564 played</Typography>
                </div>
            </div> 
            )}
        </Container>
    )
}
