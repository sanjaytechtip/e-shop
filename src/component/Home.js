import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import ProductImages from "./Carousel/ProductImages";

function Products() {
  let [products, setProducts] = useState([]);
  const getProductList = async () => {
    const { data } = await axios.get("/products");
    //console.log(data)
    try {
      setProducts(data.products);
      //console.log(data)
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Layout
      title="Dashboard - E-shop Home Page"
      description="E-shop Description"
    >
      <div className="container">
        {products.length === 0 ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
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
                    <h5> {e.category.toUpperCase()}</h5>
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
