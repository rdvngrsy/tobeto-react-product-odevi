import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    console.log(response.data.products);
  };

  const handleDeleteSuccess = (deletedProductId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== deletedProductId)
    );
    console.log(deletedProductId + " no id' li ürün sistemden silindi.");
  };

  // Yeni eklenen ürünü listeye eklemek için
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    console.log("Yeni ürün eklendi:", newProduct);
  };

  useEffect(() => {
    axiosGet();
  }, []);

  return (
    <div className="container mt-3 mt-md-3">
      {isVisible && <AddProduct onAddProduct={handleAddProduct} />}
      
      <div className="row mt-3">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={product.id}
          >
            <ProductCard
              product={product}
              onDeleteSuccess={handleDeleteSuccess}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
