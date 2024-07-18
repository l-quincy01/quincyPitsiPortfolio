import TimelineComp from "./about/TimelineComp";
import PointingEmoji from "./PointingEmoji";

const TitleHeadline = () => {
  return (
    <div className="text-left space-y-10 ">
      <h3 className=" text-md lg:text-5xl font-medium  ">
        Lesego Quincy Pitsi
      </h3>

      <h2 className="text-md font-light md:text-2xl   ">
        Software Engineer{" "}
        <span className="inline-block animate-wave"> 🤖 </span>
      </h2>

      <div className=" text-sm  md:text-xl ">
        <TimelineComp />
      </div>
      <PointingEmoji />
    </div>
  );
};

export default TitleHeadline;
