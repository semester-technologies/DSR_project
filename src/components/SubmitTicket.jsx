import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function SubmitTicket() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    if (uploaded.length + files.length > 3) {
      alert("You can upload a maximum of 3 files.");
      return;
    }
    setFiles([...files, ...uploaded]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted successfully!");
  };

  return (
    <>
      <div className="relative">
        <div className="flex">
          <div className="w-[300px] z-10 fixed bg-white">
            <Slider />
          </div>
          <div className="w-[373px] fixed bg-white"></div>
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
            <div className="w-full max-w-6xl ml-[330px] mx-auto px-4 py-8">
              <Link
                to="/support"
                className="flex items-center gap-2 text-sm font-medium mb-4"
              >
                <i className="fa fa-arrow-left"></i> Back to Support Center
              </Link>

              <div className="shadow-xl rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-lg">
                  Submit a Support Ticket
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Describe your issue and we’ll get back to you as soon as
                  possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#F0F0F0] px-4 py-3 rounded-lg outline-none text-sm"
                      placeholder="Brief description of your issue"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      className="w-full bg-[#F0F0F0] px-4 py-3 rounded-lg outline-none text-sm"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Savings Plans">Savings Plans</option>
                      <option value="Wallet & Transactions">
                        Wallet & Transactions
                      </option>
                      <option value="Marketplace Orders">
                        Marketplace Orders
                      </option>
                      <option value="Account Settings">Account Settings</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full bg-gray-100 px-4 py-3 h-32 rounded-lg outline-none text-sm"
                      placeholder="Provide a detailed information about your issue"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                    <p className="text-xs text-gray-400 mt-1">
                      Be as detailed as possible to help us resolve your issue
                      faster.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Attachment
                    </label>

                    <div className="border rounded-xl p-6 text-center bg-gray-50">
                      <div className="text-gray-600 text-2xl mb-3">
                        <i className="fa fa-upload"></i>
                      </div>

                      <p className="font-medium text-sm">
                        Upload screenshots or relevant files
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        PNG, JPG, PDF up to 5MB (max 3 files)
                      </p>

                      <label className="cursor-pointer bg-white shadow px-4 py-2 rounded-lg text-sm">
                        Select file
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          accept=".png,.jpg,.jpeg,.pdf"
                          onChange={handleFileUpload}
                        />
                      </label>

                      {files.length > 0 && (
                        <ul className="mt-4 text-sm text-gray-600">
                          {files.map((file, i) => (
                            <li key={i}>{file.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="button"
                      className="w-1/2 py-3 rounded-full bg-[#FFE8CE] text-gray-700 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-3 rounded-full bg-[#FF8801] text-white font-medium"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
