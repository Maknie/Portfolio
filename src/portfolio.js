﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Akniyet Maratov",
  title: "Hi everybody, I'm magician with",
  subTitle: emoji("If you have awesome business idea let me help your idea come true. I am that developer who has experience of building Web, Mobile and Desktop applicantions with React.js / JavaScript / Flutter / Dart / Spring boot / Java and some other new technologies"),
  resumeLink: "https://drive.google.com/file/d/17rZVhc-Z2OnNq1DfewoGFGXRM0q--ruc/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/maknie",
  linkedin: "https://www.linkedin.com/in/akniyet-maratov-422b1118b/",
  gmail: "maratov.maknie@gmail.com",
  facebook: "https://www.facebook.com/akniet.maratov.5",
  stackoverflow: "https://stackoverflow.com/users/13572371/akniyet-maratov"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Who I am? What do I use?",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO USE NEW TECHNOLOGIES TO MAKE YOUR DREAMS COME TRUE",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop cross platform applications ( OS independent applications ) ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "android / ios",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "40%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

// const workExperiences = {
//   viewExperiences: false, //Set it to true to show workExperiences Section
//   experience: [
//     // {
//     //   role: "Software Engineer",  
//     //   company: "Facebook",
//     //   companylogo: require("./assets/images/facebookLogo.png"),
//     //   date: "June 2018 – Present",
//     //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     //   descBullets: [
//     //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//     //   ]
//     // },
//     // {
//     //   role: "Front-End Developer",   
//     //   company: "Quora",
//     //   companylogo: require("./assets/images/quoraLogo.png"),
//     //   date: "May 2017 – May 2018",
//     //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     // },
//     // {
//     //   role: "Software Engineer Intern",  
//     //   company: "Airbnb",
//     //   companylogo: require("./assets/images/airbnbLogo.png"),
//     //   date: "Jan 2015 – Sep 2015",
//     //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     // },
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "maknie", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "HUMBLE LIST OF COMPANIES WHO I COULD WITH THEIR IDEAS",
  projects: [
    {
      image: require("./assets/images/AlaskasPVlogo.webp"),
      link: "https://immense-beyond-40947.herokuapp.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications "),
  subtitle: "Little bit of achievements",

  achivementsCards: [
    {
      title: "Python Course Certificate",
      subtitle: "Verified e-certificate at completion of Python course.",
      image: require("./assets/images/python.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1sIxmGkerGHIHjh_9NvkbWv7mTvliv6ng/view?usp=sharing" },
      ]
    },
    {
      title: "Java Course Certificate",
      subtitle: "Verified e-certificate at completion of Java course.",
      image: require("./assets/images/java.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1eILKbSoe28sQS1l1VWAnjBdKQXBR7nkO/view?usp=sharing" },
      ]
    },
    {
      title: "Flutter Course Certificate",
      subtitle: "Verified e-certificate at completion of Flutter course.",
      image: require("./assets/images/flutter.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1k2TqYRGKU_GL8SQ1wydvTJZtO_fyDs8l/view?usp=sharing" },
      ]
    },
    {
      title: "Dart Course Certificate",
      subtitle: "Verified e-certificate at completion of Dart course.",
      image: require("./assets/images/dart.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1YVHHUyxcYSCqhG8Vd9wtE-aUcIRxrHhl/view?usp=sharing" },
      ]
    },
    // ,
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  // title: "Blogs",
  // subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Want me to develop your product ? It's easy to hit me on email.",
  number: "+7 707 408 85 81",
  email_address: "maratov.maknie@gmail.com"
};

//Twitter Section

const twitterDetails = {

  // userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
