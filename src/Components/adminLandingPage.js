import React, { useState, useRef, useEffect } from 'react';
import './adminLandingPage.css';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import appIcon from "../assets/images/mentalHealthIcon.png";
import bookA from '../assets/images/bookA.jpg'
import vApp from '../assets/images/viewApp.png'
import vDoc from '../assets/images/doctor.jpg'
import vPatient from '../assets/images/vPatient.png'
import { SupabaseClient } from '@supabase/supabase-js';

const Home = () => {
  const myRef = useRef()
  const myRef2 = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  var display = false;

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const { data, error } = await supabaseClient
        .from('doctors')
        .select('*')
        //.eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

      if (error) {
        console.error(error);
        return;
      }

      setDoctors(data);
    };

    fetchAppointments();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleClick() {
    history.push("/")
  }

  function handleClick2() {
    
    window.location.href = '/ManageAppointments';
  }

  function handleClick3() {
    window.location.href = '/ocd';
  }

  function handleClick4() {
    window.location.href = '/PersonalityDisorder';
  }

  function handleClick5() {
    window.location.href = '/ptsd';
  }

  function handleClick6() {
    window.location.href = '/ASMR';
  }

  function handleClick7() {
    window.location.href = '/viewPatients';
  }

  

  const displayDoc = () => {
    display = !display;
    if(display)
    { 
      myRef.current.style.filter = "blur(5px)" ; 
      myRef2.current.style.display = "block" ; 
      myRef2.current.style.visibility = "visible" ; 
      myRef2.current.style.filter = "blur(0)" ; 
    }
    else
    {
      myRef.current.style.filter = "blur(0px)" ;
      myRef2.current.style.visibility = "hidden" ; 
    }
    
  }


  const handleMenuClick = (menuItem) => {
    // Handle menu item click (e.g., navigate to different pages)
    switch (menuItem) {
      case 'profile':
        history.push("/profile");
        break;
      case 'settings':
        // Handle settings click
        history.push("/settings");
        break;
      case 'appointments':
        // Handle chat click
        history.push("/appointments");
        break;
      case 'about':
        // Handle about us click
        history.push("/Aboutus");
      default:
        break;
    }
  };

  return (
    <div >
      <div class="topbar-container-home">
      <div class="topbar-left-home">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds - Mental Health</span>

      </div>

      <div style={{position:'absolute', marginLeft:'45%', overflow: 'hidden'}}>
        <h1> <span> Pure Minds - Mental Health</span></h1>
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

    <div ref={myRef2} class="docPopUp" style={{display:'none', position:'absolute',zIndex:1,height:'200px'}}>
        <form className="vdoc-form">,
  <table>
  
    <tr>
      <td class="middle" ><img src={appIcon} style={{marginLeft:'0px'}} /></td>
      <td class="middle" ><img src={appIcon} style={{marginLeft:'0px'}}/></td>
    </tr>

    <tbody>
    {doctors.map((doctor) => (
    <tr key={doctor.id}>  
      <td ><label>{doctor.name}</label><br></br></td>
      <td> <label>{doctor.job}</label><br></br></td>
      <td> <label>{doctor.qualification}</label><br></br></td>
      <td> <label>{doctor.workplace}</label><br></br></td>
      <td> <label>{doctor.office_hours}</label><br></br></td>
      <td> <label>{doctor.contact}</label><br></br></td>
    </tr>
    ))}
</tbody>
    
 

      <br></br>
      <tr>

      
      <td class="middle"><button onClick={displayDoc}>Ok</button></td>
      
      </tr>
      </table>
      
     </form>
        </div>

        <div ref={myRef} class="body-content">
        
        <div class="layout-content">
        
        <div class="wrapper">
        <div class="grid-item">
            <img class="addDocIcon" src={vDoc} />
                <div class="heading" onClick={displayDoc}>
                    <p id="mouse-pinter">View Doctors</p>
                <p class="descriptions">View Doctors Details.</p>
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={vPatient} />
                <div class="heading" onClick={handleClick7}>
                    <p id="mouse-pinter">View Patients</p>
                <p class="descriptions">View all the patients in the system.</p>
                </div>
            </div>

            <div class="grid-item-not-ready">
                <img class="addDocIcon" src={vDoc}/>
                <div class="heading" onClick={handleClick6}>
                    <p id="mouse-pinter">Add Doctor</p>
                <p class="descriptions">Add New Doctor to the system</p>
                </div>
            </div>

            <div class="grid-item">
            <img class="addDocIcon" src={bookA} />
                <div class="heading" onClick={handleClick2}>
                    <p id="mouse-pinter">View Appointments</p>
                <p class="descriptions">Accept, Decline and View Appointments.</p>
                </div>
            </div>
        
        </div>
        </div>
        </div> 

      </div>
  );
};

export default Home;
