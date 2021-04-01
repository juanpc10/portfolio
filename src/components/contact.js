
import React, { useState }  from 'react';
import './contact.scss';

import logo from '../images/juanLogo.png';

import { Router } from "@reach/router";
import { Link } from "@reach/router";
import { Affix, Button } from 'antd';

import {GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

function Contact() {
  const [bottom, setBottom] = useState(10);
  return (
    <div>
      <div className="contactPage">
        <div className="navigationMenu">
          <Link to="/"><h5>Home</h5></Link>
          <Link to="/about"><h5>About</h5></Link>
          <Link to="/experience"><h5>Experience</h5></Link>
          <Link to="/contact"><h5>Contact</h5></Link>
        </div>
        <div className="contactContainer">
          <div className="logoContainer2">
            <Link to="/">
              <img src={logo} alt='juanLogo'></img>
            </Link>
          </div>
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
                <p><PhoneOutlined /> +1(928) 4874 677</p><p><LinkedinOutlined />Linkedin</p>
                </div>
              </div>

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

      <div>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Contact;
