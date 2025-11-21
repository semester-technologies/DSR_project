function FoodHamperGift() {
  return (
    <>
      <div className="relative">
        <div className="flex bg-[#0A064033] px-4 bg-opacity-20 w-[100%] h-[100vh] items-center justify-center">
          <div className="bg-[#fff] px-2 w-[600px] rounded-lg p-5 rounded-xl">
            <div className="flex items-center border-b-1 border-[#E1E1E1] pb-4 pt-4 justify-between">
              <h1 className="font-bold text-2xl">Reward Details</h1>
              <i className="fa fa-times"></i>
            </div>
            <div className="mt-12 p-6 border-1 space-y-3 border-[#E1E1E1] rounded-xl">
              <h1 className="md:text-3xl text-2xl font-bold">
                Food Hamper Gift
              </h1>
              <p className="md:text-lg">
                Premium food hamper containing rice, oil, beans, and more
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <p className="p-2 rounded-full whitespace-nowrap bg-[#04A9491A] text-[#FF8801] bg-[]">
                  Value: #15,000
                </p>
                <p className="text-[#04A949] bg-[#04A9491A] p-2 px-4 rounded-full">
                  Redeemed
                </p>
              </div>
            </div>

            <div className="flex items-center mt-12 space-x-5">
              <div className="flex flex-col w-full border-1 md:space-y-3 space-y-1 p-4 rounded-xl border-[#E1E1E1]">
                <p className="md:text-xl whitespace-nowrap">Redemption Type</p>
                <p className="font-bold md:text-xl">Delivered</p>
              </div>
              <div className="flex flex-col w-full md:space-y-3 space-y-1 border-1 p-4 rounded-xl border-[#E1E1E1]">
                <p className="md:text-xl whitespace-nowrap">Date Earned</p>
                <p className="md:text-xl font-bold whitespace-nowrap">
                  22 Sep 2025
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 border-1 border-[#E1E1E1] mt-8 rounded-xl space-y-4">
              <p className="md:text-xl">Delivery Address</p>
              <p className="font-bold md:text-xl">
                15 Sunshine Avenue, Lekki Phase 1, Lagos
              </p>
            </div>
            <div className="flex flex-col mt-12 hidden">
              <h1 className="text-2xl font-bold">Transaction Details</h1>
              <div className="flex items-center flex-col mt-2 text-lg">
                <div className="flex items-center justify-between p-3 w-full">
                  <p className="text-md">Transaction NO.</p>
                  <p className="text-md">251106060101003404305096832</p>
                </div>
                <div className="flex items-center justify-between p-3 w-full">
                  <p className="text-md">Credited Wallet</p>
                  <p className="text-md">Main Wallet</p>
                </div>
                <div className="flex items-center justify-between p-3 w-full">
                  <p className="text-md">Credited Timestamp</p>
                  <p className="text-md">8 Nov 2025, 2:45 PM</p>
                </div>
                <div className="flex items-center border-t-2 p-3 justify-between w-full">
                  <p className="text-md">Amount Credited</p>
                  <p className="text-md">#15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodHamperGift;
