import React from 'react';

const Tags = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <div key={index} className="bg-deep-green hover:bg-light-green hover:cursor-pointer rounded text-xs text-white-green px-2 py-1 mb-2">
          {item.tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
