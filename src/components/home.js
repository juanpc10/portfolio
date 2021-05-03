import React from 'react';
import './home.scss'
import 'antd/dist/antd.css';

import Menu from "./menu.js";
import logo from '../images/juanLogo.png';

import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

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
    <div className="bg5">
      <div className="homeContainer1">
        <Slide left>
          <Menu />
        </Slide>

        <Zoom>
          <div className="logoContainer">
            <img src={logo} alt='juanLogo'></img>
            <div className="socialLinks">
              <a href="https://www.linkedin.com/in/juanpc10/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
              <a href="https://github.com/juanpc10" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
            </div>
          </div>
        </Zoom>

      </div>
      
      <div className="footerSection">
        <div className="footer">
          <p>Copyright © 2021 Juan Carrillo Dev</p>
          <p>Made with React</p>
        </div>
      </div>


    </div>
  );
}

export default Home;



