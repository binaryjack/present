# WhatsApp Poll Application

## Overview
The WhatsApp Poll Application allows anonymous users to participate in polls by submitting their votes through a user-friendly interface. Admin users can create multiple polls, send poll URLs via WhatsApp, and view the results on a dedicated dashboard.

## Features
- **User Voting Interface**: Users can vote "Yes" or "No" on a poll, enter their first name, and submit their vote anonymously.
- **Admin Dashboard**: Admins can create and manage multiple polls, view all votes for a given poll, and send poll URLs to WhatsApp channels.
- **WhatsApp Integration**: Admins can send poll URLs with custom messages directly through the WhatsApp API.
- **Authentication**: Admins can log in using a free identity provider to access the dashboard.

## Tech Stack
### Frontend
- **React**: For building the user interface.
- **Redux**: For state management.
- **Redux-Saga**: For handling side effects and asynchronous actions.
- **React Router**: For routing within the application.

### Backend
- **Node.js**: For building the server-side application.
- **Nest.js**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma**: An ORM for database access.
- **MongoDB**: NoSQL database for storing poll and user data.
- **WhatsApp API**: For sending messages and poll URLs to users.

## Project Structure
```
whatsapp-poll-app
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
├── server
│   ├── src
│   ├── package.json
│   └── README.md
└── README.md
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd whatsapp-poll-app
   ```

2. **Frontend Setup**:
   - Navigate to the `client` directory:
     ```
     cd client
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm start
     ```

3. **Backend Setup**:
   - Navigate to the `server` directory:
     ```
     cd server
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Set up the database connection in `src/config/db.js`.
   - Start the server:
     ```
     npm run start
     ```

## Usage
- Admins can log in to the dashboard to create polls and view results.
- Users can access the poll URL sent via WhatsApp to cast their votes.

## Notes
- Ensure you have the necessary credentials and access to the WhatsApp API for sending messages.
- The application is designed to maintain user anonymity while allowing admins to manage polls effectively.

## Conclusion
This application provides a seamless way for users to participate in polls while giving admins the tools they need to manage and analyze poll data efficiently.