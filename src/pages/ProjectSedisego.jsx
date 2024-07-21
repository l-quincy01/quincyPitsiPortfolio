import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import sedisegoData from "../data/sedisegoData";

import { motion } from "framer-motion";

const ProjectSedisego = () => {
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
        title={sedisegoData.ProjectHeader.title}
        publishDate={sedisegoData.ProjectHeader.publishDate}
        tags={sedisegoData.ProjectHeader.tags}
      />
      <ProjectGallery ProjectImages={sedisegoData.ProjectImages} />
      <ProjectInfo ProjectInfo={sedisegoData.ProjectInfo} />
    </motion.div>
  );
};

export default ProjectSedisego;
