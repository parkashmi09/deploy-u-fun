"use client";

import { useState } from "react";
import { Sidebar, Topbar } from "./organisms";
import OverLaySideBar from "./organisms/OverLaySideBar";

export default function ComponentLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="top-0 left-0 absolute w-full">
        <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>


    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <div className="h-screen">
          <OverLaySideBar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
      )}
    </>
  );
}
