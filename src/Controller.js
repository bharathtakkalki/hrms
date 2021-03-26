import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import Home from './screen/home/Home';
import Login from './screen/login/Login';
import Recruitment from './screen/recruitment/Recruitment';
import store from './store';



const Controller = () => {
    return (
        <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" render={(props) => <Login {...props} />} />
                <DashboardLayout>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route path="/recruitment" render={(props) => <Recruitment {...props} />} />
                </DashboardLayout>
            </Switch>
        </Router>
        </Provider>
    )
}

export default Controller;