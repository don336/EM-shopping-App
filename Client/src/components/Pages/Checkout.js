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

  return <h1>WElcome to the Checkout</h1>;
};

export default Checkout;
