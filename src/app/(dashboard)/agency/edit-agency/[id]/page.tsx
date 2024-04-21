"use client";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation"; // Importing useRouter from next/router

const Page = ({ params }: { params: { id: string } }) => {
  console.log("params id is", params);
  const router = useRouter();

  return (
    <div className="relative mt-24 h-[calc(100vh_-_80px)] p-6">
      <div className="space-y-6">
        <h1 className="text-heading-sm font-semibold">Edit Agency</h1>
        <section className="relative space-y-6 rounded-lg-10 bg-white p-6">
          <div className="md:hidden" onClick={() => router.back()}>
            {/* Icon or text for back button */}
            <ArrowBack/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
