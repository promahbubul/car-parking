/* eslint-disable react/prop-types */
const TableData = ({ th, td }) => {
  return (
    <div className=" text-lg  flex flex-row">
      <h4 className="w-3/12 border-r py-2 px-3 border-base-100 text-lg text-slate-800 dark:text-slate-200  border-y border-x">
        {th}:{" "}
      </h4>
      <p className="w-9/12 py-2 px-3 border-y border-base-100 text-lg text-slate-800 dark:text-slate-200  border-r">
        {td}
      </p>
    </div>
  );
};
export default TableData;
