import React, { Component } from 'react';
import Links from './Link';

class Button extends Component {
render() {
    const { className } = this.props;
    return (
            <div className={`${ className} button`}>

            <Links to="/index" text="HOME"/>
            <Links to="/about" text="ABOUT"/>
            <Links to="/projects" text="PROJECTS"/>
            <Links to="contact" text="CONTACT"/>
            </div>
        
        )
    }
}

export default Button;