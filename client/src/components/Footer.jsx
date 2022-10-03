import { Container ,Grid, Typography} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
    grid:{
        background:'transparent',
        color:'white',
        fontFamily:'segoe ui',
        fontWeight:'100' 
    },
    head:{
        fontSize:'15px',
        fontFamily:'segoe ui',
        marginBottom:'15px'
    },
    body:{
        fontSize:'12px',
        marginBottom:'5px'
    }
})
// console.log(window.location.reload === true)
// console.log(document.onreadystatechange  )
export default function Footer() {
  const classes =  useStyles()
  return (
    <div> 
       {/* <Container  maxWidth={'lg'} style={{background:'#263238',minHeight:' ',minWidth:'100%',maxWidth:'100%',padding:'35px', margin:0,color:'white',position: 'fixed',bottom:0}}> */}
       <Container  maxWidth={'lg'} style={{background:'#263238',minHeight:' ',minWidth:'100%',maxWidth:'100%',padding:'35px', margin:0,color:'white',position: document.onreadystatechange===false ? 'absolute':'relative',bottom:0}}>
       {/* <Container  maxWidth={'lg'} style={{background:'#eeeeee',minHeight:' ',minWidth:'100%',maxWidth:'100%',padding:'35px', margin:0 }}> */}
             <Grid container style={{background:' ',minHeight:'',marginTop:'' ,marginBottom:'' }}>
                <Grid item xs={12} style={{marginBottom:'35px'}}>
                    <Grid container spacing={4}>
                        <Grid item sm={3} className={classes.grid}>
                            <Typography variant='body2' className={classes.head} style={{fontFamily:'IBM Plex Sans, sans-serif',}}><strong>Find us</strong></Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mauris, facilisis non augue non, auctor vehicula erat. Fusce vel diam lacinia, rhoncus nulla vitae, tincidunt tellus.</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>9878/25 sec 9 rohni 35</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>+91-999888777976</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>info@example.com</Typography> 
                        </Grid>
                        <Grid item sm={3} className={classes.grid}>
                            <Typography variant='body2' className={classes.head} style={{fontFamily:'IBM Plex Sans, sans-serif',}}><strong>Product</strong></Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Theme Design</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Plugin Design</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Homes</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Shops</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Lounges</Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.grid}>
                            <Typography variant='body2' className={classes.head} style={{fontFamily:'IBM Plex Sans, sans-serif',}}><strong>Useful Link</strong></Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Blog</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Pricing</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Sales</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Tickets</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Certification</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>Customer Service</Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.grid}>
                            <Typography variant='body2' className={classes.head} style={{fontFamily:'IBM Plex Sans, sans-serif',}}><strong>Address</strong></Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>567, Jamiel Street</Typography>
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>A15 9PST Sideup</Typography> 
                            <Typography variant='body2' className={classes.body} style={{fontFamily:'IBM Plex Sans, sans-serif',}}>London, UK</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                            <Grid item sm={2}></Grid>
                            <Grid item sm={8} style={{borderTop:'1px solid gray',background:'',padding:'15px'}}>
                                <Typography variant='body2' align='center' style={{fontSize:'12px',fontFamily:'segoe ui',fontFamily:'IBM Plex Sans, sans-serif',}}>
                                        © COPYWRITE COMPANY NAME 2021 | ALL RIGHTS RESERVED | PRIVACY POLICY | ACCESSIBILITY
                                        WEBSITE MADE IN COMPANY BY MAKER | MAKER.DESIGN
                                </Typography>
                            </Grid>
                            <Grid item sm={2}></Grid>
                    </Grid>
                </Grid>
            </Grid> 
        </Container > 
    </div>
  )
}
