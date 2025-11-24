import { useState } from "react";
import Slider from "./Slider";

export default function OrderHistory() {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: "ORD12345678",
      date: "Feb 21, 2025",
      items: 3,
      amount: 85000,
      status: "Processing",
    },
    {
      id: "ORD12345678",
      date: "Feb 21, 2025",
      items: 3,
      amount: 85000,
      status: "Delivered",
    },
    {
      id: "ORD12345678",
      date: "Feb 21, 2025",
      items: 3,
      amount: 85000,
      status: "Delivered",
    },
  ];

  const filtered = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <div className="flex">
          <div className="w-[300px] fixed bg-white">
            <Slider />
          </div>
          <div className="w-[373px]"></div>
          <main className="relative block w-[100%]">
            <div className="flex shadow-sm items-center p-3 justify-between">
              <div></div>
              <div className="flex items-center space-x-6">
                <img src="src/assets/4.png" alt="" />
                <div className="flex space-x-4 items-center">
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
              </div>
            </div>
            <div className="p-8 font-sans max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold mb-4">Order History</h1>

              <div className="bg-white p-6 rounded-2xl shadow mb-6">
                <h2 className="font-semibold text-lg">Order History</h2>
                <p className="text-sm text-gray-500 mb-4">
                  View and track all your orders
                </p>

                <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
                  <span className="text-lg mr-3">
                    <i className="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search by ID or product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent flex-1 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filtered.map((order, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Order #{order.id}</p>

                      {order.status === "Processing" && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          Processing
                        </span>
                      )}

                      {order.status === "Delivered" && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Delivered
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-xs text-gray-500 gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <img src="src/assets/cal.png" alt="" />
                        <span>{order.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <img src="src/assets/cube_.png" alt="" />
                        <span>{order.items} items</span>
                      </span>
                    </div>

                    <p className="font-semibold text-lg mt-3">
                      ₦{order.amount.toLocaleString()}
                    </p>

                    <button className="mt-4 bg-[#FFE8CE] w-[120px] text-gray-700 py-2 rounded-full hover:bg-orange-100 transition text-sm">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
