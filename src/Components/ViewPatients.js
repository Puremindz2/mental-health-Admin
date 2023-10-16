import React, { useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import appIcon from "../assets/images/mentalHealthIcon.png";
import './ViewPatients.css'

const AppointmentsPage = () => {
  const [patients, setPatients] = useState([]);

  function handleClick() {
    window.location.href = '/adminLandingPage';
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        window.location.href ="/profile";
        break;
      case 'settings':
        // Handle settings click
        window.location.href = "/settings";
        break;
      case 'appointments':
        // Handle chat click
        window.location.href = "/appointments";
        break;
      case 'about':
        // Handle about us click
        window.location.href ="/about";
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const { data, error } = await supabaseClient
        .from('users')
        .select('*')
        //.eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

      if (error) {
        console.error(error);
        return;
      }

      setPatients(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <div class="topbar-container-home">
      <div class="topbar-left-home">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div style={{position:'absolute', marginLeft:'45%', overflow: 'hidden'}}>
        <h1> <span> Patients </span></h1>
      </div>

      <div class="topbar-right-home">
      <div className="home-container">
        <span>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </span>
      </div>
    </div>

    {isMenuOpen && (
          <div className="menu-dropdown" style={{overflow: 'hidden'}}>
            <ul>
              <li onClick={() => handleMenuClick('profile')}>Profile</li>
              <li onClick={() => handleMenuClick('settings')}>Settings</li>
              <li onClick={() => handleMenuClick('about')}>About Us</li>
            </ul>
          </div>
        )}
    </div>
    <div class='VA-layout'>
      <form className='viewAppointmentForm'>
      <table className='viewAppointmentTable' style={{width:'100%'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Name</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Surname</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Date of Birth</th>
            <th style={{border: '1px solid black', backgroundColor: '#ccc'}}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((appointment) => (
            <tr key={appointment.id}>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.firstName}</td>
              <td style={{width:'15%', border: '1px solid black'}}>{appointment.lastName}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.dob}</td>
              <td style={{width:'10%', border: '1px solid black'}}>{appointment.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
      </div>
    </div>
  );
};

export default AppointmentsPage;
