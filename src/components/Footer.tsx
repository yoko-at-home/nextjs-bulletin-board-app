import type { NextPage } from "next";

export const Footer: NextPage = () => {
  return (
    <div className="sticky bottom-0 text-center text-sm text-gray-700 mx-auto pb-4">
      <span>yoko</span>
      <span>{` • `}</span>
      <span>{`© ${new Date().getFullYear()}`}</span>
    </div>
  );
};
