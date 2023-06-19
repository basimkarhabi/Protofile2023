import React from 'react'
import CustomInput from '../Form2/CustomInput.jsx'
import PropTypes from "prop-types";





const FormikControl = ({ control, ...rest }) =>
{
    switch (control) {
        case "CustomInput": 
            return <CustomInput {...rest} />
          default:
    return null;        
    }
} 
FormikControl.prototype = {
    control : PropTypes.string.isRequired,
}

export default FormikControl