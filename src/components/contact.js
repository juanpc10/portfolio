
import React, { useState }  from 'react';
import './contact.scss';

import Menu from "./menu.js";
import logo from '../images/juanLogo.png';
// import Contactimg from '../images/contact.png'

import { Link } from "@reach/router";

import {LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


function Contact() {
  const [bottom, setBottom] = useState(10);
  return (
    <div>
      <div className="contactPage contactimg">

        {/* <Slide left> */}
          <Menu />
        {/* </Slide> */}

        <div className="contactContainer">

          <Zoom>
            <div className="logoContainer2">
              <Link to="/">
                <img src={logo} alt='juanLogo'></img>
              </Link>
            </div>
          </Zoom>
          <div className="contactInfo">
            <div>

              <div className="paragraph">
                <div className="contactTitle">
                  <h4>Pimary form of communication:</h4>
                </div>
                <div className="contactTitle">
                  <p><MailOutlined /> juanp23carrillo@gmail.com</p>
                </div>
              </div>

              <div className="paragraph">
                <div className="contactTitle">
                  <h4>Secondary form of communication:</h4>
                </div>
                <div className="secondaryInfo">
                  <p><PhoneOutlined /> +1(928) 4874 677</p>
                  <a href="https://www.linkedin.com/in/juanpc10/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /> Linkedin</a>
                </div>
              </div>

              {/* <div className='contactimg'>
              
              </div> */}

              {/* <div className="paragraph">
                <div className="contactTitle">
                  <h4>Informal communication:</h4>
                </div>
                <p>Send me a message on Whatsapp with any questions <WhatsAppOutlined /> +52(667) 3207 002</p>
                <p>You can also send me a DM as a friend <InstagramOutlined /> @juanpc10</p>
              </div> */}

            </div>
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

export default Contact;
