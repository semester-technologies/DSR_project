import placedIcon from "./../assets/check.png";
import processingIcon from "./../assets/truck.png";
import shippedIcon from "./../assets/cube_enclosed.png";
import deliveredIcon from "./../assets/checkgrey.png";

import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function TrackOrder() {
  return (
    <div className="relative">
      <div className="flex">
        <div className="w-[300px] fixed bg-white">
          <Slider />
        </div>
        <div className="w-[373px]"></div>

        <main className="relative block w-[100%]">
          {/** Header */}
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

          {/** BODY */}
          <div className="max-w-7xl p-8 mx-auto min-h-screen">
            <div className="mb-4 flex items-center gap-2 cursor-pointer">
              <i className="fa fa-arrow-left"></i>
              <p className="text-sm">Back to orders</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E1E1E1] mb-8">
              <div className="bg-white border-b-1 border-[#E1E1E1] flex items-center justify-between pb-4 mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Track Your Order</h2>
                  <p className="text-lg text-gray-500">Order #ORD12345678</p>
                </div>
                <div>
                  <Link
                    to=""
                    className="bg-[#FF88011A] text-black p-2 px-4 rounded-full"
                  >
                    Processing
                  </Link>
                </div>
              </div>

              <div className="bg-[#FAFAFA] p-4 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Order Status</h3>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={placedIcon}
                    alt="Order Placed"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="font-bold">Order Placed</p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={processingIcon}
                    alt="Processing"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-black font-bold">Processing</p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={shippedIcon}
                    alt="Shipped"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-black font-bold">Shipped</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={deliveredIcon}
                    alt="Delivered"
                    className="w-[40px] h-[40px]"
                  />
                  <p className="text-black font-bold">Delivered</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Summary Box */}
              <div className="bg-white p-6 rounded-xl border border-[#E1E1E1]">
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Order Date</span>
                    <span className="font-bold">Feb 21, 2025</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Total Items</span>
                    <span className="font-bold">2</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Total Amount</span>
                    <span className="font-bold">₦215,000</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Delivery Type</span>
                    <span className="font-bold">Doorstep Delivery</span>
                  </div>
                </div>

                {/* Product List */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div>
                    <p className="font-semibold">Premium Local Rice</p>
                    <p className="text-sm">QTY: 2</p>
                    <p className="font-semibold">₦85,000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div>
                    <p className="font-semibold">Premium Local Rice</p>
                    <p className="text-sm">QTY: 2</p>
                    <p className="font-semibold">₦85,000</p>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white p-6 rounded-xl border border-[#E1E1E1]">
                <h3 className="font-semibold text-lg mb-4">
                  Delivery Information
                </h3>

                <div className="flex justify-between text-sm mb-4">
                  <span>Delivery Address</span>
                  <span className="font-bold text-right">
                    123 Main Street, Ikeja,
                    <br /> Lagos
                  </span>
                </div>

                <div className="flex justify-between text-sm mb-8">
                  <span>Estimated Delivery</span>
                  <span className="font-bold">Feb 26, 2025</span>
                </div>

                {/* Help Box */}
                <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                <p className="text-sm mb-4">
                  Contact our support team for any questions about your order
                </p>

                <button className="w-full py-2 border border-[#E1E1E1] rounded-lg text-sm mb-3">
                  Call Support
                </button>

                <button className="w-full py-2 border border-[#E1E1E1] rounded-lg text-sm">
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
