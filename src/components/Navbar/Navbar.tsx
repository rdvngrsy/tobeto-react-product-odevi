import { Link } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";
import { useSelector } from "react-redux";
import { CartState } from "../../store/features/cartSlice";

function Navbar() {
  const cartItems = useSelector(
    (state: { cart: CartState }) => state.cart.cartItems
  );

  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav  mb-2 mb-lg-0 "
            style={{ marginRight: "210px" }}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-product"}>
                Ürün Ekle
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="" style={{ marginLeft: "370px" }}>
            {cartItems.length > 0 && <CartSummary />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
