import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import DashBoard from "./components/views/DashBoard";
import LoginPage from "./components/views/LoginPage";


function App() {
  return (
    <div>
    <GlobalStyles />
      <Switch>
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/login" component={LoginPage} />
      <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
