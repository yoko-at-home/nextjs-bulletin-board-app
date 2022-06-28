import { NextPage } from "next";
import dynamic from "next/dynamic";
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
      <DynamicBulletin />
    </Layout>
  );
};

export default Home;
