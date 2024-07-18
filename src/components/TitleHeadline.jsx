import PointingEmoji from "./PointingEmoji";

const TitleHeadline = () => {
  return (
    <div className="text-center  md:text-left justify-center">
      <h3 className=" text-md lg:text-3xl font-bold mb-4 ">
        Lesego Quincy Pitsi
      </h3>
      <h2 className="text-md font-medium   md:text-3xl  mb-4 mt-8">
        Software Engineer{" "}
        <span className="inline-block animate-wave"> 🤖 </span>
      </h2>

      <span className=" text-sm  xl:text-lg ">
        I am a goal-oriented individual passionate about impactful software
        solutions. My curiosity, work ethic, and problem-solving skills help me
        excel in tech.
      </span>
      <PointingEmoji />
    </div>
  );
};

export default TitleHeadline;
