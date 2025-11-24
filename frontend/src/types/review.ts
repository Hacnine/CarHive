export type ReviewUser = {
  id: string;
  name?: string;
};

export type ReviewVehicle = {
  id: string;
  make?: string;
  model?: string;
  year?: number;
};

export type Review = {
  id: string;
  userId?: string;
  vehicleId?: string;
  rating: number;
  comment?: string;
  createdAt?: string;
  user?: ReviewUser;
  vehicle?: ReviewVehicle;
};

export type PaginatedReviews = {
  data: {
    reviews: Review[];
    summary?: {
      totalReviews: number;
      averageRating: number;
    };
    pagination?: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
};
