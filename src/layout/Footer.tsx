import type { NextPage } from "next";
import { useRouter } from "next/router";
import NavButton from "../components/NavButton";

export const Footer: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-around text-center text-sm text-gray-400 mx-auto bg-gradient-to-tl from-lime-300 to-gray-300 w-screen pt-6 pb-4 h-[10vh]">
      <div>
        <span>
          <a
            href="https://yoko-portfolio.vercel.app/about/"
            target="_blank"
            rel="noreferrer"
          >
            yoko
          </a>
        </span>
        <span>{` • `}</span>
        <span>{`© ${new Date().getFullYear()}`}</span>
      </div>
      {/* {router.pathname === "/" ? (
        <NavButton href={"/contact"}>contact</NavButton>
      ) : (
        <NavButton href={"/"}>home</NavButton>
      )} */}
    </div>
  );
};
