import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import PollForm from './components/Poll/PollForm';
import ThankYou from './components/Poll/ThankYou';
import Dashboard from './components/Admin/Dashboard';
import PollList from './components/Admin/PollList';
import PollCreate from './components/Admin/PollCreate';
import WhatsappSender from './components/Admin/WhatsappSender';
import PrivateRoute from './components/common/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={PollForm} />
                <Route path="/thank-you" component={ThankYou} />
                <PrivateRoute path="/admin/dashboard" component={Dashboard} />
                <PrivateRoute path="/admin/polls" component={PollList} />
                <PrivateRoute path="/admin/create-poll" component={PollCreate} />
                <PrivateRoute path="/admin/send-whatsapp" component={WhatsappSender} />
            </Switch>
        </Router>
    );
};

export default App;