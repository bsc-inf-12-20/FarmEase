import React from 'react';

const CatalogList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.length > 0 ? (
        items.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <img src={`/images/${item.name.toLowerCase()}.jpg`} alt={item.name} className="h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">Category: {item.category}</p>
            <p className="text-gray-600">Product Type: {item.productType}</p>
            <p className="text-gray-600">Price: MWK {item.price}</p>
            <p className="text-gray-600">Available: {item.available ? 'In Stock' : 'Out of Stock'}</p>
            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Buy Now</button>
          </div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default CatalogList;
