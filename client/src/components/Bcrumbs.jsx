import { Breadcrumbs, Container, Link ,Grid, Typography} from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React from 'react'

import { makeStyles } from '@material-ui/styles'

const useStyles=makeStyles({
    grid:{
        display:'flex',
        flexDirection:'row',
        justifyItems: 'center',
        alignItems:'center'
    },
    link:{
        alignItems:'center',
        fontSize:'12px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        color:'gray'
    }

})
export default function Bcrumbs() {
    const classes = useStyles()
  return (
      <Container maxWidth='lg'>
          <Grid container justifyContent='center'>
            <Grid item >
                <Breadcrumbs seperator=">">
                        <Link underline='hover' href='#' className={classes.link}>
                            <Home fontSize='inherit'  color='inherit' />
                            <Typography  > Apartments</Typography>
                        </Link>   
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>  
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>  
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>  
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>  
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>  
                        <Link underline='hover' href='#'  className={classes.link}>
                            <Home fontSize = 'inherit' color='inherit' />
                            <Typography> Apartments</Typography>
                        </Link>       
                </Breadcrumbs>
            </Grid>
          </Grid>
      </Container>    
  )
}
