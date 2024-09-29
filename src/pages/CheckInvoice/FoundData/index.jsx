/* eslint-disable react/prop-types */
import TableData from "../TableData";

const FoundData = ({ sn, carName, carNumber, owner, phone, address }) => {
  return (
    <>
      <div className="">
        <img src="/success-1.gif" alt="" className="w-20 h-20  mx-auto" />
        <h1 className="mx-auto font-thin text-3xl mt-5 text-slate-800 dark:text-slate-200 pb-1 border-b border-b-accent w-max">
          Successfully Data Found
        </h1>
      </div>
      <div className="mt-10 max-w-2xl bg-base-300 rounded-md p-5 mx-auto ">
        <TableData td={sn} th={"Serial number"} />
        <TableData td={carName} th={"Car name"} />
        <TableData td={carNumber} th={"Car number"} />
        <TableData td={owner} th={"Owner"} />
        <TableData td={phone} th={"phone"} />
        <TableData td={address} th={"address"} />
      </div>
    </>
  );
};
export default FoundData;
