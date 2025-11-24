import React from 'react';
import { useGetVehicleReviewsQuery, useCreateReviewMutation } from '../../app/services/reviewsApi';
import { useParams } from 'react-router-dom';

const VehicleReviews: React.FC = () => {
  const { vehicleId } = useParams();
  const { data, isLoading, isError } = useGetVehicleReviewsQuery({ vehicleId: vehicleId || '', page: 1, limit: 10 });
  const [createReview] = useCreateReviewMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const rating = Number(form.rating.value);
    const comment = form.comment.value;
    try {
      await createReview({ vehicleId: vehicleId || '', rating, comment }).unwrap();
      alert('Review submitted');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to submit review');
    }
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-600">Failed to load reviews</div>;

  const reviews = data?.data.reviews || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="mb-6">
        <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
          <div>
            <label className="block text-sm">Rating</label>
            <input name="rating" type="number" min={1} max={5} defaultValue={5} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Comment</label>
            <textarea name="comment" className="w-full border p-2 rounded" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit Review</button>
        </form>
      </div>

      <div className="grid gap-3">
        {reviews.map((r) => (
          <div key={r.id} className="p-3 border rounded">
            <div className="font-semibold">{r.user?.name || 'Anonymous'}</div>
            <div className="text-sm text-gray-600">Rating: {r.rating}</div>
            <p className="mt-2">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleReviews;
