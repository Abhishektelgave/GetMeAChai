import React from "react";


export default function Home() {
  return (
    <>
      <div className="w-full min-h-[79.9vh] bg-[#121212] text-[#F1F1F1]">
        <div className="flex flex-col h-[55vh] items-center justify-center gap-3">
          <div className="w-full items-center flex justify-center font-semibold text-5xl">
          <div className="head z-[99999]">
              <span className="1  hover:text-[#FF6F61]">B</span>
              <span className="1 hover:text-[#FF6F61]">U</span>
              <span className="1 hover:text-[#FF6F61]">Y</span>
              <span className="1 hover:text-[#FF6F61]"> </span>
              <span className="1 hover:text-[#FF6F61]">M</span>
              <span className="1 hover:text-[#FF6F61]">E</span>
              <span className="1 hover:text-[#FF6F61]"> </span>
              <span className="1 hover:text-[#FF6F61]">A</span>
              <span className="1 hover:text-[#FF6F61]"> </span>
              <span className="1 hover:text-[#FF6F61]">C</span>
              <span className="1 hover:text-[#FF6F61]">H</span>
              <span className="1 hover:text-[#FF6F61]">A</span>
              <span className="1 hover:text-[#FF6F61]">I</span>
            </div>
            <img src="/images/giphy.gif" width={80} alt="tea-gif" />
          </div>
          <p className="text-[#A9A9A9]">A crowdfunding platform for creators, Get funded by your fans and followers. Start Now!</p>
          <div className="buttons flex items-center justify-center gap-3">
            <button id="start-btn" className="start flex items-center justify-center border-[#FF6F61] relative overflow-hidden border z-[9999] bg-transparent p-1 px-2 rounded-full">
              <span id='start-main' className="font-bold text-[#F1F1F1] z-[999999999]">Start Now!</span>
              <div id="start-btn-cursor" className="start-btn-cursor absolute  h-20 w-32 rounded-full bg-[#FF6F61]"></div>
            </button>
            <button id="read-btn" className="read flex items-center justify-center border-[#FF6F61] relative overflow-hidden border z-[9999] bg-transparent p-1 px-2 rounded-full">
              <span id="read-main" className='font-bold text-[#F1F1F1] z-[999999999]'>Read More</span>
              <div id="read-btn-cursor" className="read-btn-cursor absolute  h-20 w-32 rounded-full bg-[#FF6F61]"></div>
            </button>
          </div>
        </div>
        <div className="Fan bg-[#242424] h-full text-[#F1F1F1] w-full p-5 border border-[#191919] ">
          <h1 className="text-center text-xl font-bold font-sans mb-4">Your Fans can buy you a chai</h1>
          <div className="flex gap-5 items-center p-2 justify-evenly">
            <div className="item items-center flex flex-col gap-1">
              <img className="border rounded-full bg-[#F1F1F1]" src="/images/3d-man.webp" width={80} alt="tea-gif" />
              <span className="font-bold text-lg">Fans want to help you</span>
              <p className="text-[#A9A9A9]">Your fans are available for you to help</p>
            </div>
            <div className="item items-center flex flex-col gap-1">
              <img className="border rounded-full bg-[#F1F1F1]" src="/images/money-coin.gif" width={80} alt="tea-gif" />
              <span className="font-bold text-lg">Fans want to help you</span>
              <p className="text-[#A9A9A9]">Your fans are available for you to help</p>
            </div>
            <div className="item items-center flex flex-col gap-1">
              <img className="border rounded-full bg-[#F1F1F1] py-[10px] mt-[px]" src="/images/Developer.gif" width={80} alt="tea-gif" />
              <span className="font-bold text-lg">Fans want to help you</span>
              <p className="text-[#A9A9A9]">Your fans are available for you to help</p>
            </div>
          </div>
        </div>
        <div className="bg-[#8a8989] opacity-75 h-1 w-full ">
        </div>
        <div className="bg-[#242424] h-full flex flex-col items-center justify-center text-[#F1F1F1] w-full p-5 border border-[#191919] ">
          <h1 className="text-center text-xl font-bold font-sans mb-4">Learn More About Project</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=b4ucRw5pNq0nRqh3"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
