import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";

import Button from "../components/reusable/Button";
import EducationView from "../components/education/EducationView";
import WritingsView from "../components/writings/WrtingsView";
import TechStackView from "../components/techStack/TechStackView";

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner />

      <ProjectsGrid />

      {/* TO SHOW ALL PROJECTS */}
      <div className="sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>

      <EducationView />
      <WritingsView />
      <TechStackView />
    </div>
  );
};

export default Home;
