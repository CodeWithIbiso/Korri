import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles, Typography } from '@mui/material';

// const useStyles=makeStyles({
//     set:{
//         borderRadius:'0px'
//     }
// })
export default function SelectLabels({text}) {
//   const  classes = useStyles()
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth  style={{ maxWidth: 110 ,marginTop:0}}>
        <Typography  style={{color:'gray',fontFamily:'segoe ui',fontWeight:'bold',fontSize: '0.875rem'}}>{text}</Typography>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }} 
          style={{maxHeight:28,borderRadius:0,width:'100%',fontSize:'15px'}}
                >
          <MenuItem value="">
            <em> </em>
            {/* <em>select</em> */}
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
