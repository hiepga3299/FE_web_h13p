import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const PrivateRoute = (props) => {
  const checkToken = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };
  const hasToken = checkToken();
  if (hasToken === false) {
    return <Navigate to="/login" />;
  }
  return (
    <Routes>
      <Route path={props.path} element={props.children} />
    </Routes>
  );
};
export default PrivateRoute;
