import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./data.json";
import catAnimation from "./78625-le-petit-chat-cat-noir.json";

export const LoaderAnimation = () => {
  return (
    <div className="p-4 w-24 h-24 bg-black rounded-full border-8 border-yellow-600">
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
  );
};
export const CatAnimation = () => {
  return (
    <div className="">
      <div className="p-4 w-24 h-24 bg-black rounded-full border-8 border-yellow-600">
        <div className="absolute animate-pulse text-white text-sm font-black font-mono translate-x-2">
          🐈 🐈
        </div>
        <Lottie animationData={catAnimation} loop={true} />
      </div>
    </div>
  );
};
