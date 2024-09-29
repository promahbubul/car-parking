const NotFoundData = () => {
  return (
    <div className="">
      <img src="/error.gif" alt="" className="w-20 h-20  mx-auto" />
      <h1 className="mx-auto font-thin text-3xl mt-5 text-slate-800 dark:text-slate-200 pb-1 border-b border-b-error w-max">
        Data not found
      </h1>
    </div>
  );
};
export default NotFoundData;
