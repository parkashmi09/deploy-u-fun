"use client";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Alerts, Button, Input } from "@/components/atomics";
import { ToastObj } from "@/app/(auth)/login/page";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  // State variables for form fields
  const [agencyName, setAgencyName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
const [image, setImage] = useState('');
  const [toastObj, setToastObj] = useState<ToastObj>({
    desc:"",
    variant:"",
    title:""
  })
  const [openToast, setOpenToast] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", agencyName);
    formData.append("userId", userId);
    // formData.append("password", password);
    formData.append("images", image);

    try {
      // Send form data to API using Axios
      const response = await axios.put(`admin/agency/update/${params?.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle response
      console.log("Response:", response.data);
      // Redirect or show success message

      const data = response.data

      if(data?.status ===1){

        setOpenToast(true);
       setToastObj({
        title:"Agency",
         desc:data?.message,
         variant:"success"
  
       })
       setImage("");
       setAgencyName("");
       setUserId("");
        }
        if(data?.status ===0 || data?.status ==='' ){
          setOpenToast(true);
          setToastObj({
           title:"Agency",
            desc:data?.error,
            variant:"error"
   
          })
        }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };



  // Function to handle file input change
  const handleImageChange = (e:any) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };

  return (
    <div className="mt-24  p-6">
      <div className="space-y-6">
        <h1 className="text-heading-sm font-semibold">Edit Agency</h1>
        <section className="relative space-y-6 rounded-lg-10 bg-white p-6">
          <div className="md:hidden" onClick={() => router.back()}>
            {/* Icon or text for back button */}
            <ArrowBack />
          </div>
        </section>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
          <Input
            id="agency_name"
            placeholder="Enter Agency Name"
            label="Agency Name"
            variant="default"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}

          />
          <Input
            id="userid"
            placeholder="Enter User Id"
            label="Enter User Id"
            variant="default"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
        
          />
          <Input
            id="image"
            placeholder=""
            label="Image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          
          />
   
        </div>
        <button className="bg-netral-25 w-[100px] py-2 rounded-md ml-10" type="submit">Submit</button>
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
