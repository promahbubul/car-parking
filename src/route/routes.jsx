import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout";
import Login from "../pages/Login";
import CarEntry from "../pages/CarEntry";
import Dashboard from "../pages/Dashboard/Dashboard";
import CarList from "../pages/CardList";
import axios from "axios";
import EditCarEntry from "../pages/EditCarEntry";
import PrivetLayout from "../Layout/PrivetLayout";
import Error from "../pages/Error";
import CheckInvoice from "../pages/CheckInvoice";
import Invoice from "../pages/Invoice";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetLayout>
        <MainLayout />
      </PrivetLayout>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-cars",
        element: <CarEntry />,
      },
      {
        path: "list-cars",
        element: <CarList />,
      },
      {
        path: "invoice/:id",
        element: <Invoice />,
        loader: ({ params }) =>
          axios.get(`http://localhost:5600/cars/${params.id}`, {
            withCredentials: true,
          }),
      },
      {
        path: "edit-car/:id",
        element: <EditCarEntry />,
        loader: ({ params }) =>
          axios.get(`http://localhost:5600/cars/${params.id}`, {
            withCredentials: true,
          }),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/check-invoice/:id",
    element: <CheckInvoice />,
    loader: ({ params }) =>
      axios.get(`http://localhost:5600/cars/${params.id}`, {
        withCredentials: true,
      }),
  },
]);

export default routes;
