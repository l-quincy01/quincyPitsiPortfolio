// Import images
import Image1 from "../images/vis1.png";
import Image2 from "../images/vis2.png";
import Image3 from "../images/vis3.png";
import Image4 from "../images/vis4.png";
import Image5 from "../images/vis5.png";
import Image6 from "../images/vis6.png";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const pathfindingVisualizerData = {
  ProjectHeader: {
    title: "Pathfinding Visualizer",
    publishDate: "July 21, 2024",
    tags: "Web Application, React",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Pathfinding Visualizer - Interactive Grid",
      img: Image1,
    },
    {
      id: 2,
      title: "Pathfinding Visualizer - Visualization",
      img: Image2,
    },
    {
      id: 3,
      title: "Pathfinding Visualizer - Shortest Path",
      img: Image3,
    },
    {
      id: 4,
      title: "Pathfinding Visualizer - Interactive Grid",
      img: Image4,
    },
    {
      id: 5,
      title: "Pathfinding Visualizer - Visualization",
      img: Image5,
    },
    {
      id: 6,
      title: "Pathfinding Visualizer - Shortest Path",
      img: Image6,
    },
  ],
  ProjectInfo: {
    ClientHeading: "More Info",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Pathfinding Visualizer",
      },
      {
        id: 2,
        title: "Services",
        details: "Visualization, Algorithm Education",
      },
      {
        id: 3,
        title: "Website",
        details: "https://pathfindingvisualizer.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "123-456-7890",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Pathfinding Visualizer is a web application built with React that visualizes the Dijkstra algorithm, a popular pathfinding algorithm used to find the shortest path between nodes in a graph. This project is designed to provide an interactive way to understand how the algorithm works, making it easier for users to see the steps involved in finding the shortest path from a start node to a finish node on a grid.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["React.js", "JavaScript", "CSS", "HTML"],
      },
    ],
    ProjectDetailsHeading: "Details",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Interactive Grid: Users can create walls on the grid by clicking and dragging the mouse.",
      },
      {
        id: 2,
        details:
          "Visualization: Visualizes the Dijkstra algorithm step-by-step, highlighting visited nodes and the shortest path.",
      },
      {
        id: 3,
        details:
          "Reset Functionality: Allows users to reset the grid to its initial state with a single click.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/pathfindingviz",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/pathfindingviz",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/pathfindingviz",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/company/pathfindingviz",
      },
      {
        id: 5,
        name: "YouTube",
        icon: <FiYoutube />,
        url: "https://youtube.com/pathfindingviz",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Algorithm Visualizer",
        img: Image4,
      },
      {
        id: 2,
        title: "Sorting Visualizer",
        img: Image5,
      },
      {
        id: 3,
        title: "Graph Traversal Visualizer",
        img: Image6,
      },
      {
        id: 4,
        title: "Maze Generator",
        img: Image3,
      },
    ],
  },
};

export default pathfindingVisualizerData;
