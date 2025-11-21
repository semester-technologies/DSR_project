import { useState } from "react";
import { Link } from "react-router-dom";

function AccountCreation() {
  const [selected, setSelected] = useState("single"); // default selected

  return (
    <>
      <div className="relative">
        <div className="w-full px-4 flex items-center justify-center h-screen bg-[#0A064033] bg-opacity-20">
          <div className="bg-white relative p-6 rounded-lg shadow-lg">
            <i className="fa fa-times absolute right-8 top-8 cursor-pointer"></i>

            <h1 className="p-2 border-b-2">Choose An Account Type</h1>

            <div>
              <p className="p-4 px-0">
                Select the account creation method that fits your needs
              </p>

              {/* Options */}
              <div className="flex flex-col space-y-4">
                {/* OPTION 1 — Single Account */}
                <div
                  onClick={() => setSelected("single")}
                  className={`p-3 flex items-center space-x-4 rounded-lg cursor-pointer border
                    ${
                      selected === "single"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  {/* Circle */}
                  <div
                    className={`w-[10px] h-[10px] rounded-full
                      ${selected === "single" ? "bg-orange-500" : "bg-gray-300"}
                    `}
                  ></div>

                  <div>
                    <span className="font-bold">Create a single account</span>
                    <p className="text-sm">Create one account only</p>
                  </div>
                </div>

                {/* OPTION 2 — Multiple Accounts */}
                <div
                  onClick={() => setSelected("multiple")}
                  className={`p-3 flex items-center space-x-4 rounded-lg cursor-pointer border
                    ${
                      selected === "multiple"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  {/* Circle */}
                  <div
                    className={`w-[10px] h-[10px] rounded-full
                      ${
                        selected === "multiple"
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }
                    `}
                  ></div>

                  <div>
                    <span className="font-bold">Create multiple accounts</span>
                    <p className="text-sm">
                      Create more than one account at a time
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end mt-8 space-x-4">
                <Link
                  to="/"
                  className="bg-[#FFE8CE] rounded-full p-2 px-8 cursor-pointer"
                >
                  Back
                </Link>

                <Link
                  to="/next"
                  className="bg-[#FF8801] text-white rounded-full p-2 px-8 cursor-pointer"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountCreation;
