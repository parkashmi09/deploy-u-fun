"use client";
import React, { useEffect, useState, Fragment } from "react";
import TableComponent from "@/components/Ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalComponent from "../../../../components/Modal";
import { Menu, Transition } from "@headlessui/react";
import { Alerts, Input } from "@/components/atomics";
import { Delete, Edit } from "@mui/icons-material";
import withAuth from "@/components/WithAuth";
import axios from "axios";
import { ToastObj } from "@/app/(auth)/login/page";

interface UserData {
  userId: string;
  is_active: boolean;
  images?: string[];
  name: string;
  email: string;
  mobile: string;
}





const ViewManager = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [openDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [openAddManagerModal, setOpenAddManagerModal] =
    useState<boolean>(false);
  const [openEditManagerModal, setOpenEditManagerModal] =useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [userid, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [openAlertsSuccess, setOpenAlertsSuccess] = useState<boolean>(false);
  const [managerId, setManagerId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [toastObj, setToastObj] = React.useState<ToastObj>({
    desc:"",
    variant:"",
    title:""
  })
  const [openToast, setOpenToast] = React.useState(false);
  const handleDeleteModal = (id: string) => {
    setIsOpenDeleteModal(true);
  };
  useEffect(() => {
    fetchData();
  }, []);


  const handleEditItem=(data:any)=>{
    console.log("data is",data)
  
  }


  const handleDeleteManager=()=> {
    console.log("amager id", managerId)
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://yoyo560live.live/admin/manager/getall?page=${currentPage}&limit=${10}`);
      const data = await response?.json();
      console.log("data is", data?.data?.data    )
      setTotalPages(Math.ceil(data?.data?.totalUsers / 10));
      const startSerialNumber = (currentPage - 1) * 10 + 1;
      const modifiedData =data?.data?.data?.map((user: UserData, index: number) => ({
        ...user,
        "sr.no": startSerialNumber + index,
        name: user.name || "-",
        mobile: user.mobile || "-",
        status: user.is_active == true ? "Active" : "Inactive",
        userid: user.userId || "-",
      }));

      setUserData(modifiedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, [currentPage]);

  const handleActive = async (checked: boolean, id: string) => {
    try {
      const response = await axios.post("https://yoyo560live.live/admin/manager/ban", 
       {
          userId: id,
          is_active: checked,
        })

        console.log("response", response);

        if(response?.data?.status===200){
          console.log("done, ", response)
        }
        const updatedData=response?.data?.data
  
  
  
      // Find the index of the user in the existing userData array
      const index = userData.findIndex((user: any) => user.userId === updatedData.userId);
  
      if (index !== -1) {
        setUserData((prevUserData: any) => {
          const newData = [...prevUserData];
          newData[index] = {
            ...newData[index], // Keep existing properties
            is_active: updatedData?.is_active, // Update is_active
            status: updatedData?.is_active ? "Active" : "Inactive", // Update status
          };
          return newData;
        });
      } else {
        console.error(`User with userId ${updatedData.userId} not found in userData array.`);
      }
    } catch (error) {
      console.error("Error toggling user ban status:", error);
    }
  };
  

  const headerData = [
    {
      key: "sr.no",
      label: "Sr no",
    },
    {
      key: "userid",
      label: "UserId",
    },
    {
      key: "username",
      label: "UserName",
    },
    {
      key: "is_active",
      label: "Ban/Uban",
      renderCell: (rowData: UserData) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={rowData?.is_active}
            onChange={(event) => handleActive(event.target.checked, rowData?.userId)}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-netral-25 dark:peer-focus:ring-netral-25 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-netral-25"></div>
        </label>
      ),
    
    },
    {
      key: "status",
      label: "Status",
      renderCell: (rowData: UserData) => (
        <span
          className={`${
            rowData?.is_active ? "text-green-500" : "text-red-500"
          }`}
        >
          {rowData?.is_active ? "Active" : "Inactive"}
        </span>
      ),
    }
  ];

  const handleOnAdd = () => {
    setOpenAddManagerModal(true);
  };

  const handleAddManager = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/make/manager`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          userId: userid,
          password: password,
          // countrycode: country,
        }),
      });

      console.log("resposnene", response)
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        console.log("Manager added successfully:", data);

        if(data?.status ===1){
      setOpenToast(true);
       setToastObj({
        title:"Manager Creation",
         desc:data?.message,
         variant:"success"

       })
        }
        if(data?.status ===0 || data?.status ==='' ){
          setOpenToast(true);
          setToastObj({
           title:"Manager Creation",
            desc:data?.error,
            variant:"error"
   
          })
        }
    
        // Optionally, perform any actions after successful addition
      } else {
        // Request failed
        console.error("Failed to add manager:", response.statusText);
        // Optionally, handle error scenario
      }
    } catch (error) {
      // Network error or other error occurred
      console.error("Error adding manager:", error);
      // Optionally, handle error scenario
    } finally {
      fetchData();
      setOpenAddManagerModal(false); // Close the modal regardless of success or failure
    }
  };
  

  const handleSearch = (searchTerm: string) => {
    const filteredData = userData.filter((user: any) =>
      user?.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUserData(filteredData); // Update userData state with filtered results
  };

  const handlePageChange = (event: any, page: number) => {

    console.log("current", page)
    // Update currentPage state
    setCurrentPage(page);
    // You can also perform any other necessary actions here, like fetching data for the new page
  };


  return (
    <div className="mt-24 p-6">
      <TableComponent
        onAdd={handleOnAdd}
        isLoading={isLoading}
        data={userData}
        isAdd={true}
        headers={headerData}
        title="View Managers"
        addButtonLabel="Add Manager"
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <ModalComponent
        onAction={() => {}}
        isOpen={openDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        size="2xl"
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
        onAction={handleAddManager}
        isOpen={openAddManagerModal}
        setIsOpen={setOpenAddManagerModal}
        size="2xl"
        title="Add Manager"
      >
        <div className="px-8 py-4 grid grid-cols-1 gap-x-5 gap-y-8">
          <Input
            id="username"
            placeholder="Enter User Name"
            label="User Name"
            variant="default"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            modal
          />

          <Input
            id="userid"
            placeholder="Enter User Id"
            label="Enter User Id"
            variant="default"
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
            modal
          />
          <Input
            id="password"
            placeholder="Password"
            label="Password"
            variant="default"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            modal
          />
        </div>
      </ModalComponent>
      <ModalComponent
      
        onAction={()=>{}}
        isOpen={openEditManagerModal}
        setIsOpen={setOpenEditManagerModal}
        size="2xl"
      >
        <div></div>
{/* <EditManager formData={editFr}/> */}
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

export default withAuth(ViewManager);
