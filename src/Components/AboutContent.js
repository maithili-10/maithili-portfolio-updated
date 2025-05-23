import "./AboutContentStyles.css";
import React from 'react';
import {Link} from 'react-router-dom';
import react1 from '../images/react1.jpg';
import react2 from '../images/react2.png';


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I??</h1>
            <p>I'm a full-stack web developer with expertise in React for front-end and Node.js for back-end, creating responsive, secure, and high-performance websites for my clients.</p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1}  className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2}  className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent