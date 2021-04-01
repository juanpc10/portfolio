
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







// import { Router } from "@reach/router";
import { Link } from "@reach/router";
import { Affix, Button } from 'antd';

import logo from '../images/juanLogo.png';

import { Image } from 'antd';



import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';




import {GithubOutlined, LinkedinOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

function Experience() {
  const [bottom, setBottom] = useState(50);
  const { Meta } = Card;

  return (
    <div>
      <div className="experienceContainer">
        <div className="expNavigationMenu">
          <Link to="/"><h5>Home</h5></Link>
          <Link to="/about"><h5>About</h5></Link>
          <Link to="/experience"><h5>Experience</h5></Link>
          <Link to="/contact"><h5>Contact</h5></Link>
        </div>

        <div className="projectsContainer">

          <div className="logoContainer2">
            <Link to="/">
              <img src={logo} alt='juanLogo'></img>
            </Link>
          </div>

          <div className="projectCategory">
            <h3>Front End</h3>
          </div>
          <div className="projects">
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={Naturl} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="NATURL" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 299}} cover={<img alt="example" src={Rewrams} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Rewrams" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 350 }} cover={<img alt="example" src={NetflixClone} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Netflix Clone" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 310 }} cover={<img alt="example" src={SoccerApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Soccer App" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={DragNDrop} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Drag And Drop Team" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 250 }} cover={<img alt="example" src={Tictactoe} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Tic Tac Toe Game" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 450 }} cover={<img alt="example" src={HeroesApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Heroes App" description="This is the description"/>
              </Card>
            </div>      
            <div id="todolist" className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 250 }} cover={<img alt="example" src={TodoList} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="To Do List" description="This is the description"/>
              </Card>
            </div>
          </div>

          <div className="projectCategory">
            <h3>Full Stack</h3>
          </div>
          <div className="projects">
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={CalendarApp} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Calendar App" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ height: 300, width:300 }} cover={<img alt="example" src={Instagram} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Instagram App" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 320 }} cover={<img alt="example" src={Twitter} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Twitter App" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 270 }} cover={<img alt="example" src={Prospects} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Prospects App" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 340 }} cover={<img alt="example" src={Candidates} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Candidates App" description="This is the description"/>
              </Card>
            </div>
                
          </div>

          <div className="projectCategory">
            <h3>Back End</h3>
          </div>
          <div className="projects">
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 270 }} cover={<img alt="example" src={Node} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Node" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 360 }} cover={<img alt="example" src={Express} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Express" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={GraphQL} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="GraphQL" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 380 }} cover={<img alt="example" src={Koa} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Koa" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 300 }} cover={<img alt="example" src={Postgresql} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="SQL" description="This is the description"/>
              </Card>
            </div>
            
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 330 }} cover={<img alt="example" src={Mongodb} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Mongo DB" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 250 }} cover={<img alt="example" src={Mongoose} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Mongoose" description="This is the description"/>
              </Card>
            </div>  
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 260 }} cover={<img alt="example" src={Redis} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Redis" description="This is the description"/>
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
                <Meta title="Coding Queens Problem" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 250 }} cover={<img alt="example" src={Bigonotation} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Sorting Algorithms" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 250 }} cover={<img alt="example" src={Hashtable} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Hash Tables" description="This is the description"/>
              </Card>
            </div>
            <div className="singleproject">
              <Card hoverable bordered={false} size="small" style={{ width: 430 }} cover={<img alt="example" src={Linkedlist} />} actions={[<FundProjectionScreenOutlined />,<GithubOutlined />,<EllipsisOutlined key="ellipsis" />,]}>
                <Meta title="Linked Lists" description="This is the description"/>
              </Card>
            </div>
            
          </div>

        </div>
      </div>
      <div>
        <div className="affixContainer">
          <Affix offsetBottom={bottom}>
            <Link to="/contact"><Button type="primary"> Contact juanp23carrillo@gmail.com</Button></Link>
          </Affix>
        </div>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Experience;



