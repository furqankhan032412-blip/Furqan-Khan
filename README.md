
# 🚀 Full Stack Portfolio & API Project

> **DecodeLabs Industrial Training Kit | Batch 2026**

![Project Status](https://img.shields.io/badge/status-completed-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.18.x-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Project Architecture](#-project-architecture)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Documentation](#-api-documentation)
- [Frontend Features](#-frontend-features)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Project Overview

This repository contains a complete full-stack web application developed as part of the **DecodeLabs Industrial Training Program (Batch 2026)**. The project demonstrates proficiency in both frontend and backend development through two integrated components:

### Project 1: Responsive Frontend Interface
A modern, mobile-first portfolio website built with **HTML5**, **CSS3**, and **JavaScript**. The interface follows 2025 UI/UX design principles with a warm, grounded aesthetic and strict WCAG accessibility standards.

### Project 2: Backend API Development
A robust **RESTful API** built with **Node.js** and **Express.js** that handles CRUD operations, data validation, and server-side logic. The API serves as the "nervous system" of the application, managing data flow between the frontend and server.

### Key Achievements
- ✅ Mobile-first responsive design with 3 breakpoints (Mobile, Tablet, Desktop)
- ✅ Semantic HTML5 with WCAG 2.1 compliance
- ✅ 2025 UI/UX color scheme (Mocha Mousse, Ethereal Blue, Moonlit Grey)
- ✅ Complete CRUD API with data validation
- ✅ Dark/Light mode toggle with persistent storage
- ✅ Professional typography pairing (Inter + Roboto)
- ✅ Modular MVC architecture for backend

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            Frontend (Project 1)                     │    │
│  │  ┌─────────────┐  ┌───────────────────────────┐    │    │
│  │  │   HTML5     │  │       CSS3               │    │    │
│  │  │  Semantic   │  │  Grid · Flexbox · Queries │    │    │
│  │  │  Structure  │  │  clamp() · Variables     │    │    │
│  │  └─────────────┘  └───────────────────────────┘    │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │           JavaScript                         │    │    │
│  │  │  Menu Toggle · Theme Switch · Form Valid.   │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTTP Requests (REST API)
┌─────────────────────────────────────────────────────────────┐
│                         SERVER                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            Backend (Project 2)                       │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │           Node.js + Express.js              │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │           Routes Layer (api.js)             │    │    │
│  │  │  GET /users · POST /users · PUT /users/:id  │    │    │
│  │  │  DELETE /users/:id · GET /health            │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │         Controllers (business logic)        │    │    │
│  │  │  userController.js                          │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │           Models (data layer)               │    │    │
│  │  │  userModel.js (in-memory data)              │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │         Middleware (validation)             │    │    │
│  │  │  validate.js (email, age, role)             │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    In-Memory Data Storage
                    (Extendable to MongoDB/PostgreSQL)
```

---

## 💻 Technologies Used

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup structure | HTML5 |
| **CSS3** | Styling & responsive design | CSS3 |
| **JavaScript (ES6+)** | Interactivity & state management | ES6+ |
| **Google Fonts** | Typography (Inter + Roboto) | - |
| **Font Awesome** | Icon library | 6.5.0 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime environment | 18.x |
| **Express.js** | Web framework | 4.18.2 |
| **CORS** | Cross-origin resource sharing | 2.8.5 |
| **dotenv** | Environment variables | 16.0.3 |
| **Nodemon** | Development auto-reload | 2.0.22 |

### Development Tools
| Tool | Purpose |
|------|---------|
| **VS Code** | Code editor |
| **Postman** | API testing |
| **Git** | Version control |
| **GitHub** | Repository hosting |

---

## 📁 Project Structure

```
portfolio-project/
│
├── index.html                      # Main frontend page
│
├── css/
│   └── style.css                   # Complete styling
│
├── js/
│   └── script.js                   # Frontend JavaScript
│
├── assets/
│   └── images/
│       ├── Furqan1.jpg             # Profile picture
│       ├── profile.jpg             # About section image
│       ├── rms.jpg                 # Project 1 image
│       ├── carpool.jpg             # Project 2 image
│       ├── study-matcher.jpg       # Project 3 image
│       ├── solar-system.jpg        # Project 4 image
│       └── snake-game.jpg          # Project 5 image
│
└── backend-api/
    │
    ├── server.js                   # Main server entry
    ├── .env                        # Environment variables
    ├── package.json                # npm dependencies
    ├── package-lock.json           # Lock file
    │
    ├── routes/
    │   └── api.js                  # API route definitions
    │
    ├── controllers/
    │   └── userController.js       # Business logic
    │
    ├── models/
    │   └── userModel.js            # Data operations
    │
    └── middleware/
        └── validate.js             # Input validation
```

---

## 🔧 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)
- Modern web browser (Chrome, Firefox, Edge)

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-project.git
cd portfolio-project
```

### Step 2: Set Up the Frontend
```bash
# No installation needed - just open index.html in browser
# OR use VS Code Live Server for development
```

### Step 3: Set Up the Backend API
```bash
# Navigate to backend folder
cd backend-api

# Install dependencies
npm install

# Create .env file
echo "PORT=5000" > .env
echo "NODE_ENV=development" >> .env
```

### Step 4: Start the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

### Step 5: Access the Application
- **Frontend**: Open `index.html` in your browser
- **API Server**: `http://localhost:5000`
- **API Documentation**: `http://localhost:5000/`
- **Users Endpoint**: `http://localhost:5000/api/users`

---

## 📖 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2026-07-12T15:56:48.093Z"
}
```

#### 2. Get All Users
```http
GET /api/users
```

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "role": "Developer",
      "createdAt": "2026-07-12T..."
    }
  ]
}
```

#### 3. Get User by ID
```http
GET /api/users/:id
```

**Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | User ID |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 28,
    "role": "Developer",
    "createdAt": "2026-07-12T..."
  }
}
```

#### 4. Create New User
```http
POST /api/users
```

**Request Body:**
```json
{
  "name": "Ali Khan",
  "email": "ali@example.com",
  "age": 25,
  "role": "Developer"
}
```

**Validation Rules:**
| Field | Required | Rules |
|-------|----------|-------|
| `name` | ✅ Yes | Must not be empty |
| `email` | ✅ Yes | Valid email format, unique |
| `age` | ❌ No | Number between 0-150 |
| `role` | ❌ No | Developer, Designer, Manager, Intern, Admin |

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 4,
    "name": "Ali Khan",
    "email": "ali@example.com",
    "age": 25,
    "role": "Developer",
    "createdAt": "2026-07-12T..."
  }
}
```

#### 5. Update User
```http
PUT /api/users/:id
```

**Request Body:** (All fields optional)
```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 30,
  "role": "Manager"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "name": "Updated Name",
    "email": "updated@example.com",
    "age": 30,
    "role": "Manager",
    "createdAt": "2026-07-12T..."
  }
}
```

#### 6. Delete User
```http
DELETE /api/users/:id
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "User with ID 1 deleted successfully"
}
```

---

### Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | GET, PUT, DELETE successful |
| 201 | Created | POST successful |
| 400 | Bad Request | Invalid data format |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Error | Server error |

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field": "Detailed error message"
  }
}
```

---

## 🎨 Frontend Features

### Design Features
- ✅ **Mobile-First** approach with 3 breakpoints
- ✅ **2025 Color Scheme**: Mocha Mousse (#A67B6E), Ethereal Blue (#7B9DBF), Moonlit Grey (#D4CFC7)
- ✅ **Typography Pairing**: Inter (Headings) + Roboto (Body)
- ✅ **Dark/Light Mode** with localStorage persistence
- ✅ **Accessibility**: WCAG 2.1 compliant with ARIA labels
- ✅ **Semantic HTML5**: header, nav, main, section, article, footer

### Interactive Features
- ✅ **Hamburger Menu** with smooth animation
- ✅ **Theme Toggle** (Dark/Light mode)
- ✅ **Form Validation** with error messages
- ✅ **Smooth Scrolling** navigation
- ✅ **Skill Bar Animation** on scroll
- ✅ **Active Link Highlighting**
- ✅ **Back to Top** button
- ✅ **Social Media Links** (GitHub, LinkedIn, Upwork)

### Sections
| Section | Content |
|---------|---------|
| **Hero** | Introduction, CTA buttons, social links |
| **About** | Bio, stats, personal info |
| **Skills** | Skill cards with animated progress bars |
| **Projects** | Project cards with GitHub links |
| **Gigs** | Upwork service catalog |
| **Contact** | Contact form with validation |

---

## 🧪 Testing

### Frontend Testing
1. **Responsive Testing**: Use Chrome DevTools to test all breakpoints
2. **Accessibility Testing**: Use WAVE or Lighthouse
3. **Cross-Browser Testing**: Chrome, Firefox, Edge

### Backend Testing
```bash
# Test with curl

# Get all users
curl http://localhost:5000/api/users

# Get user by ID
curl http://localhost:5000/api/users/1

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","age":25,"role":"Developer"}'

# Update user
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated User","age":30}'

# Delete user
curl -X DELETE http://localhost:5000/api/users/1
```

### Postman Collection
Import the following collection to test all endpoints:

```json
{
  "info": {
    "name": "Portfolio API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Users",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/api/users"
      }
    },
    {
      "name": "Create User",
      "request": {
        "method": "POST",
        "url": "{{base_url}}/api/users",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\",\n  \"age\": 25,\n  \"role\": \"Developer\"\n}"
        }
      }
    }
  ]
}
```

---

## 🚀 Deployment

### Deploy Backend to Render
1. Create account at [Render](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `PORT`: 5000
   - `NODE_ENV`: production
6. Deploy

### Deploy Frontend to Netlify
1. Create account at [Netlify](https://netlify.com)
2. Drag and drop your `portfolio-project` folder
3. Your site is live at `your-site.netlify.app`

### Deploy Frontend to GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select branch: `main`
4. Save → site live at `username.github.io`

---

## 📸 Screenshots

### Home Page (Light Mode)
![Home Page Light](screenshots/home-light.png)

### Home Page (Dark Mode)
![Home Page Dark](screenshots/home-dark.png)

### Projects Section
![Projects](screenshots/projects.png)

### API Response Example
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "role": "Developer",
      "createdAt": "2026-07-12T15:56:48.093Z"
    }
  ]
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Furqan Khan**
- 📱 Phone: +92 3452749563
- 🔗 [GitHub](https://github.com/furqankhan032412-blip)
- 🔗 [LinkedIn](https://www.linkedin.com/in/furqan-khan-9431253b0)
- 🔗 [Upwork](https://upwork.com/freelancers/~012ac06fbc1f1d4d08)

---

## 🙏 Acknowledgments

- **DecodeLabs** for providing the internship opportunity
- **Sindh Madressatul Islam University (SMIU)** for the academic foundation
- **Batch 2026** colleagues for collaboration and support

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Files** | 15+ |
| **Lines of Code** | 1000+ |
| **API Endpoints** | 7 |
| **Frontend Sections** | 6 |
| **Responsive Breakpoints** | 3 |
| **Development Time** | 2 Weeks |

---

## 🔮 Future Enhancements

- [ ] Connect to MongoDB/PostgreSQL
- [ ] JWT Authentication
- [ ] Rate Limiting
- [ ] API Documentation with Swagger
- [ ] Unit Tests with Jest
- [ ] CI/CD Pipeline
- [ ] Docker Containerization
- [ ] Real-time WebSocket integration
- [ ] Admin Dashboard
- [ ] Email notifications

---

## 🏆 Final Words

> *"The absolute best way to master Full Stack Development is through hands-on practice, not just theory. Your journey to becoming a professional developer begins right here, right now, with the very first line of code you write today."*

**This project represents the culmination of technical skills, design thinking, and professional development standards. It serves as a portfolio piece demonstrating end-to-end engineering capabilities and commitment to quality.**

---

**⭐ If you found this project helpful, please give it a star on GitHub!**

---

**© 2026 Furqan Khan | DecodeLabs Industrial Training Program | Batch 2026**
```

