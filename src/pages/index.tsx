import { NextPage } from "next";
import dynamic from "next/dynamic";
import { LoaderAnimation } from "../components/Animation";
import { Layout } from "../layout";

const DynamicBulletin: NextPage = dynamic(
  () => import("../components/Bulletin"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <Layout bgColor="gray">
      <div className="flex justify-center my-20">
        <LoaderAnimation />
      </div>
      <DynamicBulletin />
    </Layout>
  );
};

export default Home;
