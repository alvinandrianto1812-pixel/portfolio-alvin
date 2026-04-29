export const portfolioData = {
  personalInfo: {
    name: "Alvin Andrianto",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "South Tangerang, Indonesia",
    email: "alvinandrianto1812@gmail.com",
    phone: "+62 812-8606-8181",
    linkedin: "https://www.linkedin.com/in/alvin-andrianto",
    github: "https://github.com/alvinandrianto1812-pixel",
    cvLink: "https://drive.google.com/uc?export=download&id=1iTQO04-pRqa_QbcTp5lIqi8OuvvKpWfE",
    tagline: "Open for full-time roles, freelance, and collaboration",
    subtext: "Fresh graduate Informatika · GPA 3.88 · Open to opportunities",
    stats: {
      gpa: "3.88",
      university: "Universitas Bunda Mulia",
      years: "2022-2026",
    }
  },
  heroStats: [
    { label: "GPA", value: "3.88" },
    { label: "Projects", value: "8+" },
    { label: "Org Exp", value: "2yr" },
    { label: "HKI Cert", value: "1" },
  ],
  about: {
    bio: "I'm Alvin — a fresh graduate in Informatics Engineering from Universitas Bunda Mulia (GPA 3.88). I build full-stack web and mobile applications, design UI/UX in Figma, and work with machine learning models. During university, I taught Python programming as an Assistant Lecturer and led research programs at HIMTI, the university's Informatics student organization. My project ISOFRAUD received an official Intellectual Property Rights certificate (HKI) from Indonesia's DJKI in 2026.",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Completed Projects", value: "8+" },
      { label: "Certifications", value: "5+" },
      { label: "Technologies", value: "10+" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML & CSS", "Figma"]
    },
    {
      category: "Backend & DB",
      items: ["Python (Flask)", "Supabase", "MySQL", "REST API"]
    },
    {
      category: "Mobile",
      items: ["Flutter", "Android Studio (Kotlin)"]
    },
    {
      category: "AI & Tools",
      items: ["Machine Learning", "Google Analytics", "Git", "Prompt Engineering"]
    }
  ],
  projects: [
    {
      id: "isofraud",
      title: "ISOFRAUD",
      type: "featured",
      badge: "HKI DJKI 2026",
      description: "Full-stack fraud detection using Isolation Forest ML. Complete pipeline: EDA, model training, 1200+ hyperparameter trials, threshold optimization, Flask deployment with admin & user dashboards.",
      tech: ["Python", "Flask", "Isolation Forest", "MySQL"],
      link: "https://github.com/alvinandrianto1812-pixel/ISOFRAUD",
      linkType: "github"
    },
    {
      id: "nutriscan",
      title: "NutriScan",
      type: "featured",
      badge: "TSDN Competition",
      description: "Full-stack stunting detection app built for TSDN (National Data Science Competition). Developed complete system including backend, frontend UI, database architecture, and UI/UX design in Figma.",
      tech: ["Figma", "Machine Learning", "Python"],
      link: "https://www.figma.com/design/IeRcTHNWdEmPZlLV2vg9Il/Pendeteksi-Stunting",
      linkType: "figma"
    },
    {
      id: "techcity",
      title: "TechCity",
      type: "regular",
      description: "E-commerce mobile app for electronics with admin & user roles.",
      tech: ["Flutter", "Supabase"],
      link: "https://github.com/alvinandrianto1812-pixel/TechCity",
      linkType: "github"
    },
    {
      id: "quantumreads",
      title: "Quantum Reads",
      type: "regular",
      description: "Library management Android app with role-based access.",
      tech: ["Kotlin", "Android Studio", "MySQL"],
      link: "https://github.com/alvinandrianto1812-pixel/QuantumReads",
      linkType: "github"
    },
    {
      id: "yoinews",
      title: "Yoinews",
      type: "regular",
      description: "News website UI/UX with fully connected interactive Figma prototype.",
      tech: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/ZuzNRRFKw3rZbewhk8xNcU/Yoinews",
      linkType: "figma"
    },
    {
      id: "doitnow",
      title: "Do It Now",
      type: "regular",
      description: "Productivity app with wireframe, prototype & full UI/UX design.",
      tech: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/sDaGuqeGht1RxHhBzsHI9e/Todolist_IMK",
      linkType: "figma"
    },
    {
      id: "zerona",
      title: "Zerona",
      type: "regular",
      description: "Ride-hailing app (eco-friendly, shows carbon emission per vehicle). Full UX flow: wireframe to prototype to final UI in Figma.",
      tech: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/SS519A5hp7gkW3mGmyjTPN/Kelompok-4_ZERONA",
      linkType: "figma"
    },
    {
      id: "dearmebeauty",
      title: "Dear Me Beauty",
      type: "regular",
      description: "Brand website collab for beauty brand. Delivered: Wix site, creative brief, press release, segmentation, feature copywriting.",
      tech: ["Wix", "Copywriting", "Creative Strategy"],
      link: "https://yulbuyul24.wixstudio.com/dmb-kel2",
      linkType: "live"
    }
  ],
  experience: [
    {
      role: "Research & Development Division",
      company: "HIMTI (Informatics Engineering Student Association) — Universitas Bunda Mulia",
      period: "Oct 2023 - Jun 2025",
      description: "Managed and analyzed student participation databases for informatics academic programs. Orchestrated IT logistics, technical research, and resource procurement for large-scale faculty events. Developed structured technical educational materials for community outreach.",
      pkm: [
        {
          title: "Python Programming Fundamentals",
          location: "Candle Tree High School, Tangerang",
          detail: "8 students, Grade 10",
          course: "HIMTI Community Service",
          image: "/images/pkm/pkm-1.jpg"
        },
        {
          title: "Web Development (HTML & CSS)",
          location: "SMK Negeri 1 Tangerang",
          detail: "40 students",
          course: "IT Professional Course",
          image: "/images/pkm/pkm-2.jpg"
        },
        {
          title: "Python & Machine Learning for Big Data",
          location: "SMA Mater Dei Pamulang",
          detail: "51 students across 2 sessions",
          course: "Big Data Course",
          images: [
            "/images/pkm/pkm-3.jpg",
            "/images/pkm/pkm-4.jpg"
          ]
        }
      ]
    },
    {
      role: "Assistant Lecturer",
      company: "HIMTI (Informatics Engineering Student Association) — Universitas Bunda Mulia",
      period: "Oct 2023 - Jun 2025",
      description: "Led comprehensive Python programming sessions focusing on algorithmic logic, code architecture, and practical implementations. Provided hands-on technical mentoring and code debugging support to strengthen students' software engineering fundamentals."
    },
    {
      role: "Barista",
      company: "LoopLine Coffee",
      period: "Feb - Jun 2025",
      description: "Leveraged data-driven inventory management systems to maintain 90% stock accuracy, optimizing operational decisions and reducing product waste. Consistently exceeded monthly sales targets by 30%."
    }
  ],
  certifications: [
    {
      title: "HKI Website ISOFRAUD",
      issuer: "DJKI",
      year: "2026",
      credentialId: "EC002026031462",
      viewUrl: "https://drive.google.com/file/d/1stizYxCVK_F0lN3gDl54PumcdStMaYpu/view?usp=drive_link"
    },
    {
      title: "IBM AI Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "April 2026",
      viewUrl: "https://drive.google.com/file/d/10kSONCjpA-dGZ-UxvLqjKBXaAyFJkIU5/view?usp=drive_link"
    },
    {
      title: "Data Analytics",
      issuer: "RevoU",
      credentialId: "DAMC-060426-01-1-00294"
    },
    {
      title: "Artificial Intelligence BIZ",
      issuer: "CertNexus"
    },
    {
      title: "Google Analytics",
      issuer: "Google",
      credentialId: "179751102",
      viewUrl: "https://drive.google.com/file/d/1miN9d2sRmgks5Sj_LuU5TP9cGCSacs-r/view?usp=drive_link"
    },
    {
      title: "Conversion Optimization",
      issuer: "Google",
      credentialId: "179752264"
    }
  ]
};
