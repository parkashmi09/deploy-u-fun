"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalComponent from "../../../../components/Modal";
import { Alerts, Button, Input } from "@/components/atomics";
import { Delete, Edit } from "@mui/icons-material";
import withAuth from "@/components/WithAuth";
import { countriesOptions } from "@/utils/country";
import Select from "react-select";
import TableComponent from "@/components/Ui/table";
import { ToastObj } from "@/app/(auth)/login/page";
import { EditFormData } from "@/components/EditAdmin";
import EditCountryAdmin from "@/components/EditCountyAdmin";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";


interface UserData {
  userId: string;
  is_active: boolean;
  images?: string[];
  name: string;
  email: string;
  mobile: string;
  countryCode: string;
}

const ViewUser = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const [countrySelect, setCountrySelect]=useState<boolean>(false)

  const [openDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [openAddCountryAdminModal, setOpenAddCountryAdminModal] =
    useState<boolean>(false);
  const [openEditManagerModal, setOpenEditManagerModal] =
    useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [userid, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [link,setLink] = useState<any>(null);
  const [image, setImage] = useState<any>(null);


  const [editFormDetails, setEditFormDetails] = useState<
    EditFormData| undefined
  >(undefined);
  const [managerId, setManagerId] = useState<string>(() => {
    const storedManager = localStorage.getItem("userId");
    return storedManager !== null ? storedManager : "";
  });

  const [payload, setPayload] = useState<any>({
    role: localStorage.getItem("role")?.toLowerCase(),
    userId: localStorage.getItem("userId"),
  })

  const [isFilter, setIsFilter]= useState<boolean>(false);
  const [toastObj, setToastObj] = React.useState<ToastObj>({
    desc:"",
    variant:"",
    title:""
  })
  const [openToast, setOpenToast] = React.useState(false);
  

  const [countryCode, setCountryCode]= useState<string>(() => {
    const storedManager = localStorage.getItem("countryCode");
    return storedManager !== null ? storedManager : "";
  })
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);
  const [manager, setManager] = useState<string>('');

  console.log("roles are", manager)


  useEffect(()=>{

    const storedManager = localStorage.getItem("role") ||'';
    setManager(storedManager)
  },[])

  const filteredOptions = [
    {
      label: manager,
      value: manager,
    },
    {
      label: "All",
      value: "all",
    },
  ];


  const [selectedCountryByValue, setSelectCountryByValue] = useState<any>(
    filteredOptions[0] || {}
  );

  const handleDeleteModal = (id: string) => {
    setIsOpenDeleteModal(true);
    setUserId(id);
  };

  useEffect(() => {
    fetchData();
  }, [payload]);

  const handleEditModal = (data: any) => {
    console.log("data", data);
    console.log("id", data);
    setEditFormDetails({
      userId: "",
      username: "",
      password: "",
      id: data?._id,
    });
    setOpenEditManagerModal(true);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://yoyo560live.live/admin/banner/getall",
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(payload), // Assuming payload is defined somewhere in your code
        // }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await response.json();
      console.log("data", data);
  
      const modifiedData = data?.data?.map((user: UserData, index: number) => ({
        ...user,
        "sr.no": index + 1,
        name: user.name || "-",
        mobile: user.mobile || "-",
        status: user.is_active ? "Active" : "Inactive",
        userid: user.userId || "-",
      }));
  
      setUserData([...modifiedData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleOnAdd = () => {
    setOpenAddCountryAdminModal(true);
  };

  const handleAddCountryModal = async () => {

    const formData = new FormData();
    formData.set("link", link);
    formData.append("images", image);
    formData.set(
      "countryCode",
      manager === "Manager" || manager === "Master" || manager === "Merchant"
        ? selectedCountry?.value
        : countryCode
    );
    
    try {
      setIsModalLoading(true);
      const response = await axios.post(
        `https://yoyo560live.live/admin/banner/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        const data = await response.data
        console.log("Manager added successfully:", data);

        if(data?.status ===1){
      setOpenToast(true);
       setToastObj({
        title:"Banner",
         desc:data?.message,
         variant:"success"

       })
       fetchData()
        }
        if(data?.status ===0 || data?.status ==='' ){
          setOpenToast(true);
          setToastObj({
           title:"",
            desc:data?.error,
            variant:"error"
   
          })
        }
    
        console.log("Country added successfully:", data);
        setUserName("");
        setUserId("");
        selectedCountry({});
        setPassword("")

        fetchData();
      } else {
        // console.error("Failed to add manager:", response.statusText);
        setUserName("");
        setUserId("");
        setSelectedCountry({label:"", value:""});
        setPassword("")
      }
    } catch (error) {
      console.error("Error adding manager:", error);
      setUserName("");
      setUserId("");
      setSelectedCountry({label:"", value:""});
      setPassword("")
      fetchData();
    } finally {
      setIsModalLoading(false);
      setOpenAddCountryAdminModal(false);
      setUserName("");
      setUserId("");
      setSelectedCountry({label:"", value:""});
      setPassword("")
      fetchData();
    }
  };

  const renderImageCell = (rowData: UserData) => {
    return (
       
          <div style={{ display: "flex", alignItems: "center" }} className="h-[4rem] w-[4rem] object-contain">
            <Image
              src={rowData?.images?.[0]!}
              alt="User"
              width={50}
              height={50}
              style={{ marginRight: "5px" }}
            />
      
      </div>
    );
  };
  

  const handleDeleteAdmin = async () => {
    try {
      setIsModalLoading(true);
      const url = `https://yoyo560live.live/admin/remove/country-admin`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userid }),
      });
      if (response.ok) {
        const data = await response.json();
        if(data?.status ===1){
          setOpenToast(true);
           setToastObj({
            title:"Country Admin Remove",
             desc:data?.message,
             variant:"success"
    
           })
            }
            if(data?.status ===0 || data?.status ==='' ){
              setOpenToast(true);
              setToastObj({
               title:"Country Admin Remove",
                desc:data?.error,
                variant:"error"
       
              })
            }
        setIsOpenDeleteModal(false);
        fetchData();
      } else {
        console.error("Error deleting user");
        toast.error("Error while deleting data");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error while deleting data");
    } finally {
      setIsModalLoading(false);
    }
  };

  useEffect(()=>{
    if(manager==="Master" || manager==="Manager") {
      setIsFilter(true)
    }
    else{
      setIsFilter(false)
    }
  },[manager])


  const headerData = [
    {
      key: "sr.no",
      label: "Sr no",
    },
    {
        key: "images",
        label: "Image",
        renderCell: renderImageCell,
      },
    {
      key: "countryCode",
      label: "Country Code",
    },
    {
        key: "link",
        label: "Links",
        renderCell:(data:any)=>(
            <div className="w-[100px] truncate">
            <Link className="text-blue-400" href={data.link}>Go To Link</Link>
          </div>
        
        )
      },
  ];

  return (
    <div className="mt-24 p-4">
      {/* <div className="w-full">
            <label className="text-white text-body-base font-semibold mb-6">Country</label>
            <Select
            className='w-[20%]'
              placeholder="Select Country"
              value={selectedCountryByValue} // Selected values should match one of the options exactly
              onChange={(selectedOptions) => {
              setSelectCountryByValue(selectedOptions);
              }}
              options={filteredOptions}
            />
            </div> */}

      <div className="flex gap-2 items-center">
        {/* <Button
          size="sm"
          variant="default-bg"
          className="bg-netral-25"
          onClick={getAllDetails}
        >
          Get All Countries
        </Button> */}
      </div>

      <TableComponent
        onAdd={handleOnAdd}
        isLoading={isLoading}
        data={userData}
        headers={headerData}
        addButtonLabel="Add Banner"
        isAdd={manager==="Manager" || manager==="Admin"? false:true}
        title="View Banner"
        setCountrySelect={setCountrySelect}
        setCountryCode={setCountryCode}
        setPayload={setPayload}
      />
      <ModalComponent
        onAction={handleDeleteAdmin}
        isOpen={openDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        size="2xl"
        actionLabel="Delete"
        loading={isModalLoading}
      >
        <div>
          <div className="p-12 flex justify-center w-full  text-white text-[20px]">
            <p className="text-white text-[20px]">
              Are You Sure You Want to Delete?
            </p>
          </div>
        </div>
      </ModalComponent>
      <ModalComponent
        loading={isModalLoading}
        onAction={handleAddCountryModal}
        isOpen={openAddCountryAdminModal}
        setIsOpen={setOpenAddCountryAdminModal}
        size="2xl"
        title="Add Banner"
      >
        <div className="px-8 py-4 grid grid-cols-1 gap-x-5 gap-y-8">
     {
        (manager==='Manager'|| manager==='Master'|| manager==='Merchant')
           &&(
            <div className="w-full">
            <label className="text-white text-body-base font-semibold mb-6">
              Country
            </label>
            <Select
              placeholder="Select Country"
              value={selectedCountry} // Selected values should match one of the options exactly
              onChange={(selectedOptions) => {
                setSelectedCountry(selectedOptions);
              }}
              options={countriesOptions}
            />
          </div>
)}
          <Input
              id="link"
              placeholder=""
              label="Link"
              defaultValue={link} // Change value to defaultValue
              onChange={(e) => {
                if (e.target.value) {
                  setLink(e.target.value);
                }
              }}
              modal
            />
            <Input
              id="iamge"
              placeholder=""
              label="Image"
              type="file"
              accept="image/*"
              defaultValue={image} // Change value to defaultValue
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
              modal
            />
        </div>
      </ModalComponent>
      <ModalComponent
        loading={isModalLoading}
        onAction={() => {}}
        isOpen={openEditManagerModal}
        setIsOpen={setOpenEditManagerModal}
        size="2xl"
        hideButtons
        title="Edit"
      >
        <EditCountryAdmin
          fetchData={fetchData}
          setOpenEditCountryAdminModal={setOpenEditManagerModal}
          formData={editFormDetails}
          setOpenToast={setOpenToast}
          setToast={setToastObj}
        />
      </ModalComponent>
          
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

export default withAuth(ViewUser);
