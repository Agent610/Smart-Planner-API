# Smart-Planner

Smart Planner API is the backend portion of the full stack version of Smart Planner. It's purpose is the REST API for managing tasks and planning daily, weekly, or monthly schedules. Users can create, edit, delete, and view tasks. Built with Node.js, Express, MongoDB, and JWT authentication.

# Features

-User registration and login with JWT authentication.
-Create, read, update, and delete tasks.
-Tasks include title, description, date, priority, and completion status.
-Tasks are associated with a specific user
-Protected routes to ensure data privacy

# Technologies

-Node.js
-Express
-MongoDB & Mongoose
-JWT for authentication
-bcryptjs for password hashing

# API Endpoints

# Auth

| Method | Endpoint | Description |
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT |

# Tasks (Protected)

| Method | Endpoint | Description |
| GET | `/tasks` | Get all tasks for the logged-in user |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

How to start the project

1. Clone the repo git clone https://github.com/Agent610/Smart-Planner-API.git
   cd smart-planner-api

2) Install the following dependencies with npm install (express, mongoose, dotenv, bcrypt, jsonwebtoken)

3) Start the server with npm run dev
