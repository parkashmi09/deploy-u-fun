"use client";
import React, { useEffect, useState } from "react";
import TableComponent from "@/components/Ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ModalComponent from "../../../../components/Modal";
import { Menu, Transition } from "@headlessui/react";
import { Button, Input } from "@/components/atomics";
import { Add, Delete, Edit } from "@mui/icons-material";
import withAuth from "@/components/WithAuth";
import { countriesOptions } from "@/utils/country";
import Select from "react-select";
import { PlusIcon } from "@/assets/icons";
import axios from "axios";
import EditAdmin, { EditFormData } from "@/components/EditAdmin";
import { Avatar } from "@nextui-org/react";
import EditCoinSeller from "@/components/EditCoinSeller/page";

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

const MerhcantRechargeHistory = () => {
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

  const [adharFront, setAdharFront] = useState<any>(null);
  const [adharBack, setAdharBack] = useState<any>(null);

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
        `https://yoyo560live.live/admin/merchent/get/roleByRechargeHistory`,
        {
        role: payload.role,
            userId: payload.userId,
        }
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

  const handleAddCountryModal = async () => {
    debugger;
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
        "https://yoyo560live.live/admin/coinSeller/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        console.log("Country added successfully:", data);
        setUserName("");
        setUserId("");
        setSelectedCountry(null);
        setPassword("");
        setOpenAddCountryAdminModal(false);
        fetchData();
        toast.success("Country added successfully");
      } else {
        console.error("Failed to add country:", response.statusText);
        toast.error("Failed to add country");
      }
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
      const url = `https://yoyo560live.live/admin/coinSeller/delete/${userid}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
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

  function formatTime(timeString: any) {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

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
      key: "merchentId",
      label: "Merchant Id",
    },
    {
      key: "amount",
      label: "Coins",
    },
    {
      key: "createdAt",
      label: "Created At",
      renderCell: (rowData: any) => (
        <p className="text-nowrap">{formatTime(rowData?.createdAt)}</p>
      ),
    },
    {
      key: "updatedAt",
      label: "Updated At",
      renderCell: (rowData: any) => (
        <p className="text-nowrap">{formatTime(rowData?.updatedAt)}</p>
      ),
    },
  ];

  return (
    <div className="mt-24 p-4  mx-auto">
      <TableComponent
        onAdd={handleOnAdd}
        isLoading={isLoading}
        data={userData}
        headers={headerData}
        isAdd={false}
        title="View Merhcant Recharge History"
      />
      {/* <ModalComponent
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
                  value={selectedCountry}
                  onChange={(selectedOptions) =>
                    setSelectedCountry(selectedOptions)
                  }
                  options={countriesOptions}
                />
              </div>
            )}
            <Input
              id="password"
              placeholder=""
              label="Password"
              variant="default"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              modal
            />

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
      </ModalComponent> */}
    </div>
  );
};

export default withAuth(MerhcantRechargeHistory);
