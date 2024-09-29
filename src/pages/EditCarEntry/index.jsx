import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../../components/Input";

const EditCarEntry = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateCar = (e) => {
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
    };

    axios
      .put(
        `https://fa21fde4-01d7-4f3c-b3c5-f5fcc778b0a7-00-28j99m784pfj1.sisko.replit.dev/update-car/${data?._id}`,
        carInfo,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.matchedCount > 0) {
          toast.success("Car Entry Edited Successfully");
          navigate("/list-cars");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form
        onSubmit={handleUpdateCar}
        className="flex flex-col gap-5 max-w-xl  w-full   mx-auto"
      >
        <Input
          name={"carName"}
          placeholder={"Enter can name"}
          defaultValue={data?.carName}
        />
        <Input
          name={"carNumber"}
          placeholder={"Enter can number"}
          defaultValue={data?.carNumber}
        />
        <Input
          name={"owner"}
          placeholder={"Enter car owner"}
          defaultValue={data?.owner}
        />
        <Input
          name={"phone"}
          placeholder={"Enter car owner phone number"}
          defaultValue={data?.phone}
        />
        <Input
          name={"address"}
          placeholder={"Enter car owner address"}
          defaultValue={data?.address}
        />
        <button
          className="btn btn-accent btn-md  text-lg font-medium"
          type="submit"
        >
          Update Car Entry
        </button>
      </form>
    </>
  );
};
export default EditCarEntry;
