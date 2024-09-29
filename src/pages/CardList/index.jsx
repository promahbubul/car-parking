import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Header from "./Table/Header";
import Body from "./Table/Body";
import toast from "react-hot-toast";
import SearchField from "./SearchField";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Delete Car
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/car/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Parking deleted successfully");
          setCars(cars?.filter((car) => car?._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  // Car Out
  const carOut = (id) => {
    axios
      .put(
        `http://localhost:8080/out-car/${id}`,
        {
          status: "out",
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          axios
            .get("http://localhost:8080/cars", { withCredentials: true })
            .then((res) => {
              console.log(res?.data);
              setCars(res?.data);
            });
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/cars", { withCredentials: true })
      .then((res) => {
        console.log(res?.data);
        setCars(res?.data);
        setIsLoading(false);
      });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="  h-full w-full ">
      {/* Search Field */}
      <SearchField setCars={setCars} setIsLoading={setIsLoading} />
      {/* Table Data */}
      <div className="h-[calc(100%-128px)] overflow-y-auto ">
        <table className="table  ">
          {/* head */}
          <Header />
          <Body cars={cars} carOut={carOut} handleDelete={handleDelete} />
        </table>
      </div>
    </div>
  );
};
export default CarList;
