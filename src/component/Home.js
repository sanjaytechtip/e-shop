import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import ProductImages from "./Carousel/ProductImages";

function Products() {
  const params = useParams();
  const curCategory = params.category_name;
    //console.log(params)
  const location = useLocation();  
  //console.log(location.pathname)

  const ifcategory = location.pathname.includes("/category/");
 // console.log(ifcategory);
  

 const apipath = (ifcategory)?`/products/category/${curCategory}`:'/products?limit=100';

  console.log(apipath);

  let [products, setProducts] = useState([]);
  const getProductList = async () => {
    //console.log(apipath)
    const { data } = await axios.get(apipath);
    //console.log(data)
    try {
      setProducts(data.products);
      //console.log(randomIndex)
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getProductList();
  }, [apipath]);

 

  return (
    <Layout
      title="Dashboard - E-shop Home Page"
      description="E-shop Description"
    >
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">Search</label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>

      <div className="container">
        {products.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {products?.map((e, i) => {
              return (
                <div className="col-md-3 mb-4" key={i}>
                  <ProductImages img={e.images} title={e.title} />
                  <div className="card-body">
                    <h4 className="card-title">
                      {e.id}{" "}
                      {e.title.length > 10
                        ? e.title.substring(0, 10) + "..."
                        : e.title}
                    </h4>
                    <Link to={`/category/${e.category}`} className="text-body">
                    <h5> {e.category.toUpperCase()}</h5>
                    </Link>
                    <h6>₹{e.price.toFixed(2)}</h6>
                    <p>
                      <span className="rating">{e.rating}☆</span> of{" "}
                      {e.rating.count} Ratings
                    </p>
                    <p className="card-text">
                      {" "}
                      {e.description.length > 10
                        ? e.description.substring(0, 45) + "..."
                        : e.description}
                    </p>
                  </div>
                  <Link to={`/product/view/${e.id}`}>
                    <button type="button" className="btn btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Products;
