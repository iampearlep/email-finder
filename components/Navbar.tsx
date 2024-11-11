"use client";
import React from "react";
import Image from "next/image";
import Profile from "@/public/Profile.svg";
import BellIcon from "@/public/bell-01.svg";
import Input from "./Input";
import { MenuIcon, XIcon } from "lucide-react";
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

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isToggle, setIsToggle] = React.useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="bg-[#ffffff] text-[#737373]  w-full mx-auto border-b">
      <div className="flex flex-row items-center justify-between py-5 px-5 md:px-6">
        <div className="flex md:hidden">
          <div className="px-1.5 py-1.5 rounded-lg border border-gray-300">
            <Image
              src={Logo}
              height={24}
              width={24}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Desktop screens */}
        <div className="hidden w-full md:flex flex-row justify-between items-center gap-x-4">
          <div className="w-5/12">
            <Input />
          </div>
          <div className="relative flex flex-row items-center gap-x-3">
            <div className="">
              <button
                onClick={() => setIsClicked(!isClicked)}
                className="flex px-2 py-2 justify-center items-center"
              >
                <Image
                  src={BellIcon}
                  height={24}
                  width={24}
                  alt=""
                  className=""
                />
              </button>
              {isClicked && (
                <div className="absolute -ml-20 bg-white shadow-lg text-sm py-4 px-4 mt-3 rounded-md">
                  <p>You have no notifications yet...</p>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="flex flex-row px-2 py-2 justify-between items-center rounded-full border border-[#eaeaea] gap-x-2"
              >
                <Image
                  src={Profile}
                  height={113}
                  width={32}
                  alt=""
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile screens */}
        <div className="md:hidden flex flex-row">
          <div className="flex flex-row items-center gap-x-4">
            <button onClick={handleToggle}>
              {isToggle ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6 " />
              )}
            </button>
          </div>
          {isToggle && (
            <div className="fixed top-0 right-0 h-full w-2/12 bg-white dark:bg-[#111827] z-10 flex flex-col justify-start items-start ">
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <XIcon className="w-5 h-5" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className="px-2 py-6 flex flex-col justify-center gap-y-5 items-center text-center">
                  <Image
                    src={HomeIcon}
                    height={20}
                    width={20}
                    alt=""
                    className=""
                  />
                  <Image
                    src={MailIcon}
                    height={20}
                    width={20}
                    alt=""
                    className=""
                  />
                  <Image
                    src={MailIcon2}
                    height={20}
                    width={20}
                    alt=""
                    className=""
                  />
                </div>
                <div className="px-2 py-2 flex flex-col justify-center gap-y-5 items-center text-center">
                  <div className="flex flex-col gap-y-5 items-center justify-center">
                    <div className="">
                      <Image
                        src={ContactIcon}
                        height={20}
                        width={20}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="">
                      <Image
                        src={InboxIcon}
                        height={18}
                        width={18}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="">
                      <Image
                        src={Icon2}
                        height={18}
                        width={18}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="">
                      <Image
                        src={MailIcon}
                        height={20}
                        width={20}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="">
                      <Image
                        src={Icon1}
                        height={20}
                        width={20}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="">
                      <Image
                        src={Icon4}
                        height={18}
                        width={18}
                        alt=""
                        className=""
                      />
                    </div>
                    <div>
                      <Image
                        src={Icon6}
                        height={18}
                        width={18}
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex flex-col gap-y-5">
                      <Image
                        src={Icon5}
                        height={20}
                        width={20}
                        alt=""
                        className=""
                      />
                      <Image
                        src={Icon3}
                        height={20}
                        width={20}
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
