import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
import {AppBar} from '@material-ui/core'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const text=['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi mauris, facilisis non augue non, auctor vehicula erat. Fusce vel diam lacinia, rhoncus nulla vitae, tincidunt tellus. Aenean laoreet aliquet nisi at posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu dolor et felis sodales ultricies non eu metus.',
        ' Ut eu dolor et felis sodales ultricies non eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus hendrerit euismod lectus a feugiat. Praesent malesuada nec velit sed maximus. Sed eros nunc, porta vulputate orci vitae, pellentesque vulputate metus.',
        'Etiam quis finibus orci. Morbi id porta elit. Curabitur urna augue, fringilla at lacinia vitae, tincidunt at justo. Mauris id mi ultricies, aliquam est vitae, faucibus quam. Integer at tempor magna, eget condimentum libero. Donec scelerisque dui augue, id vestibulum diam euismod at. Sed vitae metus eu est sodales posuere. ']

export default function FullWidthTabs() { 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500}}>
      <AppBar  elevation={0} position="static"
      style={{ 
            marginTop:'15px'
            }}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"  
          style={{
            background:'#eeeeee', 
            paddingBottom:'0px' ,
            color:'black'
        }}
        >
          <Tab label="Item One" 
            style={{fontSize:'12px',padding:'0px'}}/>
          {/* <Tab label="Item One" style={{textTransform:'lowercase'}}/> */}
          <Tab label="Item Two"style={{fontSize:'12px'}}/>
          <Tab label="Item Three" style={{fontSize:'12px'}}/>
        </Tabs>
      </AppBar> 
      
        <div value={value} index={0} 
        style={{
            background:'#eeffff',
            paddingTop:'10px',
            paddingBottom:'10px',
            marginBottom:'25px',
            paddingLeft:'5px',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center'
        }}>
        {text[value]}  
      </div> 
    </Box>
  );
}
