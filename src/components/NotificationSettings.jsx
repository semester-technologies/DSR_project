import { useState } from "react";
import Switch from "./Switch";
import Slider from "./Slider";

export default function NotificationSettings() {
  const [channels, setChannels] = useState({
    email: true,
    sms: true,
    push: true,
  });

  const [types, setTypes] = useState({
    payments: true,
    marketplace: true,
    incentives: true,
  });

  const toggleChannel = (key) => {
    setChannels({ ...channels, [key]: !channels[key] });
  };

  const toggleType = (key) => {
    setTypes({ ...types, [key]: !types[key] });
  };

  const savePreferences = () => {
    console.log({
      notificationChannels: channels,
      notificationTypes: types,
    });
    alert("Preferences saved!");
  };

  return (
    <>
      <div className="relative">
        <div className="flex">
          <div className="hidden lg:block lg:fixed bg-[#fff] z-10 absolute lg:block fixed bg-white">
            <Slider />
          </div>
          <div className="xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
            <div className="flex bg-[#FFFBF6] lg:fixed lg:right-0 xl:w-[1010px] lg:w-[730px] xl:w-[1150px] 2xl:w-[1520px] lg:bg-[#fff] lg:z-5 items-center p-3 justify-between">
              <div className="">
                <img className="lg:hidden" src="src/assets/logoo.png" alt="" />
              </div>
              <div className="flex items-center space-x-6">
                <img src="src/assets/4.png" alt="" />
                <div className="flex hidden lg:flex space-x-4 items-center">
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
                <div className="bg-[#FF8801] lg:hidden rounded-lg flex items-center justify-center w-[48px] h-[48px]">
                  <img src="src/assets/menu.png" alt="" />
                </div>
              </div>
            </div>
            <div className="p-6 lg:pt-28 w-full flex flex-col gap-6">
              <button className="flex items-center text-sm text-gray-700 space-x-3 hover:underline">
                <i className="fa fa-arrow-left"></i>{" "}
                <span>Back to Settings</span>
              </button>

              <div className="bg-white p-6 rounded-xl shadow-sm shadow-lg">
                <h2 className="text-lg font-semibold">Notification Settings</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Choose how you want to receive notifications
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Notification Channels
                </h3>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Email Alerts</p>
                    <p className="text-gray-500 text-sm">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    toggled={channels.email}
                    onToggle={() => toggleChannel("email")}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-gray-500 text-sm">
                      Receive notifications via text message
                    </p>
                  </div>
                  <Switch
                    toggled={channels.sms}
                    onToggle={() => toggleChannel("sms")}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-gray-500 text-sm">
                      Receive notifications on your device
                    </p>
                  </div>
                  <Switch
                    toggled={channels.push}
                    onToggle={() => toggleChannel("push")}
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Notification Types
                </h3>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Payment Reminders</p>
                    <p className="text-gray-500 text-sm">
                      Upcoming and missed payments
                    </p>
                  </div>
                  <Switch
                    toggled={types.payments}
                    onToggle={() => toggleType("payments")}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Marketplace Updates</p>
                    <p className="text-gray-500 text-sm">
                      New products and special offers
                    </p>
                  </div>
                  <Switch
                    toggled={types.marketplace}
                    onToggle={() => toggleType("marketplace")}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Incentive Alerts</p>
                    <p className="text-gray-500 text-sm">
                      Points earned and rewards available
                    </p>
                  </div>
                  <Switch
                    toggled={types.incentives}
                    onToggle={() => toggleType("incentives")}
                  />
                </div>
              </div>

              <button
                onClick={savePreferences}
                className="bg-[#FF8801] cursor-pointer text-white font-semibold w-full py-3 rounded-full mt-2"
              >
                Save Preferences
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
