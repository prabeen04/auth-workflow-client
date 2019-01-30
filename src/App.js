import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import './App.css';
import PrivateRoute from './Helpers/Auth/PrivateRoute';
import AppErrorBoundary from './Helpers/ErrorBoundary/AppErrorBoundary'

/**
 * lazy loaded compenents
 */
const Register = lazy(() => import('./Containers/Auth/Register'));
const Login = lazy(() => import('./Containers/Auth/Login'));
const EmailValidation = lazy(() => import('./Containers/Auth/EmailValidation'));
const Profile = lazy(() => import('./Containers/Profile/Profile'));

class App extends Component {
  render() {
    return (
      <div className='container'>
        <AppErrorBoundary>
          <Suspense fallback={'loading...'}>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/emailValidation/:token" component={EmailValidation} />
              <PrivateRoute path="/" component={Profile} />
            </Switch>
          </Suspense>
        </AppErrorBoundary>
      </div>
    );
  }
}

export default App;