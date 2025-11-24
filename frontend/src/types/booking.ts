export type Payment = {
  id: string;
  bookingId?: string;
  amount: number;
  method?: string;
  status?: string;
  providerId?: string | null;
  createdAt?: string;
};

export type LocationMin = {
  id: string;
  name?: string;
  code?: string;
  address?: string;
  city?: string;
};

export type Booking = {
  id: string;
  userId?: string;
  vehicleId?: string;
  startDate?: string;
  endDate?: string;
  subtotal?: number;
  taxes?: number;
  fees?: number;
  totalPrice?: number;
  addons?: any[];
  promoCode?: string | null;
  status?: string;
  paymentStatus?: string;
  holdExpiresAt?: string | null;
  vehicle?: any;
  pickupLocation?: LocationMin | null;
  dropoffLocation?: LocationMin | null;
  payment?: Payment | null;
  createdAt?: string;
};

export type PaginatedBookings = {
  data: {
    bookings: Booking[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
};
