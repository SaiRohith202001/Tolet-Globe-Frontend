# To-Let-Globe Frontend

A React + Vite frontend application for the To-Let-Globe property rental platform. Provides a modern UI for browsing properties, managing listings, reading blogs, and submitting contact inquiries.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## ✨ Features

- **Property Browsing**: Search and filter properties by location, rent, BHK, etc.
- **User Authentication**: Register, login, and manage user profile
- **Property Listing**: Add, edit, and delete property listings
- **Reviews System**: Read and write property reviews
- **Blog Platform**: Read articles and property tips
- **Contact Form**: Get in touch with support
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Redux state management for instant UI updates
- **Environment-Based API**: Configurable backend URL for dev/prod

## 🔧 Prerequisites

- **Node.js**: v14+ (recommend v16 or v18)
- **npm**: v6+ or yarn
- **Backend Server**: Running on http://localhost:8000 (for local development)
- **MongoDB**: Connected to backend (optional for frontend, but needed for API responses)
- **Browser**: Modern browser with ES6 support

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SaiRohith202001/Tolet-Globe-Frontend.git
cd Tolet-Globe-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Installation

```bash
npm list
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root (if not present):

```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1/
VITE_APP_NAME=To-Let-Globe
```

**Important**: The backend URL must include the `/api/v1/` path and end with `/`.

### Configuration Files

**src/constant/constant.js** - API base URL configuration:
```javascript
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1/';
export default BASE_URL;
```

**src/config/axios.js** - Axios instance setup:
- Base URL from constant.js
- Default headers and timeouts
- Token handling for authenticated requests

## 🚀 Running the Application

### Development Mode (with HMR)

```bash
npm run dev
```

**Expected Output**:

```
  VITE v4.x.x  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Access the app at: **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output: `dist/` folder with optimized bundles

### Preview Production Build

```bash
npm run preview
```

### Run with Specific Host/Port

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Useful for accessing from other machines on the network.

## 📁 Project Structure

```
Tolet-Globe-Frontend/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx           # Login form
│   │   │   ├── Register.jsx        # Registration form
│   │   │   └── Profile.jsx         # User profile page
│   │   ├── property/
│   │   │   ├── create-prop/
│   │   │   │   └── AddProperty.jsx # Add new property listing
│   │   │   ├── listingComponents/
│   │   │   │   ├── Filters.jsx     # Property search & filters
│   │   │   │   ├── PropertyCard.jsx
│   │   │   │   └── PropertyDetail.jsx
│   │   ├── blog/
│   │   │   ├── BlogList.jsx        # Display all blogs
│   │   │   └── BlogDetail.jsx      # Single blog view
│   │   ├── review/
│   │   │   ├── ReviewList.jsx      # Display reviews
│   │   │   └── AddReview.jsx       # Add review form
│   │   ├── contact/
│   │   │   └── ContactForm.jsx     # Contact us form
│   │   ├── common/
│   │   │   ├── Header.jsx          # Navigation bar
│   │   │   ├── Footer.jsx          # Footer
│   │   │   └── Navbar.jsx
│   │   └── layout/
│   │       └── Layout.jsx          # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Properties.jsx          # Properties listing page
│   │   ├── Blogs.jsx               # Blog listing page
│   │   └── NotFound.jsx            # 404 page
│   ├── store/
│   │   ├── store.js                # Redux store configuration
│   │   ├── reducers/
│   │   │   ├── authReducer.js      # Auth state (user, token)
│   │   │   ├── propertyReducer.js  # Properties state
│   │   │   └── uiReducer.js        # UI state (loading, errors)
│   │   └── actions/
│   │       ├── authActions.js
│   │       ├── propertyActions.js
│   │       └── uiActions.js
│   ├── config/
│   │   └── axios.js                # Axios instance with interceptors
│   ├── constant/
│   │   └── constant.js             # API_BASE_URL and constants
│   ├── styles/
│   │   └── *.css                   # Global and component styles
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # React entry point
├── public/                         # Static assets
├── .env                            # Local environment (git-ignored)
├── .env.sample                     # Environment template
├── .gitignore                      # Git ignore patterns
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🧩 Key Components

### Authentication Components

**Login.jsx**
- Email and password form
- Calls `/api/v1/auth/login` endpoint
- Stores JWT token in Redux
- Redirects to home on success

**Register.jsx**
- User registration form
- Validates email and password
- Calls `/api/v1/auth/register` endpoint
- Auto-login after registration

**Profile.jsx**
- Display and edit user information
- Change password
- View user's listed properties

### Property Components

**AddProperty.jsx**
- Form to create new property listing
- Image upload support
- Submits to `/api/v1/properties`
- Filters use centralized BASE_URL

**Filters.jsx**
- Search and filter properties
- Filter by rent, BHK, locality, etc.
- Calls `/api/v1/properties?filters=...`
- Uses BASE_URL constant for API calls

**PropertyCard.jsx**
- Display property preview
- Rating and reviews count
- Click to view full details

**PropertyDetail.jsx**
- Full property information
- Image gallery
- Amenities and contact owner
- Display reviews and add review

### Blog Components

**BlogList.jsx**
- Display all blog posts
- Pagination and filtering
- Preview cards with images

**BlogDetail.jsx**
- Full blog article view
- Author information
- Related blogs suggestions

### Review Components

**ReviewList.jsx**
- Display all reviews for a property
- Sort by rating or date
- Show user avatars

**AddReview.jsx**
- Rating form (1-5 stars)
- Text comment field
- Submit to property reviews

### Contact Component

**ContactForm.jsx**
- Name, email, phone, message fields
- Form validation
- Sends to `/api/v1/contact`

## 🔌 API Integration

### Base URL Configuration

All API calls use the `BASE_URL` constant defined in `src/constant/constant.js`:

```javascript
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1/';
```

### Axios Instance

File: `src/config/axios.js`

```javascript
import axios from 'axios';
import BASE_URL from '../constant/constant';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true
});

// Add token to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
```

### Making API Calls

**Example: Login Request**

```javascript
import API from '../config/axios';

const loginUser = async (email, password) => {
  try {
    const response = await API.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};
```

**Example: Get Properties**

```javascript
const getProperties = async (filters = {}) => {
  try {
    const response = await API.get('/properties', { params: filters });
    return response.data;
  } catch (error) {
    if (error.response?.status === 503) {
      console.error('Backend server not available');
    }
    throw error;
  }
};
```

## 🏪 State Management (Redux)

### Store Setup

File: `src/store/store.js`

```javascript
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import propertyReducer from './reducers/propertyReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  properties: propertyReducer
});

export default createStore(rootReducer);
```

### Using Redux in Components

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authActions';

function LoginPage() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.auth);

  const handleLogin = (email, password) => {
    dispatch(loginUser(email, password));
  };

  return (
    // JSX here
  );
}
```

## 🛠️ Troubleshooting

### Issue: "Cannot reach backend" error in register/login

**Problem**: API calls fail with "Cannot reach backend. Please start backend server."

**Solution**:
1. Ensure backend is running: `npm start` in backend folder
2. Verify VITE_API_BASE_URL in `.env`: `http://localhost:8000/api/v1/`
3. Check backend CORS settings include `http://localhost:5173`
4. Clear browser cache (Ctrl+Shift+Delete)
5. Check browser console for exact error (F12)

### Issue: Port 5173 already in use

**Problem**: `EADDRINUSE: address already in use :::5173`

**Solution**:
```bash
# Find and kill process using port 5173
lsof -i :5173  # Mac/Linux
netstat -ano | findstr :5173  # Windows

# Kill the process
kill <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows

# Or use different port
npm run dev -- --port 5174
```

### Issue: Blank page or infinite loading

**Problem**: App loads but pages appear blank

**Solution**:
1. Open Browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab: ensure `/api/v1/*` requests succeed
4. Try hard refresh (Ctrl+Shift+R)
5. Clear localStorage: `localStorage.clear()` in console

### Issue: 503 Service Unavailable from all endpoints

**Problem**: All API calls return 503 error

**Solution**:
1. Backend is running but MongoDB not connected
2. Start MongoDB: `mongod` (Windows: Run MongoDB service)
3. Check backend `.env` has correct MONGODB_URI
4. Restart backend server

### Issue: Token not persisting after login

**Problem**: User logged in but loses session on page refresh

**Solution**:
1. Check localStorage: `localStorage.getItem('token')` in console
2. Ensure axios interceptor adds token to requests
3. Verify token is stored during login: `localStorage.setItem('token', token)`

### Issue: CORS error when accessing from another machine

**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
1. Run frontend with host binding: `npm run dev -- --host 0.0.0.0`
2. Update backend CORS_ORIGIN to include your machine IP
3. Access as: `http://<your-machine-ip>:5173`

### Issue: Images or files not loading

**Problem**: Property/blog images show broken icon

**Solution**:
1. Check image URL in API response
2. Ensure backend `/public/` folder is writable
3. Verify file paths match upload destination
4. Check browser Network tab for 404 errors on image URLs

## 🔄 Development Workflow

### Hot Module Replacement (HMR)

Vite provides instant updates without page reload:
- Edit `.jsx` file → Browser updates instantly
- Edit `.css` file → Styles update without reload
- Works best with React 17+ and functional components

### Debugging

1. **Browser DevTools**: F12 or Right-click → Inspect
2. **Redux DevTools**: Install Redux DevTools extension
3. **Network Inspection**: Network tab to see API calls
4. **Console Logging**: `console.log()` for debugging

### Code Quality

Run linting (if configured):

```bash
npm run lint
```

Format code with Prettier (if configured):

```bash
npm run format
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Creates optimized bundle in `dist/` folder.

### Environment Variables for Production

Create `.env.production` or update VITE_API_BASE_URL:

```env
VITE_API_BASE_URL=https://api.toletglobe.com/api/v1/
VITE_APP_NAME=To-Let-Globe
```

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build locally
npm run build

# Deploy dist/ folder to Netlify
```

## 📝 Development Tips

### Using Redux DevTools

Install browser extension, then in store.js:

```javascript
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### Styling with CSS/Tailwind

- Global styles: `src/styles/global.css`
- Component styles: `src/components/ComponentName/ComponentName.css`
- Consider using Tailwind CSS for utility-first styling

### Testing API Endpoints

Before using in components, test with Postman:

```bash
# Test login endpoint
POST http://localhost:8000/api/v1/auth/login
Body: {"email":"test@example.com","password":"password123"}
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit with descriptive message: `git commit -m "feat: add new feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Create Pull Request with details

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Support

For issues or questions:
- Create an issue on GitHub
- Contact: support@toletglobe.com
- Discord: [Link to community server]

---

## Quick Start Reference

```bash
# Setup
git clone <repo-url>
cd Tolet-Globe-Frontend
npm install
echo "VITE_API_BASE_URL=http://localhost:8000/api/v1/" > .env

# Run
npm run dev  # Visit http://localhost:5173

# Build
npm run build
npm run preview

# Test locally with backend
# In another terminal:
# cd ../backend-contact && npm start
```
