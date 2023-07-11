import React from "react";
import navigation from "../css/navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={navigation.navtotal}>
      <div className={navigation.icon}>
        <i className="fa-regular fa-calendar-check"></i>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={navigation.teemo}>TEEMO</span>
        </Link>
      </div>
      <div className={navigation.components_nav}>
        <ul className={navigation.nav_ul}>
          <li className={navigation.nav_li}>
            <a href="#" className={navigation.list}>
              <span>Service</span>
            </a>
          </li>
          <li className={navigation.nav_li}>
            <a href="#" className={navigation.list}>
              <span>Product</span>
            </a>
          </li>
          <li className={navigation.nav_li}>
            <a href="#" className={navigation.list}>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
