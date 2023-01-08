import { ReactNode } from "react";
import { Comfortaa } from "@next/font/google";

// バリアブルフォント
const font = Comfortaa({
  weight: "variable",
});

// 非バリアブルフォント
// const font = Roboto({
//   weight: ["100", "300", "400", "700", "900"],
// });

export const GoogleFontProvider = ({ children }: { children: ReactNode }) => {
  return <div className={font.className}>{children}</div>;
};
