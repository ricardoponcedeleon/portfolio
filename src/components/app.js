import React, { Component } from 'react';
import Button from './buttons';
import NavWrapper from './navwrapper'

class App extends Component {
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
    

      <div className='nav-wrapper'>
        <NavWrapper className='app__wrapper'/>
      </div>

      <div className="home">
        Soy Ricardo Ponce de Leon. Soy enginero de react.
      </div>
      </div>
    );
  }
}

export default App;