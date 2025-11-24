export type Location = {
  id: string;
  name?: string;
  code?: string;
  city?: string;
  type?: string;
};

export type Vehicle = {
  id: string;
  make?: string;
  model?: string;
  year?: number;
  dailyRate?: number;
  description?: string;
  location?: Location | null;
  status?: string;
  transmission?: string;
  fuelType?: string;
  imageUrl?: string;
};

export type PaginatedVehiclesResponse = {
  data: {
    vehicles: Vehicle[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
};
