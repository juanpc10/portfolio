import React, { useState }  from 'react';
import './experience.scss';

import Menu from "./menu.js";
import logo from '../images/juanLogo.png';

import logoConcredito from '../images/concredito-logo.png';
import logoNW from '../images/logoNorthwest.png';
import logoRewrams from '../images/logoRewrams.png';
import logoCodeworks from '../images/logoCodeworks.png';
import logoBridge from '../images/logoBridge2.png';
import logoBuckeye from '../images/logoBuckeyee.png';

import mongoDB from '../images/mongodb.png';
import reactLogo from '../images/react-logo.jpeg';
import nodeLogo from '../images/nodejs.png';
import expressLogo from '../images/express-nobg.png';
import graphqlLogo from '../images/graphql.png';
import mysqlLogo from '../images/mysql3.png';
import postgresqlLogo from '../images/postgresql.png';
import mongooseLogo from '../images/mongoose.jpeg';
import rubyLogo from '../images/ruby.png';
import htmlLogo from '../images/html.jpeg';
import cssLogo from '../images/css.jpeg';
import sassLogo from '../images/sass.png';

import { Link } from "@reach/router";
import { Affix, Button, Modal, Card } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

function About() {
  const [bottom, setBottom] = useState(50);
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal1 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Software Engineer',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
          <div className="logoContainer3">
            <h4>(Apr 2021- Current)</h4>
            <img src={logoConcredito} alt='Logo Concredito'></img>
          </div>
          <p>Web application programming using PHP, JAVA and other technologies.</p>
          <p>Development of stored procedures, functions, tables, indexes, and optimized queries using MySQL. </p>
          <p>Integration of REST API services, Redis, GitLab, NodeJS, MongoDB and analysis of customer requirements.</p>
          <p>Concredito is a finance company which grants a line of credit to clients (distributors). Distributors may grant credits to third parties , who will then be their own customers. ConCr??dito will tell distributors how much money to charge their customers and will generate payment receipts for them. Finally, the company will give a percentage of profit to the distributors for each customer obtained.</p>
        </div>       
      ),
    });
  };

  const showModal2 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Project Manager/ Product Owner ',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
          <div className="logoContainer3">
            <h4>(Nov 2020- Apr 2021)</h4>
            <img src={logoNW} alt='Logo Northwest'></img>
          </div>
          <p>Responsible for presenting progress to clients, as well as checking the progress of developers. Supervised corrections and prioritized the necessary modifications according to importance and required dates for production using agile development. Planned and estimated the hours for sprints, documented the working hours of developers, project modifications, and the tasks accomplished.</p>
          <p>Northwest is a company dedicated to custom software development; from mobile applications to web pages, ecommerce stores, points of sales, custom internal systems, and mobile applications.</p>
          <p>Achievements: Managed to finish multiple advanced projects in critical stages of development, contract terms, and dates.</p>
        </div>        
      ),
    });
  };
  const showModal3 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Software Engineer',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
          <div className="logoContainer3">
            <img src={logoRewrams} alt='Logo Rewrams'></img>
            <h4>(Jul 2020- Nov 2020)</h4>
          </div>
          <p>Responsible for planning activities for the team, investigating how to perform the necessary functionalities, test the incorporation of the new functions, correct errors of the new features, explore possible secondary problems, and in the evening have another meeting to discuss the next day's tasks and talk about the day's results. During the week we talk about short and long-term goals that are constantly being redefined depending on progress.</p>
          <p>Rewrams is a startup in its initial growth phase dedicated to the automation of coupon delivery depending on the interaction between Instagram users and the advertising they give to businesses connected to the application.</p>
          <p>Achievements: We were able to meet multiple goals of proposed functionalities such as automating our application by deploying microservices on the heroku platform. We were also able to prospect and obtain clients.</p>
        </div>        
      ),
    });
  };
  const showModal4 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Software Engineer',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
          <div className="logoContainer3">
            <h4>(Jan 2020- Jul 2020)</h4>
            <img src={logoCodeworks} alt='Logo Codeworks'></img>
          </div>
          <p>Carry out activities assigned at the beginning of the day after a meeting in the morning where the objectives of the activities are explained. Collaborate with the partner or assigned work team solving the problems of the tasks described. At the end of the day we meet again to discuss the problems and results of the assigned tasks.</p>
          <p>Codeworks enables programmers to collaborate on projects to learn a variety of software engineering topics while working as a team.</p>
          <p>Achievements: I managed to complete all tasks and projects on time as well as being recognized for having carried out one of the most innovative projects within my group.</p>
        </div>       
      ),
    });
  };
  const showModal5 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'QA Support Analyst',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
           <div className="logoContainer3">
            <img src={logoBridge} alt='Logo Bridge 21 inc.'></img>
            <h4>(Jan 2018- Jan 2019)</h4>
          </div>
          <p>Troubleshoot and debugged operational issues while interacting with customers and developers for the remittance of users transferring money from US to Mexico using cryptocurrency.</p>              
          <p>Bridge21 is a fintech company that connects the world's banking systems using cryptocurrency to create??fast, efficient global money movement. </p>
          <p>Achievements: Helped improved conversion rate by 30%.</p>
        </div>      
      ),
    });
  };
  const showModal6 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Lumber Broker',
      icon: '',
      keyboard: true,
      maskClosable: true,
      width: "50vw",
      content: (
        <div>
           <div className="logoContainer3">
            <img src={logoBuckeye} alt='Logo Buckeye'></img>
            <h4>(Nov 2016- Oct 2017)</h4>
          </div>
          <p>Identifying and contacting prospects, negotiating freight rates, and monitoring international shipments of lumber from Canada, US, and Mexico.</p>
          <p>Buckeye Pacific is a leading wood products wholesaler in Portland, Oregon.</p>
          <p>Achievements: Helped save lumber brokers $400-$1,000 per shipment, 10 per month on average.</p>
        </div>      
      ),
    });
  };

  return (
    <div className="bg3">
      <div className="aboutPage">

        {/* <Slide left> */}
          <Menu />
        {/* </Slide> */}

        <div className="aboutContainer">

          <Zoom>
            <div className="logoContainer2">
              <Link to="/">
                <img src={logo} alt='juanLogo'></img>
              </Link>
            </div>
          </Zoom>


          <div className="aboutContent">
            {/* <div className="headerAbout languages">
              <p>Expertise</p>
            </div> */}


          <div class="wrapper">
            <div class="slider">
              <div class="slide">
                <Card bordered={false} size="small" style={{ marginRight:100, width: 130 }} cover={<img src={mongoDB} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 110 }} cover={<img src={mongooseLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 120 }} cover={<img src={expressLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 100 }} cover={<img src={reactLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 120 }} cover={<img src={nodeLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 100 }} cover={<img src={graphqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 90 }} cover={<img src={mysqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 180 }} cover={<img src={postgresqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 70 }} cover={<img src={rubyLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 90 }} cover={<img src={sassLogo} alt={'nice'} /> } ></Card>
              </div>
              <div class="slide">
                <Card bordered={false} size="small" style={{ marginRight:100, width: 130 }} cover={<img src={mongoDB} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 110 }} cover={<img src={mongooseLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 120 }} cover={<img src={expressLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 100 }} cover={<img src={reactLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 120 }} cover={<img src={nodeLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 100 }} cover={<img src={graphqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 90 }} cover={<img src={mysqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 180 }} cover={<img src={postgresqlLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 70 }} cover={<img src={rubyLogo} alt={'nice'} /> } ></Card>
                <Card bordered={false} size="small" style={{ marginRight:100, width: 90 }} cover={<img src={sassLogo} alt={'nice'} /> } ></Card>
              </div>
            </div>
        </div>

            <div className="headerAbout experience">
              <p>Professional Experience</p>
            </div>
            <div className="aboutText">

              <div className="logos">        
                <Card onClick={showModal1}  bordered={false} size="small" style={{ width: 140 }} cover={<img src={logoConcredito} alt={'nice'} /> } >
                  <Meta description="Software Engineer" />
                </Card>
              </div>
              <div className="logos">        
                <Card onClick={showModal2}  bordered={false} size="small" style={{ width: 140 }} cover={<img src={logoNW} alt={'nice'} /> }  >
                  <Meta description="Project Manager/ Product Owner"/>
                </Card>
              </div>
              <div className="logos">        
                <Card onClick={showModal3}  bordered={false} size="small" style={{ width: 140 }} cover={<img src={logoRewrams} alt={'nice'} /> }  >
                  <Meta   description="Lead Software Developer"/>
                </Card>
              </div>
              <div className="logos">        
                <Card onClick={showModal4}  bordered={false} size="small" style={{ width: 140 }} cover={<img src={logoCodeworks} alt={'nice'} /> }  >
                  <Meta  description="Software Engineer"/>
                </Card>
              </div>
              <div className="logos">        
                <Card onClick={showModal5}  bordered={false} size="small" style={{ width: 140 }} cover={<img src={logoBridge} alt={'nice'} /> }  >
                  <Meta  description="QA Support Analyst"/>
                </Card>
              </div>

            </div>
          
          </div>

        </div>
      </div>
      <div className="footerSection">
        <div className="affixContainer">
          <Affix offsetBottom={bottom}>
            <Link to="/contact"><Button className="contactButton"><CalendarOutlined />Schedule a meeting</Button></Link>
          </Affix>
        </div>
        
        <div className="footer">
          <p>Copyright ?? 2021 Juan Carrillo Dev</p>
          <p>Made with React</p>
        </div>
      </div>
      
  
    </div>
  );
}

export default About;
