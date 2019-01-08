import React, { Component } from 'react';
import Links from './Link';



class Button extends Component {
render() {
    const { className } = this.props;
    return (
            <div className={`${ className} button`}>

            <Links className="homeLink" to="/" text="HOME"/>
            <Links className="aboutLink" to="/about" text="ABOUT"/>
            <Links className="projectsLink" to="/projects" text="PROJECTS"/>
            <Links className="contactLink" to="contact" text="CONTACT"/>
            </div>
        
        )
    }
}

export default Button;