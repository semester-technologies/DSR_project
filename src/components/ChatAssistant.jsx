import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm De Rain Assistant. How can I help you today?",
      time: "09:53 PM",
    },
    {
      id: 2,
      sender: "bot",
      text: `You can ask me about:
• Savings Plans
• Wallet & Transactions
• Marketplace Orders
• Account Settings

Or type 'agent' to speak with a support agent.`,
      time: "09:53 PM",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: "Thanks for your message. A support agent will reply shortly.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
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

            <div className="max-w-7xl w-full float-right px-6 py-10">
              <Link
                to="/support"
                className="flex items-center gap-2 text-sm font-medium mb-4"
              >
                <i className="text-lg fa fa-arrow-left"></i> Back to Support
                Center
              </Link>

              <div className="shadow-xl rounded-2xl bg-white shadow-sm">
                <div className="px-0 border-b border-[#E1E1E1] mx-6 py-5 flex items-center gap-3">
                  <div className="text-yellow-500 text-2xl">
                    <img
                      src="src/assets/chatAI.png"
                      alt=""
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm">De Rain Assistant</h2>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                      Online
                    </span>
                  </div>
                </div>

                <div className="px-6 py-6 overflow-y-scroll h-[100px] space-y-6 min-h-[400px]">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <img
                          src="src/assets/chatAI.png"
                          alt=""
                          className="w-8 h-8 mr-3 self-start"
                        />
                      )}

                      <div>
                        <div
                          className={`max-w-xs p-3 rounded-xl text-sm whitespace-pre-line ${
                            msg.sender === "user"
                              ? "bg-white shadow-lg"
                              : "bg-gray-50 shadow-lg"
                          }`}
                        >
                          {msg.text}
                        </div>

                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {msg.time}
                        </span>
                      </div>

                      {msg.sender === "user" && (
                        <img
                          src="src/assets/chatAI.png"
                          alt=""
                          className="w-8 h-8 ml-3 self-start"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E1E1E1] px-6 py-4 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />

                  <button
                    onClick={sendMessage}
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg"
                  >
                    <img
                      src="src/assets/flyArrow.png"
                      alt=""
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
