import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.svg" alt="" />
        <span>DevWeb</span>
      </div>
      <div className="navbar-rigth">
        <img src="search.svg" alt="" />
        <img src="notification.svg" alt="" />
        <div className="navbar-account">
          <img
            src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/342618944_185148390623418_4320569125979414322_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=cP9ewNIAybMQ7kNvgHnIc5l&_nc_ht=scontent.fhan20-1.fna&oh=00_AYCfB20MEYOocpx1FNY2SgQ6wyslzvyYWafGoN_yYIsPXA&oe=66832CAC"
            alt=""
          />
          <span>John Doe</span>
          <Link to="login" className="button-logout">
            Thoát
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
