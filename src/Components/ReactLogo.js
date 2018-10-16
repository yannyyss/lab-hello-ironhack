import React, { Component } from 'react';
import reactImage from '../images/react-logo.svg';
import styles from './ReactLogo.css';

export class reactLogo extends Component {
  render() {
    return <div>
      <div className="Background">
        <div className="FirstColumn">
            <img src={reactImage} alt="reactImage" style={{ width: "350px", height: "350px" }} />
            <img src={reactImage} alt="reactImage" style={{ width: "250px", height: "250px", marginLeft:'20%', marginTop:'-40px' }} />
            <img src={reactImage} alt="reactImage" style={{ width: "250px", height: "250px", marginTop:'-40px' }}/>
        </div>
        <div className="SideLogo">
            <img src={reactImage} alt="reactImage" style={{ width: "200px", height: "200px" }} />
            <img src={reactImage} alt="reactImage" style={{ width: "200px", height: "200px" }} />
            <img src={reactImage} alt="reactImage" style={{ width: "200px", height: "200px" }}/>
        </div>
      </div>
      <div className="Main">
            <h2>Say hello to</h2>
            <h2>ReactJS</h2>
            <h4>You will learn a FrontEnd</h4>
            <h4>framework from scratch, to</h4>
            <h4>become a Developer</h4>
            <button>Awesome!</button>
      </div>
    </div>;
  }
}

export default reactLogo;