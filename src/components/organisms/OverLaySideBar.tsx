"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Image from "next/image";
import {
  AdminPanelSettings,
  Close,
  Flag,
  GifTwoTone,
} from "@mui/icons-material";
import { SidebarMenu } from "../moleculs";
import { HouseSimpleIcon, ReceiptIcon, UsersIcon } from "@/assets/icons";

interface SideBarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarExpand: React.FC<{
  children?: React.ReactNode;
  show?: boolean;
}> = ({ children, show }) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={"w-full"}
    >
      <section className="relative flex w-full items-start gap-4">
        <div className="absolute left-6 h-full w-px bg-netral-30" />
        <div className="flex w-full flex-col items-start justify-end gap-2 pl-9">
          {children}
        </div>
      </section>
    </Transition>
  );
};

const OverLaySideBar: React.FC<SideBarProps> = ({
  showSidebar,
  setShowSidebar,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showUsersMenu, setShowUsersMenu] = React.useState(false);
  const [showManager, setShowManager] = React.useState(false);
  const [showCountryAdmin, setShowCountryAdmin] = React.useState(false);
  const [role, setRole] = useState<string>("");
  const [showSubAdmin, setShowSubAdmin] = React.useState(false);
  const [showMerchant, setShowMerchant] = React.useState(false);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [coinSeller, setCoinSeller] = React.useState(false);

  useLayoutEffect(() => {
    const value = localStorage.getItem("role");
    if (value !== null) {
      setRole(value);
    }
  }, []);

  const isManager = role === "Manager";
  const isCountryAdmin = role === "Country Admin";
  const isAdmin = role === "Master";
  const isSubAdmin = role === "Admin";
  const isMerchant = role === "Merchant";

  const toggleDrawer = (open: boolean) => () => {
    setShowSidebar(open);
  };

  const DrawerList = (
    <div className="bg-black h-screen  min-h-screen overflow-scroll w-72 z-50">
      <div className="flex items-center justify-between px-2 py-4 ">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/useFun.png"
            alt="usefun"
            width={600}
            height={600}
            className="h-7 w-7 2xl:h-8 2xl:w-8"
          />
          <h5 className="text-body-xl font-semibold text-white uppercase">
            DASHBOARD
          </h5>
        </Link>
        <div className="" onClick={() => setShowSidebar(!showSidebar)}>
          <Close className="text-white" />
        </div>
      </div>
      <nav className="mt-10 flex px-2 w-full flex-col items-start gap-3">
        <div className="w-full" onClick={() => setShowSidebar(false)}>
          <SidebarMenu
            icon={<HouseSimpleIcon />}
            name="HOME"
            variant="default"
            href="/"
            exact
          />
        </div>
        {/* Users */}
        {role !== "Manager" && role !== "Admin" && (
          <SidebarMenu
            active={showUsersMenu}
            onClick={() => setShowUsersMenu(!showUsersMenu)}
            icon={<UsersIcon />}
            name="Users"
            variant="sub-menu"
          />
        )}

        {isAdmin && (
          <SidebarExpand show={showUsersMenu}>
            <div className="w-[80%]" onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Add Official  Users"
                variant="expand"
                href="/users/add-official-users"
              />
            </div>

            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View  Users"
                variant="expand"
                href="/users/view-users"
              />
            </div>

            <div className="w-[80%]" onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Top  Users"
                variant="expand"
                href="/users/top-users"
              />
            </div>

            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Push Notification"
                variant="expand"
                href="/users/push-notifications"
              />
            </div>
          </SidebarExpand>
        )}
        {isAdmin && (
          <SidebarMenu
            active={showManager}
            onClick={() => setShowManager(!showManager)}
            icon={<ReceiptIcon />}
            name="Manager"
            variant="sub-menu"
          />
        )}
        {isAdmin && (
          <SidebarExpand show={showManager}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View Manager"
                variant="expand"
                href="/manager/view-manager"
              />
            </div>
          </SidebarExpand>
        )}

        {(isAdmin || isManager) && (
          <SidebarMenu
            active={showMerchant}
            onClick={() => setShowMerchant(!showMerchant)}
            icon={<UsersIcon />}
            name="Merchant"
            variant="sub-menu"
          />
        )}

        {(isAdmin || isManager) && (
          <SidebarExpand show={showMerchant}>
            <SidebarMenu
              name="View Merchant"
              variant="expand"
              href="/merchant/view-merchant"
            />
          </SidebarExpand>
        )}
        {isMerchant && (
          <SidebarMenu
            active={showMerchant}
            onClick={() => setShowMerchant(!showMerchant)}
            icon={<UsersIcon />}
            name="Merchant"
            variant="sub-menu"
          />
        )}

        {isMerchant && (
          <SidebarExpand show={showMerchant}>
            <SidebarMenu
              name="View Merchant"
              variant="expand"
              href="/merchant/view-merchant"
            />
          </SidebarExpand>
        )}

        {(isAdmin || isManager) && (
          <SidebarMenu
            active={showCountryAdmin}
            onClick={() => setShowCountryAdmin(!showCountryAdmin)}
            icon={<Flag />}
            name="Country Admin"
            variant="sub-menu"
          />
        )}

        {(isAdmin || isManager) && (
          <SidebarExpand show={showCountryAdmin}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View Country Admin"
                variant="expand"
                href="/country-admin/view-country-admin"
              />
            </div>
          </SidebarExpand>
        )}

        {(isCountryAdmin || isAdmin || isManager) && (
          <SidebarMenu
            active={showAdmin}
            onClick={() => setShowAdmin(!showAdmin)}
            icon={<AdminPanelSettings />}
            name="Admin"
            variant="sub-menu"
          />
        )}

        {(isCountryAdmin || isAdmin || isManager) && (
          <SidebarExpand show={showAdmin}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View Admin"
                variant="expand"
                href="/admin/view-admin"
              />
            </div>
          </SidebarExpand>
        )}

        {(isCountryAdmin || isAdmin || isManager || isSubAdmin) && (
          <SidebarMenu
            active={showSubAdmin}
            onClick={() => setShowSubAdmin(!showSubAdmin)}
            icon={<UsersIcon />}
            name="Sub Admin"
            variant="sub-menu"
          />
        )}

        {(isCountryAdmin || isAdmin || isManager || isSubAdmin) && (
          <SidebarExpand show={showSubAdmin}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View Sub Admin"
                variant="expand"
                href="/sub-admin/view-subadmin"
              />
            </div>
          </SidebarExpand>
        )}

        {(isCountryAdmin ||
          isAdmin ||
          isManager ||
          isSubAdmin ||
          isMerchant) && (
          <SidebarMenu
            active={coinSeller}
            onClick={() => setCoinSeller(!coinSeller)}
            icon={<GifTwoTone />}
            name="Coins Seller"
            variant="sub-menu"
          />
        )}

        {(isCountryAdmin ||
          isAdmin ||
          isManager ||
          isSubAdmin ||
          isMerchant) && (
          <SidebarExpand show={coinSeller}>
            <SidebarMenu
              name="Seller View"
              variant="expand"
              href="/seller/view-seller"
            />
          </SidebarExpand>
        )}

        {(isCountryAdmin ||
          isAdmin ||
          isManager ||
          isSubAdmin ||
          isMerchant) && (
          <SidebarExpand show={coinSeller}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Seller Recharge History"
                variant="expand"
                href="/seller/coin-seller-recharge-history"
              />
            </div>
          </SidebarExpand>
        )}
        {(isCountryAdmin ||
          isAdmin ||
          isManager ||
          isSubAdmin ||
          isMerchant) && (
          <SidebarExpand show={coinSeller}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="My Recharge History"
                variant="expand"
                href="/seller/my-recharge-history"
              />
            </div>
          </SidebarExpand>
        )}
      </nav>
    </div>
  );

  return (
    showSidebar && (
      <Drawer
        anchor="left"
        open={showSidebar && isMobile}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    )
  );
};

export default OverLaySideBar;
