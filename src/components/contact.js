import React, { Component } from 'react'
import Button from './buttons';


class contact extends Component {
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
      <div className='contact'>
                <h1>CONTACT ME</h1>
                </div>
      <div className='links'>
                <i className="fab fa-instagram iconLink"></i>
                    <a href=""></a>

                <i className="fab fa-facebook iconLink"></i>


                <i className="fab fa-linkedin iconLink"></i>
                    </div>

            <div>
                
        </div>
    </div>

        )
    }
}

export default contact;