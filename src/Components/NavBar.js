import React, { Component } from 'react'
import logo from '../images/ironhack-logo.svg';

export class navbar extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt='logo'style={{height:'60px', width:'60px', margin:'30px', marginLeft:'60px'}}/>
      </div>
    )
  }
}

export default navbar;

