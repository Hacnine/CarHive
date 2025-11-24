export type Location = {
  id: string;
  name?: string;
  code?: string;
  address?: string;
  city?: string;
  type?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  _count?: {
    vehicles?: number;
  };
};

export type PaginatedLocations = {
  data: {
    locations: Location[];
  };
};
