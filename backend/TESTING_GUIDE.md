# CarHive API Testing Guide

## 📋 Table of Contents
- [Database Seeding](#database-seeding)
- [Test Credentials](#test-credentials)
- [API Endpoint Testing](#api-endpoint-testing)
- [Feature Testing Scenarios](#feature-testing-scenarios)
- [Environment Setup](#environment-setup)

## 🌱 Database Seeding

The database has been seeded with comprehensive test data covering all features:

- **5 Users**: 1 admin + 4 customers with different loyalty tiers
- **8 Locations**: LAX, DTLA, JFK, NYC, MIA, SBE, SFO, ORD
- **20 Vehicles**: Economy (3), Compact (3), Midsize (3), SUV (4), Luxury (4), Van (2)
- **8 Bookings**: Various statuses (pending, confirmed, active, completed, cancelled)
- **8 Payments**: Completed, pending, and refunded states
- **3 Reviews**: 4-5 star ratings from customers
- **1 Maintenance Task**: In-progress oil change for Mazda3

### Run Seeding
```bash
cd CarHiveBackend
node prisma/seed.js
```

## 🔑 Test Credentials

### Admin Account
```
Email: admin@carhive.com
Password: admin123
Role: admin
Phone: +15551234567
```

### Customer Accounts

#### John Doe (Silver Tier - 1500 points)
```
Email: john.doe@example.com
Password: customer123
Phone: +15555551111
Loyalty: Silver (5% discount)
```

#### Jane Smith (Gold Tier - 6500 points)
```
Email: jane.smith@example.com
Password: customer123
Phone: +15555551234
Loyalty: Gold (10% discount)
```

#### Mike Wilson (Platinum Tier - 12000 points)
```
Email: mike.wilson@example.com
Password: customer123
Phone: +15555559876
Loyalty: Platinum (15% discount)
```

#### Sarah Johnson (Bronze Tier - 450 points)
```
Email: sarah.johnson@example.com
Password: customer123
Phone: +15555556789
Loyalty: Bronze (0% discount)
```

## 🧪 API Endpoint Testing

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123",
  "phone": "+15555550000"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "customer123"
}
```
**Response:** JWT token to use in subsequent requests

### Vehicle Endpoints

#### Search Vehicles
```http
GET /api/vehicles/search?locationId={locationId}&startDate=2025-12-01&endDate=2025-12-05&category=economy
Authorization: Bearer {token}
```

#### Get Vehicle Details
```http
GET /api/vehicles/{vehicleId}
Authorization: Bearer {token}
```

#### Check Vehicle Availability
```http
GET /api/vehicles/{vehicleId}/availability?startDate=2025-12-01&endDate=2025-12-05
Authorization: Bearer {token}
```

#### Bulk Import Vehicles (Admin Only)
```http
POST /api/vehicles/bulk-import
Authorization: Bearer {adminToken}
Content-Type: application/json

{
  "vehicles": [
    {
      "sku": "TEST-001",
      "make": "Ford",
      "model": "Focus",
      "year": 2024,
      "category": "compact",
      "transmission": "automatic",
      "fuelType": "gasoline",
      "dailyRate": 39.99,
      "locationId": "{locationId}",
      "seats": 5,
      "doors": 4,
      "features": ["Air Conditioning", "Bluetooth"]
    }
  ]
}
```

### Booking Endpoints

#### Create Booking
```http
POST /api/bookings
Authorization: Bearer {token}
Content-Type: application/json

{
  "vehicleId": "{vehicleId}",
  "locationPickupId": "{locationId}",
  "locationDropoffId": "{locationId}",
  "startDate": "2025-12-01T10:00:00Z",
  "endDate": "2025-12-05T10:00:00Z",
  "addons": []
}
```

#### Get User Bookings
```http
GET /api/bookings/my-bookings
Authorization: Bearer {token}
```

#### Modify Booking
```http
PUT /api/bookings/{bookingId}/modify
Authorization: Bearer {token}
Content-Type: application/json

{
  "startDate": "2025-12-02T10:00:00Z",
  "endDate": "2025-12-06T10:00:00Z"
}
```

#### Cancel Booking
```http
POST /api/bookings/{bookingId}/cancel
Authorization: Bearer {token}
Content-Type: application/json

{
  "reason": "Change of plans"
}
```

#### Online Check-in
```http
POST /api/bookings/{bookingId}/checkin
Authorization: Bearer {token}
Content-Type: application/json

{
  "documents": ["license.jpg", "insurance.jpg"],
  "agreementSigned": true
}
```

#### Contactless Pickup
```http
POST /api/bookings/{bookingId}/pickup
Authorization: Bearer {token}
Content-Type: application/json

{
  "qrCode": "QR-12345",
  "pickupInspection": {
    "photos": ["photo1.jpg"],
    "fuelLevel": 1.0,
    "odometer": 15000
  }
}
```

#### Request SOS Assistance
```http
POST /api/bookings/{bookingId}/sos
Authorization: Bearer {token}
Content-Type: application/json

{
  "note": "Flat tire on Highway 101",
  "location": "37.4419° N, 122.1430° W"
}
```
**Note:** Sends both email and SMS alerts to admin

#### Return Checklist
```http
POST /api/bookings/{bookingId}/return
Authorization: Bearer {token}
Content-Type: application/json

{
  "returnInspection": {
    "photos": ["return1.jpg"],
    "fuelLevel": 0.95,
    "odometer": 15350,
    "damage": false
  }
}
```
**Note:** Awards loyalty points automatically

### GPS Tracking Endpoints

#### Update GPS Location
```http
POST /api/tracking/{bookingId}/location
Authorization: Bearer {token}
Content-Type: application/json

{
  "lat": 37.7749,
  "lng": -122.4194,
  "speed": 55,
  "heading": 90,
  "accuracy": 10
}
```

#### Get Tracking Data
```http
GET /api/tracking/{bookingId}
Authorization: Bearer {token}
```
**Response:** Includes rental stats (elapsed hours, remaining hours, distance, cost, progress)

#### Get Route Suggestion
```http
GET /api/tracking/{bookingId}/route
Authorization: Bearer {token}
```
**Note:** Uses Google Maps Directions API

#### Toggle Tracking
```http
POST /api/tracking/{bookingId}/toggle
Authorization: Bearer {token}
Content-Type: application/json

{
  "enabled": true
}
```

### Loyalty Program Endpoints

#### Get My Loyalty Info
```http
GET /api/loyalty/me
Authorization: Bearer {token}
```
**Response:**
```json
{
  "points": 1500,
  "tier": "silver",
  "discount": 5,
  "pointsToNext": 3500,
  "nextTier": "gold"
}
```

#### Redeem Points
```http
POST /api/loyalty/redeem
Authorization: Bearer {token}
Content-Type: application/json

{
  "points": 500
}
```
**Note:** 100 points = $1 discount

#### Get Loyalty Tiers
```http
GET /api/loyalty/tiers
Authorization: Bearer {token}
```

#### Get Loyalty History
```http
GET /api/loyalty/history
Authorization: Bearer {token}
```

### Admin Dashboard Endpoints

#### Get Overview Metrics
```http
GET /api/admin/overview
Authorization: Bearer {adminToken}
```
**Response:** Total vehicles, active bookings, monthly revenue, utilization rate, growth percentages

#### Get Booking Calendar
```http
GET /api/admin/bookings/calendar?start=2025-11-01&end=2025-11-30
Authorization: Bearer {adminToken}
```

#### Bulk Booking Action
```http
POST /api/admin/bookings/bulk-action
Authorization: Bearer {adminToken}
Content-Type: application/json

{
  "bookingIds": ["bookingId1", "bookingId2"],
  "action": "approve"
}
```
**Actions:** approve, reject, cancel

#### Export Bookings (CSV)
```http
GET /api/admin/export/bookings?start=2025-11-01&end=2025-11-30
Authorization: Bearer {adminToken}
```
**Response:** CSV file download

### Maintenance Endpoints

#### Create Maintenance Task
```http
POST /api/maintenance
Authorization: Bearer {adminToken}
Content-Type: application/json

{
  "vehicleId": "{vehicleId}",
  "type": "service",
  "description": "Oil change",
  "scheduledAt": "2025-12-01T10:00:00Z",
  "assignedTo": "Mike Johnson",
  "mileage": 45000
}
```

#### Get Maintenance Tasks
```http
GET /api/maintenance?status=in_progress
Authorization: Bearer {adminToken}
```

#### Update Maintenance Task
```http
PUT /api/maintenance/{taskId}
Authorization: Bearer {adminToken}
Content-Type: application/json

{
  "status": "completed",
  "completedAt": "2025-12-01T15:00:00Z",
  "cost": 85.50,
  "notes": "Completed successfully"
}
```

### Location Endpoints

#### Get All Locations
```http
GET /api/locations
```

#### Get Location Details
```http
GET /api/locations/{locationId}
```

### Review Endpoints

#### Create Review
```http
POST /api/reviews
Authorization: Bearer {token}
Content-Type: application/json

{
  "vehicleId": "{vehicleId}",
  "rating": 5,
  "comment": "Excellent car! Very clean and reliable."
}
```

#### Get Vehicle Reviews
```http
GET /api/reviews/vehicle/{vehicleId}
```

### Payment Endpoints

#### Process Payment
```http
POST /api/payments
Authorization: Bearer {token}
Content-Type: application/json

{
  "bookingId": "{bookingId}",
  "method": "credit_card",
  "cardToken": "tok_test_12345"
}
```

#### Get Booking Payment
```http
GET /api/payments/booking/{bookingId}
Authorization: Bearer {token}
```

## 🎯 Feature Testing Scenarios

### Scenario 1: Complete Booking Flow (John - Silver Tier)

1. **Login as John**
   ```
   POST /api/auth/login
   Email: john.doe@example.com
   Password: customer123
   ```

2. **Search Vehicles at LAX**
   ```
   GET /api/vehicles/search?locationId={laxId}&startDate=2025-12-01&endDate=2025-12-05
   ```

3. **Create Booking for Nissan Versa**
   ```
   POST /api/bookings
   {
     "vehicleId": "{nissan-versa-id}",
     "locationPickupId": "{laxId}",
     "locationDropoffId": "{laxId}",
     "startDate": "2025-12-01T10:00:00Z",
     "endDate": "2025-12-05T10:00:00Z"
   }
   ```

4. **Process Payment**
   ```
   POST /api/payments
   {
     "bookingId": "{bookingId}",
     "method": "credit_card"
   }
   ```

5. **Check Loyalty Points (Should have 1500 + booking amount * 10)**
   ```
   GET /api/loyalty/me
   ```

### Scenario 2: GPS Tracking Flow (Jane - Gold Tier)

1. **Login as Jane**
   ```
   Email: jane.smith@example.com
   ```

2. **Get Active Booking**
   ```
   GET /api/bookings/my-bookings
   Filter: status = 'active'
   ```

3. **Enable GPS Tracking**
   ```
   POST /api/tracking/{bookingId}/toggle
   {"enabled": true}
   ```

4. **Update Location (Simulating driving)**
   ```
   POST /api/tracking/{bookingId}/location
   {
     "lat": 37.7749,
     "lng": -122.4194,
     "speed": 55,
     "heading": 90,
     "accuracy": 10
   }
   ```

5. **Get Tracking Stats**
   ```
   GET /api/tracking/{bookingId}
   ```
   **Verify:** Distance calculated, speed, elapsed hours, cost estimate

6. **Get Route to Dropoff**
   ```
   GET /api/tracking/{bookingId}/route
   ```

### Scenario 3: SOS Request Flow (Mike - Platinum)

1. **Login as Mike**
   ```
   Email: mike.wilson@example.com
   ```

2. **Request SOS for Active Booking**
   ```
   POST /api/bookings/{bookingId}/sos
   {
     "note": "Flat tire on Highway 101",
     "location": "37.4419° N, 122.1430° W"
   }
   ```

3. **Verify Alerts**
   - Check admin email inbox for SOS email
   - Check admin phone (+15551234567) for SMS alert (if Twilio configured)

4. **Check Tracking Data**
   ```
   GET /api/tracking/{bookingId}
   ```
   **Verify:** SOS alert appears in `alerts` array

### Scenario 4: Loyalty Points Redemption (Jane - Gold)

1. **Login as Jane (6500 points)**

2. **View Loyalty Details**
   ```
   GET /api/loyalty/me
   ```
   **Expected:** tier: 'gold', discount: 10%, points: 6500

3. **Redeem 500 Points ($5 discount)**
   ```
   POST /api/loyalty/redeem
   {"points": 500}
   ```

4. **Verify Deduction**
   ```
   GET /api/loyalty/me
   ```
   **Expected:** points: 6000

5. **View History**
   ```
   GET /api/loyalty/history
   ```

### Scenario 5: Admin Dashboard Management

1. **Login as Admin**
   ```
   Email: admin@carhive.com
   Password: admin123
   ```

2. **View Overview Metrics**
   ```
   GET /api/admin/overview
   ```
   **Expected:** Total vehicles (20), active bookings (2), monthly revenue, utilization rate

3. **View Booking Calendar**
   ```
   GET /api/admin/bookings/calendar?start=2025-11-01&end=2025-12-31
   ```

4. **Approve Pending Bookings**
   ```
   POST /api/admin/bookings/bulk-action
   {
     "bookingIds": ["{pendingBookingId}"],
     "action": "approve"
   }
   ```

5. **Export Bookings to CSV**
   ```
   GET /api/admin/export/bookings?start=2025-11-01&end=2025-11-30
   ```

6. **Create Maintenance Task**
   ```
   POST /api/maintenance
   {
     "vehicleId": "{vehicleId}",
     "type": "service",
     "description": "Brake inspection",
     "scheduledAt": "2025-12-01T10:00:00Z"
   }
   ```

### Scenario 6: Contactless Rental Flow

1. **Book Vehicle**
   ```
   POST /api/bookings
   ```

2. **Online Check-in (24 hours before)**
   ```
   POST /api/bookings/{bookingId}/checkin
   {
     "documents": ["license.jpg", "insurance.jpg"],
     "agreementSigned": true
   }
   ```
   **Response:** QR code generated

3. **Contactless Pickup (At rental start time)**
   ```
   POST /api/bookings/{bookingId}/pickup
   {
     "qrCode": "QR-12345-67890",
     "pickupInspection": {
       "photos": ["front.jpg", "back.jpg", "left.jpg", "right.jpg"],
       "fuelLevel": 1.0,
       "odometer": 15000
     }
   }
   ```
   **Verify:** Booking status changes to 'active', vehicle status changes to 'rented'

4. **Return Vehicle**
   ```
   POST /api/bookings/{bookingId}/return
   {
     "returnInspection": {
       "photos": ["return-front.jpg"],
       "fuelLevel": 0.95,
       "odometer": 15350,
       "damage": false
     }
   }
   ```
   **Verify:** 
   - Final cost calculated (includes fuel charge)
   - Loyalty points awarded (total * 10)
   - Booking status = 'completed'
   - Vehicle status = 'available'

## 🔧 Environment Setup

### Required Environment Variables

Create `.env` file in `CarHiveBackend/`:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/carhive"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this"

# Email (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
ADMIN_EMAIL="admin@carhive.com"

# Twilio (SMS)
TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
TWILIO_PHONE_NUMBER="+15555551234"
ADMIN_PHONE="+15551234567"

# Google Maps
GOOGLE_MAPS_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# Frontend
FRONTEND_URL="http://localhost:5173"

# Server
PORT=5000
```

### Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create/select project
3. Enable APIs:
   - Directions API
   - Geocoding API
   - Maps JavaScript API
4. Create API key
5. Add to `.env`

### Twilio SMS Setup

1. Sign up at [Twilio](https://www.twilio.com/)
2. Get Account SID and Auth Token
3. Get Twilio phone number
4. Add to `.env`
5. Verify admin phone number for testing

### Testing with Postman

1. Import `CarHiveBackend/CarHive_API.postman_collection.json`
2. Set environment variables:
   - `baseUrl`: http://localhost:5000/api
   - `token`: (obtained after login)
   - `adminToken`: (obtained after admin login)
3. Use collection folders for organized testing

## 📊 Data Verification

### Check Seeded Data

```bash
# MongoDB Shell
mongosh

use carhive

# Count documents
db.users.countDocuments()  # Should be 5
db.locations.countDocuments()  # Should be 8
db.vehicles.countDocuments()  # Should be 20
db.bookings.countDocuments()  # Should be 8
db.payments.countDocuments()  # Should be 7
db.reviews.countDocuments()  # Should be 3
db.maintenance_tasks.countDocuments()  # Should be 1

# View users with loyalty tiers
db.users.find({}, {name: 1, email: 1, loyaltyPoints: 1, loyaltyTier: 1})

# View bookings by status
db.bookings.aggregate([
  {$group: {_id: "$status", count: {$sum: 1}}}
])
```

## 🚀 Start Testing

1. **Start Backend Server**
   ```bash
   cd CarHiveBackend
   npm run dev
   ```

2. **Start Frontend (Optional)**
   ```bash
   cd CarHiveFrontend
   npm run dev
   ```

3. **Open Postman** and start testing endpoints

4. **Monitor Console** for logs and errors

---

## 📌 Notes

- All customer passwords are `customer123`
- Admin password is `admin123`
- Phone numbers are in E.164 format for Twilio compatibility
- GPS coordinates are for San Francisco/Bay Area
- Loyalty points are awarded at 10 points per dollar spent
- Tier discounts: Bronze 0%, Silver 5%, Gold 10%, Platinum 15%
- 100 loyalty points = $1 discount when redeemed
- SOS alerts send both email AND SMS if Twilio is configured
- GPS tracking updates every 30 seconds on frontend
- Admin dashboard shows real-time metrics with month-over-month growth

Happy Testing! 🎉
