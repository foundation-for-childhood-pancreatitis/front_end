import React from 'react';
import { withRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import DashBoard from "./components/views/DashBoard";
import LoginPage from "./components/auth/Login/LoginPage";
import SubmitStory from './components/SubmitStory/SubmitStory';
import PendingStories from './components/PendingStories/PendingStories';
import StoriesList from './components/StoriesList/StoriesList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from './components/LandingPage/Footer/Footer';
import { getToken } from './utils/api';

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
    <Navigation />
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path='/stories' component={StoriesList} />
      <PrivateRoute exact path='/pending' component={PendingStories} />
      <Route exact path='/submitstory' component={SubmitStory} />
      <PrivateRoute exact path='/logout' component={Logout} />
      <Redirect to="/login" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
