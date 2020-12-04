
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import Landing from './pages/Landing';
import Login from './pages/SignIn/index';
import LoginTeacher from './pages/TeacherSignIn/index';
import StudentSignUp from './pages/StudentSignUp/index.js';
import TeacherSignUp from './pages/TeacherSignUp/index';
import Courses from './pages/Courses';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/loginTeacher" component={LoginTeacher} />
                <Route exact path="/signup/student" component={StudentSignUp} />
                <Route path="/signup/teacher" component={TeacherSignUp} />
                <Route path="/signup/forgot/password" component={() => <h1>Esqueceu a senha</h1>} />
                <PrivateRoute path="/app" component={() => <h1>App Cursos</h1>} />
                <PrivateRoute path="/courses" component={Courses} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes; 