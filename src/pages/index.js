import { Footer } from "../components/Footer";
import { HeadPart } from "../components/HeadPart";
import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("../components/Main"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="bg-gray-200 grid grid-rows-[1fr, auto]">
      <div className="min-h-[95vh]">
        <HeadPart />
        <DynamicMain />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
