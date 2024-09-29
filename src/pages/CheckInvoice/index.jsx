import { useLoaderData } from "react-router-dom";
import FoundData from "./FoundData";
import NotFoundData from "./NotFoundData";

const CheckInvoice = () => {
  const { data } = useLoaderData();

  console.log(data);

  return (
    <div>
      <div className="mt-20"></div>
      {data?.status === 404 ? (
        <NotFoundData />
      ) : data ? (
        <FoundData {...data} />
      ) : (
        <NotFoundData />
      )}
    </div>
  );
};
export default CheckInvoice;
