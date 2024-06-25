import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import "../styles/global.scss";
import PrivateRoute from "./PrivateRoute";
import User from "../page/User/User";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
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
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
