import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './addDoctor.css';
import './topbar'
import adminLandingPage from './adminLandingPage';

function addDoctor() {
    
    function handleClick() {
        window.location.href = '/adminLandingPage';
      }
    
    return(
        <body>
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

        <div class="body-content">
        <topbar></topbar>
        <br></br>
        <div class="layout-content">

        <div class="wrapper">
        <form onSubmit>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value=''
          onChange=''
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value=''
          onChange=''
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value=''
          onChange=''
          required
        />
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value=''
          onChange='{handleInputChange}'
          required
        />
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value=''
          onChange='{handleInputChange}'
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value=''
          onChange='{handleInputChange}'
          required
        />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value=''
          onChange='{handleInputChange}'
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value=''
          onChange='{handleInputChange}'
          required
        />

        <label htmlFor="Doctor">Doctor Qualifications:</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value=''
          onChange='{handleInputChange}'
          required
        />
        <button type="submit" onClick={handleClick}>Add Doctor</button>
      </form>
        
        </div>
        </div>
        </div>
        </body>
    );
}
export default addDoctor