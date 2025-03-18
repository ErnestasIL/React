import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error getting data: ", error));
  }, []);

  const addProduct = () => {
    const newProduct = { label, price: Number(price) };
    fetch("http://127.0.0.1:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => setProducts((products) => [...products, data]))
      .catch((error) => console.log("Error adding product: ", error));
  };

  return (
    <div>
      <h1>Products:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.label} - {product.price} €
          </li>
        ))}
      </ul>
      <h2>Add new product:</h2>
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}

function App() {
  return <Products />;
}

export default App;
