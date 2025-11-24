# CarHive Monorepo

A comprehensive full-stack car rental platform featuring vehicle booking, real-time tracking, admin management, and user dashboards. Built with React frontend, Node.js/Express backend, MongoDB database, Prisma ORM, JWT authentication, and Socket.IO for real-time notifications.

## 🏗️ Project Structure

```
CarHive/
├── backend/          # Node.js/Express API server
├── frontend/         # React/Vite application
└── package.json      # Monorepo workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB (local or Atlas)

### Installation

```bash
# Install all dependencies for both frontend and backend
npm run install:all

# Or install individually
cd backend && npm install
cd frontend && npm install
```

### Environment Setup

#### Backend (.env)
```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
```

Key environment variables:
- `DATABASE_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Backend server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:5173)

#### Frontend (.env)
```bash
cd frontend
# Create or verify .env file
echo "VITE_API_URL=http://localhost:5000" > .env
```

### Running the Application

#### Option 1: Run Both Concurrently (Recommended)
```bash
# From root directory
npm run dev
```

#### Option 2: Run Individually
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# Seed initial data
npm run seed

# Open Prisma Studio (optional)
npm run prisma:studio
```

## 📦 Available Scripts

### Root Level
- `npm run dev` - Run both frontend and backend
- `npm run dev:backend` - Run backend only
- `npm run dev:frontend` - Run frontend only
- `npm run install:all` - Install all dependencies
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema to database
- `npm run seed` - Seed database with initial data

### Backend
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (hot reload)
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start Vite dev server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Tech Stack

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 4.4
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS, Material-UI, Material Tailwind
- **Routing**: React Router 6
- **UI Components**: Lucide React, React Icons
- **Maps**: Google Maps React
- **Date Handling**: React DatePicker

### Backend
- **Runtime**: Node.js >= 18
- **Framework**: Express 4.18
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT + bcrypt
- **Security**: Helmet, CORS, Express Rate Limit
- **Email**: Nodemailer
- **SMS**: Twilio
- **Payments**: Stripe
- **Validation**: Joi

## 🌐 API Endpoints

The backend API runs on `http://localhost:5000` and includes:

- `/api/auth` - Authentication (login, register, profile)
- `/api/vehicles` - Vehicle management
- `/api/bookings` - Booking operations
- `/api/locations` - Location management
- `/api/reviews` - Reviews and ratings
- `/api/users` - User management
- `/api/payments` - Payment processing
- `/api/maintenance` - Maintenance tracking
- `/api/loyalty` - Loyalty program
- `/api/admin` - Admin operations
- `/api/tracking` - Real-time vehicle tracking

## 📱 Frontend Access

- **Development**: http://localhost:5173
- **Production**: Build with `npm run build:frontend`

## 🔐 Default Users

After seeding, you can log in with:

**Admin Account:**
- Email: admin@carhive.com
- Password: admin123

**Customer Account:**
- Email: john.doe@example.com
- Password: password123

## 📚 Documentation

- Backend API: See `backend/README.md` and Postman collection
- Frontend: See `frontend/README.md`
- Database Schema: See `backend/prisma/schema.prisma`

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

### Database Connection Issues
- Verify MongoDB is running
- Check `DATABASE_URL` in backend/.env
- Ensure database user has proper permissions

### CORS Errors
- Verify `FRONTEND_URL` in backend/.env matches your frontend URL
- Default is `http://localhost:5173` for Vite

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

CarHive Team

---

For more information, see individual README files in `backend/` and `frontend/` directories.
