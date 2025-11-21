// import Slider from "./Slider.jsx";
// import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import ActivePlansDetails from "./ActivePlansDetails.jsx";
// import AccountType from "./AccountType.jsx";

// function SavingsPlan() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const goTo = (path) => (e) => {
//     e.preventDefault();
//     navigate(path);
//   };

//   const savings = [
//     {
//       id: 1,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },
//     {
//       id: 2,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },
//     {
//       id: 3,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },
//     {
//       id: 4,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },

//     {
//       id: 5,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },
//     {
//       id: 6,
//       status: "Active",
//       title: "De Rain Classic Weekly Savings",
//       saved: "#14,000",
//       nextPayment: "Feb 20, 2025",
//       progress: 150,
//     },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <div className="relative">
//         <div className="fixed z-50 right-0 w-full h-[100vh]">
//           <div className="hidden">
//             <ActivePlansDetails />
//           </div>
//           <div className="hidden">
//             <AccountType />
//           </div>
//         </div>
//         <div className="flex">
//           <div className="lg:w-[300px] hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
//             <Slider />
//           </div>
//           <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
//           <main className="relative block w-[100%]">
//             {/** Header */}
//             <div className="flex shadow-sm items-center p-3 justify-between">
//               <div>
//                 <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
//               </div>
//               <div className="flex items-center space-x-6">
//                 <img src="src/assets/4.png" alt="" />
//                 <div className="flex hidden lg:flex space-x-4 items-center">
//                   <img
//                     src="src/assets/Avatars.png"
//                     className="w-[40px] h-[40px]"
//                     alt=""
//                   />
//                   <div className="flex flex-col">
//                     <span>Rokeeb Abdul</span>
//                     <span>email@gmail.com</span>
//                   </div>
//                 </div>
//                 <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
//                   <img src="src/assets/menu.png" alt="" />
//                 </div>
//               </div>
//             </div>

//             {/** Main  */}

//             <div className="relative mt-16 p-6 pt-0">
//               <div className="space-y-6">
//                 <h1 className="font-bold text-3xl">Savings Plan</h1>
//                 <p className="lg:w-[600px]">
//                   Explore Our saving plans package tailored for your financial
//                   goals. Join a Circle and start contributing today.
//                 </p>
//               </div>
//               <div className="mt-8 flex items-center justify-between space-x-6">
//                 <button className="p-2 bg-[#FF8801] rounded-full cursor-pointer text-white text-center w-full">
//                   <span>My Active Plans</span>
//                 </button>
//                 <Link
//                   to="#"
//                   className={`block w-full cursor-pointer`}
//                   onClick={goTo("/available-plans")}
//                 >
//                   <button className="p-2 bg-[#FFF0DF] rounded-full text-center w-full">
//                     <span>Available Plans</span>
//                   </button>
//                 </Link>
//               </div>
//               <div className="mt-12 flex items-center justify-between">
//                 <h1>My Active Plans</h1>
//                 <div className="flex items-center space-x-4">
//                   <button className="p-2 bg-[#FFE8CE] rounded-md">
//                     <img src="src/assets/Frame_____.png" alt="" />
//                   </button>
//                   <button className="p-2 bg-[#E1E1E1] rounded-md">
//                     <img src="src/assets/Frame_________.png" alt="" />
//                   </button>
//                 </div>
//               </div>
//               <div className="lg:grid md:grid md:grid-cols-2 mt-4 space-y-4 grid-cols-3 gap-6">
//                 {savings.map((item) => (
//                   <div
//                     key={item.id}
//                     className="shadow-md p-6 relative rounded-lg"
//                   >
//                     <div className="bg-[#04A9491A] text-[#04A949] inline-block px-2 rounded-full absolute right-4">
//                       {item.status}
//                     </div>

//                     <h1 className="font-bold w-[200px] lg:text-2xl text-md lg:w-[300px]">
//                       {item.title}
//                     </h1>

//                     <div className="grid mt-3 mb-3 grid-cols-2">
//                       <div>
//                         <p>Saved so far</p>
//                         <p>{item.saved}</p>
//                       </div>

//                       <div>
//                         <p>Next Payment</p>
//                         <p>{item.nextPayment}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-5">
//                       <div className="bg-[#F0F0F0] rounded-full lg:w-[280px] w-[100%]">
//                         <div
//                           className="bg-[#1B156C] p-2 rounded-full"
//                           style={{ width: `${item.progress}px` }}
//                         ></div>
//                       </div>
//                       <div>8/12</div>
//                     </div>

//                     <button className="bg-[#FFE8CE] mt-8 p-4 py-3 text-center w-full rounded-full">
//                       <span>View Details</span>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SavingsPlan;

import Slider from "./Slider.jsx";
import { Link } from "react-router-dom";

function SavingsPlan() {
  const savings = [
    {
      id: 1,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
    {
      id: 2,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
    {
      id: 3,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
    {
      id: 4,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
    {
      id: 5,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
    {
      id: 6,
      status: "Active",
      title: "De Rain Classic Weekly Savings",
      saved: "₦14,000",
      nextPayment: "Feb 20, 2025",
      progress: 67,
    },
  ];

  return (
    <div className="relative">
      <div className="flex min-h-screen">
        <div className="lg:w-[300px] hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
          <Slider />
        </div>
        <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
        <main className="relative block w-[100%]">
          <div className="flex shadow-sm items-center p-3 justify-between">
            <div>
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

          <div className="relative mt-16 p-6 pt-0">
            <div className="space-y-6">
              <h1 className="font-bold text-3xl">Savings Plan</h1>
              <p className="lg:w-[600px]">
                Explore Our saving plans package tailored for your financial
                goals. Join a Circle and start contributing today.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between space-x-6">
              <button className="p-2 bg-[#FF8801] rounded-full cursor-pointer text-white text-center w-full">
                <span>My Active Plans</span>
              </button>
              <Link
                className={`block w-full cursor-pointer`}
                // onClick={goTo("/available-plans")}
              >
                <button className="p-2 bg-[#FFF0DF] rounded-full text-center w-full">
                  <span>Available Plans</span>
                </button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <h1>My Active Plans</h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-[#FFE8CE] rounded-md">
                  <img src="src/assets/Frame_____.png" alt="" />
                </button>
                <button className="p-2 bg-[#E1E1E1] rounded-md">
                  <img src="src/assets/Frame_________.png" alt="" />
                </button>
              </div>
            </div>
            <div className="lg:grid md:grid md:grid-cols-2 mt-4 space-y-4 grid-cols-3 gap-6">
              {savings.map((item) => (
                <div
                  key={item.id}
                  className="shadow-md p-6 relative rounded-lg"
                >
                  <div className="bg-[#04A9491A] text-[#04A949] inline-block px-2 rounded-full absolute right-4">
                    {item.status}
                  </div>

                  <h1 className="font-bold w-[200px] lg:text-2xl text-md lg:w-[300px]">
                    {item.title}
                  </h1>

                  <div className="grid mt-3 mb-3 grid-cols-2">
                    <div>
                      <p>Saved so far</p>
                      <p>{item.saved}</p>
                    </div>

                    <div>
                      <p>Next Payment</p>
                      <p>{item.nextPayment}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-5">
                    <div className="bg-[#F0F0F0] rounded-full lg:w-[280px] w-[100%]">
                      <div
                        className="bg-[#1B156C] p-2 rounded-full"
                        style={{ width: `${item.progress}px` }}
                      ></div>
                    </div>
                    <div>8/12</div>
                  </div>

                  <button className="bg-[#FFE8CE] mt-8 p-4 py-3 text-center w-full rounded-full">
                    <span>View Details</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SavingsPlan;
