import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../context/auth'
import { toast } from "react-hot-toast";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import CategoryList from "./CategoryList";

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
    {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
           <Nav.Link href="/">Home</Nav.Link>
           <Nav.Item

            <Nav.Item as="li"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="/category/smartphones">Shop</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#pricing">Pricing</Nav.Link></Nav.Item>          
          </Nav>
        </Container>
      </Navbar> */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="logo"><Link className="navbar-brand">E-shop</Link></div>
          <div className="nav">
            <ul>
              <li><NavLink to='/' className="nav-link" >Home</NavLink></li>
              <li><NavLink to='/' className="nav-link" >Shop</NavLink>
              <ul>
                <CategoryList />
                <li><NavLink to='/' className="nav-link" >Home..</NavLink></li>
                <li><NavLink to='/category/smartphones' className="nav-link" >Shop.....</NavLink></li>
              </ul>
              </li>
              {(!auth.token)?
              <li><NavLink to='/login' className="nav-link" >Login</NavLink></li>
              :
              <>
              <li><NavLink to='/cart' className="nav-link" >Cart</NavLink></li>
              <li><NavLink onClick={handleLogout} to="/" className="nav-link" >Logout</NavLink></li>
              </>
              }
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
