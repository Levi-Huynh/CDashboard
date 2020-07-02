import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import * as routes from "./routes/routes";

//@ components
import WorldStats from "./components/WorldStats"

//@ views
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import { LANDING, DASHBOARD } from "./routes/routes";


// import Home from "./views/Home";
// import AccountPage from "./views/Account";
// import NetworkPage from "./views/Network";

//@ utils
//import * as ROUTES from "./Routes/routes";
import { ModalProvider } from 'styled-react-modal'

const Theme = styled.div`

  font-family: "Roboto";
  font-size: "14px";
  height: "20px";
 color: black;

`;

function App() {
  return (
    <Router>
      <Theme>
        <ModalProvider>
        <Route
          exact
          path={routes.LANDING}
          render={props => <Landing />} />
        <Route exact path={routes.DASHBOARD} render={props => <Dashboard />} />
        <Route exact path={routes.GLOBALSTATS} render={props=><WorldStats/>} />
        </ModalProvider>
      </Theme>
    </Router>
  );
}

export default App;
