import React from "react";
import Lottie from "lottie-react";
import Animation from "./99137-cat-smoking-cigrate.json";
import { NextPage } from "next";

export const Animation404 = () => {
  return (
    <div className="flex selection:justify-center p-4 w-96 h-96 bg-black border-8 border-lime-300">
      <Lottie animationData={Animation} loop={true} />
    </div>
  );
};
