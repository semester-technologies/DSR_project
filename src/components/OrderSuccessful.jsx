export default function OrderSuccessModal({ onClose }) {
  return (
    <div className="fixed px-4 inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[500px] md:h-[530px] h-[600px] rounded-2xl p-8 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-xl font-light"
        >
          <i className="fa fa-times"></i>
        </button>
        <div className="relative top-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <img src="src/assets/check.png" alt="" />
            </div>
          </div>

          <h2 className="text-center font-semibold text-lg">
            Order Placed Successfully!
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            Your order has been confirmed and is being processed
          </p>

          <div className="bg-[#FAFAFA] rounded-xl p-4 mt-6 text-sm">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order ID</span>
              <span className="font-medium">ORD25035650</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-medium">₦87,500</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium">Wallet</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium">Doorstep Delivery</span>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-lg text-center text-sm text-gray-700 py-3 mt-4">
            Estimated Delivery{" "}
            <span className="font-semibold">2–5 business days</span>
          </div>

          <div className="flex gap-4 mt-6 flex-col md:flex-row">
            <button className="flex-1 bg-[#FFE8CE] px-4 py-3 rounded-full text-gray-700 font-medium">
              Back to Marketplace
            </button>

            <button className="flex-1 bg-[#FF8801] px-4 text-white py-3 rounded-full font-medium">
              Track My Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
