'use client'
import ButtonLoader from "@/components/Loaders/buttonLoader";
import { Badge, Title } from "@/components/atomics";
import withAuth from "@/components/WithAuth";
import Image from "next/image";
import { useEffect, useState } from "react";

const  Page=()=> {
    const [data, setData] = useState<any[]>([]);
    console.log("data is", data);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    console.log("data is", data);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fun2fun.live/admin/wallpaper/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const jsonData = await response.json();
            setData(jsonData?.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mt-28">
         <section className="rounded-lg-10 items-center bg-white mt-24 py-12 px-4 mr-12">
        <nav className="flex items-center h-full">
          <Title size="lg" variant="default">
           View Wallpaper
          </Title>
        </nav>
      </section>
            {isLoading ? (
            <div className="h-screen w-full flex justify-center items-center">
                  <ButtonLoader/>
            </div>
            ) : (
                <div className="p-4">
                    {
                        data.length==0 ? <div className="text-center h-screen flex justify-center items-center text-gray-500 py-4">No Data Available</div>:(
                            <div className="mb-6 overflow-x-auto overflow-y-auto" style={{ maxHeight: "calc(100vh - 140px)" }}>
                        <table className='w-full table-auto'>
                            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                                <tr>
                                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Image
                                        </span>
                                    </th>
                                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Name
                                        </span>
                                    </th>
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            User ID
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Email
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Phone
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Coins
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Diamonds
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Beans
                                        </span>
                                    </th> */}
                                    {/* <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                                        <span className='text-body-sm font-semibold'>
                                            Status
                                        </span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                                {data?.map((item, index) => (
                                    <tr key={index}>
                                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                <Image
                                                    height={50}
                                                    width={40}
                                                    src={item?.images?.length > 0 ? item.images[1] : ""}
                                                    alt="gifts"
                                                    className="w-[40px] h-[50px] object-contain"
                                                />
                                            </span>
                                        </td>
                                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item.name ? item.name : "No Data"}
                                            </span>
                                        </td>
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item?._id}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item.email ? item.email : "No Data"}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item.mobile ? item.mobile : "No Data"}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item?.coin}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item.diamonds ? item.diamonds : "No Data"}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                                {item.beans ? item.beans : "No Data"}
                                            </span>
                                        </td> */}
                                        {/* <td className='whitespace-nowrap- py-5 text-left first:pl-5 last:pr-5'>
                                            <span className='text-body-base font-medium text-netral-80'>
                                             
                                                <Badge variant='success'>Success</Badge>
                                            </span>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                        )
                    }
                </div>
            )}
        </div>
    );
}

export default withAuth(Page);
