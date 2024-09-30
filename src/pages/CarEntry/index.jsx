import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

const CarEntry = () => {
  const [sn, setSn] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;

    const carName = form.carName.value;
    const carNumber = form.carNumber.value;
    const owner = form.owner.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const carInfo = {
      carName,
      carNumber,
      owner,
      phone,
      address,
      status: "parking",
      sn,
    };

    axios
      .post("https://car-parking-system.shadhin-bangla.com/add-car", carInfo, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          toast.success("Car Entry Successfully");
          navigate(`/invoice/${res.data.insertedId}`);

          const newSn = sn + 1;
          setSn(newSn);
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("https://car-parking-system.shadhin-bangla.com/sn", {
        withCredentials: true,
      })
      .then(({ data }) => {
        setSn(data.sn);
        setLoading(false);
      });
  }, [sn]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleAddCar}
          className="flex flex-col gap-5 max-w-xl  w-full   mx-auto"
        >
          <div className="my-5 text-right text-3xl font-semibold text-accent">
            ID: {sn}
          </div>
          <Input name={"carName"} placeholder={"Enter  car name"} />
          <Input name={"carNumber"} placeholder={"Enter  car number"} />
          <Input name={"owner"} placeholder={"Enter car owner name"} />
          <Input name={"phone"} placeholder={"Enter car owner phone number"} />
          <Input name={"address"} placeholder={"Enter car owner  address"} />
          <button
            className="btn btn-accent btn-md  text-lg font-medium"
            type="submit"
          >
            Add Car
          </button>
        </form>
      )}
    </>
  );
};
export default CarEntry;
