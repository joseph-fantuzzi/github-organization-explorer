import { useState } from "react";

const Theme = () => {
  const [toggle, setToggle] = useState("light");

  const handleTheme = () => {
    setToggle(toggle === "light" ? "dark" : "light");
  };

  return (
    <div
      className="cursor-pointer absolute top-4 right-4 w-9 h-5 rounded-full bg-black"
      onClick={handleTheme}
    >
      <div
        className={`w-3 h-3 rounded-full bg-white absolute top-1 theme-transition ${
          toggle === "light" ? "left-1" : "left-5"
        }`}
      />
    </div>
  );
};

export default Theme;
