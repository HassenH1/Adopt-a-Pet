import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Showpage from "./components/Showpage"

function App(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/animal/:id" component={() => <Showpage />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

