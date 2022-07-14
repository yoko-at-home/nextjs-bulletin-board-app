import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./data.json";

export const LoaderAnimation = () => {
  return (
    <div className="p-4 w-24 h-24 bg-black rounded-full border-8 border-yellow-600">
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
  );
};
