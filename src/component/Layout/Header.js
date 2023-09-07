import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../context/auth'
import { toast } from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth()
  const handleLogout = () =>{
    setAuth({
      ...auth, auth: "", token: ''
  })
  localStorage.removeItem('auth');
  toast.success("Logout Successfully.");
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">E-shop</Link>
          <NavLink to='/' className="nav-link" >Home</NavLink>
          <NavLink to='/cart' className="nav-link" >Cart</NavLink>
          {(!auth.token)?
          <NavLink to='/login' className="nav-link" >Login</NavLink>
          :
          <NavLink onClick={handleLogout} to="/" className="nav-link" >Logout</NavLink>
          }
          
        </div>
      </nav>
    </>
  );
};

export default Header;
