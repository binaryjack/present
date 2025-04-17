import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolls } from '../../redux/modules/polls/actions';
import PollList from './PollList';
import PollCreate from './PollCreate';
import WhatsappSender from './WhatsappSender';

const Dashboard = () => {
    const dispatch = useDispatch();
    const polls = useSelector(state => state.polls.polls);
    const loading = useSelector(state => state.polls.loading);
    const error = useSelector(state => state.polls.error);

    useEffect(() => {
        dispatch(fetchPolls());
    }, [dispatch]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {loading && <p>Loading polls...</p>}
            {error && <p>Error loading polls: {error}</p>}
            <PollCreate />
            <PollList polls={polls} />
            <WhatsappSender />
        </div>
    );
};

export default Dashboard;