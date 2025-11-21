function Switch({ toggled, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 flex items-center rounded-full px-1 cursor-pointer transition 
      ${toggled ? "bg-[#FF8801]" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
        ${toggled ? "translate-x-5.5" : "translate-x-0"}`}
      ></div>
    </div>
  );
}

export default Switch;
