import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import "../styles/global.scss";
// import PrivateRoute from "./PrivateRoute";
import Navbar from "../Components/Navbar/Navbar";
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/Footer";
import User from "../page/User/User";

function AppRoute() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="layout-container">
          <div className="layout-menu">
            <Menu />
          </div>
          <div className="layout-content">
            <Outlet />
          </div>
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* <Route
          path="/"
          element={
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute exact path="/user">
              <User />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
