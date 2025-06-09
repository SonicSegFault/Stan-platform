# STAN CMS

This repository contains the Content Management System (CMS) for the STAN NGO platform, split into two main parts:

- **CMS Frontend**: A React + TypeScript app providing a secure login page and an admin panel for managing website content.
- **CMS Backend**: A Node.js/Express API server handling authentication, authorization (using JWT), and database operations.

## Features

- Secure login system with JWT-based authentication.
- Admin panel for managing content dynamically.
- Backend APIs to handle CRUD operations and user authentication.
- Integration with the STAN website frontend for seamless content updates.
- Role-based access control via JWT tokens.
- Built for ease of use by non-technical admin users.

## Tech Stack

### Frontend

- React + TypeScript
- Tailwind CSS (or Material UI, if you used it)
- Axios for API calls
- JWT token handling for secure session management

### Backend

- Node.js + Express
- JWT (JSON Web Tokens) for authentication and authorization
- MongoDB (or your DB choice) for storing users and content
- Mongoose for database schema and queries
- CORS and security middlewares

## Getting Started

### Frontend

1. Navigate to the `CMS/frontend` directory.
2. Run `npm install` or `yarn` to install dependencies.
3. Start the dev server with `npm run dev` or `yarn dev`.
4. The frontend will interact with the backend API for login and content management.

### Backend

1. Navigate to the `CMS/backend` directory.
2. Run `npm install` or `yarn` to install dependencies.
3. Set up environment variables (e.g., MongoDB URI, JWT secret).
4. Start the server with `npm run start` or `yarn start`.
5. Ensure the backend server is accessible to the frontend for API requests.

## Notes

- Make sure to keep your JWT secret and database credentials secure.
- The CMS is designed to be simple and user-friendly for non-technical staff.
- Backend API documentation is provided separately (or you can add Swagger/OpenAPI docs if you want).
- The frontend relies on the backend for authentication and data fetching — both need to run simultaneously for full functionality.

---

Feel free to contribute, report issues, or request features!

