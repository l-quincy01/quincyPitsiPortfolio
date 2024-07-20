import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import studentHubData from "../data/studentHubData";

import { motion } from "framer-motion";

const ProjectStudentHub = () => {
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
        title={studentHubData.ProjectHeader.title}
        publishDate={studentHubData.ProjectHeader.publishDate}
        tags={studentHubData.ProjectHeader.tags}
      />
      <ProjectGallery ProjectImages={studentHubData.ProjectImages} />
      <ProjectInfo ProjectInfo={studentHubData.ProjectInfo} />
    </motion.div>
  );
};

export default ProjectStudentHub;
