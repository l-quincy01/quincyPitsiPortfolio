import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import studdyBuddyData from "../data/studyBuddyData";

import { motion } from "framer-motion";

const ProjectStudyBuddy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader
        title={studdyBuddyData.ProjectHeader.title}
        publishDate={studdyBuddyData.ProjectHeader.publishDate}
        tags={studdyBuddyData.ProjectHeader.tags}
      />
      <ProjectGallery ProjectImages={studdyBuddyData.ProjectImages} />
      <ProjectInfo ProjectInfo={studdyBuddyData.ProjectInfo} />
    </motion.div>
  );
};

export default ProjectStudyBuddy;
