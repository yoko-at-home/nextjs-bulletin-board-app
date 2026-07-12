import type { NextPage } from "next";
import dynamic from "next/dynamic";
import NavButton from "../components/NavButton";
import { Layout } from "../layout";

const Animation404 = dynamic(
  () =>
    import("../components/Animation/animation404").then(
      (mod) => mod.Animation404
    ),
  { ssr: false }
);

const Custom404: NextPage = () => {
  return (
    <Layout bgColor="gray">
      <div className="flex flex-col ">
        <div className="flex my-20 justify-center">
          <Animation404 />
        </div>
        <div className="flex my-20 justify-center">
          <NavButton href={"/"}>home</NavButton>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
