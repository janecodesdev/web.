import {
    game,
    fashion,
    graphics,
    softwareDev,
    javascript,
    python,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    threejs,
    figma,
    meta,
    crestmonds,
    OnlineCourses,
    shopify,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
      },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: softwareDev,
    },
    {
      title: "Game Developer & Designer",
      icon: game,
    },
    {
      title: "Fashion Designer",
      icon: fashion,
    },
    {
      title: "Graphic designer",
      icon: graphics,
    },
  ];
  
  const technologies = [
    {
        name: "Python",
        icon: python,
      },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Crestmonds",
      icon: crestmonds,
      iconBg: "#383E56",
      date: "3rd July - 14th july",
      points: [
        "Completed work experience at tech firm Crestmonds.",
        "Completed work experience at tech firm Crestmonds.",
        "Gained insights into workplace dynamics.",
        "Expanded essential professional skills.",
        "Worked with developer team (backend and frontend).",
        "Gained hands-on experience in building and maintaining software applications.",
        "Responsibilities included analyzing user requirements, developing software solutions, and conducting testing and debugging.",
        "Improved communication, coding, and development skills.",
        "Learned the importance of teamwork and collaboration.",
        "Developed and designed own website portfolio using learned skills.",
      ],
    },
    {
      title: "Online Courses",
      company_name: "Skill gained",
      icon: OnlineCourses,
      iconBg: "#E6DEDD",
      date: "March 2023 - August 2023  ",
      points: [
        "Completed courses from multiple platforms for computer science skills and received certifications.",
        "FreeCodeCamp: Sharpened coding and problem-solving skills.",
        "Cybrary, Tryhackme, and Hackthebox: Cybersecurity training with practical solutions.",
        "SpringPod: Connected with companies and gained industry awareness.",
        "CS50x course on edX (Harvard): Shaped foundational knowledge in computer science.",
        "IBM Cybersecurity Basics course: Provided an abstract understanding of cyber threats.",
        ".",
        ".",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };