// This file contains utility functions used throughout the application.

export const isValidName = (name) => {
    return name && name.trim().length > 0;
};

export const formatThankYouMessage = (userName, vote) => {
    return `Thank you ${userName} for your vote. We consider you will ${vote ? 'attend' : 'be absent'} the course.`;
};