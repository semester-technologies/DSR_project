import { useState } from "react";
import { Link } from "react-router-dom";

function AccountType() {
  const [selected, setSelected] = useState("new");

  return (
    <>
      <div className="relative">
        <div className="w-full flex items-center justify-center h-screen bg-[#0A064033] px-4 md:px-0 bg-opacity-20">
          <div className="bg-white relative p-6 rounded-lg shadow-lg">
            <i className="fa fa-times absolute right-8 top-8 z-20 cursor-pointer"></i>

            <h1 className="p-2 border-b-2">Choose An Account Type</h1>

            <div>
              <p className="p-4 px-0">
                Select the account creation method that fits your needs
              </p>

              <div className="flex flex-col space-y-4">
                <div
                  onClick={() => setSelected("new")}
                  className={`p-3 flex items-center space-x-4 rounded-lg cursor-pointer border
                    ${
                      selected === "new"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`
                      w-[10px] h-[10px] rounded-full
                      ${selected === "new" ? "bg-orange-500" : "bg-gray-300"}
                    `}
                  ></div>

                  <span>Create a new account</span>
                </div>

                <div
                  onClick={() => setSelected("downline")}
                  className={`p-3 flex items-center space-x-4 rounded-lg cursor-pointer border
                    ${
                      selected === "downline"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`
                      w-[10px] h-[10px] rounded-full
                      ${
                        selected === "downline"
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }
                    `}
                  ></div>

                  <span>Create downline</span>
                </div>
              </div>

              <div className="flex justify-end mt-14 space-x-4">
                <Link
                  to="/"
                  className="bg-[#FFE8CE] rounded-full p-2 px-8 cursor-pointer"
                >
                  Cancel
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

export default AccountType;
