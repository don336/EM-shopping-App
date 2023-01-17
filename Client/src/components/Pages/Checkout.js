import React, { useEffect, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
  deleteMessage,
} from "../../utils/util";
import {
  FaUser,
  FaEnvelope,
  FaAddressCard,
  FaCity,
  FaShoppingCart,
  FaAddressBook,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [items, setData] = useState([]);

  console.log(items);

  useEffect(() => {
    const dataFetch = async () => {
      const ls = (await getLocalStorage("so-cart")) || [];
      setData(ls);
    };

    dataFetch();
  }, []);

  return (
    <main className="divider">
      <h2>Review and place your order</h2>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-50">
                  <div className="billing">
                    <fieldset>
                      <legend>Billing Address</legend>
                      <label htmlFor="fname">
                        <FaUser /> Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                        required="required"
                      />
                      <label htmlFor="email">
                        <FaEnvelope /> Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required="required"
                      />
                      <label htmlFor="adr">
                        <FaAddressCard /> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                        required="required"
                      />
                      <label htmlFor="city">
                        <FaCity /> City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="zip">
                            <FaAddressBook />
                            Zip
                          </label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                            required="required"
                          />
                        </div>
                        <input type="submit" value="Submit" className="btn" />
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container-1">
            <h4>
              Cart{" "}
              <span className="price" style={{ color: "#black" }}>
                <FaShoppingCart />
              </span>
            </h4>
            <div className="productDesc">
              {items.map((item) => {
                return (
                  <p>
                    <Link to={`/details?product=${item.id}`}>
                      <span>{`${item.ProductName}`} </span>
                    </Link>

                    <span className="price">{`${item.ProductAmount}`} ;</span>
                  </p>
                );
              })}
            </div>
            <hr />
            <p>
              Total Cost:{" "}
              <span className="amount price" style={{ color: "black" }}>
                <b></b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
