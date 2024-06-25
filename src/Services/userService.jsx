import axios from "../Axios/axios";

const loginAPI = async (data) => {
  // console.log(data);
  return await axios.post("/login", data);
};

const checkUserAPI = async () => {
  var token = localStorage.getItem("token");
  return await axios.get("/checkuser", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { loginAPI, checkUserAPI };
