
import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sebastian Oltedal Thorp",
  initials: "ST",
  location: "Nesodden, Norway",
  locationLink: "https://www.google.com/maps/place/Oslo",
  about:
    "PhD stipend at NTNU and Work and Organizational consultant at Østlyng & Bjerke.",
  summary:
    "My career, educations and general interests have equipped me with comprehensive skills spanning, technology, psychology, research and organizational development. My main passion lies at the intersection of psychology and technology, especially in the application of AI and technologies to solve complex challenges for real world applications. My expertise shines in environments where agility and fast-pace are important. As a leader, I emphasizes transparency, sincerity, cooperation, and continues problem-solving.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGnEDQokH4eHA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712494802583?e=1744848000&v=beta&t=HYiJoO4OI39uYECXIJlR9oPrTh77NOc7okkWwSgAE_8",
  personalWebsiteUrl: "https://sebastianthorp.com",
  contact: {
    email: "sebastian.thorp@outlook.com",
    tel: "+4741202571",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebastian-thorp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/blamereality",
        icon: XIcon,
      },
    ],
  },
  education: [
     {
      school: "Norwegian University of Science and Technology (NTNU)",
      degree: "Master's Degree in Work and Organizational Psychology",
      start: "2019",
      end: "2021",
    },
    {
      school: "Norwegian University of Science and Technology (NTNU)",
      degree: "Bachelor's Degree in Psychology",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "ReWork (NTNU)",
      link: "https://rework.no",
      badges: [""],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2025",
      end: "Current",
      description:
        "ReWork teaches businesses to adopt AI through individual education, organizational adoption and process automation.",
    },
    {
      company: "Norwegian University of Science and Technology (NTNU)",
      link: "https://ntnu.no",
      badges: [""],
      title: "Ph.D stipend",
      logo: JojoMobileLogo,
      start: "2022",
      end: "Current",
      description:
        "Behavioral AI and Spatial Computing research. Supervisor and lecturer for Bachelor's and Master's students.",
    },
    {
      company: "Østlyng & Bjerke",
      link: "https://ostlyngbjerke.no",
      badges: [""],
      title: "Consultant",
      logo: JojoMobileLogo,
      start: "2021",
      end: "Current",
      description:
        "Østlyng & Bjerke specializes in consulting services for leadership and employee development, process management, and organizational development. I have led the development and sales of digital courses and the redevelopment of the company's website. Additionally, developed and executed programs that incorporated qualitative and quantitative insights, focused on process-based development, fostered innovation, and facilitated organizational change",
    },
    {
      company: "VRID",
      link: "",
      badges: [""],
      title: "Gründer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:
        "VRID offers services in organizational development, quantitative insight analysis, and digital transformation. I have designed, deployed, and analyzed an employee survey for 1,500 employees in Orkland kommune, in addition to conducting and evaluating a comprehensive employee survey across the Norwegian courts. Furthermore, I developed a product strategy for a Virtual Reality project aimed at providing interview training",
    },
    {
      company: "Norwegian University of Science and Technology (NTNU)",
      link: "https://www.ntnu.no",
      badges: [""],
      title: "Research Assistant",
      logo: NSNLogo,
      start: "2020",
      end: "2022",
      description: "Executed comprehensive laboratory experiments utilizing Virtual Reality and physiological measures, encompassing recruitment, data analysis, experimental design, and scientific writing",
    },
    {
      company: "2. Bataljon/Norwegian Armed Forces",
      link: "https://www.forsvaret.no/om-forsvaret/organisasjon/haeren/brigade-nord",
      badges: [""],
      title: "Squad Leader and Personnel Administrators",
      logo: NSNLogo,
      start: "2013",
      end: "2015",
      description: "I managed the conscripts’, overseeing payroll, food provisioning in camps and fields, and transportation logistics. Additionally, I played a key role in the staff's planning and coordination of field exercises. My leadership responsibilities extended to guiding conscripts in both camp and field settings, where I led physical training, maintained equipment and vehicles, and lead our team during field operations.",
    },
  ],
  skills: [
    "Organizational Development",
    "Digital Development and Transformations",
    "Business Management",
    "Facilitation",
    "Agile Methodology",
    "Process Improvement",
    "Quantitative Research Methods",
    "Qualitative Research Methods",
    "Recruitment",
    "Web Design",
  ],
  projects: [
    {
      title: "The Type of Task Matters: Conformity Towards Humans Versus AI in Different Task Domains",
      techStack: ["Conformity", "Attitudes towards AI", "Human-AI interactions", "Informative influence"],
      description:  "Sebastian Oltedal Thorp, Kjell S. Slupphaug, Lars Morten Rimol, Simon Lervik, Simen Kristoffer B. Hoel, Simone Grassini, 2025",
      logo: ConsultlyLogo,
      link: {
        label: "link",
        href: "https://www.frontiersin.org/articles/10.3389/frvir.2024.1343872/full",
      },
     }, 
    {
      title: "Comparative analysis of spatial ability in immersive and non-immersive virtual reality: the role of sense of presence, simulation sickness and cognitive load",
      techStack: ["Spatial Computing", "Immersion", "Spatial Ability", "Simulation Sickness", "Sense of Presence", "Cogntive Load"],
      description:  "Sebastian Oltedal Thorp, Lars Morten Rimol, Simon Lervik, Hallvard Røe Evensmoen, Simone Grassini, March 2024",
      logo: ConsultlyLogo,
      link: {
        label: "link",
        href: "https://www.frontiersin.org/articles/10.3389/frvir.2024.1343872/full",
      },
    },
    {
      title: "Overcoming the productivity paradox in the public sector by managing deliberate learning",
      techStack: ["Digital Transformations", "Deliberate Learning", "Public Sector", "Manegerial Dynamic Capabilities"],
      description:
        "Linn Slettum Bjerke-Busch, Sebastian Thorp, June 2023",
      logo: MonitoLogo,
      link: {
        label: "link",
        href: "https://www.tandfonline.com/doi/pdf/10.1080/14719037.2023.2225510",
      },
    },
    {
      title: "Association of the big five personality traits with training effectiveness, sense of presence, and cybersickness in virtual Reality",
      techStack: ["Virtual Reality", "Personality Traits", "Training Effectivness", "Sense of Presence", "Cybersickness"],
      description:
        "Sebastian Oltedal Thorp, Lars Morten Rimol, Simone Grassini, November 2022",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://www.mdpi.com/2414-4088/7/2/11",
      },
    },
    {
      title: "Temporal development of sense of presence and cybersickness during an immersive vr experience",
      techStack: ["Virtual Reality", "Sense of Presence", "Cybersickness"],
      description:
        "Sebastian Thorp, Alexander Sævild Ree, Simone Grassini, April 2022",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://www.mdpi.com/2414-4088/6/5/31",
      },
    },
    {
      title: "Evaluating the effect of multi-sensory stimulations on simulator sickness and sense of presence during HMD-mediated VR experience",
      techStack: ["Virtual Reality", "Simulation Sickness", "Sense of Presence", "Vibrations"],
      description: "Simone Grassini, Karin Laumann, Virginia de Martin Topranin, Sebastian Thorp, December 2021",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1941279",
      },
    },
    {
      title: "Using electrophysiological measures to evaluate the sense of presence in immersive virtual environments: An event‐related potential study",
      techStack: [
        "EEG",
        "Virtual Reality",
        "Immersion",
      ],
      description:
        "Simone Grassini, Karin Laumann, Sebastian Thorp, Virginia de Martin Topranin, August 2021",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://onlinelibrary.wiley.com/doi/full/10.1002/brb3.2269",
      },
    },
    {
      title: "User individual characteristics and perceived usability in immersive hmd vr: A mixed method explorative study",
      techStack: [
        "Spatial Computing",
        "Virtual Reality",
        "Personality Traits",
      ],
      description:
        "Simone Grassini, Mina Saghafian, Sebastian Thorp, Karin Laumann, July 2021",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://link.springer.com/chapter/10.1007/978-3-030-80091-8_19",
      },
    },
  ],
} as const;
