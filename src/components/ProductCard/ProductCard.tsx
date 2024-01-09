import React from 'react'
import { Link } from 'react-router-dom'
import { ProductModel } from '../../models/responses/Products/ProductModel'
import "./ProductCard.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';

type Props = {
  product: ProductModel,
}

const ProductCard = (props: Props) => {
  const dispatch = useDispatch();

  const addProductToCard = () => {
		dispatch(addToCart(props.product));
	};

  return (
    <div className="card">
    <img
      src={props.product.thumbnail}
      className="card-img-top img-fluid custom-image-size"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text clamp">{props.product.description}</p>
      <Link to={"/product-detail/"+props.product.id} className="btn btn-primary">
        Detail
      </Link>
      <button onClick={addProductToCard} className="btn btn-success ms-3">
					Sepete Ekle
			</button>
      <button className="btn btn-danger ms-3">
        Sil
      </button>
    </div>
  </div>
  )
}

export default ProductCard