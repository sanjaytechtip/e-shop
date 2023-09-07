import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

function ProductView() {
  let [productview, setProductView] = useState([]);
  const params = useParams();
  const id = params.id;
  const getProductView = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    try {
      setProductView(data);
    } catch (error) {
      throw error;
    }
    console.log(data);
  };

  useEffect(() => {
    getProductView();
  });

  return (
    <Layout title={`E-shop | ${productview.title}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={productview.image} alt="" />
        </div>
        <div className="col-md-6"><h2>{productview.title}</h2></div>
      </div>
    </Layout>
  );
}

export default ProductView;
