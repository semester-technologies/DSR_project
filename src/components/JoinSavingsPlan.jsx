import { Link } from "react-router-dom";
import { useState } from "react";

function JoinSavingsPlan() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="relative">
        <div className="w-[100%] flex px-4 items-center justify-center overflow-y-hidden h-[880px] md:h-[100vh] bg-[#0A064033] bg-opacity-20%">
          <div className="bg-[#fff] relative -top-28 md:top-0 p-6 rounded-lg overflow-y-scroll h-[650px] md:h-[90vh]">
            <i className="fa fa-times absolute right-8 top-8"></i>
            <h1 className="p-2 border-b-2 font-bold pl-0">Join Savings Plan</h1>
            <div>
              <p className="p-4 px-0">De Rain Classic Weekly Savings</p>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="p-3 bg-[#FAFAFA] flex items-center space-x-4 rounded-lg"
                >
                  <div className="flex w-full items-start justify-between">
                    <div>
                      <p>Duration</p>
                      <p>Weekly Contribution</p>
                      <p>Target Savings</p>
                      <p>Target Withdrawal</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">50 Weeks</p>
                      <p>1,400</p>
                      <p>70,000</p>
                      <p>140,000</p>
                    </div>
                  </div>
                </Link>
                <div className="relative">
                  <div className="flex p-4 flex-col md:flex-row rounded-xl bg-[#1967D266] bg-opacity-40 items-start space-x-4">
                    <img src="src/assets/Frammm.png" alt="" />
                    <div className="mt-4 md:mt-0">
                      <h1 className="font-bold text-[#1967D2]">
                        Important Terms
                      </h1>
                      <ul className="list-inside text-[#1967D2]">
                        <li type="disc">
                          Weekly contributions are automatically deducted
                        </li>
                        <li type="disc">
                          Missed payments may affect your withdrawal amount
                        </li>
                        <li type="disc">
                          You must refer at least 2 new members to qualify for
                          full payment
                        </li>
                        <li type="disc">
                          Early withdrawal may incur additional fees
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h1 className="text-xl">Payment method</h1>
                <div className="w-full">
                  <select className="w-full p-3 focus:outline-none bg-[#FAFAFA]">
                    <option>Wallet</option>
                  </select>
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="space-y-2">
                    <p>Auto Debit Wallet</p>
                    <p className="text-sm">
                      Your due payments will be automatically debited from
                      wallet
                    </p>
                  </div>
                  <div className="relative">
                    <div className="flex items-center space-x-3">
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
                </div>

                <div className="float-right pb-10 mt-8 md:space-x-4 space-x-3  text-center md:text-left md:block">
                  <Link to="" className="bg-[#FFE8CE] rounded-full p-2 px-8">
                    <span>Back</span>
                  </Link>
                  <Link
                    to=""
                    className="bg-[#FF8801] text-white rounded-full p-2 px-6"
                  >
                    <span>Confirm & Join</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JoinSavingsPlan;
