import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function SupportTickets() {
  const [search, setSearch] = useState("");

  const tickets = [
    {
      id: "TKT123456",
      title: "Unable to complete wallet withdrawal",
      category: "Wallet",
      created: "Feb 20, 2025",
      updated: "Feb 21, 2025",
      replies: 3,
      status: "In Progress",
    },
    {
      id: "TKT123456",
      title: "Unable to complete wallet withdrawal",
      category: "Wallet",
      created: "Feb 20, 2025",
      updated: "Feb 21, 2025",
      replies: 3,
      status: "Resolved",
    },
    {
      id: "TKT123456",
      title: "Unable to complete wallet withdrawal",
      category: "Wallet",
      created: "Feb 20, 2025",
      updated: "Feb 21, 2025",
      replies: 3,
      status: "Closed",
    },
  ];

  const statusColor = {
    "In Progress": "bg-blue-100 text-blue-600",
    Resolved: "bg-green-100 text-green-600",
    Closed: "bg-gray-200 text-gray-600",
  };

  const filteredTickets = tickets.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
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

            <div className="w-full max-w-7xl px-8 mx-auto px-4 py-8">
              <Link
                to="/support"
                className="flex items-center gap-2 text-sm font-medium mb-4"
              >
                <i className="fa fa-arrow-left"></i> Back to Support Center
              </Link>

              <div className="shadow-xl rounded-2xl bg-white p-6">
                <h2 className="font-semibold text-lg">My Support Tickets</h2>
                <p className="text-sm text-gray-500 mb-6">
                  View and manage your support tickets
                </p>

                <div className="relative mb-6">
                  <i className="fa fa-search absolute left-4 top-3 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-xl text-sm outline-none"
                  />
                </div>

                <div className="space-y-6">
                  {filteredTickets.map((t, i) => (
                    <div
                      key={i}
                      className="shadow-xl rounded-xl p-4 flex justify-between items-center bg-white"
                    >
                      <div>
                        <p className="font-medium text-sm mb-2">{t.title}</p>

                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <span>ID: {t.id}</span>
                          <span>•</span>
                          <span>{t.category}</span>
                          <span>•</span>
                          <span>Created: {t.created}</span>
                        </div>

                        <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                          <span className="flex items-center">
                            <img
                              src="src/assets/message.png"
                              className="mr-1"
                              alt=""
                            />
                            {t.replies} replies
                          </span>
                          <span>•</span>
                          <span>Last updated: {t.updated}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-medium ${
                            statusColor[t.status]
                          }`}
                        >
                          {t.status}
                        </span>

                        <button className="px-5 py-2 bg-orange-100 text-gray-700 rounded-full text-sm font-medium">
                          View Details
                        </button>
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
