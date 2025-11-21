import { useState } from "react";
import { X } from "lucide-react";
import card from "./../assets/wallet_.png";
import ussd from "./../assets/giftt.png";

function WithdrawMoney({ onClose }) {
  const [selected, setSelected] = useState("card");

  const methods = [
    {
      id: "card",
      title: "126,000",
      subtitle: "Main Wallet",
      image: card,
    },
    {
      id: "ussd",
      title: "18,500",
      subtitle: "Incentive Wallet",
      image: ussd,
    },
  ];

  return (
    <div className="fixed w-[100%] h-[100vh] bg-[#c5c4cecc] flex justify-center items-center z-50 px-4">
      <div className="bg-white w-[500px] rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Withdraw Money</h3>
          <button
            className="text-xl font-bold hover:text-gray-500"
            onClick={onClose}
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        <div className="w-full border-b my-4" />

        <p className="text-sm text-gray-700 mb-3">
          Select which wallet to withdraw from
        </p>

        <div className="flex flex-col gap-3">
          {methods.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={`relative flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all 
                ${
                  selected === m.id
                    ? "bg-orange-50 border-orange-400"
                    : "border-gray-300"
                }
              `}
            >
              {selected === m.id && (
                <div className="absolute left-4 text-orange-500 text-2xl">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#FF8801]"></div>
                </div>
              )}
              <div className="text-2xl pl-3">{m.icon}</div>
              <div className="w-[50px] h-[50px] bg-[#fff] flex items-center justify-center rounded-xl">
                <img src={m.image} className="w-[25px] h-[25px]" alt="" />
              </div>
              <div>
                <p className="font-semibold">{m.title}</p>
                <p className="text-xs text-gray-500">{m.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="float-right space-x-4 gap-4 mt-6">
          <button
            className="px-8 py-2 bg-[#FFE8CE] rounded-full text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>

          <button className="px-6 py-2 bg-[#FF8801] text-white rounded-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default WithdrawMoney;
