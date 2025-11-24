import React from 'react';
import { useGetUserReviewsQuery, useDeleteReviewMutation } from '../../app/services/reviewsApi';

const MyReviews: React.FC = () => {
  const { data, isLoading, isError } = useGetUserReviewsQuery({ page: 1, limit: 20 });
  const [deleteReview] = useDeleteReviewMutation();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-600">Failed to load your reviews</div>;

  const reviews = data?.data.reviews || [];

  const handleDelete = async (id: string) => {
    if (!confirm('Delete review?')) return;
    try {
      await deleteReview(id).unwrap();
      alert('Deleted');
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">My Reviews</h2>
      <div className="grid gap-3">
        {reviews.map(r => (
          <div key={r.id} className="p-3 border rounded flex justify-between">
            <div>
              <div className="font-semibold">{r.vehicle?.make} {r.vehicle?.model}</div>
              <div className="text-sm text-gray-600">Rating: {r.rating}</div>
              <p>{r.comment}</p>
            </div>
            <div>
              <button className="text-red-600" onClick={() => handleDelete(r.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
