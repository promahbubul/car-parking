import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import Status from "./Status";
import PieChart from "./PieChart";
const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [parkings, setParkings] = useState([]);
  const [outs, setOuts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = [
    ["Parking", "Total"],
    ["Parking", parkings?.length],
    ["Out", outs?.length],
  ];

  useEffect(() => {
    axios
      .get(
        "https://fa21fde4-01d7-4f3c-b3c5-f5fcc778b0a7-00-28j99m784pfj1.sisko.replit.dev/cars",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setCars(res?.data);
        setParkings(res?.data?.filter((car) => car?.status === "parking"));
        setOuts(res?.data?.filter((car) => car?.status !== "parking"));
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      {/* Parking Status */}
      <Status parkings={parkings} outs={outs} cars={cars} />
      <PieChart data={data} />
    </div>
  );
};
export default Dashboard;
