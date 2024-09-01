"use client";
import React, { useEffect, useState } from "react";
import TableComponent from "@/components/Ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalComponent from "../../../../components/Modal";
import { Menu, Transition } from "@headlessui/react";
import { Alerts, Button, Input } from "@/components/atomics";
import {
  Add,
  AddBoxOutlined,
  Delete,
  Diamond,
  Edit,
} from "@mui/icons-material";
import withAuth from "@/components/WithAuth";
import { countriesOptions } from "@/utils/country";
import Select from "react-select";
import axios from "axios";
import EditCoinSeller from "@/components/EditCoinSeller/page";
import { EditFormData } from "@/components/EditAdmin";
import { ToastObj } from "@/app/(auth)/login/page";

interface UserData {
  userId: string;
  is_active: boolean;
  images?: string[];
  seller_name: string;
  email: string;
  mobile: string;
  countryCode: string;
  _id?: string;
}

const ViewSubAdmin = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const [openDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [countrySelect, setCountrySelect] = useState<boolean>(false);
  const [openAddCountryAdminModal, setOpenAddCountryAdminModal] =
    useState<boolean>(false);
  const [openEditManagerModal, setOpenEditManagerModal] =
    useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [userid, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [countryCode, setCountryCode] = useState<string>("");
  const [countryFieldOption, setIsCountryFieldOptions] =
    useState<boolean>(true);
  const [useCountryCode, setUseCountryCode] = useState(() => {
    const storedManager = localStorage.getItem("countryCode");
    return storedManager !== null ? storedManager : "";
  });
  const [editFormDetails, setEditFormDetails] = useState<
    EditFormData | undefined
  >(undefined);
  const [managerId, setManagerId] = useState<string>(() => {
    const storedManager = localStorage.getItem("userId");
    return storedManager !== null ? storedManager : "";
  });
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);
  const [manager, setManager] = useState<string>(() => {
    const storedManager = localStorage.getItem("role");
    return storedManager !== null ? storedManager : "";
  });
  const [isFilter, setIsFilter] = useState<boolean>();
  const [payload, setPayload] = useState<any>({
    role: localStorage.getItem("role")?.toLowerCase(),
    userId: localStorage.getItem("userId"),
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [addRechargeModal, setAddRechargeModal] = useState<boolean>(false);

  const [adharFront, setAdharFront] = useState<any>(null);
  const [adharBack, setAdharBack] = useState<any>(null);
  const [toastObj, setToastObj] = React.useState<ToastObj>({
    desc:"",
    variant:"",
    title:""
  })
  const [openToast, setOpenToast] = React.useState(false);
  const [sellerId, setSellerId] = useState<string>("");
  const [coins, setCoins] = useState<string>();
  const [merhcantId, setMerchantId] = useState<string>(() => {
    const storedManager = localStorage.getItem("userId");
    return storedManager !== null ? storedManager : "";
  });

  const [role, setRole] = useState<string>("");
  useEffect(() => {
    const value = localStorage.getItem("role");
    if (value !== null) {
      setRole(value);
    }
  }, []);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleDeleteModal = (id: string) => {
    setIsOpenDeleteModal(true);
    setUserId(id);
  };

  useEffect(() => {
    fetchData();
  }, [payload]);

  useEffect(() => {
    if (manager === "Country Admin") {
      setIsCountryFieldOptions(false);
    }
  }, [manager]);

  const handleEditModal = (data: UserData) => {
    if (data?._id) {
      setEditFormDetails({
        userId: "",
        username: "",
        password: "",
        id: data._id,
      });
      setOpenEditManagerModal(true);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.post(
        "http://139.59.19.172:3000/admin/coinSeller/getByRole",
        payload
      );
      console.log("data response", data);
      const modifiedData = data?.data?.data?.map(
        (user: UserData, index: number) => ({
          ...user,
          "sr.no": index + 1,
          name: user.seller_name || "-",
          mobile: user.mobile || "-",
          status: user.is_active ? "Active" : "Inactive",
          userid: user.userId || "-",
          countryCode: user.countryCode || "-",
        })
      );
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

  const handleAddcoinSeller = async () => {
    try {
      const formData = new FormData();
      formData.set("seller_name", username);
      formData.set("userId", userid);
      formData.set("password", password);
      formData.append("images", adharFront);
      formData.append("images", adharBack);
      formData.set(
        "countryCode",
        manager === "Country Admin" ? useCountryCode : selectedCountry?.value
      );
      formData.set("createdByuserId", managerId);
      formData.set("createdByrole", manager.toLowerCase());

      const response = await axios.post(
        "http://139.59.19.172:3000/admin/coinSeller/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
        const data = response.data;

        if(data?.status ===1){

          setOpenToast(true);
         setToastObj({
          title:"Coin Seller Creation",
           desc:data?.message,
           variant:"success"
    
         })
            fetchData();
          }
          else if(data?.status ===0 || data?.status ==='' ){
            setOpenToast(true);
            setToastObj({
             title:"Coin Seller Creation",
              desc:data?.error,
              variant:"error"
     
            })
          }
        setUserName("");
        setUserId("");
        setSelectedCountry(null);
        setPassword("");
        setOpenAddCountryAdminModal(false);
        fetchData();
        toast.success("Country added successfully");

    } catch (error) {
      console.error("Error adding country:", error);
      toast.error("Error adding country");
    } finally {
      setIsModalLoading(false);
      setUserName("");
      setUserId("");
      setSelectedCountry(null);
      setPassword("");
    }
  };

  const handleDeleteAdmin = async () => {
    try {
      setIsModalLoading(true);
      const url = `http://139.59.19.172:3000/admin/coinSeller/delete/${userid}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
const data=await response.json();
        if(data?.status ===1){

          setOpenToast(true);
         setToastObj({
          title:"Coin Seller Creation",
           desc:data?.message,
           variant:"success"
    
         })
            fetchData();
          }
          else if(data?.status ===0 || data?.status ==='' ){
            setOpenToast(true);
            setToastObj({
             title:"Coin Seller Creation",
              desc:data?.error,
              variant:"error"
     
            })
          }
        console.log("User deleted successfully");
        toast.success("Data deleted");
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

  const handleAddCoinsRecharge = async() => {
try {
  const res=await axios.post("http://139.59.19.172:3000/coinseller/recharge",{
    coinSellerId :sellerId,
    amount:coins,
    merchentId:merhcantId
  })
  if(res.status>=200 && res.status<300) {
    toast.success("Coins Recharge Added Successfully");
    setAddRechargeModal(false);
    fetchData();
  }
} catch (error) {
  console.log("Error while adding coins recharge",error);
}
  
  }

  const addCoinsRecharge = (data: any) => {
    setAddRechargeModal(true);
    setSellerId(data.userid);
  };

  useEffect(() => {
    if (manager === "Master" || manager === "Manager") {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [manager]);

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
      key: "seller_name",
      label: "Seller Name",
    },
    {
      key: "countryCode",
      label: "Country Code",
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
          {rowData?.is_active ? "Active" : "InActive"}
        </span>
      ),
    },
    {
      key: "",
      label: "Recharge",
      renderCell: (rowData: UserData) => (
        <div className="flex items-center ml-4 gap-2">
          <Diamond
            onClick={() => addCoinsRecharge(rowData)}
            className="cursor-pointer text-yellow-600"
          />
          {/* <div onClick={() => handleEditModal(rowData)}>
            <Edit className="cursor-pointer text-gray-600" />
          </div>
          <div onClick={() => handleDeleteModal(rowData?.userId)}>
            <Delete className="cursor-pointer text-red-600" />
          </div> */}
        </div>
      ),
    },
    {
      key: "is_active",
      label: "Action",
      renderCell: (rowData: UserData) => (
        <div className="flex gap-2">
          <div onClick={() => handleEditModal(rowData)}>
            <Edit className="cursor-pointer text-gray-600" />
          </div>
          <div onClick={() => handleDeleteModal(rowData?.userId)}>
            <Delete className="cursor-pointer text-red-600" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-24 p-4">
      <TableComponent
        onAdd={handleOnAdd}
        isLoading={isLoading}
        data={userData}
        headers={headerData}
        addButtonLabel="Add Coin Seller"
        isAdd={role === "Manager" ? false : true}
        isFilter={isFilter}
        filterAction={fetchData}
        title="View Coin Sellers"
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
        onAction={handleAddcoinSeller}
        isOpen={openAddCountryAdminModal}
        setIsOpen={setOpenAddCountryAdminModal}
        size="2xl"
        title="Add"
      >
        <div className="p-8">
          <div className="grid grid-cols-1 gap-6">
            <Input
              id="username"
              placeholder="Enter User Name"
              label="Seller Name"
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
            {countryFieldOption && (
              <div className="w-full">
                <label className="text-white text-body-base font-semibold mb-2">
                  Country
                </label>
                <Select
                  placeholder="Select Country"
                  className="mt-2"
                  value={selectedCountry}
                  onChange={(selectedOptions) =>
                    setSelectedCountry(selectedOptions)
                  }
                  options={countriesOptions}
                />
              </div>
            )}
      
            <Input
              id="adhar_front"
              placeholder=""
              label="Adhar Front"
              type="file"
              accept="image/*"
              defaultValue={adharFront} // Change value to defaultValue
              onChange={(e) => {
                if (e.target.files) {
                  setAdharFront(e.target.files[0]);
                }
              }}
              modal
            />
            <Input
              id="adhar_back"
              placeholder=""
              label="Adhar Back"
              type="file"
              accept="image/*"
              defaultValue={adharBack} // Change value to defaultValue
              onChange={(e) => {
                if (e.target.files) {
                  setAdharBack(e.target.files[0]);
                }
              }}
              modal
            />
          </div>
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
        <EditCoinSeller
          fetchData={fetchData}
          setOpenEditManagerModal={setOpenEditManagerModal}
          formData={editFormDetails}
        />
      </ModalComponent>
      <ModalComponent
        loading={isModalLoading}
        onAction={handleAddCoinsRecharge}
        isOpen={addRechargeModal}
        setIsOpen={setAddRechargeModal}
        size="2xl"
        title="Add Recharge"
      >
        <div className="p-8">
          <div className="grid grid-cols-1 gap-6">
            <Input
              id="seller_id"
              placeholder="Enter Seller Id"
              label="Seller Id"
              variant="default"
              disabled
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
              modal
            />
            <Input
              id="merhcant_id"
              placeholder="Enter Merhcant"
              label="Merchant Id"
              variant="default"
              value={merhcantId}
              onChange={(e) => setMerchantId(e.target.value)}
              modal
            />

            <Input
              id="coins"
              placeholder="Enter Coins"
              label="Coins"
              variant="default"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              modal
            />
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

export default withAuth(ViewSubAdmin);
