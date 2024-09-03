import { useState } from "react";
import { assets } from "../../assets/assets.js";
export default function Sidebar() {
  const [extended, setExtended] = useState(true);

  return (
    <div
      className="font-Outfit min-h-screen inline-flex flex-col justify-between bg-second py-6 px-3.5 " /* sidebar */
    >
      <div>
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          src={assets.menu_icon}
          alt=""
          className="img block ml-2.5 cursor-pointer"
        />
        <div className="mt-12 inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-first rounded-3xl text-sm text-gray-400 cursor-pointer">
          <img src={assets.plus_icon} alt="" className="img" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col ">
            <p className="mt-7 mb-5">Recent</p>
            <div className="recentEntry">
              <img src={assets.message_icon} alt="" className="img" />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col ">
        <div className="recentEntry bottomItem">
          <img src={assets.question_icon} alt="" className="img" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="recentEntry bottomItem">
          <img src={assets.history_icon} alt="" className="img" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="recentEntry bottomItem">
          <img src={assets.setting_icon} alt="" className="img" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
