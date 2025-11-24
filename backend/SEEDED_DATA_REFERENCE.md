# Seeded Data Quick Reference

## 👥 Users

| Name | Email | Password | Role | Loyalty Tier | Points | Phone |
|------|-------|----------|------|--------------|--------|-------|
| Admin User | admin@carhive.com | admin123 | admin | - | - | +15551234567 |
| John Doe | john.doe@example.com | customer123 | customer | Silver | 1500 | +15555551111 |
| Jane Smith | jane.smith@example.com | customer123 | customer | Gold | 6500 | +15555551234 |
| Mike Wilson | mike.wilson@example.com | customer123 | customer | Platinum | 12000 | +15555559876 |
| Sarah Johnson | sarah.johnson@example.com | customer123 | customer | Bronze | 450 | +15555556789 |

## 📍 Locations

| Code | Name | City | State | Zip | Phone | Type | Min Age | Deposit |
|------|------|------|-------|-----|-------|------|---------|---------|
| LAX | Los Angeles Airport | Los Angeles | CA | 90045 | +13106461234 | airport | 21 | $200 |
| DTLA | Downtown LA | Los Angeles | CA | 90012 | +12136285678 | city_center | 21 | $150 |
| JFK | JFK Airport | Queens | NY | 11430 | +17182445678 | airport | 21 | $250 |
| NYC | Times Square | New York | NY | 10036 | +12127361234 | city_center | 25 | $200 |
| MIA | Miami Beach | Miami Beach | FL | 33139 | +13056738888 | beach | 21 | $175 |
| SBE | South Beach Express | Miami Beach | FL | 33140 | +13056741234 | beach | 23 | $180 |
| SFO | San Francisco Airport | San Francisco | CA | 94128 | +16508218211 | airport | 21 | $225 |
| ORD | O'Hare Airport | Chicago | IL | 60666 | +17738946000 | airport | 21 | $200 |

## 🚗 Vehicles

### Economy Cars (3)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| ECAR-001 | Nissan Versa | 2023 | $35.99 | available | LAX |
| ECAR-002 | Chevrolet Spark | 2023 | $32.99 | available | DTLA |
| ECAR-003 | Hyundai Accent | 2024 | $37.99 | **rented** | SFO |

### Compact Cars (3)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| CCAR-001 | Toyota Corolla | 2023 | $42.99 | available | JFK |
| CCAR-002 | Honda Civic | 2024 | $45.99 | available | NYC |
| CCAR-003 | Mazda Mazda3 | 2023 | $44.99 | **maintenance** | ORD |

### Midsize Cars (3)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| MCAR-001 | Toyota Camry | 2024 | $49.99 | available | LAX |
| MCAR-002 | Honda Accord | 2024 | $54.99 | available | MIA |
| MCAR-003 | Nissan Altima | 2023 | $49.99 | **reserved** | LAX |

### SUVs (4)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| SUV-001 | Ford Explorer | 2024 | $69.99 | available | SBE |
| SUV-002 | Chevrolet Tahoe | 2024 | $74.99 | available | DTLA |
| SUV-003 | Jeep Grand Cherokee | 2023 | $67.99 | available | JFK |
| SUV-004 | Toyota Highlander Hybrid | 2024 | $76.99 | **rented** | SFO |

### Luxury Cars (4)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| LUX-001 | BMW 3 Series | 2024 | $95.99 | available | NYC |
| LUX-002 | Mercedes E-Class | 2024 | $99.99 | available | MIA |
| LUX-003 | Audi A6 | 2024 | $97.99 | available | LAX |
| LUX-004 | Tesla Model 3 | 2024 | $102.99 | available | SFO |

### Vans (2)
| SKU | Make/Model | Year | Rate | Status | Location |
|-----|------------|------|------|--------|----------|
| VAN-001 | Chrysler Pacifica | 2024 | $68.99 | available | ORD |
| VAN-002 | Honda Odyssey | 2024 | $71.99 | available | JFK |

## 📅 Bookings

| ID | User | Vehicle | Pickup | Dropoff | Dates | Status | Total | Notes |
|----|------|---------|--------|---------|-------|--------|-------|-------|
| 1 | John | Nissan Versa | LAX | DTLA | +7 days (3 days) | confirmed | $122.69 | Airport pickup |
| 2 | Jane | Hyundai Accent | SFO | LAX | -1 day (3 days) | **active** | $129.23 | GPS tracking enabled |
| 3 | John | BMW 3 Series | MIA | SBE | -15 days (5 days) | completed | $540.65 | Points awarded |
| 4 | Mike | Toyota Highlander | SFO | SFO | -2 days (3 days) | **active** | $261.76 | SOS requested |
| 5 | Sarah | Honda Accord | SBE | MIA | +14 days (7 days) | **pending** | $439.57 | Payment pending |
| 6 | Jane | Nissan Altima | LAX | LAX | +2 days (4 days) | **reserved** | $227.96 | Checked in |
| 7 | Sarah | Honda Civic | NYC | NYC | +5 days (2 days) | **cancelled** | $105.26 | Refunded |
| 8 | Mike | Mercedes E-Class | JFK | NYC | -20 days (3 days) | completed | $341.97 | Points awarded |

## ⭐ Reviews

| User | Vehicle | Rating | Comment |
|------|---------|--------|---------|
| John | BMW 3 Series | 5★ | Absolutely loved the BMW! Smooth ride, luxurious interior... |
| Mike | Mercedes E-Class | 5★ | Mercedes was in perfect condition. Excellent service! |
| Jane | Honda Civic | 4★ | Great compact car. Clean and reliable. |

## 🔧 Maintenance Tasks

| Vehicle | Type | Description | Status | Assigned To | Cost | Mileage |
|---------|------|-------------|--------|-------------|------|---------|
| Mazda3 (CCAR-003) | service | Oil change and filter replacement | in_progress | Mike Johnson | $75.00 | 45,320 |

## 💰 Payments

| Booking | Amount | Method | Status | Provider ID |
|---------|--------|--------|--------|-------------|
| Booking 1 (John) | $122.69 | credit_card | completed | ch_test_xxxxx |
| Booking 2 (Jane) | $129.23 | credit_card | completed | ch_test_xxxxx |
| Booking 3 (John) | $540.65 | credit_card | completed | ch_test_xxxxx |
| Booking 4 (Mike) | $261.76 | credit_card | completed | ch_test_xxxxx |
| Booking 5 (Sarah) | - | - | **pending** | - |
| Booking 6 (Jane) | $227.96 | debit_card | completed | ch_test_xxxxx |
| Booking 7 (Sarah) | $105.26 | credit_card | **refunded** | ch_test_xxxxx |
| Booking 8 (Mike) | $341.97 | credit_card | completed | ch_test_xxxxx |

## 🎯 Loyalty Tier Breakdown

| Tier | Point Range | Discount | Users |
|------|-------------|----------|-------|
| Bronze | 0-999 | 0% | Sarah (450) |
| Silver | 1,000-4,999 | 5% | John (1,500) |
| Gold | 5,000-9,999 | 10% | Jane (6,500) |
| Platinum | 10,000+ | 15% | Mike (12,000) |

**Points Earning:** 10 points per $1 spent  
**Points Redemption:** 100 points = $1 discount

## 📊 Statistics

- **Total Users:** 5 (1 admin + 4 customers)
- **Total Locations:** 8 (4 airports, 2 city centers, 2 beach)
- **Total Vehicles:** 20
  - Available: 14
  - Rented: 3 (ECAR-003, SUV-004)
  - Reserved: 1 (MCAR-003)
  - Maintenance: 1 (CCAR-003)
- **Total Bookings:** 8
  - Pending: 1
  - Confirmed: 1
  - Reserved: 1
  - Active: 2
  - Completed: 2
  - Cancelled: 1
- **Total Reviews:** 3
- **Average Rating:** 4.67★
- **Active Maintenance Tasks:** 1

## 🔍 Quick Lookup IDs

### Get Location IDs
```bash
GET /api/locations
```

### Get Vehicle IDs by Category
```bash
GET /api/vehicles/search?category=economy
GET /api/vehicles/search?category=luxury
```

### Get User's Bookings
```bash
GET /api/bookings/my-bookings
Authorization: Bearer {token}
```

### Get Active Rentals (for GPS tracking)
```bash
GET /api/bookings/my-bookings?status=active
```

## 📱 Testing Scenarios

### Test GPS Tracking
- Login as **Jane** (jane.smith@example.com)
- Booking ID for Hyundai Accent is **active** with GPS enabled
- Use: `POST /api/tracking/{bookingId}/location`

### Test SOS Feature
- Login as **Mike** (mike.wilson@example.com)
- Booking ID for Toyota Highlander has SOS request
- Check for email/SMS alerts

### Test Loyalty Redemption
- Login as **Jane** (6,500 Gold points)
- Redeem: `POST /api/loyalty/redeem {"points": 500}`

### Test Admin Dashboard
- Login as **Admin** (admin@carhive.com)
- View metrics: `GET /api/admin/overview`
- See all 8 bookings with varied statuses

### Test Maintenance Workflow
- Login as **Admin**
- View task: `GET /api/maintenance`
- Mazda3 is in maintenance status

### Test Pending Payment
- Login as **Sarah** (sarah.johnson@example.com)
- Has pending booking for Honda Accord
- Complete payment: `POST /api/payments`

---

**Note:** All ObjectId references are generated dynamically during seeding. Use the API endpoints to retrieve actual IDs for testing.
