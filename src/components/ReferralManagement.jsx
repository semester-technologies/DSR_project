import { useState } from "react";
import Slider from "./Slider";
import GenerateReferralCode from "./GenerateReferralCode";
import ReferralCode from "./ReferralCode";

export default function ReferralManagement() {
  const referralLink = "www.referrallink.com/testname";
  const [copied, setCopied] = useState(false);

  const activity = [
    {
      date: "Feb 12",
      user: "Test Name",
      plan: "New Breed Weekly",
      bonus: "₦5,000",
      status: "Credited",
    },
    {
      date: "Feb 12",
      user: "Test Name",
      plan: "New Breed Weekly",
      bonus: "₦5,000",
      status: "Credited",
    },
    {
      date: "Feb 12",
      user: "Test Name",
      plan: "New Breed Weekly",
      bonus: "₦5,000",
      status: "Credited",
    },
    {
      date: "Feb 12",
      user: "Test Name",
      plan: "New Breed Weekly",
      bonus: "₦5,000",
      status: "Credited",
    },
    {
      date: "Feb 12",
      user: "Test Name",
      plan: "New Breed Weekly",
      bonus: "₦5,000",
      status: "Credited",
    },
  ];

  const data = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: "Test Name",
    plan: "New Breed Weekly",
    bonus: "₦5,000",
    date: "Feb 12",
    status: "Credited",
  }));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 z-20">
          <div className="hidden">
            <GenerateReferralCode />
          </div>
          <div className="hidden">
            <ReferralCode />
          </div>
        </div>
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative  block w-[100%]">
            <div className="flex bg-[#FFFBF6] lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
              </div>
              <div className="flex items-center space-x-6">
                <img src="src/assets/4.png" alt="" />
                <div className="flex hidden lg:flex space-x-4 items-center">
                  <img
                    src="src/assets/Avatars.png"
                    className="w-[40px] h-[40px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span>Rokeeb Abdul</span>
                    <span>email@gmail.com</span>
                  </div>
                </div>
                <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                  <img src="src/assets/menu.png" alt="" />
                </div>
              </div>
            </div>

            <div className="p-8 w-full pt-14 lg:pt-32">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Referral management</h1>

                <button className="bg-[#FF8801] text-white px-5 py-2 rounded-full text-sm font-medium">
                  Generate new referral code
                </button>
              </div>

              <div className="md:grid space-y-4 md:space-y-0 grid-cols-1 grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-xl">
                  <p className="text-sm text-gray-600">Total Referrals</p>
                  <p className="text-3xl font-semibold mt-2">6</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-xl">
                  <p className="text-sm text-gray-600">Total Credited</p>
                  <p className="text-3xl font-semibold mt-2">18,500</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-xl">
                  <p className="text-sm text-gray-600">Total Pending</p>
                  <p className="text-3xl font-semibold mt-2">18,500</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl flex items-center justify-between bg-[#FAFAFA] mb-6">
                <div>
                  <p className="font-medium mb-1">Active Referral Link</p>
                  <p className="text-gray-600 text-sm">{referralLink}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Counts: 5 accounts
                  </p>
                </div>
                <div className="flex items-center mt-4 space-x-3">
                  <button onClick={copyToClipboard} className="">
                    <img src="src/assets/copy.png" alt="" />
                  </button>

                  <button className="">
                    <img src="src/assets/share.png" alt="" />
                  </button>

                  {copied && (
                    <span className="text-xs text-green-600 ml-2">Copied!</span>
                  )}
                </div>
              </div>

              <h2 className="md:font-semibold font-bold mb-3">
                Referral Bonus Activity
              </h2>

              <div className="bg-[#fff] md:block rounded-xl hidden overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FAFAFA] text-black">
                    <tr>
                      <th className="py-6 px-4">Date</th>
                      <th className="py-6 px-4">Referred User</th>
                      <th className="py-6 px-4">Joined Plan</th>
                      <th className="py-6 px-4">Bonus</th>
                      <th className="py-6 px-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {activity.map((row, index) => (
                      <tr key={index} className="last:border-none">
                        <td className="py-6 px-4">{row.date}</td>
                        <td className="py-6 px-4">{row.user}</td>
                        <td className="py-6 px-4">{row.plan}</td>
                        <td className="py-6 px-4">{row.bonus}</td>
                        <td className="py-6 px-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden mt-8 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="w-[100%] md:w-[420px] bg-white shadow-md rounded-xl p-6 border"
                    >
                      <h2 className="text-xl font-semibold">{item.name}</h2>

                      <div className="mt-3 border-t pt-4 grid grid-cols-2 gap-y-6 text-sm">
                        <div className="text-[#444]">Joined Plan</div>
                        <div className="font-medium">{item.plan}</div>

                        <div className="text-[#444]">Bonus</div>
                        <div className="font-medium">{item.bonus}</div>

                        <div className="text-[#444]">Date</div>
                        <div className="font-medium">{item.date}</div>

                        <div className="text-[#444]">Status</div>
                        <div>
                          <span className="px-4 py-1 rounded-full bg-[#E3FBE5] text-[#2BB673] font-medium">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
