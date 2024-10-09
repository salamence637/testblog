"use client";

import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    const element = document.getElementById("3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen h-[4400px] bg-white flex flex-col justify-start">
      <div className="top-0 w-full h-12 bg-blue-500 flex items-center justify-center">
        asd
      </div>
      <div className="flex h-full">
        <div className="bg-red-300 w-40 overflow-scroll overflow-x-hidden h-[1000px]">
          <button
            className="mt-2"
            onClick={() => {
              handleClick();
            }}
          >
            catagory
          </button>
          <div className="mt-[1100px] text-6xl">afnsipnfaiouds</div>
        </div>

        <div className="flex flex-col w-full overflow-scroll overflow-x-hidden h-[4200px]">
          <div className="h-[600px] bg-cyan-300 w-full" id="1">
            div1
          </div>
          <div className="h-[600px] bg-cyan-400 w-full" id="2">
            div2
          </div>
          <div className="h-[600px] bg-cyan-500 w-full" id="3">
            div3
          </div>
          <div className="h-[600px] bg-cyan-600 w-full" id="4">
            div4
          </div>
          <div className="h-[600px] bg-cyan-700 w-full" id="5">
            div5
          </div>
          <div className="h-[600px] bg-cyan-800 w-full" id="6">
            div6
          </div>
          <div className="h-[600px] bg-cyan-200 w-full" id="7">
            div7
          </div>
        </div>
      </div>
    </div>
  );
}
