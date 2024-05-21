"use client";
import { useState } from "react";
import { Input } from "@/components/atomics";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Badge, Title } from "@/components/atomics";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { Alerts } from "@/components/atomics";

const Page = () => {
  const router = useRouter();
  // State variables for form fields
  const [agencyName, setAgencyName] = useState("");
  const [logo, setLogo] = useState("");
  const [adharFront, setAdharFront] = useState("");
  const [adharBack, setAdharBack] = useState("");
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
  const [day, setDay] = useState<string>("");
  const [openToast, setOpenToast] = useState(false);
  const [isOfficial, setIsOfficial] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("images", logo);
    formData.set("price", price);
    formData.set("level", level);
    formData.set("name", agencyName);
    formData.set("day", day);
    formData.set("is_official", `${isOfficial}`);

    // Add other form fields and files to formData as needed

    try {
      // Send form data to API using Axios
      const response = await axios.post(
        "https://fun2fun.live/admin/wallpaper/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle response
      console.log("Response:", response.data);
      // Redirect or show success message

      const data = response.data;

      if (data?.status === 1) {
        setOpenToast(true);
        setToastObj({
          title: "Frame Creation",
          desc: data?.message,
          variant: "success",
        });
        // Clear form fields
        // setAgencyName("");
        // Clear other form fields as needed
        setPrice("");
        setLevel("");
        setLogo("");
      }
      if (data?.status === 0 || data?.status === "") {
        setOpenToast(true);
        setToastObj({
          title: "Frame Creation",
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
    setLogo(file);
  };

  // Function to handle file input change
  const handleAdharFrontChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setAdharFront(file);
  };

  // Function to handle file input change
  const handleAdharBackChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setAdharBack(file);
  };

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
      <Title size="lg" variant="default">
         Add Frame
          </Title>
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
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
          />
          <Input
            id="logo"
            placeholder=""
            label="File"
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
            placeholder="Validity"
            label="Validity"
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
            <Input
            id={`day`}
            placeholder="Day"
            label="Day"
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
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
