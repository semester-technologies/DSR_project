import { X } from "lucide-react";

export default function ConfirmWithdrawal() {
  return (
    <div className="fixed inset-0 bg-[#0A064033] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <div className="flex border-b-2 pb-4 border-[#D9D9D9] items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Confirm Withdrawal</h2>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <X size={18} />
          </button>
        </div>

        <div className="bg-[#1B156C0D] border flex items-center space-x-4 border-[#d0d9f2] text-sm text-gray-700 p-3 rounded-lg">
          <img src="src/assets/transactionDetail.PNG" alt="" />
          <p>
            Please confirm your withdrawal details. This action cannot be
            undone.
          </p>
        </div>

        <div className="mt-4 bg-[#FAFAFA] p-4 rounded-lg border-1 border-[#000]">
          <p className="font-semibold text-sm mb-3">Withdrawal Summary</p>

          <div className="flex justify-between text-sm mb-2">
            <span>From</span>
            <span className="font-semibold">Main Wallet</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Amount</span>
            <span className="font-semibold">₦5,000</span>
          </div>

          <div className="flex justify-between text-sm pt-2 border-t border-[#E1E1E1]">
            <span>Total Deducted</span>
            <span className="font-semibold">₦5,000</span>
          </div>
        </div>

        <div className="mt-4 bg-[#fff3e1] border border-[#f5d9b3] p-4 rounded-lg">
          <p className="text-sm text-black mb-1">Destination Bank</p>

          <div className="flex items-center space-x-4">
            <div className="bg-[#fff] w-[50px] h-[50px] rounded-xl flex items-center justify-center">
              <img src="src/assets/bank_.png" alt="" />
            </div>
            <div>
              <p className="font-semibold">Ahmed Bello</p>
              <p className="text-sm text-gray-700">First Bank • 3095195213</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-4 bg-gray-100 py-2 rounded">
          Processing time:{" "}
          <span className="font-semibold">Instant to 24 hours</span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button className="w-1/2 rounded-full text-black bg-[#FFE8CE] py-3 font-medium">
            Cancel
          </button>

          <button className="w-1/2 py-3 bg-[#FF8801] text-white rounded-full font-medium">
            Confirm & Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
