import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NoPage from "./component/NoPage";
import ProductView from "./component/products/ProductView";
import Cart from "./component/products/Cart";
import Login from "./component/Auth/Login";
import PrivateRoute from "./component/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category_name" element={<Home />} />
        <Route path="/product/view/:id" element={<ProductView />} />
        {/* <Route path="/cart" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route> */}
        <Route path="/cart" element={<Cart />} />
       
        <Route path="/login" element={<Login />} />
       
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
