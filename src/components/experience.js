
import React, { useState }  from 'react';
import './experience.scss';


import Naturl from '../images/naturl.png';
import Rewrams from '../images/rewrams.png';
import SoccerApp from '../images/soccerApp.png';
import NetflixClone from '../images/netflixClone.png';
import DragNDrop from '../images/dragNdrop.png';
import Tictactoe from '../images/tictactoe.png';
import HeroesApp from '../images/heroesApp.png';
import TodoList from '../images/toDoList.png';

import CalendarApp from '../images/calendarApp.png';
import Prospects from '../images/prospects.png';
import Candidates from '../images/candidates.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';

import GraphQL from '../images/graphql.png';
import Node from '../images/nodejs.png';
import Express from '../images/express.png';
import Koa from '../images/koa.jpeg';
import Postgresql from '../images/postgresql.png';
import Mongodb from '../images/mongodb.png';
import Mongoose from '../images/mongoose.jpeg';
import Redis from '../images/redis.png';

import CodingQueens from '../images/codingqueens.jpeg';
import Bigonotation from '../images/bigonotation.jpeg';
import Hashtable from '../images/hashtable.png';
import Linkedlist from '../images/linkedlist.png';





import { Link } from "@reach/router";
import { Affix, Button } from 'antd';
// import { Popover } from 'antd';


import logo from '../images/juanLogo.png';


import { Card, Avatar } from 'antd';
import { Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PictureOutlined } from '@ant-design/icons';

import {GithubOutlined, LinkedinOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';







function Experience() {
  const [bottom, setBottom] = useState(50);
  const { Meta } = Card;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="experienceContainer">
        <div className="expNavigationMenu">
          <Link to="/"><h5>Home</h5></Link>
          <Link to="/about"><h5>About</h5></Link>
          <Link to="/experience"><h5>Experience</h5></Link>
          <Link to="/contact"><h5>Contact</h5></Link>
        </div>

        <div className="projectsPageContainer">

          <div className="logoExpContainer">
            <Link to="/">
              <img src={logo} alt='juanLogo'></img>
            </Link>
          </div>


          <div className="projectsScrollContainer">
            <div className="projectCategory">
              <h3>Front End</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card onClick={showModal} hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={Naturl} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<PictureOutlined />,]}>
                  <Meta title="NATURL" description="Ecommerce store"/>
                </Card>
                <Modal footer={[]} title="NATURL" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Fully functional JAM stack ecommerce store with Stripe and Firebase integration.</p>
                  <p>Tech Stack: React, Stripe, Firebase</p>
                  {/* <p>Some contents...</p> */}
                </Modal>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 299}} cover={<img alt="example" src={Rewrams} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Rewrams" description="Web application with dashboard"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 347 }} cover={<img alt="example" src={NetflixClone} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Netflix Clone" description="Web application with API integration"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 314 }} cover={<img alt="example" src={SoccerApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Soccer App" description="Front end app with state management"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 308 }} cover={<img alt="example" src={DragNDrop} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="World's Best Fighters" description="Front end app with draggable functionality"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 263 }} cover={<img alt="example" src={Tictactoe} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Tic Tac Toe Game" description="Application with game logic"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 479 }} cover={<img alt="example" src={HeroesApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Heroes App" description="Front end application built with Angular"/>
                </Card>
              </div>      
              <div id="todolist" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 262 }} cover={<img alt="example" src={TodoList} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="To Do List" description="Front end app with redux "/>
                </Card>
              </div>
            </div>

            <div className="projectCategory">
              <h3>Full Stack</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={CalendarApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Calendar App" description="Full stack app for checking events by date"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width:306 }} cover={<img alt="example" src={Instagram} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Instagram App" description="Application with admin panel"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 326 }} cover={<img alt="example" src={Twitter} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Twitter App" description="Testing for Twitter data analysis app"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 274 }} cover={<img alt="example" src={Prospects} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Prospects App" description="CRM app for prospects"/>
                </Card>
              </div>
              <div id="candidates" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 340 }} cover={<img alt="example" src={Candidates} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Candidates App" description="Ruby on rails app for candidates"/>
                </Card>
              </div>
                  
            </div>

            <div className="projectCategory">
              <h3>Back End</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 317 }} cover={<img alt="example" src={Node} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Node Chatbot" description="Chatbot application with node backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 360 }} cover={<img alt="example" src={Express} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Express Chatbot" description="Chatbot application with express backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 294 }} cover={<img alt="example" src={GraphQL} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="World Cup App" description="Soccer data structuring application"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 378 }} cover={<img alt="example" src={Koa} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Koa Chatbot" description="Chatbot application with node.js backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 294 }} cover={<img alt="example" src={Postgresql} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="SQL Chatbot" description="Chatbot application with postgres db"/>
                </Card>
              </div>
              
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 315 }} cover={<img alt="example" src={Mongodb} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Mongo DB Chatbot" description="Chatbot application with Mongodb"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 239 }} cover={<img alt="example" src={Mongoose} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Mongoose Chatbot" description="Chatbot app with Mongoose"/>
                </Card>
              </div>  
              <div id="redis" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 249 }} cover={<img alt="example" src={Redis} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Redis Chatbot" description="Chatbot app with redis"/>
                </Card>
              </div>

            </div>

            

            {/* <div className="projectCategory">
              <h3>Project Management</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Mr. Pancake" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Makerchip" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Kinza Gasolineras" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Nueva Vida Boards" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Nutrimar Corporate" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Mishi Mishis" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Weiqilabs" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Cause Effct" description="This is the description"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small"  style={{ width: 300 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Rewrams" description="This is the description"/>
                </Card>
              </div>          
            </div> */}

            <div className="projectCategory">
              <h3>Data Structures</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 390 }} cover={<img alt="example" src={CodingQueens} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Coding Queens Problem" description="Algorithm solution for coding queens problem"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 252 }} cover={<img alt="example" src={Bigonotation} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Sorting Algorithms" description="Sorting methods analysis"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 255 }} cover={<img alt="example" src={Hashtable} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Hash Tables" description="Hash table function representation"/>
                </Card>
              </div>
              <div  id="linkedlist" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 436 }} cover={<img alt="example" src={Linkedlist} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                  <Meta title="Linked Lists" description="Linked list variations"/>
                </Card>
              </div>
              
            </div>

          </div>


        </div>
      </div>

      <div className="footerSection">
        <div className="affixContainer">
          <Affix offsetBottom={bottom}>
            <Link to="/contact"><Button className="contactButton" > Contact juanp23carrillo@gmail.com</Button></Link>
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

export default Experience;

