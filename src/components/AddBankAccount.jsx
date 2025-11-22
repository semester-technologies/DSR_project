import React, { useState } from "react";
import { X } from "lucide-react";

function AddBankAccount({ onClose }) {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [setAsDefault, setSetAsDefault] = useState(false);

  // Check if a valid bank is selected
  const bankSelected = bank !== "";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#c2c0cb]/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[420px] xl:p-6 mx-3 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Bank Account</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={20} />
          </button>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          Link a bank account to withdraw your funds.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Bank Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name
            </label>
            <select
              value={bank}
              onChange={(e) => {
                const selectedBank = e.target.value;
                setBank(selectedBank);

                // Reset fields if "Select your bank" is chosen
                if (selectedBank === "") {
                  setAccountNumber("");
                  setAccountName("");
                }
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select your bank</option>
              <option value="GTBank">GTBank</option>
              <option value="Access Bank">Access Bank</option>
              <option value="Zenith Bank">Zenith Bank</option>
              <option value="UBA">UBA</option>
              <option value="First Bank">First Bank</option>
            </select>
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <input
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              disabled={!bankSelected}
              className={`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm ${
                bankSelected
                  ? "text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  : "text-gray-400 bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Account Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <input
              type="text"
              placeholder="Enter account name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              disabled={!bankSelected}
              className={`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm ${
                bankSelected
                  ? "text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  : "text-gray-400 bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 mt-2">
            <input
              id="defaultAccount"
              type="checkbox"
              checked={setAsDefault}
              onChange={() => setSetAsDefault(!setAsDefault)}
              className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <label
              htmlFor="defaultAccount"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Set as default bank account
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!bankSelected}
              className={`px-6 py-2 whitespace-nowrap rounded-lg font-medium text-white transition ${
                bankSelected
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-orange-300 cursor-not-allowed"
              }`}
            >
              Link Bank Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBankAccount;
