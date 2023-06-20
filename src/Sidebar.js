import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';

function Sidebar() {
  const recentItem = (topic, img) => (
    <div className="sidebar__recentItem">
      {/* <span className="sidebar__hash">#</span> */}
      {<img src={`${img}`} className="App-logo" alt="logo" />}

      <p className="sidebar__words">{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__topLeft">
          <img src="./img/logo.png" className="App-logo" alt="logo" />
          <h1>LangPilot</h1>
        </div>
        <img src="" alt="" />
        {/* <Avatar className="sidebar__avatar" /> */}
        <div className="sidebar__topRight">
          <img src="./img/oval.png" className="App-logo" alt="logo" />
        </div>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__LearWord">
          <img src="./img/list-check.png" className="App-logo" alt="logo" />

          <p className="sidebar__words">Learn words</p>
          <img src="./img/Path.png" className="App-logo" alt="logo" />

          {/* <p className="sidebar__statNumber">2,543</p> */}
        </div>

        <div className="sidebar__QuickStart">
          <img src="./img/Oval (1).png" className="App-logo" alt="logo" />
          <p className="sidebar__wordsQuickStart">Quck start</p>

          {/* <p className="sidebar__statNumber">2,346</p> */}
        </div>

        <div className="sidebar__MyDictionaries">
          <img src="./img/Path (6).png" className="App-logo" alt="logo" />

          <p className="sidebar__words">My Dictionaries</p>
          {/* <p className="sidebar__statNumber">2,346</p> */}
        </div>

        <div className="sidebar__PreparedDicrionaries">
          <img src="./img/Vector.png" className="App-logo" alt="logo" />

          <p className="sidebar__words">Prepared Dictionaries</p>
          {/* <p className="sidebar__statNumber">2,346</p> */}
        </div>

        <div className="sidebar__MyTexts">
          {/* <img src="./img/Path (7).png" className="App-logo" alt="logo" /> */}

          <img src="./img/file-invoice.png" className="App-logo" alt="logo" />

          <p className="sidebar__words">My Texts</p>
          {/* <p className="sidebar__statNumber">2,346</p> */}
        </div>
      </div>

      <div className="sidebar__bottom">
        <p> HELP</p>
        {recentItem('Tutorial for Beginers', './img/video-plus.png')}
        {recentItem('Support', './img/headphones.png')}
        {/* {recentItem('softwareengineering')}
        {recentItem('reactjs')}
        {recentItem('developer')} */}
      </div>
      {/* <div className="sidebar__footer">1</div> */}
    </div>
  );
}

export default Sidebar;
