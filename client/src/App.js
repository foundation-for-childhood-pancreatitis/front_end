import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import DashBoard from "./components/views/DashBoard";
import LoginPage from "./components/views/LoginPage";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/landing-page/footer/footer";
function App() {
  return (
    <div>
      <GlobalStyles />
      <LandingPage />
      <Switch>
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
