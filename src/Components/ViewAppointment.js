import React, { useState, useEffect,useRef } from 'react';
//import { SupabaseClient } from '@supabase/supabase-js';
import './ViewAppointment.css'
import appIcon from "../assets/images/mentalHealthIcon.png";
import { SupabaseClient } from '@supabase/supabase-js';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [app_status, setStatus] = useState('');
  const [comment, setComment] = useState('');
  const [app_id, setId] = useState('');
  const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");

  const myRef = useRef()
  const myRef2 = useRef()

  var displayRef= false;

  function handleClick() {
    window.location.href ="/adminLandingPage"
  }

  const updateAppointment = async (event) => {
        event.preventDefault();
        const appointment = {
            app_status,
          comment,
          app_id,
        };
    
        const { error } = await supabaseClient.from('appointments').update({appstatus: app_status, comment: comment}).eq('id',app_id );
        if (error) {
          console.error(error);
          return;
        }
    
        alert('Your appointment has been updated successfully!');
        // Clear the form fields
      };

  useEffect(() => {
    

    // Fetch the user's appointments from the Supabase database
    const fetchAppointments = async () => {
      const { data, error } = await supabaseClient
        .from('appointments')
        .select('*')
        //.eq('user_id', 'e078a3e2-9d3a-4cd0-9d8e-4103ffe57ae8');

      if (error) {
        console.error(error);
        return;
      }

      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  function showref1(){
    displayRef = !displayRef
    if(displayRef) {
      myRef.current.style.display = "block" ; 
      myRef.current.style.visibility = "visible" ; 
    }
    else{
      myRef.current.style.visibility = "hidden" ; 
      myRef.current.style.display = "none" ; 
    }
  }
  //TABLE STYLINGS
  const tbBorder = '1px solid';
  const idWidth = '5%'
  const otherWidth = '20%'
  const otherWidth2 = '10%'
  const otherWidth3 = '25%'
  return ( 
    <div className="vApp-container">
  
  <div class="topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={handleClick}>Pure Minds</span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>

      <div class="topbar-right">
      <div className="home-container">
      </div>
    </div>

    </div>

  <form className="vaform">
  <table className="viewApp" style={{border : tbBorder}}>
    
    <tr>
      <td className="tblHeadingsID" style={{border : tbBorder, width: idWidth}}>ID</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>PATEINT</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>TOPIC</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>PATEINT COMMENT</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>APPOINTMENT DATE</td>
      <td className="tblHeadings" style={{border : tbBorder, width: otherWidth}}>APPOINTMENT STATUS</td>
      <br></br>
    </tr>
    <tbody>
    {appointments.map((doctor) => (
    <tr onClick={(e) => setId(doctor.id)}>
      <td style={{width: idWidth}}>{doctor.id}</td>
      <td style={{width: otherWidth}}>{doctor.name}</td>
      <td style={{width: otherWidth}}>{doctor.reason}</td>
      <td style={{width: otherWidth}}>{doctor.brief}</td>
      <td style={{width: otherWidth}}>{doctor.date} {doctor.time}</td>
      <td style={{width: otherWidth}}>{doctor.cancelled}</td>
      <td> 
      <select onChange={(e) => setStatus(e.target.value ?? '')} name="gender" id="gender">
      <option disabled value="Please choose One">Please choose One:</option>
        <option value="Accept">Accept</option>
        <option value="Deckine">Decline</option>
      </select>
      </td>
      <td > 
      <textarea onChange={(e) => setComment(e.target.value ?? '') }/>
      </td>
      <td> <button onClick={updateAppointment}>Submit</button></td>
    </tr>
    ))}
    </tbody>

    </table>      
    </form>
    
   </div>
 
 
  );
}

export default AppointmentsPage;
