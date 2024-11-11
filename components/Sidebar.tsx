"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/LOGO (2).svg";
import TabIcon from "@/public/tabIcon.svg";
import HomeIcon from "@/public/home-02.svg";
import MailIcon from "@/public/mail-03.svg";
import ContactIcon from "@/public/user-square.svg";
import InboxIcon from "@/public/Icon (1).svg";
import MailIcon2 from "@/public/message-plus-square.svg";
import ArrowDown from "@/public/chevron-down.svg";
import Icon1 from "@/public/message-check-square.svg";
import Icon2 from "@/public/message-notification-square.svg";
import Icon3 from "@/public/message-question-square.svg";
import Icon4 from "@/public/phone-plus.svg";
import Icon5 from "@/public/settings-02.svg";
import Icon6 from "@/public/Icon.svg";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div
        className={`bg-white fixed top-0 left-0 h-screen border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
      >
        <div className="py-6 flex flex-col items-center gap-y-5">
          <div
            className={`flex items-center  place-self-start w-full px-3 ${
              isCollapsed
                ? "justify-center flex-col"
                : "flex-row justify-between"
            }`}
          >
            <div className="flex flex-row items-center gap-x-2">
              {isCollapsed && (
                <div
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="px-1.5 py-1.5 rounded-lg border border-gray-300"
                >
                  <Image
                    src={Logo}
                    height={24}
                    width={24}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              )}
              {!isCollapsed && (
                <div className="px-1.5 py-1.5 rounded-lg border border-gray-300">
                  <Image
                    src={Logo}
                    height={24}
                    width={24}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              )}
              {!isCollapsed && (
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <p className="text-base font-semibold">Charlie's Workspace</p>
                  <Image
                    src={ArrowDown}
                    height={14}
                    width={14}
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>
            {!isCollapsed && (
              <div className="" onClick={() => setIsCollapsed(!isCollapsed)}>
                <Image
                  src={TabIcon}
                  height={14}
                  width={14}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3">
            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image
                src={HomeIcon}
                height={20}
                width={20}
                alt=""
                className=" "
              />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Overview
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full w-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Overview
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image
                src={MailIcon}
                height={20}
                width={20}
                alt=""
                className=" "
              />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Mailboxes
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Mailboxes
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image
                src={ContactIcon}
                height={20}
                width={20}
                alt=""
                className=" "
              />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">Contact</p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Contact
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image
                src={InboxIcon}
                height={18}
                width={18}
                alt=""
                className=" "
              />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Unified inbox
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Unified inbox
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3">
            {!isCollapsed && (
              <div>
                <p className="uppercase text-xs px-4 text-gray-500">Tools</p>
              </div>
            )}

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon2} height={18} width={18} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Email warmer
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Email warmer
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 bg-red-50 rounded-lg transition-all ease-linear">
              <Image
                src={MailIcon2}
                height={20}
                width={20}
                alt=""
                className=" "
              />
              {!isCollapsed && (
                <p className="text-red-500 text-base font-semibold">
                  Email finder
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-red-500 text-sm bg-red-50 px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Email finder
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon1} height={20} width={20} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Email validator
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Email validator
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon4} height={18} width={18} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Phone finder
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Phone finder
                </span>
              )}
            </div>
            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon6} height={18} width={18} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Sequencer
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Sequencer
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3">
            {!isCollapsed && (
              <div>
                <p className="uppercase text-xs px-4 text-gray-500">Support</p>
              </div>
            )}

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon5} height={20} width={20} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Settings
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Settings
                </span>
              )}
            </div>

            <div className="group relative flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear">
              <Image src={Icon3} height={20} width={20} alt="" className=" " />
              {!isCollapsed && (
                <p className="text-gray-600 text-base font-semibold">
                  Help center
                </p>
              )}
              {isCollapsed && (
                <span className="absolute left-full ml-2 text-gray-600 text-sm bg-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Help center
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
      />
    </>
  );
};

export default Sidebar;
