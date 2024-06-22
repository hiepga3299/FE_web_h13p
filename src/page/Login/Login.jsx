import React, { useContext } from "react";
import "./login.scss";
import axios from "../../Axios/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginAPI = async (data) => {
    await axios
      .post("/login", data)
      .then((res) => {
        console.log(jwtDecode(res.data));
        localStorage.setItem("token", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    await loginAPI({ username, password });
    login(username);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              id="username"
              className="username"
              type="text"
              placeholder="Username"
            />
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              className="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" />
            <span>Nhớ mật khẩu</span>
          </div>
          <div className="login-btn">
            <button>Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
