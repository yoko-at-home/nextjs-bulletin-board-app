import type { NextPage } from "next";

export const Footer: NextPage = () => {
  return (
    <div className="sticky bottom-0 text-center text-sm text-gray-400 mx-auto bg-gradient-to-tl from-lime-300 to-gray-300 w-screen pt-6 pb-4">
      <span>
        <a
          href="https://over40webclub.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          yoko
        </a>
      </span>
      <span>{` • `}</span>
      <span>{`© ${new Date().getFullYear()}`}</span>
    </div>
  );
};
