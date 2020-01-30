import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/> 
        {/* <Route exact path='/login' render={() => <Login />}></Route> */}
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);