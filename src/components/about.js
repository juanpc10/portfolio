
import React, { useState }  from 'react';
import './about.scss';

import logo from '../images/juanLogo.png';
import logoNW from '../images/logoNorthwest.png';
import logoRewrams from '../images/logoRewrams.png';
import logoCodeworks from '../images/logoCodeworks.png';
import logoBridge from '../images/logoBridge.png';
import logoBuckeye from '../images/logoBuckeyee.png';

import { Router } from "@reach/router";
import { Link } from "@reach/router";
import { Affix, Button } from 'antd';

import {GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function About() {
  const [bottom, setBottom] = useState(50);
  return (
    <div>
      <div className="aboutPage">
        <div className="navigationMenu">
          <Link to="/"><h4>Home</h4></Link>
          <Link to="/about"><h4>About</h4></Link>
          <Link to="/experience"><h4>Experience</h4></Link>
          <Link to="/contact"><h4>Contact</h4></Link>
        </div>
        <div className="aboutContainer">

          <div className="logoContainer2">
            <Link to="/">
              <img src={logo} alt='juanLogo'></img>
            </Link>
          </div>


          <div className="aboutContent">
            <div className="aboutText">
              {/* <p>Software engineer working on independent and team projects for a year and a half. I have learned to program independently and have also taken courses where I have collaborated with multiple people on projects. I currently work as a project manager and product owner in software projects for clients.</p> */}
              {/* <div className="pageTitle">
                <h3>Profesional Experience</h3>     
              </div> */}

              <div className="logoContainer3">
                <h4>Project Manager/ Product Owner (Nov 2020- Current)</h4>
                <img src={logoNW} alt='Logo Northwest'></img>
              </div>
              <p>Responsible for contacting and showing progress to the client either in person or by video call depending on the project, as well as checking the progress of the programmers in the project day by day, and weekly; adjusting to customer changes and ensuring changes are correct for production. Correcting errors and prioritizing the necessary changes according to importance and required date, planning which tasks are the most important throughout the week and day by day. Record and document changes made, as well as the working hours of each programmer and the estimated hours for sprints.</p>
              <p>Northwest is a company dedicated to custom software development; from mobile applications to web pages, ecommerce, points of sale, custom systems.</p>
              <p>Achievements: I managed to finish projects of which were already in an advanced stage of development and tight in terms of expectations and delivery dates.</p>
              
              <div className="logoContainer3">
                <img src={logoRewrams} alt='Logo Rewrams'></img>
                <h4>Software Engineer (Jul 2020- Nov 2020)</h4>
              </div>
              <p>Plan morning activities for me and partner, investigate how to perform the necessary functionalities, test the incorporation of the new functionalities, correct errors of the new functions, explore possible secondary problems, and in the evening have another new meeting to discuss the next day's tasks and talk about the day's results. During the week we talk about weekly and long-term goals that are constantly being redefined depending on progress.</p>
              <p>Rewrams is a startup in its initial growth phase dedicated to the automation of coupon delivery depending on the interaction between Instagram users and the advertising they give to businesses connected to the application.</p>
              <p>Achievements: We were able to meet multiple goals of proposed functionalities such as automating our application by deploying microservices on the heroku platform. We were also able to prospect and obtain clients.</p>              
              
              <div className="logoContainer3">
                <h4>Software Engineer (Jan 2020- Jul 2020)</h4>
                <img src={logoCodeworks} alt='Logo Codeworks'></img>
              </div>
              <p>Carry out activities assigned at the beginning of the day after a meeting in the morning where the objectives of the activities are explained. Collaborate with the partner or assigned work team solving the problems of the tasks described. At the end of the day we meet again to discuss the problems and results of the assigned tasks.</p>
              <p>Codeworks enables programmers to collaborate on projects to learn a variety of software engineering topics while working as a team.</p>
              <p>Achievements: I managed to complete all tasks and projects on time as well as being recognized for having carried out one of the most innovative projects within my group.</p>

              <div className="logoContainer3">
                <img src={logoBridge} alt='Logo Bridge 21 inc.'></img>
                <h4>Customer Service (Jan 2018- Jan 2019)</h4>
              </div>
              <p>Troubleshoot and debugged operational issues while interacting with customers and developers for the remittance of users transferring money from US to Mexico using cryptocurrency.</p>              
              <p>Bridge21 is a fintech company that connects the world's banking systems using cryptocurrency to create fast, efficient global money movement. </p>
              <p>Achievements: Helped improved conversion rate by 30%.</p>

              <div className="logoContainer3" id="buckeye">
                <h4>Freight Broker (Nov 2016- Oct 2017)</h4>
                <img src={logoBuckeye} alt='Logo Buckeye Pacific LLC'></img>
              </div>
              <p>Identifying and contacting prospects, negotiating freight rates, and monitoring international shipments of lumber from Canada, US, and Mexico.</p>
              <p>Buckeye Pacific is a leading wood products wholesaler in Portland, Oregon.</p>
              <p>Achievements: Helped save lumber brokers $400-$1,000 per shipment, 10 per month on average.</p>

            </div>
          </div>

        </div>
      </div>
      <div className="footerSection">
        <div className="affixContainer">
          <Affix offsetBottom={bottom}>
            <Link to="/contact"><Button className="contactButton"> Contact juanp23carrillo@gmail.com</Button></Link>
          </Affix>
        </div>
        <div className="footer">
          <p>Copyright © 2021 Juan Carrillo Dev</p>
          <p>Made with React</p>
        </div>
      </div>
      
  
    </div>
  );
}

export default About;
