import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import digsFindrData from "../data/digFindrData";

import { motion } from "framer-motion";

const ProjectDigsFindr = () => {
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
        title={digsFindrData.ProjectHeader.title}
        publishDate={digsFindrData.ProjectHeader.publishDate}
        tags={digsFindrData.ProjectHeader.tags}
      />
      <ProjectGallery ProjectImages={digsFindrData.ProjectImages} />
      <ProjectInfo ProjectInfo={digsFindrData.ProjectInfo} />
    </motion.div>
  );
};

export default ProjectDigsFindr;
