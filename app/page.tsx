type Experience = {
  company: string,
  position: string,
  status: string,
  duration: string,
  activity: string[],
}


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
      company: 'PT. Angkasa Pura II',
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

  const renderExperiences = (exp: Experience[]): React.ReactNode => {
    return exp.map((item, index) => {
      return <div className={`${exp.length - 1 === index ? '' : 'border-b'} py-8 border-b-slate-300`} key={`exp-${index}`}>
        <ul>
          <li className="font-normal text-xs">
            <h4 className="text-sm font-medium">{item.company}</h4>
            <span className="text-3xs">{item.status}</span> <br />
            <span className="text-3xs">{item.position} ({item.duration})</span>
            <ul className="pt-2">
              {item.activity.map((act, idx) => (<li className="text-2xs list-disc" key={`act-${idx}`}>{act}</li>))}
            </ul>
          </li>
        </ul>
      </div>
    })
  }

  return (
    <div>
      {/* header section */}
      <div className="h-20 w-auto"></div>
      {/* end of header section */}

      {/* hero section  */}
      <div className="font-medium text-base tracking-tighter leading-snug text-center h-80 px-19vw">
        <div className="bg-slate-400 rounded-full w-28 h-28 mb-5 mx-auto"></div>
        <h1>Hello! I&#39;m Dani,</h1>
        <h1 className="mb-3">a webiste developer based in Yogyakarta, Indonesia</h1>
        <button className="text-xs font-normal bg-slate-600 text-white rounded px-2 py-1 hover:bg-slate-500">Get in touch!</button>
      </div>
      {/* end of hero section  */}

      {/* experience section */}
      <div className="w-auto px-11 py-20 bg-darkbg h-auto font-light">
        <h1 className="text-2xl">Working Experience</h1>
        {renderExperiences(experience)}
        <h1 className="text-lg mt-9">Working Experience (Non IT)</h1>
        {renderExperiences(nonItExperience)}
      </div>
      {/* end of experience section */}
    </div>
  );
}
