import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = { email: form.email.value, password: form.password.value };
    axios
      .post("https://car-parking-backend.vercel.app/login", user, {
        withCredentials: true, // Ensures cookies are sent and received
      })
      .then(({ data }) => {
        if (data.status === 200) {
          navigate("/");
          toast.success("Login Successfully");
        } else {
          toast.error("Email or Password wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://car-parking-backend.vercel.app/user-check", {
        withCredentials: true, // Ensures cookies are sent and received
      })
      .then(({ data }) => {
        if (data.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" w-full bg-base-200 lg:h-screen flex p-5 flex-col lg:flex-row  lg:justify-center gap-8 md:gap-10 items-center">
      <div className="h-72   lg:mt-auto lg:h-full w-full flex justify-center items-center">
        <img
          src="/login.png"
          alt=""
          className="object-fill md:object-contain h-full w-full  "
        />
      </div>
      <div className="  lg:h-full w-full flex items-center justify-center">
        <div className="max-w-lg w-full  flex-col lg:flex-row-reverse">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-accent border-b pb-3 mb-5 lg:mb-10 text-center font-thin border-b-accent">
              Car Parking{" "}
            </h1>
          </div>

          <div className="card bg-base-100  max-w-3xl w-full shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
