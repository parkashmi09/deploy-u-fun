"use client";
import React,{ useEffect, useState,Fragment, useLayoutEffect } from "react";
import TableComponent from "@/components/Ui/table";
import Image from "next/image";
import { Menu, Switch, Transition } from '@headlessui/react';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalComponent from "../../../../components/Modal";
import { Alerts } from "@/components/atomics";
import { redirect } from "next/navigation";
import withAuth from "@/components/WithAuth";
import PaginationComponent from "@/components/Ui/Pagination";
import axios from "axios";
import { ToastObj } from "@/app/(auth)/login/page";

interface UserData {
  userId: string;
  is_active_userId: boolean;
  images?: string[];
  name: string;
  email: string;
  mobile: string;
  _id: string;
  status?:string;
} 

const renderImageCell = (rowData: UserData) => {
  return (
     
        <div style={{ display: "flex", alignItems: "center" }} className="h-24 w-24 object-contain">
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










const ViewAgency = () => {
  const [userData,setUserData] = useState<any>(null);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [openDeleteModal, setIsOpenDeleteModal]=useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [openAlertsSuccess, setOpenAlertsSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [] =useState<any>(null);
  const [toastObj, setToastObj] = React.useState<ToastObj>({
    desc:"",
    variant:"",
    title:""
  })
  const [openToast, setOpenToast] = React.useState(false);
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const value = localStorage.getItem("role");
    if (value !== null) {
      setRole(value);
    }
  }, []);
  useEffect(() => {
    
    fetchData();
  }, [currentPage]);



  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://yoyo560live.live/host/getPending`);
      const data = await response?.json();
      // Calculate total pages based on data count

      // console.log("data is", data?.data?.totalUsers    )
      // setTotalPages(Math.ceil(data?.data?.totalUsers / 10));
      // console.log("datatattatta",data?.data?.data)
      // const startSerialNumber = (currentPage - 1) * 10 + 1;
      const modifiedData = data?.data?.map((user: UserData, index: number) => ({
        ...user,
        "sr.no": index+1,
        name: user.name || "-",
        mobile: user.mobile || "-",
        status: user.status || "-",
        userid: user.userId || "-"
      }));

      console.log("modifeid data" , modifiedData)
      setUserData(modifiedData);
      setIsLoading(false);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  const handleActive = async (checked: boolean, id: string) => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/user/banUserId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          is_active_userId: checked,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const updatedData = await response.json();
  
      // Find the index of the user in the existing userData array
      const index = userData.findIndex((user: any) => user._id === updatedData?.data?._id);
  
      if (index !== -1) {
        // Update the user data at the found index with the updated user data
        setUserData((prevUserData: any) => {
          const newData = [...prevUserData];
          newData[index] = {
            ...newData[index], // Keep existing properties
            is_active_userId: updatedData?.data?.is_active_userId, // Update is_active
            status: updatedData?.data?.is_active_userId ? "Active" : "Inactive", // Update status
          };
          return newData;
        });
      } else {
        console.error(`User with _id ${updatedData?.data?._id} not found in userData array.`);
      }
    } catch (error) {
      console.error("Error toggling user Live ban:", error);
    }
  };

  const handlePageChange = (event: any, page: number) => {

    console.log("current", page)
    // Update currentPage state
    setCurrentPage(page);
    // You can also perform any other necessary actions here, like fetching data for the new page
  };

  const handleAccept = async(id:any)=> {
    if(role==="Manager" || role==="Country Admin" || role==="Admin" || role==="Sub Admin"){
      setOpenToast(true);
      setToastObj({
       title:"Host",
        desc:"Permission Denied for Accept",
        variant:"warning"})
             setIsOpenDeleteModal(false)
    }
    else{
      try {
        const response= await axios.post(`https://yoyo560live.live/admin/host/changeStatus`, 
          {
            "id":id,
            "status":"Approved"
        }
      )
  
      console.log("response",response)
  
      const data= response.data;
  
      if(data?.status ===1){
        setOpenToast(true);
      
         setToastObj({
          title:"Host",
           desc:data?.message,
           variant:"success"
  
         })
         fetchData();
          }
          if(data?.status ===0 || data?.status ==='' ){
            setOpenToast(true);
            setToastObj({
             title:"Host",
              desc:data?.error,
              variant:"error"
     
            })
          }
    
      } catch (error) {
        console.log('error',error)
      }
      finally{
        fetchData();
      }
    }
  
  }
  const handleReject = async(id:any)=> {

    if(role==="Manager" || role==="Country Admin" || role==="Admin" || role==="Sub Admin"){
      setOpenToast(true);
      setToastObj({
       title:"Host",
        desc:"Permission Denied for Reject",
        variant:"warning"})
             setIsOpenDeleteModal(false)
    }
    else{
      try {
        const response= await axios.post(`https://yoyo560live.live/admin/host/changeStatus`, 
          {
            "id":id,
            "status":"Rejected"
        }
      )
  
      console.log("response",response)
  
      const data= response.data;
  
      if(data?.status ===1){
        setOpenToast(true);
      
         setToastObj({
          title:"Host",
           desc:data?.message,
           variant:"success"
  
         })
         fetchData();
          }
          if(data?.status ===0 || data?.status ==='' ){
            setOpenToast(true);
            setToastObj({
             title:"Host",
              desc:data?.error,
              variant:"error"
     
            })
          }
    
      } catch (error) {
        console.log('error',error)
      }
      finally{
        fetchData();
      }
    }

    

  }
  

  const renderActionCell = (data:any) => {
    return (
      <Menu as="div" className="relative inline-block text-left">
  <div>
    <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-lime-400">
      <span>Action</span>
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </Menu.Button>
  </div>
  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"  aria-orientation="vertical" aria-labelledby="menu-button">
      <div className="py-1" role="none">
    
      
    
    
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left`}
              role="menuitem"
              tabIndex={-1}
              id="menu-item-5"
              onClick={()=>handleAccept(data?._id)}
            >
              Accept
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left`}
              role="menuitem"
              tabIndex={-1}
              id="menu-item-6"
              onClick={()=>handleReject(data?._id)}
            >
             Reject
            </button>
          )}
        </Menu.Item>
        
      </div>
    </Menu.Items>
  </Transition>
</Menu>

    );
  };
  
  const headerData = [
    {
      key: "sr.no",
      label: "Sr no",
    },
    {
      key: "userId",
      label: "User Id",
    },
    {
      key: "agency_code",
      label: "Agency Code",
    },
    {
      key: "status",
      label: "Status",
      renderCell: (rowData: UserData) => (
       
          <p className="text-[14px] text-yellow-600 font-semibold">{rowData?.status}</p>
      )
    },
  

  {
    key: "action",
    label: "Action",
    renderCell: renderActionCell,
  }
  ];

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      // If the search term is empty or whitespace, fetch the data again to reset the table
      fetchData();
    } else {
      const filteredData = userData?.filter((user: any) =>
        user?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUserData(filteredData); // Update userData state with filtered results
    }
  }

  return (
  <div className="mt-20 p-4 h-auto ">
    <TableComponent 
        // totalPages={totalPages}
        // currentPage={currentPage}
        // handlePageChange={handlePageChange}

 
    isLoading={isLoading} 
    
    data={userData} headers={headerData} title="Pending Host" />

<ModalComponent
        onAction={()=>{}}
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

export default withAuth(ViewAgency);
