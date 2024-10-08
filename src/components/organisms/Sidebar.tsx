import {
  AppWindowIcon,
  HouseSimpleIcon,
  ImagesIcon,
  LockSimpleIcon,
  PackageIcon,
  ReceiptIcon,
  StoreFrontIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon,
} from "@/assets/icons";

import { SidebarMenu } from "@/components/moleculs";
import { NijaLogo } from "@/assets/brands";
import Image from "next/image";
import {
  AdminPanelSettings,
  Build,
  EmojiFlags,
  Flag,
  GifTwoTone,
  HotelSharp,
  Money,
  Superscript,
} from "@mui/icons-material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Transition } from "@headlessui/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
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

const Sidebar: React.FC<SideBarProps> = ({ showSidebar, setShowSidebar }) => {
  const [showUsersMenu, setShowUsersMenu] = React.useState(false);
  const [showManager, setShowManager] = React.useState(false);
  const [showCountryAdmin, setShowCountryAdmin] = React.useState(false);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [showSubAdmin, setShowSubAdmin] = React.useState(false);
  const [showMerchant, setShowMerchant] = React.useState(false);
  const [coinSeller, setCoinSeller] = React.useState(false);
  const [agency, setAgency] = React.useState(false);
  const [salary, setSalary] = React.useState(false);
  const [role, setRole] = useState<string>("");
  const [wallet, setWallet] = React.useState<any>();
  const [userid, setUserId] = useState<any>("");
  const [host, setHost] = useState<any>(false);
  const [showBanner, setShowBanner] = React.useState(false);
  const [shop, setShop] = useState<boolean>(false);

  useLayoutEffect(() => {
    const value = localStorage.getItem("role");
    const storedManager = localStorage.getItem("userId")!;
    if (value !== null) {
      setRole(value);
      setUserId(storedManager);
    }
  }, []);

  const fetchCoins = async () => {
    try {
      const res = await axios.get(
        `https://yoyo560live.live/admin/merchent/getById/${userid}`
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

  const isManager = role === "Manager";
  const isCountryAdmin = role === "Country Admin";
  const isMasterAdmin = role === "Master";
  const isAdmin = role === "Admin";
  const isMerchant = role === "Merchant";

  const handleShow = () => {
    if (coinSeller) {
      if (coinSeller) {
        setShowMerchant(false);
        setShowAdmin(false);
        setShowCountryAdmin(false);
        setShowManager(false);
        setShowUsersMenu(false);
        setShowSubAdmin(false);
      } else if (showMerchant) {
        setCoinSeller(false);
        setShowAdmin(false);
        setShowCountryAdmin(false);
        setShowManager(false);
        setShowUsersMenu(false);
        setShowSubAdmin(false);
      }
    }
  };

  return (
    <aside
      id="sidebar"
      className="hidden fixed md:flex Sidebar  h-screen mt-12 w-64  bg-black px-6 pt-8 shadow-sm 2xl:w-80 2xl:pt-10"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex flex-col gap-24 h-full mb-24">
        <nav className="mt-12  pb-56 flex w-full h-[1000px] overflow-y-scroll overflow-x-hidden scrollbar-hide flex-col items-start gap-3">
          <SidebarMenu
            icon={<HouseSimpleIcon />}
            name="HOME"
            variant="default"
            href="/"
            exact
          />
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
              <SidebarMenu
                name="Add Official Users"
                variant="expand"
                href="/users/add-official-users"
              />

              <SidebarMenu
                name="View Users"
                variant="expand"
                href="/users/view-users"
              />

              <SidebarMenu
                name="Top Users"
                variant="expand"
                href="/users/top-users"
              />

              <SidebarMenu
                name="Push Notification"
                variant="expand"
                href="/users/push-notifications"
              />
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
              <SidebarMenu
                name="View Manager"
                variant="expand"
                href="/manager/view-manager"
              />
            </SidebarExpand>
          )}

          {isMasterAdmin && (
            <SidebarMenu
              active={showMerchant}
              onClick={() => setShowMerchant(!showMerchant)}
              icon={<UsersIcon />}
              name="Merchant"
              variant="sub-menu"
            />
          )}

          {isMasterAdmin && (
            <SidebarExpand show={showMerchant}>
              <SidebarMenu
                name="View Merchant"
                variant="expand"
                href="/merchant/view-merchant"
              />
            </SidebarExpand>
          )}
          {isMasterAdmin && (
            <SidebarExpand show={showMerchant}>
              <SidebarMenu
                name="Merchant Recharge History"
                variant="expand"
                href="/merchant/recharge-history"
              />
            </SidebarExpand>
          )}
          {isMasterAdmin && (
            <SidebarMenu
              active={salary}
              onClick={() => setSalary(!salary)}
              icon={<Money />}
              name="Salary Managment"
              variant="sub-menu"
            />
          )}
          {isMasterAdmin && (
            <SidebarExpand show={salary}>
              <SidebarMenu
                name="Indian Payroll"
                variant="expand"
                href="/salary/salary-setup"
              />
            </SidebarExpand>

          )}

          {isMasterAdmin && (
            <SidebarExpand show={salary}>
              <SidebarMenu
                name="Global Payroll"
                variant="expand"
                href="/salary/global-salary-setup"
              />
            </SidebarExpand>

          )}



          {isMasterAdmin && (
            <SidebarMenu
              active={shop}
              onClick={() => setShop(!shop)}
              icon={<UsersIcon />}
              name="Shop"
              variant="sub-menu"
            />
          )}

          {isMasterAdmin && (
            <SidebarExpand show={shop}>
              <SidebarMenu
                name="Add Room Wallpaper"
                variant="expand"
                href="/shop/add-room-wallpaper"
              />
              <SidebarMenu
                name="View Room Wallpaper"
                variant="expand"
                href="/shop/view-room-wallpaper"
              />
              <SidebarMenu
                name="Add Frame"
                variant="expand"
                href="/shop/add-frame"
              />
              <SidebarMenu
                name="View Frame"
                variant="expand"
                href="/shop/view-frame"
              />
              <SidebarMenu
                name="Add Vehicle"
                variant="expand"
                href="/shop/add-vehicle"
              />
              <SidebarMenu
                name="View Vehicle"
                variant="expand"
                href="/shop/view-vehicle"
              />
              <SidebarMenu
                name="Add Chat Bubble"
                variant="expand"
                href="/shop/add-chat-bubble"
              />
              <SidebarMenu
                name="View Chat Bubble"
                variant="expand"
                href="/shop/view-chat-bubble"
              />

            </SidebarExpand>
          )}


          {(isMasterAdmin || isManager) && (
            <SidebarMenu
              active={showCountryAdmin}
              onClick={() => setShowCountryAdmin(!showCountryAdmin)}
              icon={<Superscript />}
              name="Country Admin"
              variant="sub-menu"
            />
          )}

          {(isCountryAdmin || isMasterAdmin || isManager) && (
            <SidebarExpand show={showCountryAdmin}>
              <SidebarMenu
                name="View Country Admin"
                variant="expand"
                href="/country-admin/view-country-admin"
              />
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
              <SidebarMenu
                name="View Admin"
                variant="expand"
                href="/admin/view-admin"
              />
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
              <SidebarMenu
                name="View Sub Admin"
                variant="expand"
                href="/sub-admin/view-subadmin"
              />
            </SidebarExpand>
          )}
          {isAdmin && (
            <SidebarExpand show={showSubAdmin}>
              <SidebarMenu
                name="View Banner"
                variant="expand"
                href="/banner/view-banner"
              />
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
              <SidebarMenu
                name="Seller View"
                variant="expand"
                href="/seller/view-seller"
              />
            </SidebarExpand>
          )}

          {(isCountryAdmin ||
            isMasterAdmin ||
            // isManager ||
            isAdmin ||
            isMerchant) && (
              <SidebarExpand show={coinSeller}>
                <SidebarMenu
                  name="Seller Recharge History"
                  variant="expand"
                  href="/seller/coin-seller-recharge-history"
                />
              </SidebarExpand>
            )}
          {(isCountryAdmin ||
            isMasterAdmin ||
            isManager ||
            isAdmin ||
            isMerchant) && (
              <SidebarExpand show={coinSeller}>
                <SidebarMenu
                  name="My Recharge History"
                  variant="expand"
                  href="/seller/my-recharge-history"
                />
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
            <SidebarMenu
              name="View Agency"
              variant="expand"
              href="/agency/view-agency"
            />
          </SidebarExpand>

          <SidebarExpand show={agency}>
            <SidebarMenu
              name="Add Agency"
              variant="expand"
              href="/agency/add-agency"
            />
          </SidebarExpand>

          <SidebarMenu
            active={host}
            onClick={() => setHost(!host)}
            icon={<HotelSharp />}
            name="Host"
            variant="sub-menu"
          />

          <SidebarExpand show={host}>
            <SidebarMenu
              name="Pending Host"
              variant="expand"
              href="/host/pending-host"
            />
          </SidebarExpand>

          <SidebarExpand show={host}>
            <SidebarMenu
              name="Approved Host"
              variant="expand"
              href="/host/approved-host"
            />
          </SidebarExpand>

          <SidebarExpand show={host}>
            <SidebarMenu
              name="Rejected Host"
              variant="expand"
              href="/host/rejected-host"
            />
          </SidebarExpand>
          {(isMasterAdmin || isManager || isMerchant) && (
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
              <SidebarMenu
                name="View Banner"
                variant="expand"
                href="/banner/view-banner"
              />
            </SidebarExpand>
          )}
        </nav>
        <div className="">
          {role === "Merchant" && (
            <div className="flex gap-2 items-center border ml-4 w-[80px] shadow-md border-netral-50 rounded p-2">
              <AccountBalanceWalletIcon className="text-yellow-500 h-6 w-6" />
              <p className="font-semibold text-white text-nowrap text-[14px]">
                {wallet}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
