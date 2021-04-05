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

import { Modal, Space } from 'antd';
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
          <Link to="contact"><h5>Contact</h5></Link>
        </div>

        <div className="logoContainer">
          <img src={logo} alt='juanLogo'></img>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/juanpc10/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
            <a href="https://github.com/juanpc10" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
          </div>
        </div>

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



// class App extends React.Component {
//   state = {
//     modal1Visible: false,
//     modal2Visible: false,
//   };

//   setModal1Visible(modal1Visible) {
//     this.setState({ modal1Visible });
//   }

//   setModal2Visible(modal2Visible) {
//     this.setState({ modal2Visible });
//   }

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={() => this.setModal1Visible(true)}>
//           Display a modal dialog at 20px to Top
//         </Button>
//         <Modal
//           title="20px to Top"
//           style={{ top: 20 }}
//           visible={this.state.modal1Visible}
//           onOk={() => this.setModal1Visible(false)}
//           onCancel={() => this.setModal1Visible(false)}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>
//         <br />
//         <br />
//         <Button type="primary" onClick={() => this.setModal2Visible(true)}>
//           Vertically centered modal dialog
//         </Button>
//         <Modal
//           title="Vertically centered modal dialog"
//           centered
//           visible={this.state.modal2Visible}
//           onOk={() => this.setModal2Visible(false)}
//           onCancel={() => this.setModal2Visible(false)}
//         >
//           <p>some contents...</p>
//           <p>some contents...</p>
//           <p>some contents...</p>
//         </Modal>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);


