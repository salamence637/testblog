"use client";

import { doesNotReject } from "assert";

import Image from "next/image";

export default function Page() {
  const hc = () => {
    const element = document.getElementById("1");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">
        {/* <!-- 固定在顶部的 div --> */}
        <div className="bg-blue-500 text-white h-16 flex-none flex items-center justify-center">
          固定的顶部
        </div>
        <button
          onClick={() => {
            hc();
          }}
        >
          123
        </button>
        {/* <!-- 可滚动的内容区域 --> */}
        <div className="flex-grow overflow-y-auto bg-gray-100 p-4 text-6xl text-black">
          <p>内容区域，滚动查看...</p>
          {/* <!-- 多加一些内容来演示滚动效果 --> */}
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p>内容...</p>
          <p id="1">内容...</p>
        </div>
      </div>
    </div>
  );
}
