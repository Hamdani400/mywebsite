'use client'

import Accordion from "@/components/tools/Accordion"
import { Experience, Projects, Skills } from "../types/types"
import Image from "next/image"

import unej from '../public/unej.svg'
import skensa from '../public/skensa.png'

export default function Home() {

  const experience: Experience[] = [
    {
      company: 'PT. Tamtech International',
      position: 'Front-End Developer',
      status: 'Full-time',
      duration: 'February 2022 - Present',
      activity: ['Slicing Figma designs into responsive web applications using Vue.js and Vuetify', 'Collaborating with backend teams for seamless integration', 'Coordinating with designers to ensure pixel-perfect implementations', 'Communicating project progress with project managers and stakeholders', 'Conducting thorough testing to identify and fix bugs, performance issues, and technical problems', 'Implementing and improving code tidiness to enhance maintainability', 'Optimizing website performance through code enhancements and best practices', 'Defining and implementing best coding practices for the development team']
    },
    {
      company: 'PT. Tamtech International',
      position: 'Front-End Developer',
      status: 'Internship',
      duration: 'July 2021 - November 2021',
      activity: ['Slicing Figma designs into responsive web applications using Vue.js and Vuetify', 'Collaborating with backend teams for seamless integration', 'Coordinating with designers to ensure pixel-perfect implementations', 'Communicating project progress with project managers and stakeholders', 'Conducting thorough testing to identify and fix bugs, performance issues, and technical problems',]
    },
  ]

  const nonItExperience: Experience[] = [
    {
      company: 'Tukang Konten',
      position: 'SEO Article Writer',
      status: 'Freelance',
      duration: 'May 2021 - June 2023',
      activity: ['Creating SEO-optimized articles for website content', 'Conducting keyword research to enhance article visibility']
    },
    {
      company: 'Banyuwangi International Airport',
      position: 'Electrical Engineer',
      status: 'Internship',
      duration: 'January 2020 - March 2020',
      activity: ['Assisted in ensuring electrical system safety and reliability for the airport terminal', 'Conducted routine maintenance and inspections on electrical equipment and installations', 'Monitored the health of electrical systems to prevent potential issues', 'Supported the team in troubleshooting and resolving electrical problems efficiently']
    },
    {
      company: 'Saung Writer',
      position: 'SEO Article Writer',
      status: 'Freelance',
      duration: 'January 2016 - January 2019',
      activity: ['Creating SEO-optimized articles for website content', 'Conducting keyword research to enhance article visibility']
    },
  ]

  const projects: Projects[] = [
    {
      title: 'Neurovi Medical System',
      associated: 'PT. Tamtech International - Fulltime',
      tech: ['Vue', 'Vuetify']
    },
    {
      title: 'Neurovi Finance',
      associated: 'PT. Tamtech International - Internship',
      tech: ['Vue', 'Vuetify']
    },
    {
      title: 'MySkill Experience WebApps',
      associated: 'PT. Tamtech International - Fulltime',
      tech: ['React', 'Material UI']
    },
    {
      title: 'UIII Repository Website',
      associated: 'Client - Freelance',
      tech: ['React']
    },
    {
      title: 'PKTJ Website',
      associated: 'Client - Freelance',
      tech: ['React']
    },
  ]

  const skills: Skills[] = [
    {
      name: 'React',
      description: 'I have solid experience working with React.js across various projects, including freelance work and side projects at the office. I\'m well-versed in building web applications with React, managing component state, handling routing, and optimizing performance. I also ensure efficient rendering and seamless integration with third-party libraries to create responsive, dynamic applications.'
    },
    {
      name: 'Vue',
      description: 'I am proficient in using Vue.js, having worked with it daily at my job for almost three years. I have a solid understanding of building web applications using Vue, including key aspects like state management with Vuex, handling global state, managing routes with Vue Router, and optimizing component reactivity. I\'m experienced in managing component lifecycles, utilizing directives, and integrating third-party libraries seamlessly into Vue projects.'
    },
    {
      name: 'Node JS',
      description: 'I have a solid foundation in Node.js, having completed courses and worked on several projects using it. I\'m experienced in building server-side applications and creating RESTful APIs. My experience with Node.js has strengthened my back - end development skills and ability to manage server logic efficiently.'
    },
    {
      name: 'SQL',
      description: 'I have a solid foundation in SQL, having completed courses and worked on several projects that involve database management. I\'m experienced in writing queries to manipulate and retrieve data, designing relational databases, and optimizing performance through efficient query structuring. This knowledge has strengthened my ability to handle data-driven applications effectively.'
    },
    {
      name: 'HTML & CSS',
      description: 'I use HTML and CSS daily as a front-end developer, allowing me to build and style web applications effectively. I have a strong grasp of semantic HTML and responsive design principles, enabling me to create accessible and visually appealing user interfaces. My experience includes utilizing various CSS methodologies and frameworks to enhance my development workflow.'
    },
    {
      name: 'Git',
      description: 'I use Git daily for version control in my development work, managing code changes and collaborating with team members effectively. I\'m proficient in using Git commands for branching, merging, and resolving conflicts, which helps maintain a smooth workflow in both personal and team projects. My experience with Git ensures that I can track project history and facilitate efficient collaboration throughout the development process.'
    },
    {
      name: 'Linux',
      description: 'I\'m currently learning Linux as part of my network learning journey. While I\'m not fully proficient yet, I\'m gaining a better understanding of the command line, file system navigation, and essential Linux commands. This knowledge is helping me build a strong foundation for my skills in networking and server management.'
    },
    {
      name: 'VPS Management and Deployment',
      description: 'I have experience deploying applications on a VPS, which has helped me understand server management and configuration. This knowledge, combined with my ongoing learning in Linux, allows me to effectively manage deployments and ensure applications run smoothly in a server environment.'
    },
  ]

  const renderExperiences = (exp: Experience[], type: string): React.ReactNode => {
    return exp.map((item, index) => {
      return <li className={`${exp.length - 1 === index ? '' : 'border-b'} py-8 border-b-slate-300`} key={`exp-${index}`}>
        <Accordion key={`accor-${index}`} {...item} index={index} type={type} />
      </li>
    })
  }

  const renderProjects = (proj: Projects[]): React.ReactNode => {
    return proj.map((item, index) => {
      return <li key={`proj=${index}`} className={`${proj.length - 1 === index ? '' : 'border-b'} list-disc border-b-slate-300 pb-8 pt-4`}>
        <h4 className="text-sm font-medium mb-1 sm:text-lg">{item.title}</h4>
        <span>Associated with {item.associated}</span>
        <div className="flex mt-2">
          {item.tech.map((content, index) => (<div className="px-2 text-2xs mr-1 border rounded-lg w-fit sm:text-xs" key={`tech-stack-${index}`}>{content}</div>))}
        </div>
      </li>
    })
  }

  const renderSkills = (skill: Skills[]): React.ReactNode => {
    return skill.map((item, index) => {
      return <div key={'skill-' + index} className="text-justify border border-slate-300 p-5 rounded-md mb-7">
        <h4 className="font-semibold text-xl mb-2 sm:text-2xl">{item.name}</h4>
        <span className="text-3xs font-medium leading-none sm:text-xs">{item.description}</span>
      </div>
    })
  }

  return (
    <div>
      {/* header section */}
      <div className="h-20 w-auto"></div>
      {/* end of header section */}

      {/* hero section  */}
      <div className="font-medium tracking-tighter leading-snug text-center h-80 px-[19vw] mb-9">
        <div className="bg-slate-400 rounded-full w-28 h-28 mb-5 mx-auto"></div>
        <h1 className="sm:text-xl">Hello! I&#39;m Dani,</h1>
        <h1 className="mb-1 sm:text-xl">a web developer diving into the world of network engineering and DevOps</h1>
        <h2 className="mb-3 text-slate-400 font-light text-xs sm:text-base">Solid in front-end, working with Vue, React, and now exploring the full stack of the web</h2>
        <button className="text-xs font-normal bg-slate-600 text-white rounded px-2 py-1 hover:bg-slate-500">Get in touch!</button>
      </div>
      {/* end of hero section  */}

      {/* projects Involved */}
      <div className="w-auto px-11 bg-darkbg py-20 h-auto font-light">
        <h1 className="text-2xl mb-6 sm:text-3xl">Projects Involved</h1>
        <ul>
          {renderProjects(projects)}
        </ul>
      </div>

      {/* end of projects involved */}
      {/* experience section */}
      <div className="w-auto px-11 py-20 h-auto font-light">
        <h1 className="text-2xl sm:text-3xl">Working Experience</h1>
        <ul>
          {renderExperiences(experience, 'it')}
        </ul>
        <h1 className="text-lg mt-9">Working Experience (Non IT)</h1>
        <ul>
          {renderExperiences(nonItExperience, 'non-it')}
        </ul>
      </div>
      {/* end of experience section */}


      {/* education */}
      <div className="w-auto px-11 py-20 bg-darkbg h-auto font-light">
        <h1 className="text-2xl mb-6 sm:text-3xl">Education</h1>
        <ul>
          <li className="flex items-center mb-7">
            <Image width={29} height={29} src={unej} alt="Unej Logo" className="mr-3 sm:w-12" />
            <div>
              <span className="sm:text-lg">Jember University</span>
              <p className="p-0 m-0 text-3xs text-gray-700 sm:text-xs">Bachelor Degree - Electrical Engineering</p>
              <p className="p-0 m-0 text-3xs text-gray-700 sm:text-xs">GPA: 3.48</p>
            </div>
          </li>
          <li className="items-center flex">
            <Image width={25} height={25} src={skensa} alt="Skensa Logo" className="mr-4 sm:w-10" />
            <div>
              <span className="sm:text-lg">SMKN 1 Pasuruan</span>
              <p className="p-0 m-0 text-3xs text-gray-700 sm:text-xs">Chemical Engineering</p>
            </div>
          </li>
        </ul>
      </div>
      {/* end of education */}

      {/* skills */}
      <div className="w-auto px-11 py-20 h-auto font-light">
        <h1 className="text-2xl mb-6 sm:text-3xl">Skills</h1>
        {renderSkills(skills)}
      </div>
      {/* end of skills */}

      {/* contact */}
      <div className="bg-darkbg w-full overflow-hidden py-10">
        <div className="px-[15vw]">
          <h2 className="text-xl font-bold text-center mb-2 sm:text-2xl">Tell Me Your Needs</h2>
          <p className="text-center text-sm mb-6 sm:text-lg">
            I&apos;m here to listen and help. Reach out to me anytime.
          </p>
          <div className="space-y-4 mx-4">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-800 rounded-full p-2">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-base">Email Me</p>
                <p className="text-sm text-gray-600">dinulhaqhamdani41@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-slate-800 rounded-full p-2">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-base">Phone</p>
                <p className="text-sm text-gray-600">+6285157600519</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of contact */}
    </div>
  );
}
