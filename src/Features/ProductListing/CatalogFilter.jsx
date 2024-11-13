import React, { useState } from 'react';

const CatalogFilter = ({ onFilterChange }) => {
  // State to manage selected categories and types
  const [filters, setFilters] = useState({
    availableInStock: false,
    topCategory: false,
    categories: {
      fruits: false,
      machinery: false,
      livestock: false,
      grains: false,
      vegetables: false,
      legumes: false,
      processed: false,
      freshFood: false,
      chemicals: false,
      Fertlizers: false,
    },
    productTypes: {
      farmPlants: false,
      farmLivestock: false,
      processedProducts: false,
    },
  });

  // Handle checkbox change for categories and product types
  const handleCheckboxChange = (section, key) => {
    const updatedFilters = { ...filters };
    updatedFilters[section][key] = !updatedFilters[section][key];
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updated filters to parent component
  };

  // Handle checkbox change for availability and top category
  const handleOtherFilters = (key) => {
    const updatedFilters = { ...filters };
    updatedFilters[key] = !updatedFilters[key];
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updated filters to parent component
  };

  return (
    <div className="p-4 border rounded-md">
      <h4 className="font-bold">Filter</h4>
      
      <div className="my-4">
        <input
          type="radio"
          checked={filters.availableInStock}
          onChange={() => handleOtherFilters('availableInStock')}
        />
        <label className="ml-2">Available in Stock</label>
        
        <input
          type="radio"
          checked={filters.topCategory}
          onChange={() => handleOtherFilters('topCategory')}
          className="ml-4"
        />
        <label className="ml-2">Top category</label>
      </div>

      <div className="my-4">
        <h5 className="font-semibold">Categories</h5>
        {Object.keys(filters.categories).map((category) => (
          <div key={category} className="my-1">
            <input
              type="checkbox"
              checked={filters.categories[category]}
              onChange={() => handleCheckboxChange('categories', category)}
            />
            <label className="ml-2 capitalize">{category}</label>
          </div>
        ))}
      </div>

      <div className="my-4">
        <h5 className="font-semibold">Product Type</h5>
        {Object.keys(filters.productTypes).map((type) => (
          <div key={type} className="my-1">
            <input
              type="checkbox"
              checked={filters.productTypes[type]}
              onChange={() => handleCheckboxChange('productTypes', type)}
            />
            <label className="ml-2 capitalize">{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogFilter;
