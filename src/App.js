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
const ForgotPassword = lazy(() => import('./Containers/Auth/ForgotPassword'))
const SetPassword = lazy(() => import('./Containers/Auth/SetPassword'))
const ResetPasswordLink = lazy(() => import('./Containers/Auth/ResetPasswordLink'))
const Profile = lazy(() => import('./Containers/Profile/Profile'));

class App extends Component {
  render() {
    return (
      <>
        <AppErrorBoundary>
          <Suspense fallback={'loading...'}>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/emailValidation/:token" component={EmailValidation} />
              <Route exact path="/resetPassword/:token" component={ResetPasswordLink} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
              <Route exact path="/setPassword" component={SetPassword} />
              <PrivateRoute path="/" component={Profile} />
            </Switch>
          </Suspense>
        </AppErrorBoundary>
      </>
    );
  }
}

export default App;