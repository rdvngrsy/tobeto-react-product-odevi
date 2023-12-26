import React, { useState } from "react";
import axios from "axios";

const AddProduct = ( props ) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Yeni ürünü eklemek için axios kullanımı
    try {
      const response = await axios.post("https://dummyjson.com/products/add", newProduct);
      console.log("Yeni ürün eklendi:", response.data);
      //onAddProduct((prevProducts) => [...prevProducts, response.data]);
      props.onAddProduct(response.data)
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-md-center">
          <div className="col-8">
            {/* Diğer inputları buraya ekleyebilirsiniz */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="id">
                ID
              </span>
              <input
                type="text"
                className="form-control"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
                aria-describedby="id"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="title">
                Title
              </span>
              <input
                type="text"
                className="form-control"
                name="title"
                value={newProduct.title}
                onChange={handleInputChange}
                aria-describedby="title"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="description">
                Description
              </span>
              <input
                type="text"
                className="form-control"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                aria-describedby="description"
              />
            </div>
            {/* Diğer inputları buraya ekleyebilirsiniz */}
            <button type="submit" className="btn btn-primary">
              Ürünü Ekle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
