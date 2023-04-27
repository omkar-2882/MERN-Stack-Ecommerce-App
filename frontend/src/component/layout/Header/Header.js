import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// import { MdAccountCircle } from "react-icons/md";
// import { MdSearch } from "react-icons/md";
// import { MdAddShoppingCart } from "react-icons/md";

// import logo from "../../../images/shopping-bag-icon.png";
import UserOptions from "./UserOption";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  let location = useLocation();

  // return <ReactNavbar {...options} />
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-0 fixed-top">
        <div id="navcontainer" className="container">
          <Link
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            to="/"
          >
            {/* <img src={logo} alt="site icon" /> */}
            <i
              className="fa-solid fa-bag-shopping fa-lg"
              style={{ color: "#000000" }}
            ></i>
            <span className="text-uppercase fw-lighter ms-2">Kit Kart</span>
          </Link>

          <div className="order-lg-2 nav-btns d-flex">
            <Link id="mycart" to="/cart">
              <button type="button" className="btn position-relative">
                <i className="fa fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                  {cartItems.length}
                </span>
              </button>
            </Link>
            {/* <button type="button" className="btn position-relative">
              <i className="fa fa-heart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                2
              </span>
            </button> */}
            {/* <button type="button" className="btn position-relative">
              <i className="fa fa-search"></i>
            </button> */}
            {!isAuthenticated && (
              <div className="logindiv">
                <Link to="/login">
                  <button type="button" className="btn position-relative">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn position-relative">
                    SignUp
                  </button>
                </Link>
              </div>
            )}
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div>{isAuthenticated && <UserOptions user={user} />}</div> */}

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } text-uppercase text-dark`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/products" ? "active" : ""
                  } text-uppercase text-dark`}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contacts" ? "active" : ""
                  } text-uppercase text-dark`}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  } text-uppercase text-dark`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{isAuthenticated && <UserOptions user={user} />}</div>
      </nav>
    </Fragment>
  );
};

export default Header;
