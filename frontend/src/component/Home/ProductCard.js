import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./Home2.css";
import "./Home.css";
// import productimg from "../../images/product/product-1.jpg";
// import heart from "../../images/icon/heart.png";
// import compare from "../../images/icon/compare.png";
// import search from "../../images/icon/search.png";
// import cart from "../../images/icon/cart.png";

const ProductCard = ({ product }) => {
  const options = {
    value: product.numOfReviews===0?0:product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    // <Link className="productCard" to={`/product/${product._id}`}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <Rating {...options} />{" "}
    //     <span className="productCardSpan">
    //       {" "}
    //       ({product.numOfReviews} Reviews)
    //     </span>
    //   </div>
    //   <span>{`₹${product.price}`}</span>
    // </Link>

    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
      <Link to={`/product/${product._id}`}>
        <div className="product__item">
          <div
            style={{ backgroundImage: `url(${product.images[0].url})` }}
            className="product__item__pic"
          >
            {/* <span id="newlabel" className="label">Hot</span>           */}
            {/* <ul className="product__hover"> */}
              {/* <li>
                <a href="/like">
                  <img src={heart} alt="" />
                </a>
              </li> */}
              {/* <li>
              <a href="#">
                <img src={compare} alt="" /> <span>Compare</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={search} alt="" />
              </a>
            </li> */}
            {/* </ul> */}
          </div>
          <div className="product__item__text">
            <h6>{product.name}</h6>
            {/* <a href="#" className="add-cart">
              <img className="mx-2" src={cart} alt="" />
              Add To Cart
            </a> */}
            <div className="rating">
              <Rating {...options} />{" "}
              <span className="productCardSpan">
                {/* {" "} */}
                {product.numOfReviews} Reviews
              </span>
            </div>
            <h5 
            id="headprice" className="text-decoration-none">{`₹${product.price}`}</h5>
            {/* <div className="product__color__select">
            <label for="pc-1">
              <input type="radio" id="pc-1" />
            </label>
            <label className="active black" for="pc-2">
              <input type="radio" id="pc-2" />
            </label>
            <label className="grey" for="pc-3">
              <input type="radio" id="pc-3" />
            </label>
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
