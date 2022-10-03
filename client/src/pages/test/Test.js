import { FlashOnRounded } from '@material-ui/icons'
import React from 'react'
import MultipleSelectPlaceholderer from '../test copy/Fourth'
import ControlledOpenSelect from './Fifth'
import BasicSelect from './First'
import MultipleSelectPlaceholder from './Fourth'
// import MultipleSelectPlaceholder from './Fourth'
import MultipleSelect from './Second.js'
import MultipleSelectChip from './Third'


const props = {names:[
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
    'Kelly,Snyder',
  ],
  Placeholder:'Property Type' ,
  DropPlaceholder:'Select a property type :',
  orig:true
};
export default function Test() {
  return (
    <div style={{maxWidth:'20%'}}>
        
        {/* <BasicSelect/>  */}
        {/* <MultipleSelect/>  */}
        {/* <MultipleSelectChip/>  */}
        <MultipleSelectPlaceholderer/>
          <MultipleSelectPlaceholder props={props}/>
         {/* <MultipleSelectPlaceholder props={{orig:false}}/> */}
        {/* <ControlledOpenSelect/>   */}
        
    </div>
  )
}
