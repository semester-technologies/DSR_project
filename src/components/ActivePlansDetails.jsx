import { useState } from "react";
import { Link } from "react-router-dom";

function ActivePlansDetails() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const status = "success";

  const prod = [
    {
      id: 1,
      amount: 5000,
      status: "{item.status}",
      type: "{item.type}",
      description: "{item.description}",
      date: "{item.date}",
    },
    {
      id: 2,
      amount: 5000,
      status: "Success",
      type: "Savings",
      description: "Weekly Savings Contribution",
      date: "Feb 12",
    },
    {
      id: 3,
      amount: 5000,
      status: "Success",
      type: "Savings",
      description: "Weekly Savings Contribution",
      date: "Feb 12",
    },
    {
      id: 4,
      amount: 5000,
      status: "Success",
      type: "Savings",
      description: "Weekly Savings Contribution",
      date: "Feb 12",
    },
    {
      id: 5,
      amount: 5000,
      status: "Success",
      type: "Savings",
      description: "Weekly Savings Contribution",
      date: "Feb 12",
    },
    {
      id: 6,
      amount: 5000,
      status: "Success",
      type: "Savings",
      description: "Weekly Savings Contribution",
      date: "Feb 12",
    },
  ];

  const items = Array.from({ length: 6 }, () => prod);

  return (
    <>
      <div className="relative">
        <div className="lg:w-[100%] md:h-[100vh] bg-[#0A064033] relative">
          <div className="lg:w-[800px] overflow-y-scroll h-[100vh] p-4 bg-[#fff] float-right">
            <div className="lg:flex flex-col pb-5 lg:pb-0 lg:flex-row items-center space-x-4 border-b-1">
              <img src="src/assets/Framee.png" alt="" />
              <span>Active Plans Details</span>
            </div>
            <div className="mt-6">
              <div className="flex rounded-lg bg-[#9747FF1A] p-4 w-[100%] border-1 border-[#9747FF66] items-center space-x-4">
                <img src="src/assets/gift.png" alt="" />
                <div className="text-[] ">
                  <p className="text-[#9747FF]">Incentive Update</p>
                  <p className="text-[#9747FF]">
                    You have been cleared for incentives, <b>Click here</b> to
                    check it.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-xl">
                De Rain Classic Weekly Savings
              </h1>
              <div className="flex mt-4 items-center space-x-6">
                <p className="text-[#04A949] text-sm lg:text-md lg:p-2 p-1 px-3 rounded-full bg-[#04A9491A]">
                  Active
                </p>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-[#FF8801]">
                    {isOn ? "Auto-Debit" : "Auto-Debit"}
                  </span>

                  <div
                    className={`
          relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
          ${isOn ? "bg-[#FF8801] shadow-lg" : "bg-gray-300"}
        `}
                    onClick={toggleSwitch}
                  >
                    <div
                      className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
            transform transition-all duration-300 ease-in-out
            ${isOn ? "translate-x-6" : "translate-x-0"}
          `}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 px-4 bg-[#E1E1E1] flex items-center justify-between mt-8 shadow-md">
                <div>
                  <p>Referral Link</p>
                  <p>www.referrallink.com/testname</p>
                </div>
                <div className="flex items-center space-x-1">
                  <img src="src/assets/copy.png" alt="" />
                  <img src="src/assets/share.png" alt="" />
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row items-start bg-[#FF88010D] p-6 mt-8 space-x-5">
                  <img src="src/assets/clock.png" alt="" />
                  <div className="w-full">
                    <div className="flex flex-col lg:flex-row space-y-3 lg:items-center w-full justify-between w-full">
                      <div>
                        <h1>Upcoming Payment</h1>
                        <p>New Breed Weekly Savings</p>
                      </div>
                      <div>
                        <p className="bg-[#04A9491A] lg:p-2 p-1 whitespace-nowrap px-3 inline-block lg:block rounded-full text-[#04A949]">
                          Auto-Debit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#fff] p-2 px-4 mt-6">
                      <div>
                        <p className="block">Amount Due</p>
                        <p className="block">Due In</p>
                      </div>
                      <div>
                        <p>#3,500</p>
                        <p>3 days</p>
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="p-2 hidden mt-8 w-full bg-[#FF8801] text-[#fff] text-center border-2 lg:block rounded-full"
                    >
                      <button>Pay Now</button>
                    </Link>
                  </div>
                </div>
                <div className="mt-12">
                  <h1 className="font-bold text-2xl">Contribution Progress</h1>
                  <div className="bg-[#FAFAFA] mb-12 p-6 py-2 mt-5">
                    <div className="relative">
                      <div className="flex mt-4 items-center justify-between">
                        <p>#14,000 of #42,000</p>
                        <p>33%</p>
                      </div>
                      <div className="bg-[#E6E6E6] rounded-full w-full mt-4">
                        <div className="p-2 w-[250px] rounded-full bg-[#1B156C]"></div>
                      </div>
                    </div>
                    <div className="flex lg:bg-[#fff] lg:space-x-0 space-x-4 mt-6 mb-6 items-center lg:px-8 py-12 justify-between">
                      <div className="w-full text-sm lg:text-md bg-[#fff] p-4">
                        <p>Weekly Amount</p>
                        <p className="font-bold text-xl">#3,500</p>
                      </div>
                      <div className="w-full bg-[#fff] text-sm whitespace-nowrap lg:text-md p-4">
                        <p>Weeks Completed</p>
                        <p className="font-bold text-xl">8 of 12</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="space-y-4 p-3 bg-[#1967D20D] rounded-lg bg-opacity-5% w-full">
                        <p className="flex items-center space-x-3">
                          <img
                            src="src/assets/12.png"
                            className="w-[30px] h-[30px] lg:w-[auto] lg:h-[auto]"
                            alt=""
                          />
                          <span>Next Due Date</span>
                        </p>
                        <p className="font-bold lg:text-xl">Feb 20, 2025</p>
                      </div>
                      <div className="space-y-4 p-3 py-5 rounded-lg bg-[#1967D20D] bg-opacity-5% w-full">
                        <p className="flex items-center space-x-3">
                          <img src="src/assets/17.png" alt="" />
                          <span>Progress</span>
                        </p>
                        <p className="font-bold lg:text-xl">
                          8 weeks of 12 weeks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl">Payment History</h1>
                  <table className="w-[100%] mt-6 hidden md:block">
                    <tbody className="w-[100%]">
                      <tr className="w-[100%]">
                        <td className="font-bold bg-[#FAFAFA] p-4 w-[100%]">
                          Date
                        </td>
                        <td className="font-bold bg-[#FAFAFA] p-4 w-[100%]">
                          Method
                        </td>
                        <td className="font-bold bg-[#FAFAFA] p-4 w-[100%]">
                          Amount
                        </td>
                        <td className="font-bold bg-[#FAFAFA] p-4 w-[100%]">
                          Status
                        </td>
                      </tr>
                      <tr className="w-[100%]">
                        <td className="p-4">Feb 13, 2025</td>
                        <td className="p-4">Wallet</td>
                        <td className="p-4">#3,500</td>
                        <td className="p-4 rounded-full">
                          <span className="bg-[#04A9491A] p-2 rounded-full px-4 text-[#04A949]">
                            {status}
                          </span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-4">Feb 13, 2025</td>
                        <td className="p-4">Wallet</td>
                        <td className="p-4">#3,500</td>
                        <td className="p-4">
                          <span className="bg-[#04A9491A] p-2 rounded-full px-4 text-[#04A949]">
                            {status}
                          </span>
                        </td>
                      </tr>

                      <tr className="">
                        <td className="p-4">Feb 13, 2025</td>
                        <td className="p-4">Wallet</td>
                        <td className="p-4">#3,500</td>
                        <td className="p-4">
                          <span className="bg-[#04A9491A] p-2 rounded-full px-4 text-[#04A949]">
                            {status}
                          </span>
                        </td>
                      </tr>

                      <tr className="">
                        <td className="p-4">Feb 13, 2025</td>
                        <td className="p-4">Wallet</td>
                        <td className="p-4">#3,500</td>
                        <td className="p-4">
                          <span className="bg-[#04A9491A] p-2 rounded-full px-4 text-[#04A949]">
                            {status}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-5 md:hidden">
                    <div className="space-y-6">
                      {prod.map((item) => (
                        <div
                          key={item.id}
                          className="w-full max-w-md mx-auto p-5 bg-white rounded-xl shadow border"
                        >
                          {/* Amount + Status */}
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold">
                              ₦{item.amount}
                            </h2>
                            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                              Success
                            </span>
                          </div>

                          <hr />

                          {/* Details */}
                          <div className="grid grid-cols-2 gap-y-6 mt-4 text-sm">
                            <p className="text-gray-600">Type</p>
                            <p className="text-right font-medium">Savings</p>

                            <p className="text-gray-600">Description</p>
                            <p className="text-right font-medium">
                              Weekly Savings Contribution
                            </p>

                            <p className="text-gray-600">Date</p>
                            <p className="text-right font-medium">Feb 12</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ActivePlansDetails;
