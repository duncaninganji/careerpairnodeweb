/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './app.css';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import NavBar from './components/layout/Navbar';
import CareerFairs from './components/careerFairs/CareerFairs';
import Footer from './components/layout/Footer';
import Companies from './components/companies/Companies';
import Webinars from './components/webinars/Webinars';
import Schedule from './components/schedule/Schedule';
import Recruiters from './components/recruiters/Recruiters';
import Register from './components/register/Register';
import CreateWebinars from './components/webinars/CreateWebinars';
import Login from './components/layout/Login';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  const { initialized } = useKeycloak();
  const theme = createMuiTheme({ palette: { type: 'light', primary: blue } });

  if (!initialized) {
    return (
      <MuiThemeProvider theme={theme}>
        <Card style={{ width: '40%', height: 120, margin: '0 auto' }}>
          <h2> Loading... </h2>
        </Card>
      </MuiThemeProvider>
    );
  }

  return (
    <Router>
      <div className="app">
        <NavBar initialized={initialized} />
        <div className="content">
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute roles={['student', 'recruiter']} exact path="/" component={CareerFairs} />
            <PrivateRoute roles={['student', 'recruiter']} path="/register" component={Register} />
            <PrivateRoute roles={['student']} path="/companies" component={Companies} />
            <PrivateRoute roles={['student', 'recruiter']} path="/webinars" component={Webinars} />
            <PrivateRoute roles={['student', 'recruiter']} path="/schedule" component={Schedule} />
            <PrivateRoute roles={['student']} path="/recruiters" component={Recruiters} />
            <PrivateRoute roles={['recruiter']} path="/create-webinars" component={CreateWebinars} />
          </Switch>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
};

export default App;
