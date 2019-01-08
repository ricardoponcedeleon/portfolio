import React, { Component } from 'react'
import Button from './buttons';

class About extends Component {
    render() {
      return (
        <div className='app'>
         <div className="header">
         <i className="icon fab fa-phoenix-framework"></i>
          <Button className='app__button'/>
  
          <div className='myname'>
          <h1>R I C A R D O</h1>
          </div>
         </div>
  
        <div className="about">
        <div className="left">
        <ul>
            <li>pineapple ave. Provo, UT</li>
            <li>(555)-555-5555</li>
            <li>poncedeleon.richie@gmail.com</li>
            <li>NOVEMBER  2018 - PRESENT</li>
            <li>Freelance Developer</li>
            <li>Studied at bottega for 3 months</li>
            <li>Continued self studies as a Junior Developer</li>
        </ul>
        </div>

        <div className="right">
        <ul>
            <li>CLASS OF 2022</li>
            <li>Bottega, Lehi, UT- Degree</li>
            <li>High School Diploma  |   2018</li>
            <li>Full  Stack Development Certificate </li>
            <li>I love to Play Basketball</li>
            <li>I got my 2nd degree black belt in TKD</li>
            <li>I love skittles</li>
        </ul>    
        </div>
        </div>    
    </div>
      );
    }
  }
  
  export default About;