import React, { useContext } from "react";
import './Services.css'
import Card from "../Card/Card" 
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './CV_Basem_karahbi.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
//import {link} from 'react-scroll'
 
function Services() {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
        {/**Left Side ************************************************************/}
            <div className="awesome">
                    {/* dark mode */}

                    <span style={{ color: darkMode ? "white" : "" }}>My Awasome</span>
                    <span>Services</span>
                    <span>Looking for a new challenge in web and software development as 
                        <br/>
                        full stack developer with JavaScript and React ... in a new World. 
                    </span>
                    <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                    </a>
                    <div className="blur s-blur1" style={{background:'#ABF1FF94'}}  ></div>  

            </div>
        {/**Right Side ********************************************************************/}
            <div className="cards"> 
                        {/*first Card*********************************************/}

                <motion.div 
                            initial={{ left: "25rem" }}
                            whileInView={{ left: "14rem" }}
                            transition={transition}              >
                            <Card 
                                emoji={HeartEmoji}
                                heading={'SAP'}
                                detail = {"SAP HANA2.0 , SAP FIORI , ABAP , SAP UI5 "}   />
                </motion.div>
                {/********************Secand Card***************************************/}
                <motion.div 
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    
                    >
                    <Card 
                        emoji={Glasses}
                        heading={'Developer'}
                        detail = {"Html , Css , JaveScript, React.js,Nood.js"}  
                    />
                </motion.div>

                {/***************************3rd Card***********************************/}
                <motion.div 
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card 
                        emoji={Humble}
                        heading={'UI/Ux'}
                        detail = {"Html , Css , JaveScript, React.js,Nood.js"}  
                    />
                </motion.div>   


                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                    ></div>

            </div>
    </div>  )
}

export default Services