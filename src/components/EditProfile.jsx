import Slider from "./Slider";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <>
      <div className="relative">
        <div className="bg-[#0A064033] flex items-center justify-center w-[100%] h-[100vh]">
          <div className="flex flex-col bg-[#fff] rounded-xl w-[500px] p-10 px-8">
            <div className="flex items-center border-b-1 pb-5 justify-between w-full">
              <h1>Edit Profile</h1>
              <X></X>
            </div>
            <div className="mt-4 space-y-6">
              <div className="flex flex-col">
                <label for="">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#FAFAFA] focus:outline-none p-4"
                  placeholder="Michael Adebayo"
                />
              </div>
              <div className="flex flex-col">
                <label for="">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 bg-[#FAFAFA] focus:outline-none p-4"
                  placeholder="@example.com"
                />
              </div>
              <div className="flex flex-col">
                <label for="">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234"
                  className="w-full bg-[#FAFAFA] focus:outline-none p-4"
                />
              </div>
            </div>

            <div className="space-x-4 flex items-center justify-between">
              <div></div>
              <div className="space-x-6">
                <Link to="" className="p-2 px-6 rounded-full bg-[#FFE8CE]">
                  Cancel
                </Link>
                <Link
                  to=""
                  className="p-2 px-8 text-white rounded-full bg-[#FF8801]"
                >
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProfile;
