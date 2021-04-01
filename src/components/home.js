import React, { useState } from 'react';
import './home.scss'
// import './AllPlayers.scss'
// import IndividualPlayer from './individualPlayer';

// import { GlobalContext } from '../../context/globalState';

// import { Carousel } from 'antd';

import logo from '../images/juanLogo.png';

import 'antd/dist/antd.css';

import { Link } from "@reach/router";

import { Avatar, Image } from 'antd';
// import {GithubOutlined, LinkedinOutlined } from '@ant-design/icons';


import { Carousel } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';


import { Affix, Button } from 'antd';


const contentStyle = {
  height: '250px',
  width: '250px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function Home() {
  return (
    <div>
      <div className="homeContainer1">

        <div className="navigationMenu">
          <Link to="/"><h5>Home</h5></Link>
          <Link to="/about"><h5>About</h5></Link>
          <Link to="/experience"><h5>Experience</h5></Link>
          <Link to="/contact"><h5>Contact</h5></Link>
        </div>

        <div className="logoContainer">
          <img src={logo} alt='juanLogo'></img>
          <div className="socialLinks">

            <p><LinkedinOutlined /></p>
            <p><GithubOutlined /></p>
          </div>
        </div>

      </div>
      <div>
        <p>Footer</p>
      </div>


    </div>
  );
}

export default Home;

