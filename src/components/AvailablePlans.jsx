import Slider from "./Slider.jsx";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountType from "./AccountType.jsx";
import AccountCreation from "./AccountCreation.jsx";
import JoinSavingsPlan from "./JoinSavingsPlan.jsx";

function AvailablePlan() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const plans = [
    {
      id: 1,
      title: "De Rain Classic Weekly Savings",
      subscribers: "1,938 Subscribers",
      duration: "50 weeks",
      weeklyContribution: "#1,400.00",
      targetSavings: "#70,000.00",
      targetWithdrawal: "#140,000.00",
      registrationFee: "#2,000.00",
      clearanceFee: "#2,000.00",
    },
    {
      id: 1,
      title: "De Rain Classic Weekly Savings",
      subscribers: "1,938 Subscribers",
      duration: "50 weeks",
      weeklyContribution: "#1,400.00",
      targetSavings: "#70,000.00",
      targetWithdrawal: "#140,000.00",
      registrationFee: "#2,000.00",
      clearanceFee: "#2,000.00",
    },
    {
      id: 1,
      title: "De Rain Classic Weekly Savings",
      subscribers: "1,938 Subscribers",
      duration: "50 weeks",
      weeklyContribution: "#1,400.00",
      targetSavings: "#70,000.00",
      targetWithdrawal: "#140,000.00",
      registrationFee: "#2,000.00",
      clearanceFee: "#2,000.00",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 z-100 w-full">
          <div className="hidden">
            <AccountType />
          </div>
          <div className="hidden">
            <AccountCreation />
          </div>
          <div className="hidden">
            <JoinSavingsPlan />
          </div>
          <div className="hidden">
            <AccountCreation />
          </div>
        </div>
        <div className="flex">
          <div className="w-[300px] bg-[#fff] z-10 hdden fixed bg-white">
            <Slider />
          </div>
          <div className="w-[375px] xl:w-[360px] lg:w-[425px] lg:block hidden"></div>
          <main className="relative block w-[100%]">
            <div className="flex shadow-sm items-center p-3 justify-between">
              <div>
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

            <div className="relative mt-16 p-6 pt-0">
              <div className="space-y-6">
                <h1 className="font-bold text-3xl">Savings Plan</h1>
                <p className="lg:w-[600px]">
                  Explore Our saving plans package tailored for your financial
                  goals. Join a Circle and start contributing today.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between space-x-6">
                <Link
                  to="#"
                  onClick={goTo("/savings-plan")}
                  className="w-full cursor-pointer"
                >
                  <button className="p-2 bg-[#FFF0DF] text-black rounded-full cursor-pointer text-center w-full">
                    <span>My Active Plans</span>
                  </button>
                </Link>
                <Link
                  to="#"
                  className={`block w-full bg-[#FF8801] rounded-full cursor-pointer`}
                  onClick={goTo("/available-plans")}
                >
                  <button className="p-2 text-white rounded-full text-center w-full">
                    <span>Available Plans</span>
                  </button>
                </Link>
              </div>
              <div className="mt-12 flex items-center justify-between">
                <h1 className="text-xl">Available Plans</h1>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-md bg-[#E1E1E1]">
                    <img src="src/assets/Frame_____.png" alt="" />
                  </button>
                  <button className="p-2 bg-[#FFE8CE] rounded-md  text-[#FFE8CE">
                    <img src="src/assets/Frame_________.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="lg:grid md:grid md:grid-cols-2 mt-8 space-y-4 grid-cols-3 gap-6">
                {plans.map((item) => (
                  <div
                    key={item.id}
                    className="shadow-md p-6 relative rounded-lg"
                  >
                    <div>
                      <h1 className="font-bold text-2xl w-[300px]">
                        {item.title}
                      </h1>

                      <div className="flex mt-2 items-center space-x-3 text-[#000]">
                        <img src="src/assets/FFrame.png" alt="" />
                        <p>{item.subscribers}</p>
                      </div>
                    </div>

                    <table className="mt-4 w-full">
                      <tbody>
                        {[
                          { label: "Duration", value: item.duration },
                          {
                            label: "Weekly contribution",
                            value: item.weeklyContribution,
                          },
                          {
                            label: "Target Savings",
                            value: item.targetSavings,
                          },
                          {
                            label: "Target Withdrawal",
                            value: item.targetWithdrawal,
                          },
                          {
                            label: "Registration Fee",
                            value: item.registrationFee,
                          },
                          {
                            label: "Clearance Fee",
                            value: item.clearanceFee,
                          },
                        ].map((row, index) => (
                          <tr key={index} className="space-x-4">
                            <td>{row.label}</td>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <button className="p-3 py-2 mt-4 px-8 text-white w-full rounded-full bg-[#FF8801]">
                      Join Plan
                    </button>
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

export default AvailablePlan;
