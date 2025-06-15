// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import ccllogo from './assets/company_logo/ccllogo.png';


// Education Section Logo's
import nitlogo from './assets/education_logo/nitlogo.png';
import davlogo from './assets/education_logo/dav_logo.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ccllogo,
      role: "Fullstack Developer Intern",
      company: "Central Coalfields Limited",
      date: "May 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    
    
  ];
  
  export const education = [
    {
      id: 0,
      img: nitlogo,
      school: "National Institute Of Technology , Jamshedpur",
      date: "Sept 2022 - July 2026",
      grade: "8.84 CGPA",
      desc: "I am currently studying in Electronic And Communication Department at National Institute Of Technology Jamshedpur",
      degree: "BTECH in Electronic And Communication Engineering",
    },

    {
      id: 1,
      img: davlogo,
      school: "D.A.V Public School Gandhinagar , Ranchi",
      date: "Apr 2019 - March 2021",
      grade: "98.20%",
      desc: "I completed my class 12 education from D.A.V Public School, Gandhinagar, Ranchi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id:  2,
      img: davlogo,
      school: "D.A.V Public School Gandhinagar , Ranchi",
      date: "Apr 2018 - March 2019",
      grade: "98.80%",
      desc: "I completed my class 10 education from  D.A.V Public School, Gandhinagar, Ranchi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
   
    {
      id: 0,
      title: "WorkEmployee TaskTracker",
      description:
        "TaskAssigner is a simple web application that helps manage and track work assigned to employees. It allows managers to assign tasks, view assignments, and monitor employee workloads in an organized way. This tool improves productivity by keeping work distribution transparent and easy to manage.",
      image: removebgLogo,
      tags: ["React JS", "API", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Rahulkumar9880/employee-work-details",
      webapp: "https://employee-work-details.vercel.app/",
    },
    {
      id: 1,
      title: "MyPortfolio",
      description:
        "This is my personal portfolio website showcasing my skills, projects, and experience. It serves as a central place where potential employers, clients, and collaborators can learn more about my work, see my projects, and get in touch. Built with modern web technologies, this portfolio reflects my passion for clean design, efficient code, and continuous learning.",
      image: taskremLogo,
      tags: ["React JS", "API", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Rahulkumar9880/Shubham-portfolio",
      webapp: "https://shubham-portfolio-flame.vercel.app/",
    },
  ];  