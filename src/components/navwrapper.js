import React, { Component } from 'react'

class NavWrapper extends Component {
render() {
    const { className } = this.props;
    return (
            <div className={`${ className} nav-wrapper`}>

            </div>
        )
    }
}

export default NavWrapper;