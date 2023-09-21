//ADMIN COMPONENTS
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Login from './Components/Admin/Login';
//import Signup from './Components/Admin/Signup';
//import Welcomepage from './Components/AdminWelcomepage';
import adminLandingPage from './Components/Admin/adminLandingPage';
import topbar from './Components/Admin/topbar';
import addDoctor from './Components/Admin/addDoctor';
//import userLandingPage from './Components/userLandingPage';
//USER COMPONENTS
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcomepage from './Components/Welcomepage';
import Home  from './Components/User/Home';
import Profile from './Components/User/Profile';
import Settings from './Components/User/Settings';
import ChatApp from './Components/User/Chat/ChatApp';
import Depression from './Components/User/Resources/Depression';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcomepage} />
          <Route exact path="/topbar" component={topbar} />
          <Route exact path="/adminLandingPage" component={adminLandingPage} />
          <Route exact path="/addDoctor" component={addDoctor} />
          
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/chatapp" component={ChatApp}/>
          <Route exact path="/depression" component={Depression}/>;
        </Switch>
      </Router>
    </div>
  );
}

export default App;
