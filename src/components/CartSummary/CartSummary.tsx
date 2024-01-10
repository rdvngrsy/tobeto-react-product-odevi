import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartItems } from "../../store/features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartSummary = () => {

  const cartState = useSelector((state: any) => state.cart);

  return (
    <div>
      <div className="nav-item dropdown navbar-nav">
        <a
          href="#"
          className="nav-link dropdown-toggle text-success "
          data-bs-toggle="dropdown"
        >
          <span className="badge bg-primary rounded-pill">
          {cartState.cartItems.length}
          </span>
          <FontAwesomeIcon icon={faCartShopping} className="text-success" />
        </a>
        <div className="dropdown-menu">
          {cartState.cartItems.map((cartItem: any, index: number) => (
            <Link
              
              key={index}
              to={`/product-detail/${cartItem.product.id}`}
              className="dropdown-item"
            >
              {cartItem.product.title}
              <span className="badge bg-primary rounded-pill ms-3">
                {cartItem.quantity}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
