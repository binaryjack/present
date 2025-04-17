import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolls } from '../../redux/modules/polls/actions';

const PollList = () => {
    const dispatch = useDispatch();
    const polls = useSelector(state => state.polls.polls);
    const loading = useSelector(state => state.polls.loading);
    const error = useSelector(state => state.polls.error);

    useEffect(() => {
        dispatch(fetchPolls());
    }, [dispatch]);

    if (loading) {
        return <div>Loading polls...</div>;
    }

    if (error) {
        return <div>Error loading polls: {error}</div>;
    }

    return (
        <div>
            <h2>Poll List</h2>
            <ul>
                {polls.map(poll => (
                    <li key={poll.id}>
                        {poll.question} - Votes: {poll.votes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PollList;