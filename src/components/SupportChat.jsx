import { useState } from "react";
import Slider from "./Slider";

export default function SupportChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "I'm unable to complete my wallet withdrawal. The transaction keeps failing with an error message.",
      time: "09:53 PM",
    },
    {
      id: 2,
      sender: "bot",
      text: "Thank you for contacting us. I'm sorry to hear about the issue. Could you please provide the transaction reference number and the exact error message you're seeing?",
      time: "09:53 PM",
    },
    {
      id: 3,
      sender: "user",
      text: "The transaction reference is TXN123456789 and the error says 'Transaction failed - Please try again later'",
      time: "09:53 PM",
    },
    {
      id: 4,
      sender: "bot",
      text: "Thank you for the information. I've checked your account and found the issue. Your bank details need to be re-verified. I've sent you a verification link via email. Please complete the verification and try again.",
      time: "09:53 PM",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        text: input,
        time: "09:54 PM",
      },
    ]);
    setInput("");
  };

  return (
    <>
      <div className="w-full h-screen relative bg-[#0A064033] p-6">
        <div className="w-full max-w-3xl absolute top-0 bg-[#fff] right-0 h-[100vh] p-6">
          <div className="flex items-center border-b-1 border-[#D9D9D9] space-x-6">
            <div className="">
              <img src="src/assets/logout.png" alt="" />
            </div>
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                Unable to complete wallet withdrawal
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Ticket <span className="font-medium">#TKT123456</span>
                <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md text-xs">
                  In Progress
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white mt-8 shadow rounded-xl p-6 h-[80vh] flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex items-start gap-3 max-w-lg">
                    {msg.sender === "bot" && (
                      <div className="flex items-center justify-center rounded-full text-lg font-bold">
                        <img
                          src="src/assets/chatAI.png"
                          className="w-[75px]"
                          alt=""
                        />
                      </div>
                    )}

                    <div
                      className={`p-4 rounded-xl ${
                        msg.sender === "user" ? "bg-gray-50" : "bg-gray-100"
                      }`}
                    >
                      <p className="text-gray-800 leading-relaxed">
                        {msg.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">{msg.time}</p>
                    </div>

                    {msg.sender === "user" && (
                      <div className="flex items-center justify-center rounded-full text-lg font-bold">
                        <img src="src/assets/chatAI.png" className="" alt="" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center relative bg-white rounded-lg overflow-hidden shadow-sm">
              <textarea
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
              ></textarea>
              <button
                onClick={sendMessage}
                className="bg-[#FF8801] absolute right-0 rounded-full text-white h-[50px] flex items-center mr-2 justify-center w-[50px] transition"
              >
                <img src="src/assets/flyarrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
