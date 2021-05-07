
import React, { useState }  from 'react';
import './contact.scss';

import Menu from "./menu.js";
import logo from '../images/juanLogo.png';
import ProfilePic from "../images/profilepic.jpg"
// import Contactimg from '../images/contact.png'

import { Link } from "@reach/router";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyOutlined } from '@ant-design/icons';

import {LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';


function Contact() {
  const [bottom, setBottom] = useState(10);
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `juancarrillodev@gmail.com`;
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div>
      <div className="contactPage contactimg">
        <Menu />
        <div className="contactContainer">
          <Zoom>
            <div className="logoContainer2">
              <Link to="/">
                <img src={logo} alt='juanLogo'></img>
              </Link>
            </div>
          </Zoom>

          <div className="contactInfo">
            <div className="leftScheduleMeeting">
              <Flip right>
                <Avatar size={200} src={ProfilePic} />
              </Flip>
              <div className="schedulemeetingInfo">
                
                  <h4>Schedule A Meeting With Me</h4>
                
                <a className="calendlyLink" href="https://calendly.com/juancarrillodev/30min" target="_blank" rel="noopener noreferrer">https://calendly.com/juancarrillodev/30min</a>
              </div>


            </div>
            <Slide right>
              <div className="rightContactInfo">
                <div className="contactTitle">
                    <h1>Contact</h1>
                  </div>
                <div className="paragraph">
                  <div className="contactTitle">
                    <h3>Email</h3>
                  </div>
                  <div className="contactTitle">
                    <div className="container">
                      <div className="code-snippet">
                        <div className="code-section">
                          <MailOutlined />
                              <div className="emaildiv">juancarrillodev@gmail.com</div><div className="copyicondiv"><CopyToClipboard text={codeSnippet} onCopy={onCopyText}><span>{isCopied ? <div className="copiedtext">Copied!</div> : <CopyOutlined />}</span></CopyToClipboard></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paragraph">
                  <div className="contactTitle">
                    <h3>Phone</h3>
                  </div>
                  <div className="secondaryInfo">
                    <p><PhoneOutlined /> +1(928) 4874 677</p>
                  </div>
                </div>
                <div className="paragraph">
                  <div className="contactTitle">
                    <h3>Profile</h3>
                  </div>
                  <div className="secondaryInfo">
                    <a href="https://www.linkedin.com/in/juanpc10/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /> Linkedin</a>
                  </div>
                </div>

              </div>
            </Slide>


            
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



{/* <div className='contactimg'>
              
  </div> */}

  {/* <div className="paragraph">
    <div className="contactTitle">
      <h4>Informal communication:</h4>
    </div>
    <p>Send me a message on Whatsapp with any questions <WhatsAppOutlined /> +52(667) 3207 002</p>
    <p>You can also send me a DM as a friend <InstagramOutlined /> @juanpc10</p>
  </div> */}
