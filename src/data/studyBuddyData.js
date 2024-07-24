// Import images
import Image1 from "../images/StudyBuddy.png";
import Image2 from "../images/StudyBuddy_5.png";
import Image3 from "../images/StuduyBuddy_2.png";

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

export const studyBuddyData = {
  ProjectHeader: {
    title: "Study Buddy",
    publishDate: "July 20, 2024",
    tags: "React Native, Mobile App",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Study Buddy - Home Screen",
      img: Image1,
    },
    {
      id: 2,
      title: "Study Buddy - Home Screen",
      img: Image2,
    },
  ],
  ProjectInfo: {
    ClientHeading: "More Info",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Study Buddy Inc.",
      },
      {
        id: 2,
        title: "Services",
        details: "Mobile App Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://studybuddy.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "123-456-7890",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Study Buddy is a React Native app designed to help students transform their lecture notes into flash-cards and interactive quizzes. This app allows users to upload documents (PDF, DOCX, PPTX), extract the text content, generate flash-cards and quizzes based on the extracted information.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "React Native",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Expo",
          "OpenAI API",
        ],
      },
    ],
    ProjectDetailsHeading: "Details",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Document Upload: Pick and upload documents from your device storage.",
      },
      {
        id: 2,
        details:
          "Text Extraction: Extract text content from uploaded documents using a Node.js server that parses the documents.",
      },
      {
        id: 3,
        details:
          "Quiz Generation: Automatically generate quizzes from your study/lecture study material content to assist with your studying.",
      },
      {
        id: 4,
        details:
          "Multiple Choice Quizzes: All quizzes are in multiple-choice format.",
      },
      {
        id: 5,
        details:
          "Progress Tracking: Track your progress as you complete the quizzes.",
      },
      {
        id: 6,
        details: "Score Display: View your score at the end of each quiz.",
      },
      {
        id: 7,
        details:
          "Login: OAuth integration for users to login in using social accounts.",
      },
      {
        id: 8,
        details:
          "Database and Cloud Storage: Store the users notes to the cloud.",
      },
      {
        id: 9,
        details:
          "Flashcards: Feature to allow the generation of flashcards for the user.",
      },
      {
        id: 10,
        details:
          "Quiz Re-generation: Feature to allow users to re-generate quizzes on the same set of notes.",
      },
      {
        id: 11,
        details:
          "Notes Summariser: Feature to allow users to generate a concise and summarised version of long lecture notes.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/studybuddy",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/studybuddy",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/studybuddy",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/company/studybuddy",
      },
      {
        id: 5,
        name: "YouTube",
        icon: <FiYoutube />,
        url: "https://youtube.com/studybuddy",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Flashcard App",
        img: Image4,
      },
      {
        id: 2,
        title: "Quiz Master",
        img: Image5,
      },
      {
        id: 3,
        title: "Study Tracker",
        img: Image6,
      },
      {
        id: 4,
        title: "Note Organizer",
        img: Image3,
      },
    ],
  },
};

export default studyBuddyData;
