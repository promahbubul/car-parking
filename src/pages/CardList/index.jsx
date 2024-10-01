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
    const toastId = toast.loading("Car Deleting...");
    axios
      .delete(`https://car-parking-system.shadhin-bangla.com/car/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Parking deleted successfully", { id: toastId });
          setCars(cars?.filter((car) => car?._id !== id));
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  // Car Out
  const carOut = (id) => {
    const tostID = toast.loading("Car Outing...");
    axios
      .put(
        `https://car-parking-system.shadhin-bangla.com/out-car/${id}`,
        {
          status: "out",
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          axios
            .get("https://car-parking-system.shadhin-bangla.com/cars", {
              withCredentials: true,
            })
            .then((res) => {
              setCars(res?.data);
              toast.success("Car out successfully", { id: tostID });
            });
        }
      })
      .catch((err) => {
        toast.error("Car added error", { id: tostID });
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://car-parking-system.shadhin-bangla.com/cars", {
        withCredentials: true,
      })
      .then((res) => {
        setCars(res?.data);
        setIsLoading(false);
      });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-full w-full ">
      {/* Search Field */}
      <SearchField setCars={setCars} setIsLoading={setIsLoading} />
      {/* Table Data */}

      <div className="h-[calc(100%-128px)] overflow-y-auto">
        {cars?.length < 1 ? (
          <div className="w-full mt-8  mx-auto   text-accent text-xl items-center">
            <img
              src="https://ev365.online/img/cms/parking_%C5%82adowania_pojazd%C3%B3w_elektrycznych.gif"
              alt=""
              className="w-[500px] mx-auto"
            />
            <p className="border-b mt-5 max-w-max mx-auto border-b-accent">
              This car not found
            </p>
          </div>
        ) : (
          <table className="table  ">
            {/* head */}
            <Header />
            <Body cars={cars} carOut={carOut} handleDelete={handleDelete} />
          </table>
        )}
      </div>
    </div>
  );
};
export default CarList;
