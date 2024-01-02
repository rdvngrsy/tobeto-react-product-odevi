import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../../services/ProductService';
import { ProductModel } from '../../models/responses/Products/ProductModel';
import ProductDetailCarousel from '../../components/ProductDetailCarousel/ProductDetailCarousel';

type Props = {}

const ProductDetail = (props: Props) => {
  let params = useParams<{id: string}>();
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if(params.id)
    fetchProductWithId(params.id);
  },[])

  const fetchProductWithId = async(id:string) => {
    let service = new ProductService();
    let response = await service.getById(parseInt(id));
    setProduct(response.data);    
  }


  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ProductDetailCarousel images={product?.images || []} />
          </div>
          <div className="col-md-6">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <p>Price: ${product?.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail