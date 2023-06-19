import React from 'react'
import {useField,Field} from 'formik'
import { FormLabel, Grid, TextField, colors, CheckboxWithLabel } from "formik-material-ui";
 import { Card, CardContent,Box ,Checkbox } from '@mui/material'


const CustomCheclbox = ({ label, ...props }) =>
{
    const [field, meta, helpers] = useField(props)
    console.log('field',field)
        console.log('meta',meta)
        console.log('helpers',helpers)

    
    return (
      <div className="checkbox">
        <Box paddingBottom={2}>
          
          <input {...field}{...props}  as ={CheckboxWithLabel} 
            label= {label}
            className = {meta.touched && meta.error ? "input-error" : ""}
          />
               <span>I have one million</span>
          
        </Box>
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      </div>
    
  )
}

export default CustomCheclbox