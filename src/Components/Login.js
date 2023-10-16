import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useHistory } from 'react-router-dom'; //Import useHistory
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import uIcon from "../assets/images/uIcon.png";
import appIcon from "../assets/images/mentalHealthIcon.png";
import { SupabaseClient } from '@supabase/supabase-js';

const Login = () => {
  const [user, setUser] = useState([])
  const history = useHistory();
  const supabaseClient = new SupabaseClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#ffccd5', '#ccccff', '#ff6666']; // Add your desired colors here
  const [loginAttempts, setLoginAttempts] = useState(0);

  const maxLoginAttempts = 3;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change the interval time as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  

  function handleClick1() {
    window.location.href = '/AboutUs';
  }

  function handleClick2() {
    window.location.href = '/signup';
  }

  function handleClick3() {
    window.location.href = '/login';
  }

  function goToWelcome() {
    window.location.href = '/';
  }

  function fogotPassward() {
    window.location.href = '/forgotpassword';
  }


  const handleSubmit1 = async (event) => {
          event.preventDefault();
      
       const { data, error } = await supabaseClient
      .from('admin')
        .select('*')
        .eq('username', email)
        .eq('password', password)
          if (error) {
            console.error(error);
      toast.error('Oops! Something went wrong.');
            return;
          }
      
          setUser(data)

        if(data == null)
        {
          toast.error('Invalid email or password. Please try again.');
        }
        else{
          toast.success('Login successful!');
          window.location.href = '/adminLandingPage'
        }
          // Clear the form fields
      //window.location.reload();*/
        };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        toast.error('Invalid email or password. Please try again.');
      } else {

        /*useEffect(() => {
          localStorage.setItem('userInfo', JSON.stringify(notes))
        }, [notes])
        console.log('Logged in user:', user);*/
        toast.success('Login successful!');
        // Redirect to the home page after successful login
        window.location.href = '/home'
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
      toast.error('Oops! Something went wrong. Please try again.');
    }
  };



  const formStyles = {
    background: `linear-gradient(to bottom, ${colors[currentColorIndex]} 0%, ${
      colors[(currentColorIndex + 1) % colors.length]
    } 100%)`,
  };

  return (
    <div className="login">
      <div class="welcome-topbar-container">
      <div class="topbar-left">
      <img src={appIcon}/>
        <span class="app-name" onClick={goToWelcome}>Pure Minds</span>

      </div>

      <div>
        <h1>Mental Health</h1>
      </div>
    </div>
      <ToastContainer />
      <form onSubmit={handleSubmit1} className="login-form">
      <img class="userIcon" src={uIcon}/>
        <h2>ADMIN - Login</h2>
        
        <label>Email:</label>
        <input type="email"
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
         required
         />
        <label>Password:</label>
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
        />
        
        <button  style={{marginLeft:'-80px'}}type="submit">Log in </button >
        <br></br>
        <p onClick={fogotPassward} style={{textDecoration:'underline'}}>Forgot Password?</p>
      </form>
     </div>
  );

  
};

export default Login;
