import React from 'react'
import PropTypes from "prop-types";




const TextErrors = ()=> {
  return (
    <div style={{color:"red"}}>{children}</div>
  )
}

TextErrors.prototypes = { 
    children : PropTypes.node,
}


export default TextErrors