import { useEffect, useState } from "react";
import productsData from "./ProductsData";
const SearchResults = ({ searchTerm }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      // Simulate loading or fetch products
      setTimeout(() => {
        console.log('Search Term:', searchTerm); // Debugging searchTerm value
        const results = productsData.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
        setLoading(false);
      }, 500);
    }, [searchTerm]);
  
    if (loading) {
      return <div>Loading...</div>; // Show loading state
    }
  
    if (filteredProducts.length === 0) {
      return <div>No products found.</div>; // Handle no results case
    }
  
    return (
      <div>
        <h2>Search Results:</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default SearchResults;