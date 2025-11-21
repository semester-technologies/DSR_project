"use client";

import { useState, useRef } from "react";
import { X, Wallet } from "lucide-react";

export default function WithdrawModal() {
  const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef(null);

  // Format number with commas and ₦
  const formatCurrency = (value) => {
    if (!value) return "";
    const num = value.replace(/\D/g, "");
    if (!num) return "";
    return `₦${parseInt(num, 10).toLocaleString()}`;
  };

  // Handle input change
  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/₦|,/g, ""); // Remove ₦ and commas
    const digitsOnly = rawValue.replace(/\D/g, "");
    setAmount(digitsOnly);
  };

  // Handle focus: show formatted value
  const handleFocus = (e) => {
    const formatted = formatCurrency(amount);
    setTimeout(() => {
      e.target.value = formatted;
      // Move cursor to end
      e.target.setSelectionRange(formatted.length, formatted.length);
    }, 0);
  };

  // Handle blur: update state and keep raw digits
  const handleBlur = (e) => {
    const formatted = formatCurrency(amount);
    e.target.value = formatted;
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
          {/* Header */}
          <div className="flex border-b-2 pb-2 items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Withdraw Money
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wallet Selection */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">
              Select which wallet to withdraw from
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-orange-100 transition-colors">
              <div className="bg-white p-2 rounded-lg">
                <Wallet className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Main Wallet</p>
                <p className="text-sm text-gray-600">
                  Available{" "}
                  <span className="font-semibold text-gray-900">₦126,000</span>
                </p>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-8">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Amount
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                id="amount"
                value={formatCurrency(amount)}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="₦500,000"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Min: ₦50,000</p>
          </div>

          {/* Action Buttons */}
          <div className="flex float-right space-x-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-10 py-3 bg-[#FFE8CE] text-gray-700 rounded-full font-medium transition-colors"
            >
              Cancel
            </button>
            <button className="px-10 py-3 bg-[#FF8801] text-white rounded-full font-medium transition-colors shadow-sm">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
