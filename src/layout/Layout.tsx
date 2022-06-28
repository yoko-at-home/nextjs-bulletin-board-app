import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { HeadPart } from "../layout/HeadPart";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-gray-200 grid grid-rows-[1fr, auto]">
      <HeadPart />
      <div className="min-h-[90vh]">{props.children}</div>
      <Footer />
    </div>
  );
};
