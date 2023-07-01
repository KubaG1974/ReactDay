import React from 'react';

const InventoryItem = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default InventoryItem;
