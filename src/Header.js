import React from 'react';
import './Header.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import BusinesCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationIcon from '@mui/icons-material/NotificationsActiveRounded';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
          alt=""
        /> */}

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" placeholder="Search (Ctrl+l)" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption avatar="Avatar (1).png" title="Home" />
        {/* <HeaderOption Icon={HomeIcon} title="My Network" /> */}
        {/* <HeaderOption Icon={ChatIcon} title="Messaging" /> */}
        {/* <HeaderOption Icon={BusinesCenterIcon} title="Jobs" /> */}
        <HeaderOption avatar="./img/moon-stars.png" title="So" />

        <HeaderOption avatar="./img/layout-grid-add.png" title="So" />

        <HeaderOption avatar="./img/Notification.png" title="Some" />

        {/* <HeaderOption Icon={NotificationIcon} title="Notifications" /> */}
        <HeaderOption avatar="./Avatar.png" alt="logo" title="me" />
      </div>
    </div>
  );
}

export default Header;
