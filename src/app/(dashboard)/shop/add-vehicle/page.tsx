"use client";
import { useState } from "react";
import { Input } from "@/components/atomics";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { Alerts } from "@/components/atomics";

const Page = () => {
  const router = useRouter();
  // State variables for form fields
  const [name, setName] = useState("");
  const [vehile, setVehicle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [additionalInputs, setAdditionalInputs] = useState([
    { price: "", validity: "" },
  ]);
  const [toastObj, setToastObj] = useState({
    desc: "",
    variant: "",
    title: "",
  });
  const [price, setPrice] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [validity, setValidity] = useState<string>("");
  const [openToast, setOpenToast] = useState(false);
  const [isOfficial, setIsOfficial] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Create FormData object
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    formData.append("vehicle", vehile);
    formData.set("price", price);
    formData.set("name", name);
    formData.set("day", validity);
    formData.set("level", level);
     formData.set("is_official", `${isOfficial}`);
  
    try {
      // Send form data to API using Axios
      const response = await axios.post(
        "https://fun2fun.live/admin/vehicle/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Handle response
      console.log("Response:", response.data);
      const data = response.data;
  
      if (data?.status === 1) {
        setOpenToast(true);
        setToastObj({
          title: "Vehicle Creation",
          desc: data?.message,
          variant: "success",
        });
        // Clear form fields
        setName("");
        setVehicle("");
        // setAdharFront("");
        // setAdharBack("");
        setAdditionalInputs([{ price: "", validity: "" }]);
        setPrice("");
        setValidity("");
        setIsOfficial(false);
      } else if (data?.status === 0 || data?.status === "") {
        setOpenToast(true);
        setToastObj({
          title: "Vehicle",
          desc: data?.error,
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  

  // Function to handle file input change
  const handleLogoChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setVehicle(file);
  };
    // Function to handle file input change
    const handleThumbnailChange = (e: any) => {
        const file = e.target.files ? e.target.files[0] : null;
        setThumbnail(file);
      };

  // Function to handle file input change
//   const handleAdharFrontChange = (e: any) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     setAdharFront(file);
//   };

  // Function to handle file input change
//   const handleAdharBackChange = (e: any) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     setAdharBack(file);
//   };

  // Function to add additional input fields
  const handleAddButtonClick = () => {
    setAdditionalInputs([...additionalInputs, { price: "", validity: "" }]);
  };

  // Function to handle delete button click
  const handleDeleteButtonClick = (index: number) => {
    // Check if there's only one item in the array
    if (additionalInputs.length === 1) {
      return;
    }
    const updatedInputs = [...additionalInputs];
    updatedInputs.splice(index, 1);
    setAdditionalInputs(updatedInputs);
  };
  return (
    <div className="mt-24  p-6">
      <div className="space-y-6">
        <h1 className="text-heading-sm font-semibold">Add Vehicle</h1>
        <section className="relative space-y-6 rounded-lg-10 bg-white p-6">
          <div className="md:hidden" onClick={() => router.back()}>
            {/* Icon or text for back button */}
            <ArrowBack />
          </div>
        </section>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="px-8 py-4 w-full md:w-[60%] grid grid-cols-1  gap-x-5 gap-y-8">
          <Input
            id="name"
            placeholder="Enter  Name"
            label="Name"
            variant="default"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <Input
            id="thumbnail"
            placeholder=""
            label="Thumbnail"
            type="file"
            accept="*/*"
            onChange={handleThumbnailChange}
          />
          <Input
            id="vehicle"
            placeholder=""
            label="Vehicle"
            type="file"
            accept="*/*"
            onChange={handleLogoChange}
          />
          {/* <div className=" flex flex-col gap-3">
            {additionalInputs.map((input, index) => (
              <div key={index} className="flex gap-3 items-center w-full">
                <Input
                  id={`price-${index}`}
                  placeholder="Price"
                  label="Price"
                  type="text"
                  value={input.price}
                  onChange={(e) => {}}
                />
                <Input
                  id={`validity-${index}`}
                  placeholder="Validity"
                  label="Validity"
                  type="text"
                  value={input.validity}
                  onChange={(e) => {}}
                />
             {
                additionalInputs.length!==1 &&(
                    <button
                    type="button"
                    onClick={() => handleDeleteButtonClick(index)}
                    className="text-red-500 mt-6"
                  >
                    Delete
                  </button>
                )
             }
              </div>
            ))}
            <button
              onClick={handleAddButtonClick}
              type="button"
              className="h-[40px] w-[45px] bg-black px-2 text-netral-25 rounded-md"
            >
              Add
            </button>
          </div> */}

          <Input
            id={`price`}
            placeholder="Price"
            label="Price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            id={`validity`}
            placeholder="Day"
            label="Day"
            type="text"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
           <Input
            id={`level`}
            placeholder="Level"
            label="Level"
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
            <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="isOfficial"
            checked={isOfficial}
            onChange={(e) => setIsOfficial(e.target.checked)}
            className="appearance-none h-6 w-6 border border-netral-25 rounded-md checked:bg-netral-25 checked:border-transparent focus:outline-none focus:border-netral-25"
          />
          <label htmlFor="isOfficial">Is Official</label>
        </div>
        </div>
      

        <button
          className="bg-netral-25 w-[100px] py-2 rounded-md ml-10"
          type="submit"
        >
          Submit
        </button>
      </form>

      <Alerts
        //@ts-ignore
        variant={toastObj?.variant!}
        open={openToast}
        setOpen={setOpenToast}
        title={toastObj?.title}
        desc={toastObj?.desc}
      />
    </div>
  );
};

export default Page;
