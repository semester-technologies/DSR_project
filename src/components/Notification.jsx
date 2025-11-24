import { useState } from "react";
import { Search, X } from "lucide-react";
import logo from "./../assets/logout.png";
import ball from "./../assets/balls.png";

export default function Notifications() {
  const tabs = [
    "All",
    "Savings",
    "Incentives",
    "Orders",
    "Wallet",
    "System Alerts",
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const notifications = [
    {
      id: 1,
      title:
        "Your weekly savings goal of ₦10,000 has been successfully deposited",
      source: "System",
      time: "10 mins ago",
      highlight: true,
    },
    {
      id: 2,
      title: "You earned 20 reward points for consistent saving!",
      source: "System",
      time: "35 mins ago",
      highlight: true,
    },
    {
      id: 3,
      title: "Your foodstuff order #DR12345 has been shipped.",
      source: "System",
      time: "Today, 9:02 AM",
      highlight: true,
    },
    {
      id: 4,
      title: "₦15,000 credited to your wallet.",
      source: "System",
      time: "35 mins ago",
      highlight: false,
    },
    {
      id: 5,
      title: "Password changed successfully.",
      source: "System",
      time: "35 mins ago",
      highlight: false,
    },
  ];

  const filtered = notifications.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="bk" className="w-full hidden h-screen bg-[#07004633] flex">
      <div className="w-full flex justify-between">
        <div className="w-[500px]"></div>
        <div className="flex-1 bg-[#fff] lg:h-[100vh] lg:overflow-y-scroll p-10">
          <div className="flex justify-between items-center mb-6">
            <div className="space-x-4 flex items-center">
              <img src={logo} alt="" />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>
            <button
              onClick={() => {
                document.getElementById("bk").style = "display: none";
              }}
              className="border px-10 py-2 rounded-lg flex items-center gap-2"
            >
              Close
            </button>
          </div>

          <h3 className="text-2xl font-bold mb-4">Notifications</h3>

          <div className="flex gap-6 mb-4 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-orange-400 text-orange-500 font-medium"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-6 bg-white">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search notifications.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((n) => (
              <div
                key={n.id}
                className={`rounded-lg p-4 flex gap-3 items-start ${
                  n.highlight ? "bg-orange-50" : "bg-white"
                }`}
              >
                <img src={ball} alt="" />

                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {n.source} • {n.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
