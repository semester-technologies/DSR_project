import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function SupportCenter() {
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
            <div className="w-full max-w-7xl mx-auto px-6 py-10">
              <h1 className="text-2xl font-bold mb-8">Support Center</h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="shadow-xl rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <Link to="/chatassistant">
                    <div className="flex items-start flex-col gap-3 mb-3">
                      <div className="w-[10] h-[10] rounded-full flex items-center justify-center bg-green-100 text-green-500 text-xl">
                        <img src="src/assets/livechat.png" alt="" />
                      </div>
                      <h2 className="font-bold text-lg">Live Chat</h2>
                      <p className=" text-gray-500 mb-4">
                        Chat with our support team
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/support/chat"
                    className="text-green-600 flex items-center font-medium flex items-center gap-1"
                  >
                    <span>Start chat</span>{" "}
                    <i className="fa fa-angle-right relative top-0"></i>
                  </Link>
                </div>

                <div className="shadow-xl rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col items-start gap-3 mb-3">
                    <div className="w-[10] h-[10] rounded-full flex items-center justify-center bg-blue-100 text-blue-500 text-xl">
                      <img src="src/assets/ticket.png" alt="" />
                    </div>
                    <h2 className="font-bold text-lg">Submit Ticket</h2>

                    <p className="text-gray-500 mb-4">
                      Report an issue or ask a question
                    </p>
                  </div>
                  <Link
                    to="/support/create-ticket"
                    className="text-blue-600 font-medium flex items-center gap-1"
                  >
                    <span>Create Ticket</span>
                    <i className="fa fa-angle-right relative top-0"></i>
                  </Link>
                </div>

                <div className="shadow-xl rounded-xl p-5 hover:shadow-md transition">
                  <div className="flex items-start flex-col gap-3 mb-3">
                    <div className="w-[10] h-[10] rounded-full flex items-center justify-center bg-purple-100 text-purple-600 text-xl">
                      <img src="src/assets/ticket_.png" alt="" />
                    </div>
                    <h2 className="font-bold text-lg">My Tickets</h2>
                    <p className="text-gray-500 mb-4">
                      View your support ticket
                    </p>
                  </div>
                  <Link
                    to="/support/my-tickets"
                    className="text-purple-600 font-medium flex items-center gap-1"
                  >
                    View Ticket <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>

              <div className="shadow-xl rounded-xl p-6">
                <h3 className="font-bold mb-5 text-xl">
                  Other Ways to Reach Us
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-2">
                    <p className="font-bold">Email</p>
                    <p className="text-gray-600">support@example.com</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold">Phone</p>
                    <p className="text-xs text-gray-600 underline">
                      +234 801 234 5678
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold">Hours</p>
                    <p className="text-xs text-gray-600">
                      Mon–Fri, 9am–6pm WAT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
