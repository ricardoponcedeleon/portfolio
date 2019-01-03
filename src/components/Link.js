import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Links extends Component {
   render() {
       const {to, text} = this.props;
       return(
           <Link to={to} className="link">
               {text}
           </Link>
       )
   }
}
export default Links;