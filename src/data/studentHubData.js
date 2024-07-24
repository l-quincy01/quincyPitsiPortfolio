// Import images

import Image3 from "../images/studentHub2.png";

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const studentHubAppData = {
  ProjectHeader: {
    title: "Student Hub App",
    publishDate: "August 15, 2024",
    tags: "Marketplace, Community",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Student Hub - Home Screen",
      img: Image3,
    },
    {
      id: 3,
      title: "Student Hub - Item Details",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "More Info",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Student Hub Inc.",
      },
      {
        id: 2,
        title: "Services",
        details: "Community Marketplace for Students",
      },
      {
        id: 3,
        title: "Website",
        details: "https://studenthubapp.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "987-654-3210",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Student Hub App is a community marketplace designed for college and university students to buy and sell second-hand goods. It fosters a sustainable and affordable exchange of textbooks, furniture, electronics, and other essentials within the student community.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["React Native", "GOlang", "Firebase", "Clerk", "Expo"],
      },
    ],
    ProjectDetailsHeading: "Details",
    ProjectDetails: [
      {
        id: 1,
        details:
          "A marketplace for college and university students to buy and sell second-hand goods.",
      },
      {
        id: 2,
        details:
          "Fosters a sustainable exchange of textbooks, furniture, electronics, and other essentials.",
      },
      {
        id: 3,
        details:
          "Provides a user-friendly interface for students to list and browse items within their community.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/studenthubapp",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/studenthubapp",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/studenthubapp",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/company/studenthubapp",
      },
      {
        id: 5,
        name: "YouTube",
        icon: <FiYoutube />,
        url: "https://youtube.com/studenthubapp",
      },
    ],
  },
};

export default studentHubAppData;
