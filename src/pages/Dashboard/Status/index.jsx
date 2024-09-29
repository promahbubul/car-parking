/* eslint-disable react/prop-types */
import StatusCard from "./StatusCard";
const Status = ({ cars, parkings, outs }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <StatusCard
        className={"bg-gradient-to-r from-primary to-violet-800 "}
        cars={cars}
        titleColor={"bg-violet-800"}
        title={"Total Parking"}
      />
      <StatusCard
        className={"bg-gradient-to-bl from-accent to-green-800 "}
        cars={parkings}
        titleColor={"bg-green-800"}
        title={"Parking"}
      />
      <StatusCard
        className={"bg-gradient-to-bl from-error to-red-800 "}
        titleColor={"bg-red-800"}
        cars={outs}
        title={"Out"}
      />
    </div>
  );
};
export default Status;
