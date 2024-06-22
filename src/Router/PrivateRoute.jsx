import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = (props) => {
  console.log(props);
  // Add your authentication logic here
  const { user } = useContext(AuthContext);
  if (user.status === false) {
    return (
      //   <div>Ban chua dang nhap</div>
      <Navigate to="/login" />
    );
  }
  return (
    <Routes>
      <Route path={props.path} element={props.children} />
    </Routes>
  );
};
export default PrivateRoute;
