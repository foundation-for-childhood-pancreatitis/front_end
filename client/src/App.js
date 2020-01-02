import React from 'react';
import { withRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import DashBoard from "./components/views/DashBoard";
import LoginPage from "./components/views/LoginPage";
import SubmitStory from './components/SubmitStory/SubmitStory';
import PendingStories from './components/PendingStories/PendingStories';
import StoriesList from './components/StoriesList/StoriesList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getToken } from './utils/api';
import './App.css';



function App() {
  const signedIn = getToken()

  const Logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  return (
    <div>
    <nav>
    {signedIn && <Link to='/pending'>Pending</Link>}
    {signedIn && <Link to='/logout'>Logout</Link>}
    </nav>
    <GlobalStyles />
      <Switch>
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path='/stories' component={StoriesList} />
      <PrivateRoute exact path='/pending' component={PendingStories} />
      <Route exact path='/submitstory' component={SubmitStory} />
      <PrivateRoute exact path='/logout' component={Logout} />
      <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
