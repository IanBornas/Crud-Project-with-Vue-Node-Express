# HRTrak CRUD App

A simple CRUD (Create, Read, Update, Delete) application built with Node.js and Express, using Firebase for data/storage integration.

## Overview

This repository contains a small REST API for managing employee data. It follows a straightforward MVC-style layout with routes, controllers, and a Firebase-backed configuration located in the `config/` folder.

## Features

- RESTful API for employee resources
- Firebase integration (service account + admin SDK)
- Clear separation of routes and controllers

## Tech stack

- Node.js
- Express
- Firebase Admin SDK

## Other Software Used

-Postman(API calls test)

## Repository structure

- `app/`
	- `server.js` — application entrypoint
	- `package.json` — dependencies and scripts
	- `config/` — Firebase setup and service account
		- `firebase.js`
		- `serviceAccountKey.json` (sensitive — not checked into VCS)
	- `controllers/` — request handlers (e.g. `employeeController.js`)
	- `routes/` — API route definitions (e.g. `employeeRoutes.js`)

## Prerequisites

- Node.js (recommend v14 or newer)
- npm
- A Firebase project and a service account JSON key for server access

## Setup & Run (step-by-step)

Follow these steps from your machine to set up and run the project locally.

1. Clone the repo and change into the `app` directory:

```bash
git clone <repo-url>
cd crud/app
```

2. Install dependencies:

```bash
npm install
```

3. Add Firebase credentials:

- Place your Firebase service account JSON at `config/serviceAccountKey.json`.
- Alternatively, configure `config/firebase.js` to load credentials from an environment variable or a secret store.

4. (Optional) Create an `.env` file for local environment variables. Example `.env`:

```env
PORT=3000
FIREBASE_PROJECT_ID=your-project-id
# Add other env vars your `config/firebase.js` may read
```

5. Start the server (choose one):

- Run directly with Node:

```bash
node server.js
```

- Use `npm` if you add scripts (recommended):

```bash
npm run start
# or for development with nodemon (install nodemon globally or as a dev dep):
npm run dev
```

6. Verify the server is running:

Open your browser or use curl to check the health or list endpoint (adjust base path if different):

```bash
curl http://localhost:3000/api/employees
```

Notes:

- The server defaults to port `3000`. Override it by setting the `PORT` environment variable before starting the app.
- Never commit `config/serviceAccountKey.json` or other secrets to source control.
- If you want, I can add `start` and `dev` scripts to `app/package.json` and an `.env.example` file.

## API Endpoints

The employee routes are defined in `routes/employeeRoutes.js` and handled by `controllers/employeeController.js`.

Common endpoints (adjust base path as implemented in `server.js`):

- `GET /api/employees` — list employees
- `GET /api/employees/:id` — get one employee
- `POST /api/employees` — create employee
- `PUT /api/employees/:id` — update employee
- `DELETE /api/employees/:id` — delete employee

Use a tool like Postman or curl to test the endpoints.

## Testing

There are no automated tests configured in this repository. You can manually test the API with Postman, HTTPie, or curl.

## Deployment

For production, consider:

- Running behind a process manager (PM2) or containerizing with Docker
- Managing secrets (service account, API keys) through environment variables or a secrets manager
- Enabling proper CORS, logging, and error monitoring

## Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description of the change.





