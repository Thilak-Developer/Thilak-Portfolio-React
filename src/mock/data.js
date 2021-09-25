import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thilak | Developer', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Adept at end to end software design & development including requirement gathering, documentation, infrastructure setup, coding & unit & integration testing. Handles complex project management & coordination work very efficiently to deliver results. ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi,I am',
  name: 'Thilak',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'thilak.jpeg',
  paragraphOne: 'Full Stack Developer & UI/UX Designer ',
  paragraphTwo: 'Adept at end to end software design & development including requirement gathering, documentation, infrastructure setup, coding & unit & integration testing Handles complex project management & coordination work very efficiently to deliver results.',
  paragraphThree: 'Web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019',
  resume: 'https://1drv.ms/b/s!AoZd_KKSHqy7hr0mgfXObjk3SONTzQ?e=2TvNg4', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'almatar.jpg',
    title: 'Back End Developer (AngularJs & NestJs)',
    info: 'Created Restful Api using nestjs with high level validations are handled.Acted as a contact point between the technical team, functional team and the test teams',
    info2: 'Performed requirements analysis, design, development and test management of monthly 100 M/D releases .Contributed to each project delivery phase (analysis,development,test,ops) in different roles .'
  },
  {
    id: nanoid(),
    img: 'skillsafari.jpg',
    title: 'Full Stack Mern Developer Trainee',
    info: 'Developing functions into Release Verification Test Framework, sometimes automating test cases.',
    info2: 'Learned business level Software development Management'
  },
  {
    id: nanoid(),
    img: 'howdydo.jpg',
    title: 'Front End iOS Developer Trainee',
    info: 'Handled front end in howdy project.',
    info2: 'Learned to create restful api.'
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'thisisthilakraj@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/TweetsByThilak',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thilakraj17/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Thilak-Developer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
