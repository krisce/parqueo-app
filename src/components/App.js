import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import RoleAssignment from './RoleAssignment';
import HowItWorks from './HowItWorks';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/role-assignment" component={RoleAssignment} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Redirect to="/signup" />
            </Switch>
        </Router>
    );
}

export default App;

