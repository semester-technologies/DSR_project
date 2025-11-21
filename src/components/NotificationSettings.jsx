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

            {/** Body */}
            <div className="p-6 w-full flex flex-col gap-6">
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
