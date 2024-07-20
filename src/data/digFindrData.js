// Import images
import Image1 from "../images/StudyBuddy.png";
import Image2 from "../images/StudyBuddy.png";
import Image3 from "../images/StudyBuddy.png";
import Image4 from "../images/StudyBuddy.png";
import Image5 from "../images/StudyBuddy.png";
import Image6 from "../images/StudyBuddy.png";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const digsFindrData = {
  ProjectHeader: {
    title: "Digs Findr",
    publishDate: "Dec 26, 2023",
    tags: "Full-stack project",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Digs Findr Home Page",
      img: Image1,
    },
    {
      id: 2,
      title: "Digs Findr Search Results",
      img: Image2,
    },
    {
      id: 3,
      title: "Digs Findr Property Details",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "More Info",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Digs Findr",
      },
      {
        id: 2,
        title: "Services",
        details: "Student Accommodation Platform",
      },
      {
        id: 3,
        title: "Website",
        details: "https://digsfindr.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "555-888-888",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Digs Findr is a platform designed to facilitate student accommodation, assists students in finding their best-suited accommodation options near their universities and also helps landlords to get tenants. Digs Findr aims to simplify the process of finding accommodation for students, particularly those who are new to a city or university.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "React.js",
          "MongoDB",
          "Express.js",
          "Node.js",
          "TailwindCSS",
          "Google Maps API",
        ],
      },
    ],
    ProjectDetailsHeading: "Details",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Digs Findr assists students who may not be familiar with the local rental market by web-scraping local rental agencies' websites and displaying them for students. This removes the burden for students from having to individually look for accommodation on each rental agency's website.",
      },
      {
        id: 2,
        details:
          "Additionally, it provides a platform for landlords to advertise their properties specifically to the student demographic, making it easier for them to fill vacancies.",
      },
      {
        id: 3,
        details:
          "Overall, Digs Findr serves as a bridge between students seeking accommodation and property owners offering rental properties.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/realstoman",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/realstoman",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/c/StomanStudio",
      },
    ],
  },
};

export default digsFindrData;
