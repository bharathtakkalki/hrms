import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/Dashboard';



const Controller = () => {
    return(
        <Router>
            <DashboardLayout>
                this is dashboard layout
            <Switch>
                <Route/>
            </Switch>
            </DashboardLayout>
        </Router>
    )
}

export default Controller;