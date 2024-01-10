import { Link } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";
import { useSelector } from "react-redux";
import { IAuth } from "../../store/features/authSlice";

function Navbar() {
  const cartState = useSelector((state: any) => state.cart);
  const authState = useSelector((state: any) => state.auth);

  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
          <div className="row w-100">
            <div className="col-md-4">
              <ul className="navbar-nav">
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
            </div>
            <div className="col-md-4 text-center"> 
              <form className="d-flex">
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
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              {authState.isAuthenticated ? (
                <Link to={"/login"} className="btn btn-outline-success" type="submit">
                  Giriş Yap
                </Link>
              ) : (
                <></>
              )}
              {cartState.cartItems.length > 0 && <CartSummary />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
