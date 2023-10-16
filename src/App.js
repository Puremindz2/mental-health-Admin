import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcomepage from './Components/Welcomepage';
import adminLandingPage from './Components/adminLandingPage';
import topbar from './Components/topbar';
import addDoctor from './Components/addDoctor';
import ManageAppointments from './Components/ViewAppointment'
import viewPatients from './Components/ViewPatients'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/topbar" component={topbar} />
          <Route exact path="/adminLandingPage" component={adminLandingPage} />
          <Route exact path="/addDoctor" component={addDoctor} />
          <Route exact path="/ManageAppointments" component={ManageAppointments} />
          <Route exact path="/viewPatients" component={viewPatients} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
