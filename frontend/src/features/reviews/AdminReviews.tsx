import React from 'react';
import { useGetAllReviewsQuery } from '../../app/services/reviewsApi';

const AdminReviews: React.FC = () => {
  const { data, isLoading, isError } = useGetAllReviewsQuery({ page: 1, limit: 20 });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-600">Failed to load reviews</div>;

  const reviews = data?.data.reviews || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">All Reviews (Admin)</h2>
      <div className="grid gap-3">
        {reviews.map(r => (
          <div key={r.id} className="p-3 border rounded">
            <div className="font-semibold">{r.user?.name} — {r.vehicle?.make} {r.vehicle?.model}</div>
            <div className="text-sm text-gray-600">Rating: {r.rating}</div>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReviews;
