import React, { useState } from 'react';
import { useGetLoyaltyInfoQuery, useRedeemPointsMutation } from '../../app/services/loyaltyApi';

const LoyaltyWidget = () => {
  const { data: loyaltyInfo, isLoading, error } = useGetLoyaltyInfoQuery();
  const [redeemPoints] = useRedeemPointsMutation();
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [redeemAmount, setRedeemAmount] = useState(100);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error || !loyaltyInfo) {
    return null;
  }

  const handleRedeem = async () => {
    try {
      await redeemPoints(redeemAmount).unwrap();
      alert(`Successfully redeemed ${redeemAmount} points for $${(redeemAmount / 100).toFixed(2)} discount!`);
      setShowRedeemModal(false);
      setRedeemAmount(100);
    } catch (err) {
      alert(err.data?.error || 'Failed to redeem points');
    }
  };

  const getTierColor = (tier) => {
    const colors = {
      bronze: 'text-orange-600 bg-orange-100',
      silver: 'text-gray-600 bg-gray-200',
      gold: 'text-yellow-600 bg-yellow-100',
      platinum: 'text-purple-600 bg-purple-100',
    };
    return colors[tier] || colors.bronze;
  };

  return (
    <>
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Loyalty Rewards</h3>
          <span className={`px-4 py-1 rounded-full text-sm font-semibold uppercase ${getTierColor(loyaltyInfo.loyaltyTier)}`}>
            {loyaltyInfo.loyaltyTier}
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available Points</p>
                <p className="text-3xl font-bold text-green-600">{loyaltyInfo.loyaltyPoints.toLocaleString()}</p>
              </div>
              <button
                onClick={() => setShowRedeemModal(true)}
                disabled={loyaltyInfo.loyaltyPoints < 100}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Redeem
              </button>
            </div>
          </div>

          {loyaltyInfo.pointsToNextTier > 0 && (
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-gray-600 text-sm mb-2">Progress to Next Tier</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.min(
                      100,
                      ((loyaltyInfo.tierInfo.max - loyaltyInfo.pointsToNextTier) /
                        loyaltyInfo.tierInfo.max) *
                        100
                    )}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {loyaltyInfo.pointsToNextTier.toLocaleString()} points to next tier
              </p>
            </div>
          )}

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 text-sm mb-1">Current Tier Benefits</p>
            <p className="text-lg font-semibold text-green-600">
              {(loyaltyInfo.tierInfo.discount * 100).toFixed(0)}% discount on all bookings
            </p>
          </div>
        </div>
      </div>

      {/* Redeem Modal */}
      {showRedeemModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Redeem Points</h3>
            <p className="text-gray-600 mb-4">
              Convert your loyalty points into discount credits. 100 points = $1 discount.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Points to Redeem (min 100)
              </label>
              <input
                type="number"
                min="100"
                step="100"
                max={loyaltyInfo.loyaltyPoints}
                value={redeemAmount}
                onChange={(e) => setRedeemAmount(parseInt(e.target.value) || 100)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                = ${(redeemAmount / 100).toFixed(2)} discount credit
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowRedeemModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRedeem}
                disabled={redeemAmount < 100 || redeemAmount > loyaltyInfo.loyaltyPoints}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Redeem
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoyaltyWidget;
