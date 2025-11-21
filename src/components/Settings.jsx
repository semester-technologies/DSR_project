import Slider from "./Slider";

export default function Settings() {
  const settingsItems = [
    {
      title: "Account Verification",
      description: "Complete and manage your KYC",
    },
    {
      title: "Security & Login",
      description: "Manage your password, 2FA, and login settings",
    },
    {
      title: "Notification Settings",
      description: "Choose how you want to receive notifications",
    },
  ];

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

            <div className="w-full min-h-screen p-8">
              <h1 className="text-3xl font-bold mb-8">Settings</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {settingsItems.map((item, index) => (
                  <div
                    key={index}
                    className="shadow-xl rounded-xl p-6 hover:shadow-md transition cursor-pointer"
                  >
                    <div className="flex flex-col items-star gap-3 mb-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#04A9491A]">
                        <img src="src/assets/megg.png" alt="" />
                      </div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>

                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
