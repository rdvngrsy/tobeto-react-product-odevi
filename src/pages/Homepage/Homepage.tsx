import React, { useEffect, useState } from "react";
import { ProductModel } from "../../models/responses/Products/ProductModel";
import ProductService from "../../services/ProductService";
import ProductCard from "../../components/ProductCard/ProductCard";

type Props = {};

const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  },[])
  
  
  const fetchProducts = async() => {
    let service = new ProductService();
    let response = await service.getAll();
    setProducts(response.data.products); 
    console.log(response.data.products);
       
  }

  return (
    <div className="container mt-3 mt-md-3">
          <div className="row mt-3">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
