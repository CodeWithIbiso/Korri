import React from 'react'
import ControlledOpenSelect from './Fifth'
import BasicSelect from './First'
import MultipleSelectPlaceholder from './Fourth'
import MultipleSelect from './Second.js'
import MultipleSelectChip from './Third'

export default function Test() {
  return (
    <div style={{maxWidth:'20%'}}>
        
        <BasicSelect/> 
        <MultipleSelect/> 
        <MultipleSelectChip/> 
        <MultipleSelectPlaceholder/>
        <ControlledOpenSelect/>  
        
    </div>
  )
}
