import axios from "axios";

/* eslint-disable react/prop-types */
const SearchField = ({ setCars, setIsLoading }) => {
  // sort by status
  const sortByStatus = (value) => {
    if (value === "") {
      return axios
        .get("http://localhost:8080/cars", { withCredentials: true })
        .then((res) => {
          console.log(res?.data);
          setCars(res?.data);
          setIsLoading(false);
        });
    }
    axios
      .get(`http://localhost:8080/car-status/${value}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        setIsLoading(false);
      });
  };

  // Search by Input
  const handleIdSearch = (sn) => {
    if (sn === "") {
      return axios
        .get("http://localhost:8080/cars", { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setCars(res.data);
          setIsLoading(false);
        });
    }
    axios
      .get(`http://localhost:8080/car-filter/${sn}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      });
  };
  return (
    <div className="flex flex-col md:flex-row  md:gap-10 md:justify-between items-center">
      <div className="w-full md:w-4/12 ">
        <h2 className="text-2xl font-medium text-accent border-b pb-2 border-b-accent">
          List of Cars
        </h2>
      </div>
      <div
        className="flex  w-full md:w-8/12 flex-col md:flex-row gap-3 my-5
       md:gap-10 items-center md:justify-end md:my-10"
      >
        <select
          onChange={(e) => sortByStatus(e.target.value)}
          className="select select-accent w-full md:w-full  md:max-w-xs"
        >
          <option disabled selected>
            Parking or Out select
          </option>
          <option value={""}>All</option>
          <option value={"parking"}>Parking</option>
          <option value={"out"}>Out</option>
        </select>
        <input
          onChange={(e) => handleIdSearch(e.target.value)}
          type="text"
          name=""
          id=""
          className="input w-full md:max-w-56  input-accent"
          placeholder="enter ID or phone number"
        />
      </div>
    </div>
  );
};
export default SearchField;
