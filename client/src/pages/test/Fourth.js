import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 
import { InputBase } from '@mui/material';

 

export default function MultipleSelectPlaceholder({ props,setInputData,inputData,propNameData}) {
  const names = props?.names 
  const Placeholder = props?.Placeholder
  const DropPlaceholder = props?.DropPlaceholder
  const orig = props?.orig
  const none = props?.none
  const label = props?.label 
  const titlePlaceholder = props?.titlePlaceholder
  const setValueFunc=(e)=>{
    setInputData({...inputData,[Placeholder]:e})  
  }

  const [toInput,setToInput] = React.useState(orig||false)


  const handleChange = (event) => {
    const { target: { value } } = event; 
    setValueFunc(value)
    };

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
       setOpen(false);
     };

    const handleOpen = () => {
      setOpen(true);
    };
    return (
    
     <div>
     {toInput===true && 
       <FormControl sx={{  width: '80%',fontFamily:'segoe ui',fontSize:14, mt: 1, mb: 0,p:0}}> 
        <strong style={{}}>{label?label: Placeholder}</strong>
        <Select
        //   multiple
        sx={ {border:'2px solid black',height:'35px',background:'white',marginTop:1 ,borderRadius:'10px'}}
          displayEmpty
          value={propNameData} 
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => { if (selected === '' ) { return <div style={{color:'#90a4ae',fontSize:'14px',fontFamily:'segoe ui',padding:2}}>{titlePlaceholder?titlePlaceholder:'' }</div>; }   return <div style={{color:'black',fontSize:'14px',fontFamily:'segoe ui',padding:2}}>{selected}</div> 
          }}
          MenuProps={ {maxheight: 224, width: 250,fontFamily:'segoe ui',padding:2,fontSize:'14px'}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            {/* <div style={{display:'flex',flexDirection:'column'}}> */}
          <MenuItem disabled style={{fontFamily:'segoe ui',fontSize:'14px' }} value=''> <>{DropPlaceholder}</>  </MenuItem> 
          {none && <MenuItem style={{fontFamily:'segoe ui',fontSize:'14px' }} value=''> None </MenuItem>}
           {names?.map((name) => (  
            <MenuItem key={name}  style={{fontFamily:'segoe ui',fontSize:'14px' }}  value={name}> {name}  </MenuItem>
           ))}
           {/* </div> */}
        </Select>
      </FormControl>
      }

       { toInput===false && 
        <FormControl sx={{   width: '80%',fontSize:14 , mt: 1,fontFamily:'segoe ui', mb: 0,p:0}}>
        <strong  style={{fontFamily:'segoe ui',fontSize:'14px' }} >{label?label: Placeholder}</strong>
        <InputBase
            sx={ {p:2, border:'2px solid black',background:'white',fontFamily:'segoe ui',height:'35px',marginTop:1 ,borderRadius:'10px',fontSize:14 }}
            onChange={(e)=>setValueFunc(e.target.value)}
            value={propNameData}
            placeholder={titlePlaceholder?titlePlaceholder:'' } 
        />
        </FormControl>
    } 
    </div> 
    
        
    
    )
}
