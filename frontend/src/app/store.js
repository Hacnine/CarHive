import { configureStore } from '@reduxjs/toolkit';
import { bookingsApi } from './services/bookingsApi.js';
import { vehiclesApi } from './services/vehiclesApi';
import { locationsApi } from './services/locationsApi';
import { reviewsApi } from './services/reviewsApi';
import { usersApi } from './services/usersApi';
import { loyaltyApi } from './services/loyaltyApi';
import { adminApi } from './services/adminApi';
import { trackingApi } from './services/trackingApi';

export const store = configureStore({
  reducer: {
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [loyaltyApi.reducerPath]: loyaltyApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [trackingApi.reducerPath]: trackingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookingsApi.middleware)
      .concat(vehiclesApi.middleware)
      .concat(locationsApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(usersApi.middleware)
      .concat(loyaltyApi.middleware)
      .concat(adminApi.middleware)
      .concat(trackingApi.middleware),
});
