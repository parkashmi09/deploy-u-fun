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
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
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
    if (thumbnail) formData.append("images", thumbnail);
    if (file) formData.append("images", file);
    formData.set("priceAndvalidity", JSON.stringify(additionalInputs));
    formData.set("name", agencyName);
    formData.set("is_official", `${isOfficial}`);

    try {
      // Send form data to API using Axios
      const response = await axios.post(
        "http://139.59.19.172:3000/admin/vehicle/add",
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
        setPrice("");
        setLevel("");
        setThumbnail(null);
        setFile(null);
      }
      if (data?.status === 0 || data?.status === "") {
        setOpenToast(true);
        setToastObj({
          title: "Vehicle Creation",
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
  const handleThumbnailChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setThumbnail(file);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
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
    <div className="mt-24 p-6">
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
        <div className="px-8 py-4 w-full md:w-[60%] grid grid-cols-1 gap-x-5 gap-y-8">
          <Input
            id="name"
            placeholder="Enter Name"
            label="Name"
            variant="default"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
          />
          <Input
            id="thumbnail"
            placeholder=""
            label="Thumbnail"
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
          <Input
            id="file"
            placeholder=""
            label="File"
            type="file"
            accept="*/*"
            onChange={handleFileChange}
          />
          <div className="flex flex-col gap-3">
            {additionalInputs.map((input, index) => (
              <div key={index} className="flex gap-3 items-center w-full">
                <Input
                  id={`price-${index}`}
                  placeholder="Price"
                  type="number"
                  value={input.price}
                  onChange={(e) =>
                    setAdditionalInputs((prevInputs) =>
                      prevInputs.map((item, i) =>
                        i === index ? { ...item, price: e.target.value } : item
                      )
                    )
                  }
                />
                <Input
                  id={`validity-${index}`}
                  placeholder="Validity"
                  type="number"
                  value={input.validity}
                  onChange={(e) =>
                    setAdditionalInputs((prevInputs) =>
                      prevInputs.map((item, i) =>
                        i === index ? { ...item, validity: e.target.value } : item
                      )
                    )
                  }
                />
                {additionalInputs.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteButtonClick(index)}
                    className="text-red-500 mt-6"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={handleAddButtonClick}
              type="button"
              className="h-[40px] w-[45px] bg-black px-2 text-netral-25 rounded-md"
            >
              Add
            </button>
          </div>

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
