import { Link } from "react-router-dom";

function ReferralCode() {
  return (
    <>
      <div className="fixed inset-0">
        <div className="w-[100%] px-3 h-[100vh] bg-[#0A064033]/50 flex items-center justify-center absolute top-0 left-0">
          <div className="bg-[#fff] rounded-xl p-6 w-[500px] space-y-8">
            <div className="flex items-center justify-between">
              <h1>Generate referal code</h1>
              <i className="fa fa-times"></i>
            </div>
            <div className="space-y-8">
              <p className="block">Select Account Creation Count</p>

              <select className="w-full p-2 border-1">
                <option>1</option>
              </select>

              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p>Referral Link</p>
                    <p>www.referrallink.com/testname</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="src/assets/copy.png" alt="" />
                    <img src="src/assets/share.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right mt-4 space-x-4">
              <Link
                to=""
                className="text-black px-6 p-2 rounded-full bg-[#FFE8CE]"
              >
                <span>Cancel</span>
              </Link>
              <Link
                to=""
                className="text-white p-2 px-6 rounded-full bg-[#FF8801]"
              >
                <span>Generate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReferralCode;
