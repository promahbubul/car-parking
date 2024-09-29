/* eslint-disable react/prop-types */
const StatusCard = ({ cars, title, className, titleColor }) => {
  return (
    <div
      className={`col-span-1 group  rounded-2xl cursor-pointer transition-all text-white ${className}`}
    >
      <p className=" text-7xl group-hover:scale-150 transition-all p-10  font-extrabold text-center">
        {cars.length}
      </p>
      <h1
        className={`text-lg mt-5 font-light rounded-b-2xl px-10 py-2  ${titleColor}`}
      >
        {title}
      </h1>
    </div>
  );
};
export default StatusCard;
