import { assets } from "../../assets/assets";

export default function Main() {
  return (
    <div className="flex-1 min-h-screen pb-28 relative">
      <div className="flex items-center justify-between text-5 p-5 text-fifth">
        <p>Gemini</p>
        <img className="w-10 rounded-full" src={assets.user_icon} alt="" />
      </div>
      <div className="max-w-4xl m-auto">
        <div className="my-12 mx-0 text-14 text-sixth font-medium p-5">
          <p>
            <span className="bg-gradient-to-r from-seventh to-eighth bg-clip-text text-transparent">
              Hello, Aayush
            </span>
          </p>
          <p>How can I help you Today!</p>
        </div>
        <div className="cards">
          <div className="card">
            <p className="card-p">Is Messi the goat?</p>
            <img className="card-img" src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p className="card-p">Why is this earth round?</p>
            <img className="card-img" src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p className="card-p">What is the last day of this year?</p>
            <img className="card-img" src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p className="card-p">What to do if world war happens?</p>
            <img className="card-img" src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="absolute bottom-0 w-full max-w-4xl py-0 px-5 m-auto  ">
          <div className="flex items-center justify-between gap-5 bg-second py-2.5 px-5 rounded-3xl">
            <input className="flex-1 bg-transparent border-none outline-none p-2 text-lg" type="text" placeholder="Enter a prompt here" />
            <div className="flex items-center gap-3.5">
              <img className="search-img" src={assets.gallery_icon} alt="" />
              <img className="search-img" src={assets.mic_icon} alt="" />
              <img className="search-img" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="text-xs my-3.5 mx-auto items-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
