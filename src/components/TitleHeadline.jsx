import TimelineComp from "./about/TimelineComp";
import PointingEmoji from "./PointingEmoji";

const TitleHeadline = () => {
  return (
    <div className=" text-center md:text-left space-y-10 ">
      <h3 className=" text-3xl md:text-3xl lg:text-5xl font-medium  ">
        Lesego Quincy Pitsi
      </h3>

      <h2 className="text-xl font-light md:text-2xl   ">
        Software Engineer{" "}
        <span className="inline-block animate-wave"> 🤖 </span>
      </h2>

      <div className=" text-md  md:text-xl ">
        <TimelineComp />
      </div>
      <div className=" text-lg md:text-xl   ">
        <PointingEmoji />
      </div>
    </div>
  );
};

export default TitleHeadline;
