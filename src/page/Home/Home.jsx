import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div>Hello {user.username}</div>;
};

export default Home;
