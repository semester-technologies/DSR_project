import { Link } from "react-router-dom";
import { useState } from "react";

// function RewardDetails() {
//   return (
//     <>
//       <div className="relative">
//         <div className="bg-[#0A064033] py-12 flex items-center justify-center w-[100%] h-[100vh] bg-opacity-20">
//           <div className="bg-[#fff] w-[600px] h-[100vh] overflow-y-scroll p-6 rounded-xl">
//             <div className="flex border-b-2 p-2 items-center justify-between">
//               <h1>Reward Details</h1>
//               <i className="fa fa-times"></i>
//             </div>
//             <div className="mt-5 border-1 border-[#E1E1E1] p-4 rounded-lg bg-[#E1E1E1]">
//               <h1 className="text-xl font-bold">Food Hamper Gift</h1>
//               <p>Premium Food hamper containing rice, oil, beans, and more</p>
//               <div className="flex mt-4 items-center space-x-4">
//                 <p className="text-[#FF8801] bg-[#FFF9E4] p-1 px-2 text-sm rounded-full">
//                   Value: #15,000
//                 </p>
//                 <p className="text-[#FF8801] bg-[#FFF9E4] p-1 px-2 text-sm rounded-full">
//                   Pending
//                 </p>
//               </div>
//             </div>
//             <div className="mt-6">
//               <h1 className="text-xl font-bold">Choose Redemption Method</h1>
//               <div className="flex flex-col">
//                 <div className="flex items-center mt-4 space-x-4 bg-[#FF880166] p-3 bg-opacity-40% rounded-lg">
//                   <div className="flex items-center">
//                     <img src="src/assets/sFrame.png" alt="" />
//                     <img src="src/assets/sfFrame.png" alt="" />
//                   </div>
//                   <div>
//                     <p className="text-xl font-bold">Convert to Cash</p>
//                     <p>Convert your incentive reward to cash</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center mt-4 space-x-4 p-3 bg-opacity-40% rounded-lg">
//                   <div className="flex items-center">
//                     <img src="src/assets/Frameee.png" alt="" />
//                     <img src="src/assets/sfFrame.png" alt="" />
//                   </div>
//                   <div>
//                     <p className="text-xl font-bold">Delivery</p>
//                     <p>Get your reward delivery to your address</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center mt-4 space-x-4 p-3 bg-opacity-40% rounded-lg">
//                   <div className="flex items-center">
//                     <img src="src/assets/Frameee.png" alt="" />
//                     <img src="src/assets/Framed.png" alt="" />
//                   </div>
//                   <div>
//                     <p className="text-xl font-bold">Pickup from Center</p>
//                     <p>Collect your reward from any of our service centers</p>
//                   </div>
//                 </div>

//                 {/** This is the code that will be changed */}

//                 <div className="mt-5 p-2 border-[#E1E1E1] p-4 hidden border-1 rounded-xl space-y-3">
//                   <h1 className="text-xl font-bold">Convert to cash</h1>
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <p>Reward Value</p>
//                       <p>#5,000</p>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <p>Conversion Fee</p>
//                       <p>-#250</p>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <p>Conversion Fee</p>
//                       <p>-#250</p>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p>Final Credit Amount</p>
//                       <p>#4,750</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-5 p-2 border-[#E1E1E1] border-1 p-4 rounded-xl space-y-3">
//                   <h1 className="text-xl font-bold">Delivery Address</h1>
//                   <div className="flex flex-col">
//                     <label for="">Home Address</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your home address"
//                       className="p-2 bg-[#F0F0F0]"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label for="">City</label>
//                     <input
//                       type="text"
//                       className="p-2 bg-[#F0F0F0]"
//                       placeholder="Enter your City"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label for="">State</label>
//                     <input
//                       type="text"
//                       className="p-2 bg-[#F0F0F0]"
//                       placeholder="Enter your State"
//                     />
//                   </div>
//                 </div>

//                 {/** This is the end of the code that will be changed */}
//               </div>
//             </div>
//             <div className="flex hidden rounded-xl bg-[#1967D266] mt-5 bg-opacity-40 py-6 p-4 space-x-4">
//               <img src="src/assets/Framedd.png" alt="" className="h-[35px]" />
//               <div className="text-[#1967D2]">
//                 <p>
//                   A 5% conversion fee applies when converting rewards to cash.
//                 </p>
//                 <p>
//                   The amount will be credited to your wallet instantly and can
//                   be withdrawn or used for transactions.
//                 </p>
//               </div>
//             </div>

//             <div className="flex rounded-xl hidden bg-[#1967D266] bg-opacity-40 mt-5 bg-opacity-40 py-6 p-4 space-x-4">
//               <img src="src/assets/Framedd.png" alt="" className="h-[35px]" />
//               <div className="text-[#1967D2]">
//                 <p className="text-xl">Delivery fee: #1,500</p>
//                 <p>
//                   Delivery fee will be deducted from your wallet upon
//                   confirmation
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 border-1 border-[#E1E1E1] mt-5 rounded-lg">
//               <h1 className="text-xl font-bold">Pickup Location</h1>
//               <div className="flex space-x-3 mt-4">
//                 <img
//                   src="src/assets/location.png"
//                   className="h-[30px]"
//                   alt=""
//                 />
//                 <div>
//                   <p>De Rain Services HQ - Lagos</p>
//                   <p>123 Main Street, Victorial Island</p>
//                 </div>
//               </div>
//             </div>
//             <div className="space-x-4 flex items-center justify-center mt-8">
//               <Link to="" className="bg-[#FFE8CE] p-2 px-24 rounded-full">
//                 <span>Cancel</span>
//               </Link>
//               <Link
//                 to=""
//                 className="bg-[#FF8801] p-2 px-16 rounded-full text-[#fff]"
//               >
//                 <span>Confirm Redemption</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default RewardDetails;

function RewardDetails() {
  const [selected, setSelected] = useState("cash"); // default selection

  return (
    <>
      <div className="relative">
        <div className="bg-[#0A064033] py-12 fixed flex items-center justify-center w-full h-screen bg-opacity-20">
          <div className="bg-white w-[600px] h-[90vh] overflow-y-scroll p-6 rounded-xl shadow-lg">
            <div className="flex border-b-2 p-2 pb-4 items-center justify-between">
              <h1 className="text-xl font-bold">Reward Details</h1>
              <i className="fa fa-times cursor-pointer"></i>
            </div>

            <div className="mt-5 border border-[#E1E1E1] p-4 rounded-lg bg-[#fff]">
              <h1 className="text-xl font-bold">Food Hamper Gift</h1>
              <p>Premium Food hamper containing rice, oil, beans, and more</p>

              <div className="flex mt-4 items-center space-x-4">
                <p className="text-[#FF8801] bg-[#FFF9E4] p-1 px-2 text-sm rounded-full">
                  Value: #15,000
                </p>
                <p className="text-[#FF8801] bg-[#FFF9E4] p-1 px-2 text-sm rounded-full">
                  Pending
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-xl font-bold">Choose Redemption Method</h1>

              <div className="flex flex-col">
                <div
                  onClick={() => setSelected("cash")}
                  className={`flex items-center mt-4 space-x-4 p-3 rounded-lg cursor-pointer border 
                    ${
                      selected === "cash"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full 
                    ${selected === "cash" ? "bg-orange-500" : "bg-gray-300"}`}
                  ></div>

                  <div>
                    <p className="text-xl font-bold">Convert to Cash</p>
                    <p>Convert your incentive reward to cash</p>
                  </div>
                </div>

                <div
                  onClick={() => setSelected("delivery")}
                  className={`flex items-center mt-4 space-x-4 p-3 rounded-lg cursor-pointer border
                    ${
                      selected === "delivery"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full 
                    ${
                      selected === "delivery" ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  ></div>

                  <div>
                    <p className="text-xl font-bold">Delivery</p>
                    <p>Get your reward delivered to your address</p>
                  </div>
                </div>

                <div
                  onClick={() => setSelected("pickup")}
                  className={`flex items-center mt-4 space-x-4 p-3 rounded-lg cursor-pointer border
                    ${
                      selected === "pickup"
                        ? "bg-[#FF880166] border-[#FF8801]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full 
                    ${selected === "pickup" ? "bg-orange-500" : "bg-gray-300"}`}
                  ></div>

                  <div>
                    <p className="text-xl font-bold">Pickup from Center</p>
                    <p>Collect your reward from any of our service centers</p>
                  </div>
                </div>

                {selected === "cash" && (
                  <div className="mt-5 border border-[#E1E1E1] p-4 rounded-xl space-y-3">
                    <h1 className="text-xl font-bold">Convert to Cash</h1>

                    <div className="flex items-center justify-between">
                      <p>Reward Value</p>
                      <p>#15,000</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p>Conversion Fee (5%)</p>
                      <p>-#750</p>
                    </div>

                    <div className="flex items-center justify-between font-bold">
                      <p>Final Credit Amount</p>
                      <p>#14,250</p>
                    </div>
                  </div>
                )}

                {selected === "delivery" && (
                  <div className="mt-5 border border-[#E1E1E1] p-4 rounded-xl space-y-3">
                    <h1 className="text-xl font-bold">Delivery Address</h1>

                    <div className="flex flex-col">
                      <label>Home Address</label>
                      <input
                        type="text"
                        placeholder="Enter your home address"
                        className="p-2 bg-[#F0F0F0] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>City</label>
                      <input
                        type="text"
                        placeholder="Enter your City"
                        className="p-2 bg-[#F0F0F0] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label>State</label>
                      <input
                        type="text"
                        placeholder="Enter your State"
                        className="p-2 bg-[#F0F0F0] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* PICKUP DETAILS */}
                {selected === "pickup" && (
                  <div className="p-4 border border-[#E1E1E1] mt-5 rounded-lg">
                    <h1 className="text-xl font-bold">Pickup Location</h1>

                    <div className="flex space-x-3 mt-4">
                      <img
                        src="src/assets/location.png"
                        className="h-[30px]"
                        alt=""
                      />
                      <div>
                        <p>De Rain Services HQ - Lagos</p>
                        <p>123 Main Street, Victoria Island</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-x-4 flex items-center justify-center mt-8">
              <Link
                to="/"
                className="bg-[#FFE8CE] p-2 px-24 rounded-full border-none"
              >
                Cancel
              </Link>

              <Link
                to="/confirm"
                className="bg-[#FF8801] p-2 px-16 rounded-full text-white"
              >
                Confirm Redemption
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardDetails;
