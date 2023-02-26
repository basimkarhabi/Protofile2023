import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'

function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (

<div className="experience"id='Experience'>
    <div className="achievement">
                {/* darkMode */}

        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span style={{color: darkMode?'white':''}}  >Web Entwicler</span>
        <span>Experience</span>
    </div>

    <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}     >9+</div>
        <span style={{color: darkMode?'white':''}} >School Teatching</span>
        <span>As Arabic Teatcher</span>
    </div>

    <div className="achievement"   >
        <div className="circle"  style={{color: darkMode?'var(--orange)':''}}  >1</div>
        <span style={{color: darkMode?'white':''}} >SAP</span>
        <span>Experience3</span>
    </div>
</div>  
    )
}

export default Experience