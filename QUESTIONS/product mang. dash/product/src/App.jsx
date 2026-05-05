import React, { useState } from "react";

// Reusable Component
const ProductCard = ({ name, price, category }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
    </div>
  );
};

// Parent Component
const ProductDashboard = () => {
  const [search, setSearch] = useState("");

  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 4000, category: "Accessories" },
    { id: 5, name: "Bag", price: 1500, category: "Fashion" },
    { id: 6, name: "Headphones", price: 2500, category: "Electronics" },
    { id: 7, name: "Tablet", price: 30000, category: "Electronics" },
    { id: 8, name: "T-shirt", price: 800, category: "Clothing" }
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product Dashboard</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default ProductDashboard;