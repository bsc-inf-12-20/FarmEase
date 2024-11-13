import React from 'react';

const CatalogItem = ({ item }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt={item.name} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600">Price: {item.price} MWK</p>
            <p className="text-sm text-gray-600">Location: {item.location}</p>
            {item.stock ? (
                <span className="text-green-600 font-semibold">Available Now</span>
            ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
                Buy Now
            </button>
        </div>
    );
};

export default CatalogItem;
