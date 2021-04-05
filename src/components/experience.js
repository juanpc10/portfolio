
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


import { Card, Avatar, Image } from 'antd';
import { Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PictureOutlined } from '@ant-design/icons';

import {GithubOutlined, LinkedinOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';







function Experience() {
  const [bottom, setBottom] = useState(50);
  const { Meta } = Card;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal1 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'NATURL',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Fully functional JAM stack ecommerce store with Stripe and Firebase integration.</p>
          <p>Tech Stack: React, Stripe, Firebase</p>
        </div>
      ),
    });
  };
  const showModal2 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal3 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal4 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal5 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal6 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal7 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
  };
  const showModal8 = () => {
    setIsModalVisible(true);
    Modal.info({
      title: 'Rewrams',
      icon: '',
      keyboard: true,
      maskClosable: true,
      content: (
        <div>
          <p>Rewrams</p>
          <p>Tech Stack: React</p>
        </div>
      ),
    });
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
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<Image alt={'nice'} width={300} src={Naturl} />} actions={[<a href="https://naturl.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/sofiyaca/naturl" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal1} title="NATURL" description="Ecommerce store"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 299}} cover={<Image alt={'nice'} width={299} src={Rewrams} />} actions={[<a href="https://rewrams-client.herokuapp.com" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/Rewrams" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal2} title="Rewrams" description="Web application with dashboard"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 347 }} cover={<Image alt={'nice'} width={347} src={NetflixClone} />} actions={[<a href="https://react-netflixclone-app.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/netflixClone" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal3} title="Netflix Clone" description="Web application with API integration"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card  hoverable bordered={false} size="small" style={{ width: 314 }} cover={<Image alt={'nice'} width={314} src={SoccerApp} />} actions={[<a href="https://team-react-soccerapp.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/soccerapp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal4} title="Soccer App" description="Front end app with state management"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 308 }} cover={<Image alt={'nice'} width={308} src={DragNDrop} />} actions={[<a href="https://dragndrop-fighters-app.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/dragndropFighters" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal5} title="World's Best Fighters" description="Front end app with draggable functionality"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 263 }} cover={<Image alt={'nice'} width={263} src={Tictactoe} />} actions={[<a href="https://react-tic-tac-toe-gatoapp.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/tictactoeGame" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal6} title="Tic Tac Toe Game" description="Application with game logic"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 479 }} cover={<Image alt={'nice'} width={479} src={HeroesApp} />} actions={[<a href="https://github.com/juanpc10/angularHeroesApp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal7} title="Heroes App" description="Front end application built with Angular"/>
                </Card>
              </div>
              <div id="todolist" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 262 }} cover={<Image alt={'nice'} width={262} src={TodoList} />} actions={[<a href="https://juan-todoapp.netlify.app/" target="_blank" rel="noopener noreferrer"><FundProjectionScreenOutlined /></a>,<a href="https://github.com/juanpc10/toDoApp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal8} title="To Do List" description="Front end app with redux "/>
                </Card>
              </div>
            </div>

            <div className="projectCategory">
              <h3>Full Stack</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<Image alt={'nice'} width={300} src={CalendarApp} />} actions={[<a href="https://github.com/juanpc10/calendarApp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Calendar App" description="Full stack app for checking events by date"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width:306 }} cover={<Image alt={'nice'} width={306} src={Instagram} />} actions={[<a href="https://github.com/juanpc10/rewrams-withTools" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>,]}>
                  <Meta onClick={showModal8} title="Instagram App" description="Application with admin panel"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 326 }} cover={<Image alt={'nice'} width={326} src={Twitter} />} actions={[<a href="https://github.com/juanpc10/depiktor" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Twitter App" description="Testing for Twitter data analysis app"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 274 }} cover={<Image alt={'nice'} width={274} src={Prospects} />} actions={[<a href="https://github.com/juanpc10/prospectsApp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Prospects App" description="CRM app for prospects"/>
                </Card>
              </div>
              <div id="candidates" className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 340 }} cover={<Image alt={'nice'} width={340} src={Candidates} />} actions={[<a href="https://github.com/juanpc10/candidatesApp" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Candidates App" description="Ruby on rails app for candidates"/>
                </Card>
              </div>
                  
            </div>

            <div className="projectCategory">
              <h3>Back End</h3>
            </div>
            <div className="projects">
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 317 }} cover={<img onClick={showModal8} alt="example" src={Node} />} actions={[<a href="https://github.com/juanpc10/nodeChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Node Chatbot" description="Chatbot application with node backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 360 }} cover={<img onClick={showModal8} alt="example" src={Express} />} actions={[<a href="https://github.com/juanpc10/expressChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Express Chatbot" description="Chatbot application with express backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 294 }} cover={<img onClick={showModal8} alt="example" src={GraphQL} />} actions={[<a href="https://github.com/juanpc10/worldCupGraphql" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="World Cup App" description="Soccer data structuring application"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 378 }} cover={<img onClick={showModal8} alt="example" src={Koa} />} actions={[<a href="https://github.com/juanpc10/koaChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Koa Chatbot" description="Chatbot application with node.js backend"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 294 }} cover={<img onClick={showModal8} alt="example" src={Postgresql} />} actions={[<a href="https://github.com/juanpc10/sqlChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="SQL Chatbot" description="Chatbot application with postgres db"/>
                </Card>
              </div>
              
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 315 }} cover={<img onClick={showModal8} alt="example" src={Mongodb} />} actions={[<a href="https://github.com/juanpc10/mongodbChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Mongo DB Chatbot" description="Chatbot application with Mongodb"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card hoverable bordered={false} size="small" style={{ width: 239 }} cover={<img onClick={showModal8} alt="example" src={Mongoose} />} actions={[<a href="https://github.com/juanpc10/mongooseChatbot" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Mongoose Chatbot" description="Chatbot app with Mongoose"/>
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
                <Card hoverable bordered={false} size="small" style={{ width: 390 }} cover={<img onClick={showModal8} alt="example" src={CodingQueens} />} actions={[<a href="https://github.com/juanpc10/codingQueens" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Coding Queens Problem" description="Algorithm solution for coding queens problem"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card  hoverable bordered={false} size="small" style={{ width: 252 }} cover={<img onClick={showModal8} alt="example" src={Bigonotation} />} actions={[<a href="https://github.com/juanpc10/sortingAlgorithms" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Sorting Algorithms" description="Sorting methods analysis"/>
                </Card>
              </div>
              <div className="singleproject">
                <Card  hoverable bordered={false} size="small" style={{ width: 255 }} cover={<img onClick={showModal8} alt="example" src={Hashtable} />} actions={[<a href="https://github.com/juanpc10/hashTables" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Hash Tables" description="Hash table function representation"/>
                </Card>
              </div>
              <div  id="linkedlist" className="singleproject">
                <Card  hoverable bordered={false} size="small" style={{ width: 436 }} cover={<img onClick={showModal8} alt="example" src={Linkedlist} />} actions={[<a href="https://github.com/juanpc10/linkedLists" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>]}>
                  <Meta onClick={showModal8} title="Linked Lists" description="Linked list variations"/>
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

