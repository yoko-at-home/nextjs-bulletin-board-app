import cc from "classcat";
import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { HeadPart } from "../layout/HeadPart";

type Props = {
  children: ReactNode;
  bgColor: "white" | "gray";
};

export const Layout: FC<Props> = (props) => {
  return (
    <div
      className={cc([
        "grid grid-rows-[1fr, auto]",
        {
          "bg-gray-200": props.bgColor === "gray",
          "bg-white": props.bgColor === "white",
        },
      ])}
    >
      <HeadPart />
      <div className="min-h-[90vh]">{props.children}</div>
      <Footer />
    </div>
  );
};
