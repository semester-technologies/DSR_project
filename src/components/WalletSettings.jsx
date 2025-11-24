import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useMemo, useState } from "react";

import WalletIcon from "./../assets/Wallet.png";
import AnchorIcon from "./../assets/anchor.png";
import AvatarIcon from "./../assets/Avatars.png";
import ClockIcon from "./../assets/clock.png";
import FrameIcon from "./../assets/Frameeee.png";
import DownloadIcon from "./../assets/download.png";
import ArrowRight from "./../assets/arrow-right.png";
import ArrowDown from "./../assets/arrow-down.png";
import GiftIcon from "./../assets/gift_.png";
import DotIcon from "./../assets/dot.png";
import Logo4 from "./../assets/4.png";
import star from "./../assets/star.png";
import bank from "./../assets/bank.png";
import del from "./../assets/delete.png";
import fa from "./../assets/logoo.png";
import da from "./../assets/menu.png";
import TransactionDetails from "./TransactionDetails";
import AddBankAccount from "./AddBankAccount";

function WalletSettings() {
  const Amount = ["5000", "18000", "2000", "3,500", "3,500"];
  const status = ["Success", "Delivered", "Completed", "Declined"];

  const [isOnn, setIsOnn] = useState(false);

  const toggleSwitch = () => {
    setIsOnn(!isOnn);
  };

  // const [isOn, setIsOn] = useState(false);
  // const [isOnTwo, setIsOnTwo] = useState(false);
  // const [isOnThree, setIsOnThree] = useState(false);

  // const toggleSwitchOne = () => {
  //   setIsOn(!isOn);
  // };
  // const toggleSwitchTwo = () => {
  //   setIsOnTwo(!isOnTwo);
  // };
  // const toggleSwitchThree = () => {
  //   setIsOnThree(!isOnThree);
  // };

  // const [switches, setSwitches] = useState({
  //   one: false,
  //   two: false,
  //   three: false,
  // });

  // const toggleSwitch = (key) => {
  //   setSwitches((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  const statusStyles = {
    Success: "bg-green-100 text-green-700",
    Delivered: "bg-blue-100 text-blue-700",
    Completed: "bg-purple-100 text-purple-700",
    Declined: "bg-red-100 text-red-700",
  };

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const rows = useMemo(
    () => [
      {
        type: "Savings",
        desc: "Weekly Savings Contribution",
        amount: Amount[0],
        stat: status[0],
      },
      {
        type: "Order",
        desc: "Foodstuff Order #1023",
        amount: Amount[1],
        stat: status[1],
      },
      {
        type: "Reward",
        desc: "Reward Redeemed",
        amount: Amount[2],
        stat: status[2],
      },
      {
        type: "Wallet",
        desc: "Wallet Top-Up",
        amount: Amount[3],
        stat: status[0],
      },
      {
        type: "Wallet",
        desc: "Wallet Top-Up",
        amount: Amount[3],
        stat: status[0],
      },
    ],
    []
  );

  return (
    <>
      <div className="relative">
        <div className="absolute hidde">
          <AddBankAccount />
        </div>
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%] pb-42">
            <div className="flex shadow-sm items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src={fa} alt="" />
              </div>
              <div className="flex items-center space-x-6">
                <img src={Logo4} alt="Notification bell" />
                <div className="flex hidden lg:flex space-x-4 items-center">
                  <img
                    src={AvatarIcon}
                    className="w-[40px] h-[40px] rounded-full"
                    alt="Rokeeb Abdul"
                  />
                  <div className="flex flex-col">
                    <span>Rokeeb Abdul</span>
                    <span>email@gmail.com</span>
                  </div>
                </div>
                <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                  <img src={da} alt="" />
                </div>
              </div>
            </div>

            <div className="p-6 pt-14 xl:pl-8">
              <div className="flex items-start flex-row justify-between space-y-2">
                <div className="flex items-start flex-col">
                  <h1 className="text-2xl font-bold">Wallet</h1>
                </div>
              </div>

              <div className="flex items-center justify-between mt-14 space-x-4">
                <div className="relative space-y-8 w-full shadow-md p-4 pb-2 rounded-lg">
                  <p className="text-xl">Total Balance</p>
                  <p className="font-bold text-2xl">#155,500</p>
                  <div className="absolute top-4 right-4">
                    <img
                      src={WalletIcon}
                      alt="Wallet icon"
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row mb-5 space-y-3 md:space-y-0 md:items-center space-x-5">
                    <Link
                      to="/"
                      className="p-2 bg-[#FF8801] w-full text-center text-[#fff] rounded-full flex items-center justify-center gap-2"
                    >
                      <i className="fa fa-plus"></i>
                      <span>Add Money</span>
                    </Link>
                    <Link
                      to="/"
                      className="w-full bg-[#FFE8CE] flex items-center justify-center p-2 text-center text-[#000] rounded-full gap-2"
                    >
                      <img
                        src={AnchorIcon}
                        alt="Withdraw"
                        className="w-5 h-5"
                      />
                      <span>Withdraw Money</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg bg-[#FF880133] hidden bg-opacity-20 p-6 mt-12">
                <div className="flex space-x-4">
                  <img
                    src={ClockIcon}
                    className="w-[35px] h-[35px]"
                    alt="Clock"
                  />
                  <div className="w-full">
                    <div>
                      <h1 className="text-2xl font-bold">Upcoming Payment</h1>
                      <p>New Breed Weekly Savings</p>
                    </div>
                    <div className="bg-[#fff] p-2 px-3 w-full p-2 mt-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Amount Due</p>
                          <p className="text-sm text-gray-600">Due In</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">#3,500</p>
                          <p className="text-sm text-gray-600">3 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-2 bg-[#04A9491A] text-[#04A949] m-4 rounded-full px-6">
                  Active
                </div>
              </div>

              <div className="flex flex-col md:flex-row pt-12 md:space-x-8 space-y-2 md:space-y-0 space-x-4 md:items-center justify-between">
                <div className="flex shadow-md p-6 flex-col w-full rounded-xl items-start space-x-6">
                  <div className="w-full flex items-center space-x-2 space-y-2">
                    <img src={FrameIcon} alt="Wallet" className="w-6 h-6" />
                    <p className="relative -top-1 whitespace-nowrap">
                      Main Wallet
                    </p>
                  </div>
                  <p className="font-bold">#125,000</p>
                </div>

                <div className="flex shadow-md p-6 flex-col w-full rounded-xl items-start space-x-6">
                  <div className="w-full flex items-center space-x-2 space-y-2">
                    <img src={FrameIcon} alt="Bonus" className="w-6 h-6" />
                    <p className="relative -top-1 whitespace-nowrap">
                      Bonus Wallet
                    </p>
                  </div>
                  <p className="font-bold">#18,500</p>
                </div>
              </div>

              <div className="relative top-24">
                <div className="flex md:items-center space-y-2 md:space-y-0 flex-col md:flex-row space-x-4">
                  <Link
                    to=""
                    className="p-2 whitespace-nowrap md:whitespace-wrap bg-[#1B156C1A] px-24 text-black rounded-lg text-[#fff] w-full md:w-auto"
                  >
                    Transaction History
                  </Link>
                  <Link
                    to=""
                    className="p-2 bg-[#1B156C] text-white whitespace-nowrap md:whitespace-wrap hover:bg-[#1B156C] hover:text-[#fff] px-24 bg-opacity-10 rounded-lg transition"
                  >
                    Wallet Settings
                  </Link>
                </div>

                <div className="hidden">
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="bg-[#F0F0F0] w-full p-2 space-x-4 flex items-center rounded-lg">
                      <i className="fa fa-search"></i>
                      <input
                        type="search"
                        placeholder="Search transactions..."
                        className="w-full focus:outline-none bg-transparent"
                      />
                    </div>
                    <div className="bg-[#F0F0F0] w-[200px] flex items-center justify-between p-2 rounded-lg">
                      <select className="w-full bg-transparent focus:outline-none">
                        <option>All Wallet</option>
                      </select>
                    </div>
                    <div className="bg-[#F0F0F0] flex items-center justify-between w-[200px] p-2 rounded-lg">
                      <select className="w-full bg-transparent focus:outline-none">
                        <option>All Types</option>
                      </select>
                    </div>

                    <div className="bg-[#F0F0F0] p-2 rounded-lg">
                      <input
                        type="date"
                        className="focus:outline-none bg-transparent"
                      />
                    </div>
                    <div className="rounded-lg">
                      <Link
                        to=""
                        className="p-2 flex items-center px-8 pr-10 pl-5 rounded-lg space-x-3 bg-[#F0F0F0]"
                      >
                        <span className="text-[#FF8801]">Download</span>
                        <img
                          src={DownloadIcon}
                          className="w-4 h-4"
                          alt="Download"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="relative mt-10 space-y-8">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Link
                        key={i}
                        to=""
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={
                            i % 2 === 0
                              ? ArrowRight
                              : i === 2
                              ? GiftIcon
                              : ArrowDown
                          }
                          alt={
                            i % 2 === 0
                              ? "Top-up"
                              : i === 2
                              ? "Gift"
                              : "Withdrawal"
                          }
                          className="w-6 h-6"
                        />
                        <div className="flex flex-col w-full">
                          <h1 className="text-xl font-bold mb-4">
                            {i === 0 || i === 4
                              ? "Wallet Top-up"
                              : i === 1 || i === 3
                              ? "Bank Withdrawal"
                              : "Incentive Credit"}
                          </h1>
                          <div className="flex items-center space-x-4">
                            <span>Feb 20, 2025 2:30 PM</span>
                            <img src={DotIcon} alt="" className="w-1 h-1" />
                            <span>Card Payment</span>
                          </div>
                        </div>
                        <div className="space-y-5 text-right">
                          <h1 className="text-xl font-bold">+#50,000</h1>
                          <Link
                            to="/"
                            className="p-2 text-center bg-[#04A9491A] text-[#04A949] px-4 rounded-full text-sm"
                          >
                            Success
                          </Link>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex top-12 pb-8 items-center relative top-12 justify-between">
                    <div>
                      <p>Showing 1-8 from 100</p>
                    </div>
                    <div className="space-x-2">
                      <Link
                        to=""
                        className="fa fa-angle-left p-3 pr-5 rounded-lg border-[#FF8801] border"
                      ></Link>
                      <Link
                        to=""
                        className="bg-[#FF8801] p-3 rounded-lg text-white"
                      >
                        1
                      </Link>
                      <Link to="" className="p-3">
                        2
                      </Link>
                      <Link to="" className="p-3">
                        3
                      </Link>
                      <Link to="" className="p-3">
                        4
                      </Link>
                      <Link to="" className="p-3">
                        5
                      </Link>
                      <Link to="" className="p-3">
                        ...
                      </Link>
                      <Link
                        to=""
                        className="fa fa-angle-right p-3 pr-5 flex items-center justify-center border border-[#FF8801] rounded-lg"
                      ></Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="relative top-12 bg-[#FAFAFA] p-6 pb-24 pt-5 rounded-xl">
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center">
                      <div className="space-y-2">
                        <h1 className="md:text-xl text-center md:text-left font-bold">
                          Linked Bank Accounts
                        </h1>
                        <p className="text-center md:text-left">
                          Manage your withdrawal destination accounts
                        </p>
                      </div>
                      <div>
                        <Link
                          to=""
                          className="bg-[#FF8801] text-[#fff] p-3 px-10 rounded-full"
                        >
                          Add Bank
                        </Link>
                      </div>
                    </div>
                    <div className="relative top-12 space-y-6">
                      <div className="flex items-center justify-between bg-[#fff] p-3 space-x-4">
                        <div className="flex flex-col md:flex-row items-start md:items-center space-x-4">
                          <img
                            src={bank}
                            className="rounded-lg h-[35px] md:h-auto"
                            alt=""
                          />
                          <div>
                            <div className="flex items-center space-x-5">
                              <h1 className="md:text-xl font-bold">
                                Ahmed Bello
                              </h1>
                              <div className="flex items-center p-1 px-3 rounded-full text-xs space-x-2 bg-[#04A9491A] bg-opacity-10 text-[#04A949]">
                                <img src={star} alt="" />
                                <span>Default</span>
                              </div>
                            </div>
                            <p className="flex items-center space-x-2">
                              <span>First Bank</span>
                              <div className="w-[5px] h-[5px] bg-[#000] rounded-full"></div>
                              <span>3095195213</span>
                            </p>
                          </div>
                        </div>
                        <div className="p-2 shadow-inner bg-white flex items-center justify-center">
                          <img src={del} alt="" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center justify-between bg-[#fff] p-3 space-x-4">
                        <div className="flex flex-col md:flex-row md:items-center items-start space-x-4">
                          <img
                            src={bank}
                            className="rounded-lg h-[35px] md:h-auto"
                            alt=""
                          />
                          <div>
                            <div className="flex items-center space-x-5">
                              <h1 className="md:text-xl font-bold">
                                Ahmed Bello
                              </h1>
                              <div className="flex items-center p-1 px-3 rounded-full text-xs space-x-2 bg-[#04A9491A] bg-opacity-10 text-[#04A949]">
                                <img src={star} alt="" />
                                <span>Default</span>
                              </div>
                            </div>
                            <p className="flex items-center space-x-2">
                              <span>First Bank</span>
                              <div className="w-[5px] h-[5px] bg-[#000] rounded-full"></div>
                              <span>3095195213</span>
                            </p>
                          </div>
                        </div>
                        <div className="p-2 space-x-6 block flex items-center">
                          <p className="p-1.5 border-1 border-[#E1E1E1] px-6 rounded-full">
                            Set As Default
                          </p>
                          <img src={del} className="" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-5 top-12 rounded-xl bg-[#FAFAFA]">
                    <h1 className="text-xl font-bold">
                      Auto-Debit Preferences
                    </h1>
                    <div className="bg-[#fff] mt-4">
                      <div className="flex items-center px-4 justify-between">
                        <div className="bg-[#fff] mt-4 space-y-2">
                          <p className="text-xl">
                            Enable Auto-Debit For Savings Plan
                          </p>
                          <p>
                            Automatically deduct contributions from your wallet
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOnn ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                            onClick={toggleSwitch}
                          >
                            <div
                              className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOnn ? "translate-x-6" : "translate-x-0"}
          `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-5 top-12 rounded-xl bg-[#FAFAFA]">
                    <h1 className="text-xl font-bold">Security Settings</h1>
                    <div className="bg-[#fff] mt-4">
                      <div className="flex items-center px-4 justify-between">
                        <div className="bg-[#fff] mt-4 space-y-2">
                          <p className="text-xl">Enable Withdrawal Pin/OTP</p>
                          <p>Add extra security layer for withdrawals</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOnn ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                            onClick={toggleSwitch}
                          >
                            <div
                              className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOnn ? "translate-x-6" : "translate-x-0"}
          `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-5 top-12 rounded-xl bg-[#FAFAFA]">
                    <h1 className="text-xl font-bold">
                      Notifications & Alerts
                    </h1>
                    <div className="bg-[#fff] mt-4">
                      <div className="flex items-center px-4 justify-between">
                        <div className="bg-[#fff] mt-4 space-y-2">
                          <p className="text-xl">Enable Withdrawal Pin/OTP</p>
                          <p>
                            Get notified when wallet balance is below #1,000
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOnn ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                            onClick={toggleSwitch}
                          >
                            <div
                              className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOnn ? "translate-x-6" : "translate-x-0"}
          `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default WalletSettings;
