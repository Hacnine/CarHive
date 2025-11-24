import React, { useState, useCallback, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const MapLocationPicker = ({ onLocationSelect, initialLocation = null, placeholder = "Select location" }) => {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationSelect = useCallback((location) => {
    setSelectedLocation(location);
    if (onLocationSelect) onLocationSelect(location);
  }, [onLocationSelect]);

  const handleSearch = useCallback(() => {
    // For now, just set the query as address
    if (searchQuery) {
      handleLocationSelect({ lat: 40.7128, lng: -74.0060, address: searchQuery }); // Mock for demo
    }
  }, [searchQuery, handleLocationSelect]);

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <div>Loading maps...</div>;
      case Status.FAILURE:
        return <div>Error loading maps</div>;
      case Status.SUCCESS:
        return (
          <GoogleMap
            center={selectedLocation || { lat: 40.7128, lng: -74.0060 }}
            zoom={10}
            onLocationSelect={handleLocationSelect}
            marker={selectedLocation}
          />
        );
    }
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>
      <div className="h-64 w-full border rounded">
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''} render={render} />
      </div>
      {selectedLocation && (
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedLocation.address}
        </div>
      )}
    </div>
  );
};

const GoogleMap = ({ center, zoom, onLocationSelect, marker }) => {
  const ref = useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onLocationSelect({ lat, lng, address: 'Selected location' });
    });

    if (marker) {
      new window.google.maps.Marker({
        position: marker,
        map,
      });
    }
  }, [center, zoom, onLocationSelect, marker]);

  return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
};

export default MapLocationPicker;