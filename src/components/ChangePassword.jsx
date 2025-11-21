import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <>
      <div className="bg-[#0A064033] flex items-center justify-center w-[100%] h-[100vh]">
        <div className="flex bg-[#fff] flex-col p-8 rounded-xl">
          <h1 className="text-xl font-bold flex items-center justify-between mb-4">
            <span>Change Password</span>
            <i className="fa fa-times"></i>
          </h1>
          <form method="post" action="" className="w-[400px] mt-4 space-y-4">
            <div>
              <p className="font-semibold">Current Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type="password"
                  className="p-2 w-full focus:outline-none"
                  placeholder="Enter Password"
                />
                <i className="fa fa-eye"></i>
              </div>
            </div>

            <div>
              <p className="font-semibold">New Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type="password"
                  className="p-2 w-full focus:outline-none"
                  placeholder="New Password"
                />
                <i className="fa fa-eye"></i>
              </div>
              <p className="text-sm">Must be at least 8 characters</p>
            </div>

            <div>
              <p className="font-semibold">Confirm New Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type="password"
                  className="p-2 w-full focus:outline-none"
                  placeholder="Enter Password"
                />
                <i className="fa fa-eye"></i>
              </div>
            </div>
            <div className="flex items-center float-right space-x-4">
              <Link to="/" className="bg-[#FFE8CE] p-2 px-6 rounded-full">
                Cancel
              </Link>
              <Link
                to="/"
                className="bg-[#FF8801] p-2 px-6 text-white rounded-full"
              >
                Update Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default ChangePassword;
