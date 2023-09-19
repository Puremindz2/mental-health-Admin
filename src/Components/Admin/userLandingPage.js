import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './userLandingPage.css';
import './topbar'
import addDoctor from './addDoctor';
import mentalHealthIcon from "../assets/images/mentalHealthIcon.png"
import uIcon from "../assets/images/uIcon.png"
import contactDoc from "../assets/images/contactDoc.png"
import depressionIcon from "../assets/images/depression icon.png"
import helpIcon from "../assets/images/help.png"
import checkAppointment from "../assets/images/viewApp.png"


function userLandingPage() {

    function handleClick() {
        //window.location.href = '/addDoctor';
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
            <img class="addDocIcon" src={contactDoc} />
                <div class="heading" onClick={handleClick}>
                    <p id="mouse-pinter">Contact a Doctor</p>
                <p class="descriptions">This is where a user is able to contact a doctor.</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={depressionIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Depression</p>
                <p class="descriptions">This is where a user is contact doctors that specialise with depression</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={helpIcon}/>
                <div class="heading">
                    <p id="mouse-pinter">Help</p>
                <p class="descriptions">This is where a user can urgently seek help from available doctors</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={checkAppointment}/>
                <div class="heading">
                    <p id="mouse-pinter">Appointments</p>
                <p class="descriptions">This is where a user can view his/her appointments</p>
                </div>
            </div>
        
        </div>
        </div>
        </div>
        </body>
    );
}
export default userLandingPage