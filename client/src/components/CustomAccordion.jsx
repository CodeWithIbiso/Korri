import * as React from 'react'; 
import Grid from '@mui/material/Grid';
import {ButtonGroup } from '@material-ui/core';
import { Button } from '@mui/material'; 


const text = [
  'Lorem ipsum iios jfis lepo iesi ldfe jsert sited itls fisle iios jfis lepo iesi ldfe jsert sretes 1',
  'Lorem ipsum sited iios jfis lepo iesi ldfe jsert itls fisle iios jfis lepo iesi ldfe jsert sretes 2',
  'Lorem iios jfis lepo iesi ldfe jsert  sited itls fisle iios jfis lepo iesi ldfe jsert sretes 3']

 

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

 
  return (
      <>
     <Grid container sx={{ width: '50%' }}> 
      <Grid item>   
        <ButtonGroup size='small' color='inherit'> 
            <Button color='inherit'  onClick={()=>setValue(0)} sx={value!==0?{background:'#bdbdbd',borderColor:'#000',borderBottomColor:'black'}:{borderBottomColor:'white'}} style={{borderRadius:'0px',color:'gray'}}>r</Button>
            <Button color='inherit'  onClick={()=>setValue(1)} sx={value!==1?{background:'#bdbdbd',borderColor:'#000',borderBottomColor:'black'}:{borderBottomColor:'white'}} style={{borderRadius:'0px',color:'gray'}}>p</Button>
            <Button color='inherit'  onClick={()=>setValue(2)} sx={value!==2?{background:'#bdbdbd',borderColor:'#000',borderBottomColor:'black'}:{borderBottomColor:'white'}} style={{borderRadius:'0px',color:'gray'}}>s</Button>
        </ButtonGroup> 
      </Grid>
    </Grid>
    <Grid container style={{width: '50%' ,border:'1px solid',borderColor:'black',background:'white',marginBottom:'40px',paddingTop:'50px'}}>
      <Grid item>
      {text[value]} 
      </Grid>
    </Grid>
    </>
  );
}
