import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './adminLandingPage.css';
import './topbar'
import addDoctor from './addDoctor';
import mentalHealthIcon from "../assets/images/mentalHealthIcon.png"
import uIcon from "../assets/images/uIcon.png"
import addDocIcon from "../assets/images/addDoctor.PNG"


function adminLandingPage() {

    function handleClick() {
        window.location.href = '/addDoctor';
      }
    

    return(
        <body>
        <div class="topbar-container">
            <div class="topbar-left">
                <img class="appIcon" src={mentalHealthIcon}/>
                    <span class="app-name">Pure Minds - Mental Health</span>
            </div>

            <div class="dropdown">
                <img class="userIcon" src={uIcon}/>
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

        <div class="body-content">
        <topbar></topbar>
        <br></br>
        <div class="layout-content">

        <div class="wrapper">
            <div class="grid-item">
                <img class="welcome" src={mentalHealthIcon}/>
                <div class="text">
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={addDocIcon} />
                <div class="heading" onClick={handleClick}>
                    <p id="mouse-pinter">Add New Doctor</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={addDocIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">View Client</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={addDocIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Scheduling</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={addDocIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Chat With Doctors</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={addDocIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Chat With Clients</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={addDocIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Post Notices</p>
                <p class="descriptions">This is where a user is able to add a new doctor into the system</p>
                </div>
            </div>
        
        </div>
        </div>
        </div>
        </body>
    );
}
export default adminLandingPage