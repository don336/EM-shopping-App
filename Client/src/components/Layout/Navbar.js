import React, { Fragment } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav id="nav--bar">
        <ul className="nav-icons">
          <Fragment>
            <li>
              <Link to="/">
                <span className="secondary-color">EM</span>Shopping App
              </Link>
            </li>
            <li>
              <Link to="/checkout">
                <FaCartArrowDown />
              </Link>
            </li>
          </Fragment>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
