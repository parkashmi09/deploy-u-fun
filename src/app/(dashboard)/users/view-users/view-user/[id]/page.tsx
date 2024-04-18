"use client";
import { Button, Title, Badge, Alerts } from "@/components/atomics";
import { PencilSimpleIcon } from "@/assets/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonLoader from "@/components/Loaders/buttonLoader";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/WithAuth";
import { ArrowBack } from "@mui/icons-material";
import { ToastObj } from "@/app/(auth)/login/page";
import axios from "axios";

const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>(null);
  const [isActive, setIsActive] = useState(false);
  const [toastObj, setToastObj] = React.useState<ToastObj>({
    desc: "",
    variant: "",
    title: "",
  });
  const [openToast, setOpenToast] = React.useState(false);
  console.log("datatatat, dat, data", data);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fun2fun.live/user/getbyid/${params?.id}`
      );
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      setIsLoading(false);
      const jsonData = await response.json();
      setIsActive(jsonData?.data?.is_active_userId);
      setData(jsonData.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const handleBanLive = async (e: any) => {
    try {
      const response = await axios.post(
        "https://fun2fun.live/admin/user/banUserId",

        {
          userId: data?.userId,
          is_active_userId: e.target.checked,
        }
      );
      console.log("response", response);




      if(response?.data?.status===1){
        console.log("done")
        setOpenToast(true);
        setToastObj({
          variant:"success",
          desc:response?.data?.message,
          title:"Ban Live Updated!"
        })
        setData(response?.data?.data);
        fetchData();
      }
    } catch (error) {
      console.error("Error toggling user Live ban:", error);
    }
  };

  const handleRemoveDP = () => {
    // Define the functionality for removing display picture
  };

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="rounded-lg-10 bg-white mt-24 p-6">
        <div className="md:hidden" onClick={() => router.back()}>
          <ArrowBack className="h-8 text-netral-25 w-8" />
        </div>
        <nav className="mb-8 mt-[28px] md:mt-0 flex items-center justify-between">
          <Title className="" size="lg" variant="default">
            Personal Details
          </Title>

          <div className="flex gap-2 items-center">
            <Button
              size="md"
              variant="primary-bg"
              className="py-[13px] px-6"
              onClick={() =>
                router.push(`/users/view-users/edit-user/${params?.id}`)
              }
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="default-bg"
              className="hidden md:inline-flex bg-netral-25 py-[13px] px-6 text-[20px]"
              onClick={() => router.back()}
            >
              Back
            </Button>
          </div>
        </nav>

        <section className="flex flex-col gap-2 lg:flex-row items-center lg:gap-5">
          {isLoading ? (
            <div className="h-full w-full flex justify-center items-center">
              <ButtonLoader />
            </div>
          ) : (
            <div className="relative h-[8.25rem] w-[8.25rem] overflow-hidden rounded-full">
              {data?.images[0] ? (
                <Image
                  src={data?.images[0]}
                  className="h-full w-full object-cover"
                  alt="Avatar"
                  fill
                />
              ) : (
                <div className="h-full w-full bg-gray-200"></div>
              )}
            </div>
          )}

          <div className="space-y-1 lg:space-y-7">
            <h3 className="text-heading-sm font-semibold text-center xl:text-left text-blue-600">
              {data?.name}
            </h3>

            <section className="flex  flex-col gap-2 xl:flex-row items-start xl:gap-40">
              <div className="w-72 space-y-1 lg:space-y-1.5">
                <div className="flex gap-4"></div>
                <h1 className=" text-netral-50 mt-16">Bio</h1>
                <p className="text-[12px] mt-4 md:mt-0">{data?.bio}</p>
              </div>

              <div className="w-72 space-y-1  lg:space-y-1.5">
                <h5 className="text-body-sm uppercase text-netral-50">
                  Phone Number
                </h5>
                {!data?.mobile ? (
                  <p>No Number</p>
                ) : (
                  <p className="text-body-base font-medium">{data?.mobile}</p>
                )}
              </div>
              <div className="flex flex-col">
                <h5 className="text-body-sm uppercase text-nowrap text-netral-50">
                  Email Address
                </h5>
                {!data?.email ? (
                  <p>No Email</p>
                ) : (
                  <p className="text-body-base font-medium">{data?.email}</p>
                )}
              </div>
            </section>
          </div>
        </section>
        <div className="mt-8">
          <div className="border-t border-gray-300"></div>
        </div>
        <section className="rounded-lg-10 bg-white p-0  lg:p-6 mt-6 ">
          <div className="w-full flex flex-col  lg:flex-row gap-2">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <p className="text-sm lg:text-md">Device Type</p>
                <p className="text-sm lg:text-md">Device ID</p>
                <p className="text-sm lg:text-md">Is Email Verified</p>
                <p className="text-sm lg:text-md">User Type</p>
                <p className="text-sm lg:text-md">Login OTP</p>
                <p className="text-sm lg:text-md">User(Ban/Unban)</p>
              </div>
              <div className="flex flex-col gap-8 ">
                <p className="text-sm lg:text-md">
                  {data?.device_type?.length > 0 ? data?.device_type : "NO"}
                </p>
                <p className="text-sm lg:text-md">
                  {data?.device_id?.length > 0 ? data?.device_id : "NO"}
                </p>
                <p className="text-sm lg:text-md">
                  {data?.status?.length > 0 ? data?.status : "NA"}
                </p>
                <p className="text-sm lg:text-md">
                  {data?.user_type?.length > 0 ? data?.user_type : "NO"}
                </p>
                <p className="text-sm lg:text-md">{data?.loginOtp}</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isActive}
                    onChange={handleBanLive}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-netral-25 dark:peer-focus:ring-netral-25 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-netral-25"></div>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <p className="text-sm lg:text-md"> Followers</p>
                <p className="text-sm lg:text-md">Following</p>
                <p className="text-sm lg:text-md"> likes</p>
                <p className="text-sm lg:text-md"> comment</p>
                <p className="text-sm lg:text-md"> views</p>
                <p className="text-sm lg:text-md"> Block User</p>
                {/* <p className="   mt-2">Device</p> */}
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-sm lg:text-md">{data?.followers?.length}</p>
                <p className="text-sm lg:text-md">{data?.following?.length}</p>
                <p className="text-sm lg:text-md">{data?.likes}</p>
                <p className="text-sm lg:text-md">{data?.comments}</p>
                <p className="text-sm lg:text-md">{data?.views}</p>
                <p className="text-sm lg:text-md">{data?.block_users}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <p className="text-sm lg:text-md"> Account</p>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-sm lg:text-md">{data?.accounts}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Alerts
        //@ts-ignore
        variant={toastObj?.variant}
        open={openToast}
        setOpen={setOpenToast}
        title={toastObj?.title}
        desc={toastObj?.desc}
      />
    </div>
  );
};

export default withAuth(Page);
