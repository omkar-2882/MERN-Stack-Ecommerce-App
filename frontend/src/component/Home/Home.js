import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/cg";
// import "./Home.css";
import "./Home2.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import slide1 from "../../images/hero/slide-05.jpg";
import slide2 from "../../images/hero/slide-06.jpg";
import slide3 from "../../images/hero/slide-07.jpg";
import ban1 from "../../images/banner/banner-1.jpg";
import ban2 from "../../images/banner/banner-2.jpg";
import ban3 from "../../images/banner/banner-3.jpg";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  const history = useHistory()
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <header id="header">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide3} className="d-block w-100" alt="..." />
                  <div id="home-carousel-cap" className="carousel-caption d-none d-md-block">
                    <h5 className="whiteText">Best Collections</h5>
                    <button id="sbtn" className="btn btn-light" onClick={()=>{history.push("/products")}}>
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100" alt="..." />
                  <div id="home-carousel-cap" className="carousel-caption d-none d-md-block">
                    <h5 className="whiteText">New Arrivals</h5>
                    <button id="sbtn" className="btn btn-light" onClick={()=>{history.push("/products")}}>
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={slide1} className="d-block w-100" alt="..." />
                  <div id="home-carousel-cap"  className="carousel-caption d-none d-md-block">
                    <h5 className="whiteText">Best Price & Offer</h5>
                    <button id="sbtn" className="btn btn-light" onClick={()=>{history.push("/products")}}>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>{" "}
          </header>

          {/* <!-- Banner Section Begin --> */}
          <section className="banner spad my-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 offset-lg-4">
                  <div className="banner__item">
                    <div className="banner__item__pic">
                      <img src={ban1} alt="" />
                    </div>
                    <div className="banner__item__text">
                      <h2>Clothing Collections 2030</h2>
                      <Link to="/product/642505c58c74aac2296b5e36">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="banner__item banner__item--middle">
                    <div className="banner__item__pic">
                      <img src={ban2} alt="" />
                    </div>
                    <div className="banner__item__text">
                      <h2>Accessories</h2>
                      <Link to="/product/6425026a1237a668c9a984cc">Shop now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner__item banner__item--last">
                    <div className="banner__item__pic">
                      <img src={ban3} alt="" />
                    </div>
                    <div className="banner__item__text">
                      <h2>Shoes Spring 2030</h2>
                      <Link to="/product/642506188c74aac2296b5e88">Shop now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Banner Section End --> */}

          {/* <!-- Product Section Begin --> */}
          <section className="product spad my-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="filter__controls">
                    {/* <li  data-filter="*">
                      Best Sellers
                    </li>
                    <li data-filter=".new-arrivals">New Arrivals</li> */}
                    <li className="active" data-filter=".hot-sales">Hot Sales</li>
                  </ul>
                </div>
              </div>
              <div className="row product__filter">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </section>
          {/* <!-- Product Section End --> */}

          {/* <h2 className="homeHeading">Featured Products</h2>

          <div className="hcontainer" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
