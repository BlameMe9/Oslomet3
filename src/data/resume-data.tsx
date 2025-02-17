
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
    "",
summary: [
  "PhD candidate and leadership consultant with experience as a business owner, army team leader, and student supervisor. Expert at organizational improvement and AI implementation. Skilled at removing obstacles and driving strategic decisions in collaborative environments.",
] as const,

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
      company: "ReWork",
      link: "https://rework.no",
      badges: [""],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2025",
      end: "Current",
      description:
        "ReWork helps businesses adopt AI through education, strategic implementation, and process automation.",
    },
    {
      company: "Norwegian University of Science and Technology (NTNU)",
      link: "https://ntnu.no",
      badges: [""],
      title: "PhD Candidate",
      logo: JojoMobileLogo,
      start: "2022",
      end: "Current",
      description:
        "Behavioral AI and Spatial Computing research. Supervisor and lecturer for Bachelor's and Master's students. 92 citations and h-index of 5.",
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
        "Ø&B specializes in leadership and organizational development. I facilitated leadership programs, developed insight analyses, led the development of digital courses and the company's website.",
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
        "VRID offers survey and insight analysis services. Designed and analyzed an employee survey for 1,500 Orkland Kommune staff and evaluated a survey for the Norwegian courts.",
    },
    {
      company: "Norwegian University of Science and Technology (NTNU)",
      link: "https://www.ntnu.no",
      badges: [""],
      title: "Research Assistant",
      logo: NSNLogo,
      start: "2020",
      end: "2022",
      description: "Conducted laboratory experiments utilizing Virtual Reality and Electroencephalography (EEG), managing recruitment, data analysis, experimental design, and scientific writing.",
    },
    {
      company: "Kavalerieskadronen/2. Batalion/Norwegian Armed Forces",
      link: "https://www.forsvaret.no/om-forsvaret/organisasjon/haeren/brigade-nord",
      badges: [""],
      title: "Squad Leader and Personnel Administrator",
      logo: NSNLogo,
      start: "2013",
      end: "2015",
      description: "Managed salary, personnel, food provisioning, and transportation logistics; coordinated field exercises and led the stab team in field and camp operations.",
    },
  ],
  skills: [
    "Organizational Development",
    "Digital Transformation & AI Adoption",
    "Change Management",
    "Facilitation & Workshop Design",
    "Process Improvement & Automation",
    "AI Adoption & Strategy",
    "Human-AI Interaction",
    "Experimental Design & Statistical Analysis",
    "Recruitment & Talent Assessment",
    "UX/UI Design",
    "Data Visualization & Reporting",
  ],
  projects: [
    {
      title: "The Type of Task Matters: Conformity Towards Humans Versus AI in Different Task Domains",
      techStack: [""],
      description:  "Sebastian Oltedal Thorp.., 2025",
      logo: ConsultlyLogo,
      link: {
        label: "link",
        href: "https://osf.io/kq7v2/download",
      },
     }, 
    {
      title: "Comparative analysis of spatial ability in immersive and non-immersive:..",
      techStack: [""],
      description:  "Sebastian Oltedal Thorp.., March 2024",
      logo: ConsultlyLogo,
      link: {
        label: "link",
        href: "https://www.frontiersin.org/articles/10.3389/frvir.2024.1343872/full",
      },
    },
    {
      title: "Overcoming the productivity paradox in the public sector by managing deliberate learning",
      techStack: [""],
      description:
        "Linn Slettum Bjerke-Busch, Sebastian Thorp, June 2023",
      logo: MonitoLogo,
      link: {
        label: "link",
        href: "https://www.tandfonline.com/doi/pdf/10.1080/14719037.2023.2225510",
      },
    },
    {
      title: "Association of the Big Five personality traits with training effectiveness..",
      techStack: [""],
      description:
        "Sebastian Oltedal Thorp.., November 2022",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://www.mdpi.com/2414-4088/7/2/11",
      },
    },
    {
      title: "Temporal development of sense of presence and cybersickness...",
      techStack: [""],
      description:
        "Sebastian Thorp.., April 2022",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://www.mdpi.com/2414-4088/6/5/31",
      },
    },
    {
      title: "Evaluating the effect of multi-sensory stimulations on simulator sickness..",
      techStack: [""],
      description: "Simone Grassini, Karin Laumann, Sebastian Thorp, December 2021",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://www.tandfonline.com/doi/full/10.1080/00140139.2021.1941279",
      },
    },
    {
      title: "Using electrophysiological measures to evaluate the sense of presence..",
      techStack: [
        "",
      ],
      description:
        "Simone Grassini, Karin Laumann, Sebastian Thorp, August 2021",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://onlinelibrary.wiley.com/doi/full/10.1002/brb3.2269",
      },
    },
    {
      title: "User individual characteristics and perceived usability in immersive hmd vr:..",
      techStack: [
        "",
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
