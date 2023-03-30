import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import "../Home/Home2.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const categories = [
  "All",
  "Tshirts",
  "Jeans",
  "Sun Glasses",
  "Tops",
  "Jackets",
  "Footwear",
  "Suits",
];

const Products = ({ match, history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const [skeyword, setSkeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (skeyword.trim()) {
      history.push(`/products/${skeyword}`);
    } else {
      history.push("/products");
    }
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const clearKeywords = () => {
    setSkeyword("");
    history.push("/products");
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) :
    //   (
    // <Fragment>
    //   <MetaData title="PRODUCTS -- ECOMMERCE" />
    //   <h2 className="productsHeading">Products</h2>

    //   <div className="products">
    //     {products &&
    //       products.map((product) => (
    //         <ProductCard key={product._id} product={product} />
    //       ))}
    //   </div>

    // <div className="filterBox">
    // <Typography>Price</Typography>
    // <Slider
    //   value={price}
    //   onChange={priceHandler}
    //   valueLabelDisplay="auto"
    //   aria-labelledby="range-slider"
    //   min={0}
    //   max={150000}
    // />

    //     <Typography>Categories</Typography>
    //     <ul className="categoryBox">
    //       {categories.map((category) => (
    //         <li
    //           className="category-link"
    //           key={category}
    //           onClick={() => setCategory(category)}
    //         >
    //           {category}
    //         </li>
    //       ))}
    //     </ul>

    //     <fieldset>
    //       <Typography component="legend">Ratings Above</Typography>
    //       <Slider
    //         value={ratings}
    //         onChange={(e, newRating) => {
    //           setRatings(newRating);
    //         }}
    //         aria-labelledby="continuous-slider"
    //         valueLabelDisplay="auto"
    //         min={0}
    //         max={5}
    //       />
    //     </fieldset>
    //   </div>
    //   {resultPerPage < count && (
    //     <div className="paginationBox">
    //       <Pagination
    //         activePage={currentPage}
    //         itemsCountPerPage={resultPerPage}
    //         totalItemsCount={productsCount}
    //         onChange={setCurrentPageNo}
    //         nextPageText="Next"
    //         prevPageText="Prev"
    //         firstPageText="1st"
    //         lastPageText="Last"
    //         itemClass="page-item"
    //         linkClass="page-link"
    //         activeClass="pageItemActive"
    //         activeLinkClass="pageLinkActive"
    //       />
    //     </div>
    //   )}
    // </Fragment>
    <Fragment>
      <MetaData title="PRODUCTS -- ECOMMERCE" />
      {/* <h2 className="productsHeading">Products</h2> */}

      <section id="shopsec" class="shop spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="shop__sidebar">
                <div class="shop__sidebar__search">
                  <form onSubmit={searchSubmitHandler}>
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setSkeyword(e.target.value)}
                    />
                    <button type="submit">
                      <span class="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div class="shop__sidebar__accordion">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-heading">
                        <a data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div class="shop__sidebar__categories">
                            <ul class="nice-scroll">
                              {categories.map((category) => (
                                <li key={category}>
                                  <a
                                    className="categorylink"
                                    key={category}
                                    onClick={() => {
                                      clearKeywords();
                                      if (category === "All") {
                                        setCategory("");
                                      } else {
                                        setCategory(category);
                                      }
                                    }}
                                  >
                                    {category}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div class="card">
                          <div class="card-heading">
                            <a
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                            >
                              Branding
                            </a>
                          </div>
                          <div
                            id="collapseTwo"
                            class="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="shop__sidebar__brand">
                                <ul>
                                  <li>
                                    <a href="#">Louis Vuitton</a>
                                  </li>
                                  <li>
                                    <a href="#">Chanel</a>
                                  </li>
                                  <li>
                                    <a href="#">Hermes</a>
                                  </li>
                                  <li>
                                    <a href="#">Gucci</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div> */}
                    <div class="card">
                      <div class="card-heading">
                        <a data-toggle="collapse" data-target="#collapseThree">
                          Filter Price
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          {/* <Typography>Pric</Typography> */}
                          <Slider
                            value={price}
                            onChangeCommitted={priceHandler}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={10000}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div class="card">
                          <div class="card-heading">
                            <a
                              data-toggle="collapse"
                              data-target="#collapseFour"
                            >
                              Size
                            </a>
                          </div>
                          <div
                            id="collapseFour"
                            class="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="shop__sidebar__size">
                                <label for="xs">
                                  xs
                                  <input type="radio" id="xs" />
                                </label>
                                <label for="sm">
                                  s
                                  <input type="radio" id="sm" />
                                </label>
                                <label for="md">
                                  m
                                  <input type="radio" id="md" />
                                </label>
                                <label for="xl">
                                  xl
                                  <input type="radio" id="xl" />
                                </label>
                                <label for="2xl">
                                  2xl
                                  <input type="radio" id="2xl" />
                                </label>
                                <label for="xxl">
                                  xxl
                                  <input type="radio" id="xxl" />
                                </label>
                                <label for="3xl">
                                  3xl
                                  <input type="radio" id="3xl" />
                                </label>
                                <label for="4xl">
                                  4xl
                                  <input type="radio" id="4xl" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}
                    {/* <div class="card">
                          <div class="card-heading">
                            <a
                              data-toggle="collapse"
                              data-target="#collapseFive"
                            >
                              Colors
                            </a>
                          </div>
                          <div
                            id="collapseFive"
                            class="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="shop__sidebar__color">
                                <label class="c-1" for="sp-1">
                                  <input type="radio" id="sp-1" />
                                </label>
                                <label class="c-2" for="sp-2">
                                  <input type="radio" id="sp-2" />
                                </label>
                                <label class="c-3" for="sp-3">
                                  <input type="radio" id="sp-3" />
                                </label>
                                <label class="c-4" for="sp-4">
                                  <input type="radio" id="sp-4" />
                                </label>
                                <label class="c-5" for="sp-5">
                                  <input type="radio" id="sp-5" />
                                </label>
                                <label class="c-6" for="sp-6">
                                  <input type="radio" id="sp-6" />
                                </label>
                                <label class="c-7" for="sp-7">
                                  <input type="radio" id="sp-7" />
                                </label>
                                <label class="c-8" for="sp-8">
                                  <input type="radio" id="sp-8" />
                                </label>
                                <label class="c-9" for="sp-9">
                                  <input type="radio" id="sp-9" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}
                    {/* <div class="card">
                          <div class="card-heading">
                            <a
                              data-toggle="collapse"
                              data-target="#collapseSix"
                            >
                              Tags
                            </a>
                          </div>
                          <div
                            id="collapseSix"
                            class="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="shop__sidebar__tags">
                                <a href="#">Product</a>
                                <a href="#">Bags</a>
                                <a href="#">Shoes</a>
                                <a href="#">Fashion</a>
                                <a href="#">Clothing</a>
                                <a href="#">Hats</a>
                                <a href="#">Accessories</a>
                              </div>
                            </div>
                          </div>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="shop__product__option">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__left">
                      {/* <p>Showing 1-12 of 126 results</p> */}
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    {/* <div class="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value="">Low To High</option>
                        <option value="">$0 - $55</option>
                        <option value="">$55 - $100</option>
                      </select>
                    </div> */}
                  </div>
                </div>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <div class="row">
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              )}
              <div class="row">
                {resultPerPage < count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    //   )}
    // </Fragment>
  );
};

export default Products;
