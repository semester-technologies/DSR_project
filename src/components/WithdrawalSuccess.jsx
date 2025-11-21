import { X, Check } from "lucide-react";

export default function WithdrawalSuccess() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <div className="flex justify-end">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <X size={18} />
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <div className="bg-green-100 h-14 w-14 rounded-full flex items-center justify-center">
            <Check size={28} className="text-green-600" />
          </div>
        </div>

        <h2 className="text-center font-semibold text-lg mt-4">
          Withdrawal Successful!
        </h2>

        <p className="text-center text-sm text-gray-600 mt-1">
          Your withdrawal of ₦5,000 has been processed successfully
        </p>

        <div className="bg-[#FAFAFA] p-4 rounded-lg mt-5 text-center">
          <p className="text-xs text-gray-600">Sent to</p>
          <p className="font-semibold mt-1">Ahmed Bello</p>
          <p className="text-sm text-gray-700">First Bank • 3095195213</p>
        </div>

        <div className="bg-[#FAFAFA] text-center text-xs text-gray-600 py-2 rounded mt-4">
          Funds will reflect in your account within 24 hours
        </div>

        <div className="mt-6">
          <button className="w-full py-3 bg-[#FF8801] text-white rounded-full font-medium">
            Back to Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
