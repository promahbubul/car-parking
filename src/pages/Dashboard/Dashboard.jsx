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
      .get("http://localhost:8080/cars", { withCredentials: true })
      .then((res) => {
        setCars(res?.data);
        setParkings(res?.data?.filter((car) => car?.status === "parking"));
        setOuts(res?.data?.filter((car) => car?.status !== "parking"));
        setIsLoading(false);
      });
  }, []);

  console.log(cars);
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
