import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "./../assets/group 5.png";
import DashboardIcon from "./../assets/Frame.png";
import SavingsIcon from "./../assets/Frame_.png";
import RewardsIcon from "./../assets/fluent_.png";
import FoodstuffIcon from "./../assets/_Frame.png";
import OrdersIcon from "./../assets/Group.png";
import WalletIcon from "./../assets/__Frame.png";
import SupportIcon from "./../assets/phone.png";
import SettingsIcon from "./../assets/settings.png";
import AvatarIcon from "./../assets/Avatars.png";
import LogoutIcon from "./../assets/sign-out.png";

function Slider() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const activeClass = "bg-[#FF8801] text-white"; // Your orange
  const inactiveClass =
    "bg-white text-black hover:bg-[#FF8801] hover:text-white";

  const menuItemClass = (path) =>
    `flex items-center space-x-2 p-3 px-5 rounded-md transition-all ${
      isActive(path) ? activeClass : inactiveClass
    }`;

  const goTo = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const goHome = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/"), 100);
  };

  return (
    <>
      <div className="lg:relative lg:top-0 lg:w-[300px] hidde xl:w-[300px] absolute lg:h-[100vh] h-[93vh] top-18 overflow-y-scroll md:overflow-y-auto z-10 w-[280px] lg:overflow-y-scroll 2xl:overflow-y-auto bg-white px-2 border-r border-[#ccc]">
        <div className="flex flex-col justify-between bg-[#fff] h-[91vh] xl:h-[100vh]">
          <div className="pt-3">
            <Link
              to="/"
              onClick={goHome}
              className="w-[130px] mt-6 hidden lg:block mx-auto mb-10"
            >
              <img src={Logo} className="w-[130px]" alt="Logo" />
            </Link>

            <nav className="space-y-2">
              <Link
                to="/dashboard"
                onClick={goTo("/dashboard")}
                className={menuItemClass("/dashboard")}
              >
                <img src={DashboardIcon} className="w-[20px]" alt="Dashboard" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="#"
                onClick={goTo("/savings-plan")}
                className={
                  menuItemClass("/savings-plan") +
                  (location.pathname.startsWith("/available-plans")
                    ? "bg-black text-black"
                    : "")
                }
              >
                <img
                  src={SavingsIcon}
                  className="w-[20px]"
                  alt="Savings Plans"
                />
                <span>Savings Plans</span>
              </Link>

              <Link
                to="/incentives-rewards"
                onClick={goTo("/incentives-rewards")}
                className={menuItemClass("/incentives-rewards")}
              >
                <img
                  src={RewardsIcon}
                  className="w-[20px]"
                  alt="Incentives & Rewards"
                />
                <span>Incentives & Rewards</span>
              </Link>

              <Link
                to="/foodstuff"
                onClick={goTo("/foodstuff")}
                className={menuItemClass("/foodstuff")}
              >
                <img
                  src={FoodstuffIcon}
                  className="w-[20px]"
                  alt="Foodstuff Marketplace"
                />
                <span>Foodstuff Marketplace</span>
              </Link>

              <Link
                to="/orders"
                onClick={goTo("/orders")}
                className={menuItemClass("/orders")}
              >
                <img src={OrdersIcon} className="w-[20px]" alt="Orders" />
                <span>Orders</span>
              </Link>

              <Link
                to="/wallet"
                onClick={goTo("/wallet")}
                className={menuItemClass("/wallet")}
              >
                <img src={WalletIcon} className="w-[20px]" alt="Wallet" />
                <span>Wallet</span>
              </Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-3 ml-3 pb-4">
            <Link
              to="/support"
              onClick={goTo("/support")}
              className="flex items-center space-x-3 p-2 hover:text-[#FF8801]"
            >
              <img src={SupportIcon} alt="Support" className="w-5 h-5" />
              <span>Support</span>
            </Link>

            <Link
              to="/settings"
              onClick={goTo("/settings")}
              className="flex items-center space-x-3 p-2 hover:text-[#FF8801]"
            >
              <img src={SettingsIcon} alt="Settings" className="w-5 h-5" />
              <span>Settings</span>
            </Link>

            <div className="p-2">
              <div className="flex items-center space-x-4">
                <img
                  src={AvatarIcon}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Rokeeb Abdul</span>
                  <span className="text-gray-500">email@gmail.com</span>
                </div>
              </div>
            </div>

            <Link
              to="/logout"
              onClick={goTo("/logout")}
              className="flex items-center space-x-3 p-2 text-red-600 hover:text-red-700"
            >
              <img src={LogoutIcon} alt="Logout" className="w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
