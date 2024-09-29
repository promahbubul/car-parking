import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="w-full">
        <img src="/error.webp" alt="" className="w-[500px]  mx-auto" />
      </div>
      <div className="text-center">
        <h1 className="text-9xl text-accent font-extrabold ">404</h1>
        <p className="text-xl font-medium">
          Page not found{" "}
          <Link className="text-accent underline" to={"/"}>
            home page
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Error;
