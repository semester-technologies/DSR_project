import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and Confirm password do not match!");
      return;
    }

    toast.success("Password updated successfully!");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-[#0A064033] flex items-center justify-center w-[100%] h-[100vh]">
        <div className="flex bg-[#fff] flex-col p-8 rounded-xl">
          <h1 className="text-xl font-bold flex items-center justify-between mb-4">
            <span>Change Password</span>
            <i className="fa fa-times"></i>
          </h1>

          <form onSubmit={handleSubmit} className="w-[400px] mt-4 space-y-4">
            <div>
              <p className="font-semibold">Current Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type={showCurrent ? "text" : "password"}
                  className="p-2 w-full focus:outline-none"
                  placeholder="Enter Password"
                />
                <i
                  className={`fa ${showCurrent ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowCurrent(!showCurrent)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div>
              <p className="font-semibold">New Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type={showNew ? "text" : "password"}
                  className="p-2 w-full focus:outline-none"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <i
                  className={`fa ${showNew ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowNew(!showNew)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <p className="text-sm">Must be at least 8 characters</p>
            </div>

            <div>
              <p className="font-semibold">Confirm New Password</p>
              <div className="flex items-center bg-[#FAFAFA] p-2 pl-0">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="p-2 w-full focus:outline-none"
                  placeholder="Enter Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div className="flex items-center float-right space-x-4">
              <Link to="/" className="bg-[#FFE8CE] p-2 px-6 rounded-full">
                Cancel
              </Link>

              <button
                type="submit"
                className="bg-[#FF8801] p-2 px-6 text-white rounded-full"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
