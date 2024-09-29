import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const PrivetLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user-check", {
        withCredentials: true, // Ensures cookies are sent and received
      })
      .then(({ data }) => {
        setIsLogin(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(isLogin);
  if (loading) {
    return <Loading />;
  }
  if (isLogin.status === 200) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
export default PrivetLayout;
