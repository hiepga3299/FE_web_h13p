import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import "../styles/global.scss";
import PrivateRoute from "./PrivateRoute";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
