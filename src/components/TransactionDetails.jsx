import React from "react";
import { X } from "lucide-react";

export default function TransactionDetails({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#c2c0cb]/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[420px] md:p-6 mx-3 p-2 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={20} />
          </button>
        </div>

        <hr className="border-gray-200 mb-4" />

        <div className="border border-gray-200 rounded-xl py-4 text-center mb-6">
          <p className="text-sm text-gray-500">Wallet Top-up</p>
          <p className="text-2xl font-semibold mt-1 text-gray-800">+ 50,000</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
            Success
          </span>
        </div>

        <div className="border border-gray-200 rounded-xl p-4">
          <h3 className="text-sm font-semibold mb-3">Transaction Details</h3>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Transaction Type</span>
            <span className="text-gray-800">Bank Deposit</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Transaction No</span>
            <span className="text-gray-800 text-right">
              2511060601003404305096832
            </span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Transaction Date</span>
            <span className="text-gray-800">Nov 7th, 2025 4:29:54 PM</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Session ID</span>
            <span className="text-gray-800 text-right">
              0000342511060601003404305096832
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
