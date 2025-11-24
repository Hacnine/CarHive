

## Key API endpoints (summary)
The backend exposes REST endpoints for the main resources. Adjust paths if your backend uses a different base path.

- Auth
  - POST /auth/register — register new user
  - POST /auth/login — login, returns JWT

- Users
  - GET /users/:id — fetch user
  - PUT /users/:id — update user

- Vehicles
  - GET /vehicles — list vehicles
  - GET /vehicles/:id — vehicle details

- Bookings
  - POST /bookings — create booking
  - GET /bookings — list bookings (user/admin)
  - GET /bookings/:id — booking details

- Locations
  - GET /locations — list pickup/dropoff locations

- Reviews
  - POST /reviews — submit review