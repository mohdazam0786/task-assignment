import NAVBARS from "../components/NAVBARS";
import PropertyDetails from "../components/PropertyDetails";
import Neighborhood from "../components/Neighborhood";
import FrameComponent1 from "../components/FrameComponent1";
import SimilarPropertyHeading from "../components/SimilarPropertyHeading";
import LocalityInfo from "../components/LocalityInfo";
import Footer from "../components/Footer";

const Preview = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal]">
      <NAVBARS />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[31px] pr-[60px] pl-[57px] box-border max-w-full shrink-0 mq800:pl-7 mq800:pr-[30px] mq800:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[56px] max-w-full mq800:gap-[28px]">
          <PropertyDetails />
          <Neighborhood />
          <FrameComponent1 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[1159px] box-border max-w-full shrink-0 mq800:pb-[318px] mq800:box-border mq1125:pb-[489px] mq1125:box-border mq1350:pb-[753px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[56px] max-w-full mq800:gap-[28px]">
          <SimilarPropertyHeading />
          <LocalityInfo />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Preview;
