import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import DashBoard from "./components/views/DashBoard";
import LoginPage from "./components/views/LoginPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from './components/LandingPage/Footer/Footer';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
