"use client";
import ButtonLoader from "@/components/Loaders/buttonLoader";
import { Alerts, Badge, Button, Title } from "@/components/atomics";
import withAuth from "@/components/WithAuth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatTime, salaryData } from "@/utils/common";
import CheckIcon from "@mui/icons-material/Check";
import DiamondIcon from "@mui/icons-material/Diamond";

const Page = () => {
  const initialData = salaryData.map((item) => ({
    ...item,
    lastUpdated: null,
  }));

  const [data, setData] = useState<any[]>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sendingStatus, setSendingStatus] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [toastObj, setToastObj] = useState({
    desc: "",
    variant: "",
    title: "",
  });
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("salaryData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("salaryData", JSON.stringify(data));
  }, [data]);

  const handlePaymentSent = async (id: number, amount: any) => {
    setSendingStatus(true);
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/hostSalary/indian/${amount}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, lastUpdated: Date.now() } : item
        );
        setData(updatedData);

        setCheckedItems((prev) => ({ ...prev, [id]: true }));
        setOpenToast(true);
        setToastObj({
          title: "Salary",
          desc: "Salary Initiated Successfully",
          variant: "success",
        });

        setTimeout(() => {
          setSendingStatus(false);
          setCheckedItems((prev) => ({ ...prev, [id]: false }));
        }, 5000);
      } else {
        console.error("Error sending payment");
      }
    } catch (error) {
      console.error("Error sending payment:", error);
    }
  };

  return (
    <div className="mt-28">
      <section className="rounded-lg-10 items-center bg-white mt-24 py-12 px-4 mr-12">
        <nav className="flex items-center h-full">
          <Title size="lg" variant="default">
            Domestic Salary Grid
          </Title>
        </nav>
      </section>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <ButtonLoader />
        </div>
      ) : (
        <div className="p-4">
          {data.length === 0 ? (
            <div className="text-center h-screen flex justify-center items-center text-gray-500 py-4">
              No Data Available
            </div>
          ) : (
            <div
            className="mb-6 overflow-x-auto"
            >
              <table className="w-full table-auto">
                <thead className="bg-netral-15 text-body-sm font-semibold uppercase">
                  <tr>
                    <th className="whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5">
                      <span className="text-body-sm font-semibold">Sr No</span>
                    </th>
                    <th className="whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5">
                      <span className="text-body-sm font-semibold">
                        Target Diamond
                      </span>
                    </th>
                    <th className="whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5">
                      <span className="text-body-sm font-semibold">
                        Host Salary (Beans)
                      </span>
                    </th>
                    <th className="whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5">
                      <span className="text-body-sm font-semibold">
                        Payment Sent
                      </span>
                    </th>
                    {/* <th className="whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5">
                      <span className="text-body-sm font-semibold">
                        Last Updated
                      </span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-netral-20 pt-4 text-sm">
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5">
                        <span className="text-body-base font-medium text-netral-80">
                          {item.id ? item.id : "No Data"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5">
                        <span className="ml-[2px]">
                          <DiamondIcon className="text-yellow-600 mr-[2px] text-[18px]" />
                        </span>
                        <span className="text-body-base font-medium text-netral-80">
                          {item.targetDiamond ? item.targetDiamond : "No Data"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap flex items-center gap-1 text-center px-3 py-5  first:pl-5 last:pr-5">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M44.89,19.11c-3.22-3.22-7.52-5-12.11-5c-6.73,0-12.39,4.23-14.79,10.28C16.84,24.19,14,27.67,14,32
    c0,5.52,4.48,10,10,10c4.33,0,7.81-2.84,9.61-6.98C39.77,36.5,44,30.84,44,24.11C44,23.3,44.09,22.51,44.27,21.74
    C44.47,20.83,44.71,19.95,44.89,19.11z M50.82,28.97c-1.36-1.36-3.04-2.14-4.89-2.14c-1.12,0-2.19,0.28-3.12,0.78
    c-1.08,0.6-1.92,1.49-2.44,2.55c-0.58,1.15-0.89,2.45-0.89,3.79c0,3.74,3.03,6.77,6.77,6.77c1.34,0,2.64-0.31,3.79-0.89
    c1.06-0.52,1.95-1.36,2.55-2.44c0.5-0.93,0.78-2,0.78-3.12C52.97,32.01,52.18,30.34,50.82,28.97z M13.11,44.89
    c-3.22,3.22-5,7.52-5,12.11c0,6.73,4.23,12.39,10.28,14.79C24.19,55.16,27.67,58,32,58c5.52,0,10-4.48,10-10
    c0-4.33-2.84-7.81-6.98-9.61C36.5,39.77,30.84,44,24.11,44c-0.81,0-1.6-0.09-2.37-0.27C20.83,43.53,19.95,43.29,19.11,43.11z
     M13.18,53.03c-1.36,1.36-2.14,3.04-2.14,4.89c0,1.12,0.28,2.19,0.78,3.12c0.6,1.08,1.49,1.92,2.55,2.44
    c1.15,0.58,2.45,0.89,3.79,0.89c3.74,0,6.77-3.03,6.77-6.77c0-1.34-0.31-2.64-0.89-3.79c-0.52-1.06-1.36-1.95-2.44-2.55
    c-0.93-0.5-2-0.78-3.12-0.78C16.22,50.88,14.54,51.67,13.18,53.03z"
                              fill="#FFD700"
                            />
                          </svg>
                        </span>
                        <span className="text-body-base font-medium text-netral-80">
                          {item.hostSalary}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-left text-netral-25 first:pl-5 last:pr-5">
                        {checkedItems[item.id] ? (
                          "Salary Sent"
                        ) : (
                          <Button
                            size="sm"
                            variant="error-outline"
                            className="bg-netral-25"
                            onClick={() =>
                              handlePaymentSent(item.id, item.targetDiamond)
                            }
                          >
                            Send
                          </Button>
                        )}
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5">
                        <span className="text-body-base font-medium text-netral-80">
                          {item.lastUpdated
                            ? formatTime(item.lastUpdated)
                            : "No Status"}
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
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

export default withAuth(Page);
