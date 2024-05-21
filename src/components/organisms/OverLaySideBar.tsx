"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Image from "next/image";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  AdminPanelSettings,
  Build,
  Close,
  EmojiFlags,
  Flag,
  GifTwoTone,
  HotelSharp,
} from "@mui/icons-material";
import { SidebarMenu } from "../moleculs";
import { HouseSimpleIcon, ReceiptIcon, UsersIcon } from "@/assets/icons";
import axios from "axios";

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
  const [wallet, setWallet] = React.useState<any>();
  const [userid, setUserId] = useState<any>("");
  const [agency, setAgency] = React.useState(false);
  const [host, setHost] = useState<any>(false);
  const [showBanner, setShowBanner] = React.useState(false);

  useLayoutEffect(() => {
    const value = localStorage.getItem("role");
    const storedManager = localStorage.getItem("userId")!;
    if (value !== null) {
      setRole(value);
      setUserId(storedManager);
    }
  }, []);

  const isManager = role === "Manager";
  const isCountryAdmin = role === "Country Admin";
  const isMasterAdmin = role === "Master";
  const isAdmin = role === "Admin";
  const isMerchant = role === "Merchant";
  const isSubAdmin = role === "	Sub Admin";

  const toggleDrawer = (open: boolean) => () => {
    setShowSidebar(open);
  };
  const fetchCoins = async () => {
    try {
      const res = await axios.get(
        `https://fun2fun.live/admin/merchent/getById/${userid}`
      );
      console.log(res.data);
      if (res?.data) {
        setWallet(res?.data?.data?.wallet);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (role === "Merchant") {
      fetchCoins();
    }
  }, [role, userid]);

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
      <div className="flex flex-col gap-24 h-full mb-24">
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
          {isMasterAdmin && (
            <SidebarMenu
              active={showUsersMenu}
              onClick={() => setShowUsersMenu(!showUsersMenu)}
              icon={<UsersIcon />}
              name="Users"
              variant="sub-menu"
            />
          )}

          {isMasterAdmin && (
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
          {isMasterAdmin && (
            <SidebarMenu
              active={showManager}
              onClick={() => setShowManager(!showManager)}
              icon={<ReceiptIcon />}
              name="Manager"
              variant="sub-menu"
            />
          )}
          {isMasterAdmin && (
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

          {(isMasterAdmin) && (
            <SidebarMenu
              active={showMerchant}
              onClick={() => setShowMerchant(!showMerchant)}
              icon={<UsersIcon />}
              name="Merchant"
              variant="sub-menu"
            />
          )}

          {(isMasterAdmin) && (
            <SidebarExpand show={showMerchant}>
              <SidebarMenu
                name="View Merchant"
                variant="expand"
                href="/merchant/view-merchant"
              />
            </SidebarExpand>
          )}
          {(isMasterAdmin) && (
            <SidebarExpand show={showMerchant}>
              <div onClick={() => setShowSidebar(false)}>
                <SidebarMenu
                  name="Merchant Recharge History"
                  variant="expand"
                  href="/merchant/recharge-history"
                />
              </div>
            </SidebarExpand>
          )}

          {(isMasterAdmin || isManager) && (
            <SidebarMenu
              active={showCountryAdmin}
              onClick={() => setShowCountryAdmin(!showCountryAdmin)}
              icon={<Flag />}
              name="Country Admin"
              variant="sub-menu"
            />
          )}

          {(isMasterAdmin || isManager) && (
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
          {(isMasterAdmin || isManager) && (
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

          {(isCountryAdmin || isMasterAdmin || isManager) && (
            <SidebarMenu
              active={showAdmin}
              onClick={() => setShowAdmin(!showAdmin)}
              icon={<AdminPanelSettings />}
              name="Admin"
              variant="sub-menu"
            />
          )}

          {(isCountryAdmin || isMasterAdmin || isManager) && (
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

          {(isCountryAdmin || isMasterAdmin || isManager || isAdmin) && (
            <SidebarMenu
              active={showSubAdmin}
              onClick={() => setShowSubAdmin(!showSubAdmin)}
              icon={<UsersIcon />}
              name="Sub Admin"
              variant="sub-menu"
            />
          )}

          {(isCountryAdmin || isMasterAdmin || isManager || isAdmin) && (
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

          {(isMasterAdmin || isManager || isMerchant) && (
            <SidebarMenu
              active={coinSeller}
              onClick={() => setCoinSeller(!coinSeller)}
              icon={<GifTwoTone />}
              name="Coins Seller"
              variant="sub-menu"
            />
          )}

          {(isMasterAdmin || isManager || isMerchant) && (
            <SidebarExpand show={coinSeller}>
              <div onClick={() => setShowSidebar(false)}>
                <SidebarMenu
                  name="Seller View"
                  variant="expand"
                  href="/seller/view-seller"
                />
              </div>
            </SidebarExpand>
          )}

          {(isCountryAdmin ||
            isMasterAdmin ||
            isManager ||
            isAdmin ||
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
            isMasterAdmin ||
            isManager ||
            isAdmin ||
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

          <SidebarMenu
            active={agency}
            onClick={() => setAgency(!agency)}
            icon={<Build />}
            name="Agency"
            variant="sub-menu"
          />

          <SidebarExpand show={agency}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="View Agency"
                variant="expand"
                href="/agency/view-agency"
              />
            </div>
          </SidebarExpand>

          <SidebarExpand show={agency}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Add Agency"
                variant="expand"
                href="/agency/add-agency"
              />
            </div>
          </SidebarExpand>

          <SidebarMenu
            active={host}
            onClick={() => setHost(!host)}
            icon={<HotelSharp />}
            name="Host"
            variant="sub-menu"
          />

          <SidebarExpand show={host}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Pending Host"
                variant="expand"
                href="/host/pending-host"
              />
            </div>
          </SidebarExpand>

          <SidebarExpand show={host}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Approved Host"
                variant="expand"
                href="/host/approved-host"
              />
            </div>
          </SidebarExpand>

          <SidebarExpand show={host}>
            <div onClick={() => setShowSidebar(false)}>
              <SidebarMenu
                name="Rejected Host"
                variant="expand"
                href="/host/rejected-host"
              />
            </div>
          </SidebarExpand>
          {(isMasterAdmin || isManager || isCountryAdmin || isMerchant) && (
            <SidebarMenu
              active={showBanner}
              onClick={() => setShowBanner(!showBanner)}
              icon={<EmojiFlags />}
              name="Banner"
              variant="sub-menu"
            />
          )}

          {(isMasterAdmin || isManager || isCountryAdmin || isMerchant) && (
            <SidebarExpand show={showBanner}>
              <div onClick={() => setShowSidebar(false)}>
                <SidebarMenu
                  name="View Banner"
                  variant="expand"
                  href="/banner/view-banner"
                />
              </div>
            </SidebarExpand>
          )}
        </nav>
        <div className="w-[50%]">
          {role === "Merchant" && (
            <div className="flex gap-2 items-center border justify-center ml-4 px-4 shadow-md border-netral-50 rounded p-2">
              <AccountBalanceWalletIcon className="text-yellow-500 h-6 w-6" />
              <p className="font-semibold text-white text-nowrap text-[14px]">
                {wallet}
                {/* 88888888 */}
              </p>
            </div>
          )}
        </div>
      </div>
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
