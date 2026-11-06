import { Project, SkillCategory, Experience, Achievement, EducationItem } from '../types';

export const personalInfo = {
  name: "Sharmishtha Pal",
  handle: "@sharmishtha",
  role: "Designer & Developer",
  subRole: "2nd Year ECE • Campus Builder & Club Coordinator",
  bio: "Second-year B.Tech student in Electronics & Communication Engineering at Galgotias College of Engineering & Technology (GCET). Combining creative design with frontend development, AI-driven solutions, and IoT hardware to build intuitive interfaces and solve real-world problems.",
  status: "Open to Internships & Hackathons",
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 8953282818",
  email: "sharmishthapal687@gmail.com",
  avatarUrl: "/images/profile.jpg",
  college: "Galgotias College of Engineering and Technology, Greater Noida",
  yearOfStudy: "2nd Year B.Tech (ECE)",
  expectedGraduation: "July 2029",
  links: {
    github: "https://github.com/sharmishthapal687-ctrl",
    linkedin: "https://www.linkedin.com/in/sharmishtha-pal-1101703ab/",
    instagram: "https://www.instagram.com/underbuilt_/",
    figma: "https://www.figma.com",
    resume: "/resume.pdf",
  },
  stats: [
    { label: "Paytm & AI Day", value: "Top 5", subtext: "Double Finalist" },
    { label: "Club Coordinator", value: "3 Clubs", subtext: "Creatrix, Enthiran, GFG" },
    { label: "Creative Brand", value: "@underbuilt_", subtext: "Posters, Logos & Merch" },
    { label: "Engineering", value: "ECE", subtext: "IoT & Hardware Labs" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "synapse",
    title: "Synapse",
    subtitle: "Campus Builder & Tech Network Platform",
    description: "An intelligent campus networking platform bridging student builders, developer clubs, and hackathon teams with AI-powered semantic matching and automated event briefs.",
    longDescription: "Synapse empowers student developers, designers, and researchers to discover their ideal hackathon teams through natural language semantic search. It features an automated event brief engine, club management hub, and Byte—an intelligent ambient campus copilot.",
    category: "dev",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Semantic Search", "UI/UX"],
    featured: true,
    badge: "🏆 Top 5 @ AI Day Noida",
    metrics: "Top 5 Finalist • 100+ Builders Network",
    githubUrl: "https://github.com/sharmishthapal687-ctrl",
    accentColor: "emerald",
    highlights: [
      "Built client-side AI semantic talent search parsing roles, tech domains, and compatibility scores.",
      "Engineered Find My Team matchmaker with vacancy filtering and skill coverage analysis.",
      "Designed an Acid Lime / Dark Brutalist design system with high-contrast architectural grids.",
      "Recognized in the Top 5 projects at the prestigious AI Day Noida Hackathon."
    ]
  },
  {
    id: "yojna-setu",
    title: "Yojna Setu",
    subtitle: "Government Scheme Eligibility Matcher",
    description: "A Figma-based interface concept for discovering eligible government schemes, checking required documentation, and simplifying citizen application assistance.",
    longDescription: "Yojna Setu was conceived to solve the information asymmetry citizens face when trying to benefit from public welfare programs. Built around user-centered design, clarity, and trust, the interface guides citizens through a frictionless questionnaire to discover schemes they qualify for.",
    category: "design",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Citizen Tech", "Accessibility", "Design Systems"],
    featured: true,
    badge: "🏛️ Hackathon UI/UX",
    metrics: "Accessible UI • Multi-Step Eligibility Flow",
    figmaUrl: "https://www.figma.com",
    accentColor: "cyan",
    highlights: [
      "Designed an accessible, high-trust Figma interface tailored for users with varying digital literacy.",
      "Mapped user journeys for document verification, eligibility filtering, and scheme tracking.",
      "Created reusable Figma component variants with strict accessibility contrast ratios.",
      "Presented prototype to hackathon evaluation panels emphasizing social impact."
    ]
  },
  {
    id: "underbuilt-creative",
    title: "UnderBuilt Visual Series",
    subtitle: "Graphic Design, Event Posters & Identity Systems",
    description: "My creative design initiative featuring high-impact event posters, startup promotions, logo identities (Rotorbot Matrix), and apparel/t-shirt designs.",
    longDescription: "UnderBuilt (@underbuilt_) serves as my dedicated design outlet. I produce promotional posters for college fests, corporate tech events, brand identities (such as Rotorbot Matrix and Drone Club for Galgotias Educational Institutions), and merchandise designs using Figma, Canva, and modern digital tools.",
    category: "design",
    tags: ["Graphic Design", "Brand Identity", "Poster Design", "Figma", "Canva", "T-Shirt Design", "Logo Design"],
    featured: true,
    badge: "🎨 @underbuilt_ Creative",
    metrics: "30+ Posters • Logos • Merch Design",
    figmaUrl: "https://www.instagram.com/underbuilt_/",
    accentColor: "purple",
    highlights: [
      "Designed the official Rotorbot Matrix drone brand identity and high-tech vector emblem.",
      "Authored the official Drone Club Independence Day promotional banner for Galgotias Educational Institutions.",
      "Created event posters and social media creatives for Creatrix Club and college-wide hackathons.",
      "Designed custom t-shirts and promotional apparel for student clubs and tech summits."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX & Graphic Design",
    description: "Crafting intuitive digital experiences, design systems, and high-impact visual branding.",
    iconName: "Palette",
    skills: [
      { name: "Figma (Auto Layout & Components)", highlight: true },
      { name: "Canva Pro", highlight: true },
      { name: "Event Poster Design", highlight: true },
      { name: "Promotional & Startup Banners", highlight: true },
      { name: "Logo & Brand Identity" },
      { name: "T-Shirt / Merch Design" },
      { name: "UI/UX Prototyping" },
      { name: "Visual Communication & Hierarchy" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Translating Figma designs into accessible, responsive, and clean web applications.",
    iconName: "Code2",
    skills: [
      { name: "React 19", highlight: true },
      { name: "HTML5 / CSS3", highlight: true },
      { name: "Tailwind CSS v4", highlight: true },
      { name: "JavaScript / TypeScript" },
      { name: "Vite" },
      { name: "REST APIs Integration" },
      { name: "Responsive UI Architecture" }
    ]
  },
  {
    title: "Programming & Hardware",
    description: "Electronics & Communication Engineering foundations and embedded systems.",
    iconName: "Cpu",
    skills: [
      { name: "C Language", highlight: true },
      { name: "Python", highlight: true },
      { name: "ESP32 & Arduino" },
      { name: "ThingSpeak IoT Cloud" },
      { name: "Sensor Interfacing (DHT, BMP)" },
      { name: "Robotics Prototyping" }
    ]
  },
  {
    title: "Leadership & Workflow Tools",
    description: "Club coordination, content creation, and developer collaboration workflows.",
    iconName: "Sparkles",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Club Coordination & Leadership", highlight: true },
      { name: "Event Emceeing & Hosting" },
      { name: "Prompt Engineering" },
      { name: "Public Speaking & Workshops" }
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    role: "Coordinator & Graphic Designer",
    organization: "Creatrix Club — GCET",
    type: "Club Leadership & Design",
    period: "Sept 2025 – Present",
    location: "GCET Campus",
    description: "Leading creative visual design, event branding, and promotional collateral for college fests and technical workshops.",
    bullets: [
      "Designed 25+ event posters, banners, and digital assets for college fests and design sprints.",
      "Directing visual guidelines and promotional campaigns to elevate club outreach."
    ],
    tags: ["Creatrix", "Event Posters", "Figma", "Canva", "GCET"]
  },
  {
    role: "Coordinator",
    organization: "Technical Enthiran (Robotics Club) — GCET",
    type: "Technical & Robotics Leadership",
    period: "2025 – Present",
    location: "GCET Campus",
    description: "Coordinating technical initiatives, robotics workshops, and hardware hackathon teams at GCET.",
    bullets: [
      "Organized robotics build sessions, drone tech demos, and introductory microcontroller labs.",
      "Designed promotional workshop banners and event publicity collateral."
    ],
    tags: ["Enthiran", "Robotics", "Hardware Labs", "Drone Tech"]
  },
  {
    role: "Coordinator & Campus Body Member",
    organization: "GeeksforGeeks (GFG) Student Chapter — GCET",
    type: "Campus Developer Community",
    period: "2025 – Present",
    location: "GCET Campus",
    description: "Facilitating coding contests, developer bootcamps, and technical student outreach.",
    bullets: [
      "Managed promotional graphics and announcements for campus coding events.",
      "Coordinated student participation in hackathons and DSA workshops."
    ],
    tags: ["GeeksforGeeks", "Coding Contests", "Campus Outreach"]
  },
  {
    role: "Event Emcee, Host & Technical Volunteer",
    organization: "Collegiate Tech Summits & Hackathons",
    type: "Public Speaking & Operations",
    period: "2024 – Present",
    location: "Campus",
    description: "Serving as on-stage host/emcee and operational volunteer for university hackathons and symposiums.",
    bullets: [
      "Emceed mainstage ceremonies for collegiate hackathons with 300+ attendees.",
      "Led promotional creatives and LinkedIn campaign for the Taylor & Francis Research Conference."
    ],
    tags: ["Public Speaking", "Event Emcee", "Hackathons"]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Top 5 Finalist (Hackathons)",
    event: "Paytm Buildathon & AI Day Noida",
    date: "2025 – 2026",
    badge: "Double Top 5",
    description: "Secured Top 5 standing at Paytm Buildathon with commended UI/UX design, and Top 5 at AI Day Noida Hackathon with Synapse.",
    icon: "Trophy"
  },
  {
    title: "Multi-Club Coordinator Leadership",
    event: "Creatrix, Technical Enthiran & GFG",
    date: "2025 - Present",
    badge: "Campus Leader",
    description: "Coordinating across three major college bodies covering design, robotics, and software development.",
    icon: "Award"
  }
];

export const designExpertiseData = {
  title: "Graphic & Merchandise Design Experience",
  badge: "POSTERS • BANNERS • LOGOS • MERCH",
  description: "Extensive hands-on experience crafting high-impact visual design across digital and physical media:",
  items: [
    {
      title: "Event & Startup Posters",
      desc: "Promotional posters for college fests, technical competitions, and startup marketing campaigns."
    },
    {
      title: "Banners & Digital Creatives",
      desc: "Large-scale event banners, social media announcements, and digital marketing assets."
    },
    {
      title: "Logo & Brand Identity",
      desc: "Distinctive brand marks, emblems, and visual systems (such as Rotorbot Matrix and Drone Club)."
    },
    {
      title: "T-Shirt & Apparel Merchandise",
      desc: "Custom merchandise and typography graphics designed for student clubs, tech fests, and teams."
    }
  ],
  tools: ["Figma", "Canva", "Typography", "Vector Design", "Print & Merch Prep"]
};

export const designCategoriesData: import('../types').DesignCategory[] = [
  {
    id: "festive-posters",
    name: "Festive Posters",
    shortDesc: "Celebration, cultural & patriotic event banners",
    badge: "Festive & Culture",
    works: [
      {
        id: "krishna-janmashtami-poster",
        title: "Happy Krishna Janmashtami",
        subtitle: "Festive Spiritual Typography & Digital Art",
        description: "Intricately composed festive artwork featuring Lord Krishna illustration, custom typography, peacock feather textures, and mandala geometry.",
        imageUrl: "/images/janmashtami-poster.jpg",
        tools: ["Illustration", "Canva", "Typography"],
        year: "2024"
      },
      {
        id: "drone-club-independence-day",
        title: "Happy Independence Day — Drone Club",
        subtitle: "Galgotias Educational Institutions & Rotorbot Matrix",
        description: "Official Independence Day festive digital poster created for the Drone Club and Rotorbot Matrix community, celebrating Indian heritage with high-tech drone imagery and patriotic color palettes.",
        imageUrl: "/images/drone-club-poster.jpg",
        tools: ["Canva", "Figma", "Digital Art"],
        year: "2024"
      }
    ]
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    shortDesc: "Mobile flows, fintech apps & citizen portals",
    badge: "Figma Prototypes",
    works: [
      {
        id: "yojna-setu-ui",
        title: "Yojna Setu Citizen Welfare Mobile App",
        subtitle: "End-to-End User Flow & System Architecture",
        description: "Comprehensive multi-screen mobile flow designed in Figma: Voice Console, AI-matched Scheme Results, Citizen Profile, Transparency & Data metrics, and Application Document Pack.",
        imageUrl: "/images/yojna-setu-ui-flow.jpg",
        tools: ["Figma", "UI/UX Design", "Wireframing", "User Flows", "Accessibility"],
        year: "2025"
      },
      {
        id: "paytm-buildathon-ui",
        title: "Paytm Buildathon Interface Concept",
        subtitle: "Top 5 Finalist — Commended Design",
        description: "High-fidelity interactive prototype engineered with user-centered navigation, clear visual hierarchy, and atomic design system components.",
        tools: ["Figma", "Prototyping", "Fintech UX"],
        year: "Sept 2026"
      }
    ]
  },
  {
    id: "creative-posters",
    name: "Creative Posters",
    shortDesc: "Experimental typography, cultural art & editorial layouts",
    badge: "Creative Series",
    works: [
      {
        id: "bhutan-cultural-poster",
        title: "BHUTAN — The Land of Peace",
        subtitle: "Himalayan Cultural Collage & Editorial Typography",
        description: "Mixed-media editorial poster blending cut-out paper typography, traditional Himalayan attire, prayer wheel symbolism, and Tibetan calligraphy (Zhi De / Peace).",
        imageUrl: "/images/bhutan-poster.jpg",
        tools: ["Canva", "Photoshop", "Editorial Layout", "Typography"],
        year: "2024"
      },
      {
        id: "india-unity-diversity-poster",
        title: "INDIA — Unity In Diversity",
        subtitle: "Architectural Heritage & Modern Transit Poster",
        description: "High-impact editorial cover design juxtaposing the intricate facade of Jaipur's Hawa Mahal with modern passenger trains, celebrating India's synthesis of timeless heritage and forward momentum.",
        imageUrl: "/images/india-unity-poster.jpg",
        tools: ["Photoshop", "Canva", "Typography", "Editorial Design"],
        year: "2024"
      },
      {
        id: "underbuilt-typography-posters",
        title: "UnderBuilt Experimental Poster Series",
        subtitle: "@underbuilt_ Visual Identity",
        description: "Bold exploration of modern brutalist typography, Swiss grid systems, and high-contrast editorial poster compositions celebrating student builder culture.",
        tools: ["Figma", "Typography", "Editorial Layout"],
        year: "2025 – 2026"
      }
    ]
  },
  {
    id: "promotional",
    name: "Promotional",
    shortDesc: "Startup marketing campaigns, commercial ads & banners",
    badge: "Commercial & Fests",
    works: [
      {
        id: "balaji-solar-energy-poster",
        title: "Balaji Entrepreneurs — Switch to Solar Energy",
        subtitle: "Commercial Brand Ad & Lead Generation Campaign",
        description: "Consumer-focused promotional poster designed for Balaji Entrepreneurs in Uttar Pradesh, illustrating solar adoption benefits (70% bill savings, property value, clean energy) with high-conversion consultation CTAs.",
        imageUrl: "/images/balaji-solar-poster.jpg",
        tools: ["Canva", "Ad Creative", "Visual Hierarchy", "Marketing Layout"],
        year: "2024"
      },
      {
        id: "switch-to-solar-clean-energy",
        title: "Switch to Solar — Save More. Power Better.",
        subtitle: "Clean Energy Promotional Flyer & Subsidy Guide",
        description: "Professional promotional flyer emphasizing government solar subsidy assistance (up to ₹1.08 Lakh) and turnkey solar solutions for residential properties.",
        imageUrl: "/images/switch-to-solar-poster.jpg",
        tools: ["Canva", "Figma", "Marketing Collateral"],
        year: "2024"
      },
      {
        id: "smart-farming-accessible-banner",
        title: "Smart Farming Made Accessible — Technical Banner",
        subtitle: "Galgotias University Agri-Tech Infographic",
        description: "Large-format corporate infographic banner illustrating problem vs. solution mapping, modular rover hardware specifications, and multi-purpose crop operations (seeding, spraying, monitoring).",
        imageUrl: "/images/smart-farming-banner.jpg",
        tools: ["Canva", "Technical Infographics", "Banner Layout"],
        year: "2024"
      },
      {
        id: "robotics-workshop-poster",
        title: "10-Day Robotics Workshop Poster",
        subtitle: "Rotorbot Matrix Drone & Robotics Club — GCET",
        description: "High-tech industrial promotional poster design with 3D drone rendering, autonomous rover visuals, and curriculum breakdown for a 10-day hands-on hardware workshop.",
        imageUrl: "/images/robotics-workshop-poster.jpg",
        tools: ["Canva", "Figma", "3D Composition", "Event Branding"],
        year: "2026"
      },
      {
        id: "creatrix-fest-promotions",
        title: "Creatrix Club Fest Promotional Banners",
        subtitle: "College Hackathons & Design Sprints",
        description: "Engaging event announcement posters, speaker banners, and digital creatives driving campus participation for GCET events.",
        tools: ["Figma", "Canva", "Social Marketing"],
        year: "2025 – 2026"
      }
    ]
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    shortDesc: "Custom apparel merchandise, club polos & tech tees",
    badge: "Apparel & Merch",
    works: [
      {
        id: "tinyfish-ai-agents-tshirt",
        title: "TinyFish — AI Agents for the Real Web",
        subtitle: "GFG GCET Custom Graphic Tee (Front & Back)",
        description: "Apparel merchandise concept featuring a clean front pocket fish mascot emblem and an energetic cosmic back print with orbital rings, floating browser windows, and AI agent branding.",
        imageUrl: "/images/tinyfish-tshirt-mockup.jpg",
        tools: ["Figma", "Merchandise Design", "Apparel Mockup", "Vector Art"],
        year: "2025"
      },
      {
        id: "robotics-polo-back",
        title: "Galgotias Robotics Club — Polo (Back View)",
        subtitle: "Cybernetic Low-Poly Skull & Mechanical Gear Art",
        description: "Official club polo back design featuring a glowing cyan geometric skull with mechanical gears, coordinate mesh grids, and hexagonal cyber-circuitry on both sleeves.",
        imageUrl: "/images/robotics-tshirt-back.jpg",
        tools: ["Vector Graphics", "Apparel Design", "Cyberpunk Art", "Typography"],
        year: "2024"
      },
      {
        id: "robotics-polo-front",
        title: "Galgotias Robotics Club — Polo (Front View)",
        subtitle: "Student Council Branding & Neural Network Mesh",
        description: "Front polo composition featuring the official Galgotias Student Council badge, Robotics Club chest crest, and a dynamic wraparound digital neural network mesh across the torso.",
        imageUrl: "/images/robotics-tshirt-front.jpg",
        tools: ["Apparel Layout", "Club Branding", "Figma"],
        year: "2024"
      }
    ]
  },
  {
    id: "logos",
    name: "Logos",
    shortDesc: "Brand marks, high-tech emblems & visual identities",
    badge: "Brand Identity",
    works: [
      {
        id: "rotorbot-matrix-logo",
        title: "Rotorbot Matrix Official Emblem",
        subtitle: "Drone Tech & Robotics Identity",
        description: "High-tech vector mark fusing drone aerodynamics, a camera lens focal point, and electronic circuit traces into a cohesive tech emblem.",
        imageUrl: "/images/rotorbot-matrix-logo.png",
        tools: ["Vector Graphics", "Figma", "Brand Identity"],
        year: "2024"
      },
      {
        id: "underbuilt-logo",
        title: "UnderBuilt Visual Mark",
        subtitle: "Creative Design Brand Identity",
        description: "Glitch-brutalist monogram mark exploring optical distortion and architectural framing for creative graphic showcases.",
        imageUrl: "/images/underbuilt-logo.png",
        tools: ["Figma", "Branding"],
        year: "2025"
      }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Electronics and Communication Engineering (ECE)",
    institution: "Galgotias College of Engineering and Technology (GCET), Greater Noida",
    period: "2025 – 2029 (Currently in 2nd Year)",
    location: "Greater Noida, Uttar Pradesh",
    details: [
      "Currently a 2nd-year undergraduate specializing in ECE with focus on UI/UX, frontend engineering, and IoT.",
      "Coordinator for Creatrix (Design), Technical Enthiran (Robotics), and GFG Student Body.",
      "Combining circuit design and microcontroller fundamentals with modern web interfaces and graphic design."
    ]
  }
];
