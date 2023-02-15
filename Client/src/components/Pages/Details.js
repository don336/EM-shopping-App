import React, { Fragment, useEffect, useState } from "react";
import {
  getParams,
  getLocalStorage,
  setLocalStorage,
  alertMessage,
  deleteMessage,
} from "../../utils/util";
import { FaTrash } from "react-icons/fa";
const Details = () => {
  const [res, setRes] = useState([]);
  const [storage, setStorage] = useState([]);
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    const id = getParams("product");
    const dataFetch = async () => {
      const res = await fetch(`http://localhost:5000/Electronics/${id}`);
      if (res.ok) {
        const response = await res.json();
        setRes(response);
      }
    };

    dataFetch();
  }, []);

  const addToCart = () => {
    setBtn(true);
    setStorage(res);
    alertMessage(`Product 
   ${res.ProductName} added to cart!`);
  };
  useEffect(() => {
    (async () => {
      if (btn) {
        const oldItems = (await getLocalStorage("so-cart")) || [];
        const updatedItems = [...oldItems, storage];
        setLocalStorage("so-cart", updatedItems);
      }
    })();
  }, [btn]);

  const deleteItem = async () => {
    const id = getParams("product");
    const oldItems = (await getLocalStorage("so-cart")) || [];
    oldItems.map(function (item, index) {
      if (id === item.id) {
        oldItems.splice(index, 1);
        deleteMessage(`${item.ProductName} has been Deleted!`);
      }
      setLocalStorage("so-cart", oldItems);
    });
  };

  return (
    <Fragment>
      <main id="detail--section">
        <div className="product_detail">
          <img src={res.ProductImage} alt="my-image" />
          <div className="detail">
            <p>Name:{`${res.ProductName}`}</p>
            <p>Amount:{`${res.ProductAmount}`}</p>
            <p>Detail:{`${res.ProductDetails}`}</p>
          </div>
        </div>
        <div className="promotions">
          <h2>Promotions</h2>
          <ul>
            <li>Free shipping to grocery above $300</li>
            <li>Save big on electronics and enjoy fast delivery</li>
            <li>10% cash back on your tv subscription with EM electronics</li>
          </ul>
        </div>
        <div className="delivery">
          <h2>Door Delivery</h2>
          <p>Delivery $20</p>
          <p>
            Ready for delivery between the time you place the order and the next
            5 days
          </p>
        </div>
        <div className="return">
          <h2>Return Policy</h2>
          <p>
            Free return within 5 days for EM mall items and 7 days for other
            eligible items.
          </p>
        </div>
        <input
          onClick={addToCart}
          type="submit"
          value="Add to Cart"
          className="add-to-cart"
        ></input>
        <input
          type="submit"
          className="removeItem"
          value="Delete Item"
          onClick={deleteItem}
        ></input>
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

export default Details;
