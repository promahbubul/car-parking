/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const PrivetLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://fa21fde4-01d7-4f3c-b3c5-f5fcc778b0a7-00-28j99m784pfj1.sisko.replit.dev/user-check",
        {
          withCredentials: true, // Ensures cookies are sent and received
        }
      )
      .then(({ data }) => {
        setIsLogin(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (isLogin.status === 200) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
export default PrivetLayout;
