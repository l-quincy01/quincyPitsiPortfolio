import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";
//import ProjectSedisego from "./pages/ProjectSedisego.jsx";
// import ProjectDigsFindr from "./pages/ProjectDigsFindr.jsx";
// import ProjectStudyBuddy from "./pages/ProjectStudyBuddy.jsx";
// import ProjectStudentHub from "./pages/ProjectStudentHub.jsx";

// const About = lazy(() => import("./pages/AboutMe"));
// const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDigsFindr = lazy(() => import("./pages/ProjectDigsFindr.jsx"));
const ProjectStudyBuddy = lazy(() => import("./pages/ProjectStudyBuddy.jsx"));
const ProjectStudentHub = lazy(() => import("./pages/ProjectStudentHub.jsx"));
const ProjectSedisego = lazy(() => import("./pages/ProjectSedisego.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-gray-50 dark:bg-primary-dark transition duration-300 px-15">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/digsFindr" element={<ProjectDigsFindr />} />
              <Route
                path="projects/studyBuddy"
                element={<ProjectStudyBuddy />}
              />
              <Route
                path="projects/studentHub"
                element={<ProjectStudentHub />}
              />
              <Route path="projects/sedisego" element={<ProjectSedisego />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
