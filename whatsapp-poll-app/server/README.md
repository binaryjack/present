# WhatsApp Poll Application - Server README

## Overview
The WhatsApp Poll Application is designed to allow anonymous users to participate in polls via a simple interface. Admin users can create and manage polls, and send poll URLs through WhatsApp to engage users. This application is built using Node.js, Prisma, and MongoDB for the backend, and React with Redux for the frontend.

## Features
- **User Voting**: Anonymous users can vote on polls by selecting Yes/No and providing their first name.
- **Admin Dashboard**: Admins can create multiple polls, view all votes for a given poll, and manage polls through a dashboard.
- **WhatsApp Integration**: Admins can send poll URLs to specific WhatsApp channels with custom messages.
- **Authentication**: Admins can log in using a free identity provider to access the dashboard.

## Technology Stack
- **Backend**: Node.js, Prisma, MongoDB
- **Frontend**: React, Redux, Redux-Saga
- **Authentication**: Integration with a free identity provider (e.g., Auth0, Firebase Authentication)
- **WhatsApp API**: Used for sending messages and poll URLs to users.

## Directory Structure
- `src/controllers`: Contains controllers for handling requests related to authentication, polls, and WhatsApp messaging.
- `src/models`: Defines the data models for Poll, Vote, and User.
- `src/routes`: Contains route definitions for handling API requests.
- `src/services`: Includes services for WhatsApp messaging and authentication logic.
- `src/middleware`: Contains middleware for authentication and error handling.
- `src/config`: Configuration files, including database connection settings.
- `src/prisma`: Contains the Prisma schema for database modeling.
- `src/app.js`: Main entry point for the server application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd whatsapp-poll-app/server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `src/config/db.js`.

4. Set up the Prisma schema in `src/prisma/schema.prisma` and run migrations:
   ```
   npx prisma migrate dev
   ```

5. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **Authentication**: `/api/auth`
- **Polls**: `/api/polls`
- **WhatsApp**: `/api/whatsapp`

## Notes
- Ensure that the WhatsApp API is properly configured to send messages.
- The application is designed to keep user votes anonymous; users cannot see the results of other votes.

## Conclusion
This application provides a seamless way for users to participate in polls while allowing admins to manage and communicate effectively through WhatsApp. The integration of modern technologies ensures a robust and scalable solution.