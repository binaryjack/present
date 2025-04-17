import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPoll } from '../../redux/modules/polls/actions';

const PollCreate = () => {
    const dispatch = useDispatch();
    const [pollTitle, setPollTitle] = useState('');
    const [pollOptions, setPollOptions] = useState(['', '']);
    
    const handleOptionChange = (index, value) => {
        const newOptions = [...pollOptions];
        newOptions[index] = value;
        setPollOptions(newOptions);
    };

    const handleAddOption = () => {
        setPollOptions([...pollOptions, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pollData = {
            title: pollTitle,
            options: pollOptions.filter(option => option.trim() !== ''),
        };
        dispatch(createPoll(pollData));
        setPollTitle('');
        setPollOptions(['', '']);
    };

    return (
        <div>
            <h2>Create a New Poll</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Poll Title:</label>
                    <input 
                        type="text" 
                        value={pollTitle} 
                        onChange={(e) => setPollTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Poll Options:</label>
                    {pollOptions.map((option, index) => (
                        <input 
                            key={index} 
                            type="text" 
                            value={option} 
                            onChange={(e) => handleOptionChange(index, e.target.value)} 
                            required 
                        />
                    ))}
                    <button type="button" onClick={handleAddOption}>Add Option</button>
                </div>
                <button type="submit">Create Poll</button>
            </form>
        </div>
    );
};

export default PollCreate;