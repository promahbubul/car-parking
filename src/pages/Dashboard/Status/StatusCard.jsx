/* eslint-disable react/prop-types */
const StatusCard = ({ cars, title, className, titleColor }) => {
  return (
    <div
      className={`overflow-hidden group  rounded-2xl cursor-pointer transition-all text-white ${className}`}
    >
      <p className="text-5xl lg:text-7xl group-hover:scale-125 lg:group-hover:scale-150 transition-all p-5 lg:p-10  font-extrabold text-center">
        {cars.length}
      </p>
      <h1
        className={`text-lg mt-5 font-light rounded-b-2xl px-5 lg:px-10 py-1 lg:py-2  ${titleColor}`}
      >
        {title}
      </h1>
    </div>
  );
};
export default StatusCard;
