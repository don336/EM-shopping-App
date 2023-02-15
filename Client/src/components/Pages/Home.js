import React, { useState, useEffect, Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("http://localhost:5000/Electronics");
      if (res.ok) {
        const response = await res.json();
        setData(response);
      }
    };
    dataFetch();
  }, []);
  return (
    <Fragment>
      <main>
        <section className="search-box">
          <Link to="/checkout">
            <FaSearch />
          </Link>
          <input type="search" placeholder="Search" />
        </section>
        <section id="show-content">
          {data.map((item) => {
            return (
              <Link to={`/details?product=${item.id}`}>
                <div className="box1" key={item.id}>
                  <img src={item.ProductImage} alt="my-Image" />
                  <h4>{item.ProductName}</h4>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <footer>
        <div className="main-footer">
          <input type="email" placeholder="Enter Email..." />
          <button className="email-btn">Submit</button>
          <p>&copy; 2022 Em-Shopping Cart..</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
