import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './SignUp/SignUpPage';
import RegisterPage from './Registration/RegisterPage';
import Home from './Home'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
       
        <Route exact path="/" component={Home} />
        <Route path="/SignUpPage" component={SignUpPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>
  );
};

export default App;
