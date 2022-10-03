import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        paddingTop:'0px',
        marinTop:'0px', 
    },
    column:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end' 
    }
})
export default function ProductSideBar() {
    const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography style={{padding:'0px',margin:'0px'}}><strong> Categories</strong></Typography>
      <div className={classes.column}><Typography variant='h6'><strong>$68.00</strong></Typography><Typography variant='body2' style={{padding:'0',paddingLeft:'7px',fontSize:'9px',fontWeight:'100'}}>$69.00</Typography></div>
      
    </div>
  )
}
