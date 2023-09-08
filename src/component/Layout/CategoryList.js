import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


function CategoryList() {
  let [category, setCategory] = useState([]);

  const getCategory = async () => {
    const { data } = await axios.get('/products/categories');
    try {
      setCategory(data);
      console.log(data);
    } catch (error) {
      throw error;
    }
    console.log(data);
  };

  useEffect(() => {
    getCategory();
  },[]);

  return (
      <>
      {category?.map((e, i) => {
        return (
               
          <li id={i}><NavLink to={`/category/${e}`} className="nav-link" >{e.toUpperCase()}</NavLink></li>

          );
            })
      } 
      </>
  );
}

export default CategoryList;
