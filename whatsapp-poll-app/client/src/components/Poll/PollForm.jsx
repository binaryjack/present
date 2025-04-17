import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitVote } from '../../redux/modules/polls/actions';

const PollForm = () => {
    const [vote, setVote] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleVoteChange = (event) => {
        setVote(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (vote && name) {
            dispatch(submitVote({ vote, name }));
            setVote('');
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={vote === 'yes'}
                        onChange={handleVoteChange}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={vote === 'no'}
                        onChange={handleVoteChange}
                    />
                    No
                </label>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PollForm;