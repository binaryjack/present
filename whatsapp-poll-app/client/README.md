# WhatsApp Poll Application - Client

## Overview
The WhatsApp Poll Application allows anonymous users to participate in polls by voting "Yes" or "No" through a user-friendly interface. Admin users can create and manage polls, and send poll URLs via WhatsApp to specific channels. This application is built using React, Redux, and Redux-Saga for state management and side effects handling.

## Features
- **User Voting Interface**: Users can vote anonymously by selecting "Yes" or "No", entering their first name, and submitting their vote.
- **Admin Dashboard**: Admins can view all votes for a given poll, create new polls, and send poll URLs via WhatsApp.
- **Privacy**: Users cannot see the results of other votes; they can only submit their own.
- **Authentication**: Admins can log in using a free identity provider to access the dashboard.

## Technology Stack
- **Frontend**: 
  - React for building the user interface.
  - Redux for state management.
  - Redux-Saga for handling side effects and asynchronous actions.
  
- **Backend**: 
  - Node.js with Express for the server.
  - Prisma as an ORM for database interactions.
  - MongoDB for storing poll and vote data.
  - Integration with WhatsApp API for sending messages.

## Project Structure
```
whatsapp-poll-app
├── client
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── Admin
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── PollList.jsx
│   │   │   │   ├── PollCreate.jsx
│   │   │   │   └── WhatsappSender.jsx
│   │   │   ├── Poll
│   │   │   │   ├── PollForm.jsx
│   │   │   │   └── ThankYou.jsx
│   │   │   └── common
│   │   │       ├── Header.jsx
│   │   │       └── PrivateRoute.jsx
│   │   ├── redux
│   │   │   ├── store.js
│   │   │   ├── rootReducer.js
│   │   │   ├── rootSaga.js
│   │   │   └── modules
│   │   │       ├── auth
│   │   │       │   ├── actions.js
│   │   │       │   ├── reducer.js
│   │   │       │   └── sagas.js
│   │   │       ├── polls
│   │   │       │   ├── actions.js
│   │   │       │   ├── reducer.js
│   │   │       │   └── sagas.js
│   │   │       └── whatsapp
│   │   │           ├── actions.js
│   │   │           ├── reducer.js
│   │   │           └── sagas.js
│   │   ├── services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── pollService.js
│   │   ├── utils
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
```

## Setup Instructions
1. Clone the repository.
2. Navigate to the `client` directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.

## Additional Notes
- Ensure that the backend is set up and running to handle API requests.
- The application is designed to work seamlessly with the WhatsApp API for sending poll URLs.

## Conclusion
This application provides a simple and effective way for users to participate in polls while ensuring their anonymity. The admin dashboard offers powerful tools for managing polls and communicating with users via WhatsApp.