import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

function topbar() {
  return (
    <div class="topbar-container">
      <div class="topbar-left">
        <img class="appIcon" src="../assets/images/mentalHealthIcon.png"/>
        <span class="app-name">Pure Minds - Mental Health</span>

      </div>

      <div class="dropdown">
      <img class="userIcon" src="../assets/images/uIcon.png"/>

      <div class="userName"> <span>Tshepo Molapisi</span>

      <div class="dropDown">
        <span><img class="dropDownImage" src="../assets/images/dropdown1.png"/></span>
        <div class="dropdown-content">
        <label>Hi Tshepo Molapisi</label>
        <p class="logOut">Sign Out</p>
       </div>

      </div>
      </div>
    </div>
    </div>

  );
};

export default topbar;




















