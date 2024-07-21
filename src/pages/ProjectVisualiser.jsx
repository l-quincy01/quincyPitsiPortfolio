import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import pathfindingVisualizerData from "../data/pathfindingVisualizerData";

import { motion } from "framer-motion";

const ProjectVisualiser = () => {
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
        title={pathfindingVisualizerData.ProjectHeader.title}
        publishDate={pathfindingVisualizerData.ProjectHeader.publishDate}
        tags={pathfindingVisualizerData.ProjectHeader.tags}
      />
      <ProjectGallery ProjectImages={pathfindingVisualizerData.ProjectImages} />
      <ProjectInfo ProjectInfo={pathfindingVisualizerData.ProjectInfo} />
    </motion.div>
  );
};

export default ProjectVisualiser;
