import axios from "axios";
import toast from "react-hot-toast";
import { IoCheckmarkDoneCircleSharp, IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Body = ({ cars, handleDelete, carOut }) => {
  return (
    <tbody>
      {cars?.length > 0 &&
        cars?.map((car, index) => (
          <tr key={car?._id}>
            <th>{index + 1}</th>
            <th>{car?.sn}</th>
            <td>{car?.carName}</td>
            <td>{car?.carNumber}</td>
            <td>{car?.owner}</td>
            <td>{car?.phone}</td>
            <td>{car?.address}</td>
            <td>
              <div
                className={
                  car?.status === "parking"
                    ? "badge badge-accent badge-outline"
                    : "badge badge-error badge-outline"
                }
              >
                {car?.status}
              </div>
            </td>
            <td className="flex flex-row  justify-start gap-3 items-center ">
              <Link
                to={`/invoice/${car?._id}`}
                className="text-2xl hover:scale-125 transition-all text-primary"
              >
                <IoEyeSharp />
              </Link>
              <Link
                to={`/edit-car/${car?._id}`}
                className="text-2xl hover:scale-125 transition-all text-green-400"
              >
                <MdModeEditOutline />
              </Link>
              <button
                onClick={() => handleDelete(car?._id)}
                className="text-2xl hover:scale-125 transition-all text-red-400"
              >
                <MdDelete />
              </button>
              {car?.status === "parking" && (
                <button
                  onClick={() => carOut(car?._id)}
                  className="text-2xl hover:scale-125 transition-all text-accent"
                >
                  <IoCheckmarkDoneCircleSharp />
                </button>
              )}
            </td>
          </tr>
        ))}
    </tbody>
  );
};
export default Body;
