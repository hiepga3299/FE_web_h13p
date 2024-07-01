import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/" className="listItem">
          <img src="home.svg" alt="" />
          <span>Trang chủ</span>
        </Link>
        <Link to="/user" className="listItem">
          <img src="profile.svg" alt="" />
          <span>Người dùng</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Cửa hàng</span>
        <Link to="/" className="listItem">
          <img src="product.svg" alt="" />
          <span>Sản phẩm</span>
        </Link>
        <Link to="/user" className="listItem">
          <img src="category.svg" alt="" />
          <span>Danh mục</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
