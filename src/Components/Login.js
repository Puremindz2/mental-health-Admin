import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#ff0000', '#00ff00', '#0000ff']; // Add your desired colors here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change the interval time as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  const formStyles = {
    background: `linear-gradient(to bottom, ${colors[currentColorIndex]} 0%, ${colors[(currentColorIndex + 1) % colors.length]} 100%)`,
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form" style={formStyles}>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;



