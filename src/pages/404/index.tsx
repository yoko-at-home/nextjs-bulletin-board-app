import { NextPage } from "next";
import NavButton from "../../components/NavButton";
import { Layout } from "../../layout";
import { Animation404 } from "../../components/Animation/animation404";

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
