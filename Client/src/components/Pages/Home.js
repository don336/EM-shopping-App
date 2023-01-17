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
                  <img
                    src="https://images.unsplash.com/photo-1670048326465-381234d24434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80"
                    alt="my-Image"
                  />
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
