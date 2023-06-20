import React from 'react';
import './Feed.css';
// import BusinesCenterIcon from '@mui/icons-material/BusinessCenter';
import Vector from './assets/Vector.jpg';

import CreateIcon from '@mui/icons-material/CreateRounded';
import { Avatar } from '@mui/material';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        {/* <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" className="" />
            <button type="submit">Send</button>
          </form>
        </div> */}
        <p className="feed__MagicDictionaryWizard">
          Magic Dictionary Wizard/<b>World suggester</b>
        </p>
        <h4 className="feed__header">Wanna learn new words?</h4>
        <h4 className="feed__headerComment">
          Choose dictionary or add words and it will be used to create an
          interesting story, conversation, poem, or scientific article, etc
        </h4>
        <div className="feed__mainContent">
          <div className="feed__mainContentLeft">
            <div className="feed__mainContentLeftTop">
              <img
                src="./Vector (1).jpg"
                className="feed__imgMain"
                alt="logo"
              />
              <img
                src="./img/Badge.png"
                className="feed__imgOther"
                alt="logo"
              />
            </div>
            <div className="feed__mainWords">
              <h4>Pick Prepared Words</h4>
              <p>
                GRE, TOEFL, IELTS, SAT, ACT, gMAT, business & job, travel & life
              </p>
            </div>
            <div className="feed__mainContFooter">
              <img src="./img/Form Radio Button.png" className="" alt="logo" />
            </div>

            {/* <p>Pick Prepared Words</p> */}
          </div>

          <div className="feed__mainContentRight">
            <div className="feed__mainContentRightTop">
              {/* <Avatar className="feed__avatar" /> */}
              {/* <img src="./pub" alt="" /> */}

              <img src="./Vector.jpg" className="feed__imgMain" alt="logo" />
              <img
                src="./img/Badge (1).png"
                className="feed__imgOther"
                alt="logo"
              />

              {/* <Vector /> */}
            </div>

            <div className="feed__mainWords">
              <h4>Add own words</h4>
              <p>
                Add your own words from Quizlet, Anki, Google Sheet and simple
                form
              </p>
            </div>
            <div className="feed__mainContFooter">
              <img src="./img/Form Radio Button.png" className="" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
