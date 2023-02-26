import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {
     // Transition
    const transition = { duration: 2, type: "spring" }; 
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
        {/* right image side */}
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }} >Hi! I Am</span>
                <span>Basem Karah bi</span>
                <span>Fullstack devloper </span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/basimkarhabi">
                        <img src={Github}  alt="github.com/basimkarhabi" /> </a>
                    <a href="https://www.linkedin.com/in/mohammad-basem-karha-bi-b1a14611a">
                        <img src={LinkedIn}  alt=""    /> </a>
                <img src={Instagram}  alt="Instagram"    />
            </div>
        </div>
            {/* right image side */}
        <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={boy} alt="boy" />
            <motion.img 
                    src={glassesimoji} 
                    alt="glassesimoji" 
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}                    
        />

        <motion.div
                  initial={{ top: "-4%", left: "74%" }}
                  whileInView={{ left: "68%" }}
                  transition={transition}
                  className="floating-div"
                  style={{top:"-4%", left:"68%"}}
                >
                  <FloatinDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          style={{top:"18rem", left:"0"}}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="& Arabic Teatcher" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> 

        </div>
    </div>  )
}

export default Intro