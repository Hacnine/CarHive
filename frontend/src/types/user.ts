import type { Booking } from './booking';

export type UserMin = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  _count?: {
    bookings?: number;
    reviews?: number;
  };
};

export type UserFull = UserMin & {
  bookings?: Booking[];
  // extend with other detailed fields as needed (addresses, preferences, etc.)
};

export type PaginatedUsers = {
  data: {
    users: UserMin[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
};
