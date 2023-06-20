import React from 'react'
import { useField, Field } from 'formik'
 import PropTypes from "prop-types";
 import { FormLabel, Grid, TextField, Box, colors } from "@mui/material";


const CustomInput = ({label, ...props }) =>
{
    const [field, meta,] = useField(props)
    // console.log('field',field)
    //     console.log('meta',meta)

    return (
      
        <div>
            <Box paddingBottom={2}>
                <Field {...field}{...props} as = {TextField} label = {label}
                className = {meta.touched && meta.error ? "input-error" : ""}
                />
                
            </Box>
                    {/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}

        </div>
  )
}


export default CustomInput


