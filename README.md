# Campus Resource Hub

A full-stack web application that enables students to upload, share, and access academic notes and resources across campus. Built with React and Node.js, featuring secure authentication, file uploads, and real-time access to shared materials.

## Features

- **User Authentication** -- Secure JWT-based registration and login system
- **Note Upload & Sharing** -- Upload PDFs, documents, and study materials with metadata (title, subject, semester)
- **Browse & Search Notes** -- Access shared resources uploaded by fellow students
- **Protected Routes** -- Auth-guarded pages ensuring only logged-in users can access content
- **File Management** -- Server-side file storage with Multer middleware
- **Real-time Updates** -- Socket.io integration for live updates (planned)

## Tech Stack

### Frontend
- **React 19** with React Router 7
- **Axios** for API communication with request interceptors
- **Context API** for global authentication state management

### Backend
- **Node.js** with Express 5
- **MongoDB** with Mongoose ODM
- **JWT** for secure token-based authentication
- **Multer** for multipart file upload handling
- **bcryptjs** for password hashing

## Project Structure

```
Campus-Resource-Hub/
├── client/                  # React frontend
│   ├── src/
│   │   ├── api/             # Axios instance & Socket config
│   │   ├── components/      # Reusable UI components
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotesList.jsx
│   │   │   ├── NoteModal.jsx
│   │   │   ├── UploadForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/         # Auth context provider
│   │   ├── pages/           # Route-level pages
│   │   │   ├── AuthPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── controllers/         # Route handlers
│   ├── middleware/           # Auth & upload middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── uploads/             # Uploaded files storage
│   ├── server.js            # Entry point
│   └── package.json
│
└── .gitignore
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ajaygoud116/campus-resource-hub.git
   cd campus-resource-hub
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `server/` directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

   Create a `.env` file in the `client/` directory:

   ```env
   REACT_APP_WS_URL=ws://localhost:5000/ws
   ```

5. **Start the development servers**

   ```bash
   # Terminal 1 -- Backend
   cd server
   npm run dev

   # Terminal 2 -- Frontend
   cd client
   npm start
   ```

   The client runs on `http://localhost:3000` and the server on `http://localhost:5000`.

## API Endpoints

### Authentication

| Method | Endpoint          | Description       | Auth Required |
|--------|-------------------|-------------------|---------------|
| POST   | `/api/auth/register` | Register a new user | No         |
| POST   | `/api/auth/login`    | Login & receive JWT | No         |

### Notes

| Method | Endpoint            | Description              | Auth Required |
|--------|---------------------|--------------------------|---------------|
| GET    | `/api/notes`        | Get all notes            | No            |
| POST   | `/api/notes/upload` | Upload a new note (file) | Yes           |
| PUT    | `/api/notes/:id`    | Update note details      | Yes           |
| DELETE | `/api/notes/:id`    | Delete a note            | Yes           |

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Ajay Goud** -- [GitHub](https://github.com/ajaygoud116)
