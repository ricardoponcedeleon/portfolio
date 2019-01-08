import React, { Component } from 'react'
import Button from './buttons';


class Contacts extends Component {
render() {
    const { className } = this.props;
    return (
        <div className='app'>
        <div className="header">
        <i className="icon fab fa-phoenix-framework"></i>
         <Button className='app__button'/>
         
         
            <div className='myname'>
        <h1>R I C A R D O</h1>
        </div>


        </div>
        </div>

        )
    }
}

export default Contacts;