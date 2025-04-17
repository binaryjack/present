import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    const { userName, vote } = location.state || { userName: 'User', vote: 'Yes' };

    return (
        <div>
            <h1>Thank You, {userName}!</h1>
            <p>We consider you will {vote === 'Yes' ? 'attend' : 'be absent'} the course.</p>
        </div>
    );
};

export default ThankYou;