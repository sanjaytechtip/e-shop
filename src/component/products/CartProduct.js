import axios from "axios";
import React, { useEffect, useState } from "react";

function CartProduct(props) {
  let [cartProduct, setCartProducts] = useState([]);
  const getCartProducts = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${props.productId}`
    );
    console.log(data);
    try {
      setCartProducts(data);
      //console.log(data)
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getCartProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={cartProduct.image}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: 65 }}
              />
            </div>
            <div className="ms-3">
              <h5>Iphone 11 pro</h5>
              <p className="small mb-0">{cartProduct.title}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: 50 }}>
              <h5 className="fw-normal mb-0">{props.quantity}</h5>
            </div>
            <div style={{ width: 80 }}>
              <h5 className="mb-0">${cartProduct.price}</h5>
            </div>
            <a href="#!" style={{ color: "#cecece" }}>
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
