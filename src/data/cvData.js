export const cvData = {
  personalInfo: {
    name: "Mohammed Al-Madhoun",
    title: "Full-Stack Developer",
    location: "Gaza, Palestine",
    phone: "+970 59 814 2910",
    email: "moezzatma@gmail.com",
    linkedin: "https://linkedin.com/in/mohammed-e-elmadhoun/",
    github: "https://github.com",
    about: "Final-year Computer Systems Engineering student and Full-Stack Developer with real-world production experience across the Next.js, NestJS, Prisma, and PostgreSQL stack, including shipping a live e-commerce platform. Skilled in building responsive frontend interfaces, designing RESTful APIs, and managing relational databases. Hands-on experience implementing CI/CD pipelines with GitHub Actions and deploying containerized applications on Hetzner Cloud VPS using Docker and Coolify.",
    graduationDate: "Dec 2026",
    status: "Available for Opportunities",
    image: "/profile.jpg"
  },

  education: [
    {
      institution: "Al-Azhar University",
      location: "Gaza, Palestine",
      degree: "B.Sc. in Computer Systems Engineering",
      graduationDate: "Expected Dec 2026",
      status: "Final Year Student",
      description: "GPA: 90%",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems",
        "Operating Systems & Computer Networks",
        "Software Engineering Principles"
      ]
    }
  ],

  training: [
    {
      organization: "TAQAT",
      location: "Gaza City",
      program: "CodMap2 Program",
      period: "May 2026 - Jul 2026",
      description: "Covered Software Engineering fundamentals, including version control with Git/GitHub, building CI/CD pipelines, understanding the importance of Docker and building Docker images for projects, and API testing/documentation using Postman.",
      topics: [
        "Git & GitHub Version Control",
        "CI/CD Pipelines",
        "Docker & Containerization",
        "API Testing with Postman"
      ],
      outcomes: [
        "Implemented CI/CD pipelines",
        "Built and deployed Docker images"
      ],
      hasCertificate: true,
      certificateTitle: "CodeMap 2026 Certificate",
      certificateImage: "/certificates/taqat_certificate.png"
    },
    {
      organization: "Gaza Sky Geeks",
      location: "Remote",
      program: "SkillStack Path: Data Structures & Algorithms (Python)",
      period: "Apr 2025 - Aug 2025",
      description: "Covered arrays, linked lists, stacks, queues, trees, graphs, searching/sorting, recursion, and complexity analysis.",
      topics: [
        "Arrays, Linked Lists, Stacks, Queues",
        "Trees and Graphs",
        "Searching and Sorting Techniques",
        "Recursion",
        "Complexity Analysis"
      ],
      outcomes: [
        "Improved algorithmic problem-solving",
        "Mastered complexity analysis"
      ],
      hasCertificate: true,
      certificateTitle: "Data Structures & Algorithms Certificate",
      certificateImage: "/certificates/gsg_certificate.png"
    }
  ],

  projects: [
    {
      id: "gaza-gate",
      title: "Gaza Gate Platform MVP",
      category: "Live Production Project",
      location: "Live site: gazagate.store",
      url: "https://gazagate.store",
      subtitle: "Full-Featured E-commerce Platform",
      summary: "Collaborated with a cross-functional team to build and ship a full-featured, live e-commerce platform.",
      techStack: ["React.js", "Express.js", "Docker", "Coolify", "VPS Cloud", "GitHub Actions"],
      details: [
        "Collaborated with a cross-functional team to build and ship a full-featured, live e-commerce platform, developing both frontend (React.js) and backend (Express.js) components.",
        "Implemented a CI/CD pipeline using GitHub Actions to automate build, testing, and deployment processes.",
        "Deployed and managed the application on a VPS Cloud using Docker containers orchestrated with Coolify.",
        "Conducted system testing to verify functionality, reliability, and performance prior to release."
      ],
      features: [
        "Responsive frontend with React.js",
        "Robust backend API with Express.js",
        "Automated CI/CD with GitHub Actions",
        "Containerized deployment on  Cloud VPS"
      ]
    },
    {
      id: "rukba-app",
      title: "Rukba Application",
      category: "Graduation Project (In Progress)",
      location: "Gaza, Palestine",
      subtitle: "Transportation Booking System",
      summary: "Building a full-stack transportation booking system using NestJS and PostgreSQL.",
      techStack: ["NestJS", "Prisma ORM", "PostgreSQL", "RESTful API"],
      details: [
        "Building a full-stack transportation booking system using NestJS for backend development, with Prisma ORM and PostgreSQL for data modeling and persistence.",
        "Designing and implementing RESTful APIs and a relational database schema to manage routes, bookings, and user accounts."
      ],
      features: [
        "RESTful APIs for user and booking management",
        "Relational database schema with PostgreSQL",
        "Data modeling and persistence via Prisma ORM"
      ]
    },
    {
      id: "nextjs-portfolio",
      title: "Next.js Web Projects",
      category: "Personal Projects",
      location: "Remote",
      subtitle: "Personal Portfolio & Presentation Website",
      summary: "Designed and developed a personal portfolio and presentation website using Next.js.",
      techStack: ["Next.js", "React.js", "Responsive UI", "CSS3"],
      details: [
        "Designed and developed a personal portfolio and presentation website using Next.js with a component-based, responsive UI."
      ],
      features: [
        "Component-based architecture",
        "Responsive User Interface",
        "Fast performance and optimized loading"
      ]
    }
  ],

  skills: {
    programming: [
      { name: "JavaScript (ES6+)", level: 90, category: "Languages" },
      { name: "Python", level: 85, category: "Languages" },
      { name: "Java", level: 80, category: "Languages" }
    ],
    frontend: [
      { name: "Next.js", level: 90, category: "Front-End" },
      { name: "React.js", level: 85, category: "Front-End" },
      { name: "HTML5 / CSS3", level: 88, category: "Front-End" },
      { name: "Responsive UI Design", level: 90, category: "Front-End" }
    ],
    backend: [
      { name: "NestJS", level: 85, category: "Back-End" },
      { name: "Node.js", level: 80, category: "Back-End" },
      { name: "RESTful API Design", level: 90, category: "Back-End" }
    ],
    database: [
      { name: "PostgreSQL", level: 85, category: "Database" },
      { name: "Prisma ORM", level: 88, category: "Database" },
      { name: "Relational DB Design", level: 85, category: "Database" }
    ],
    devops: [
      { name: "Docker", level: 80, category: "DevOps & CI/CD" },
      { name: "GitHub Actions", level: 85, category: "DevOps & CI/CD" },
      { name: "Coolify & Hetzner", level: 80, category: "DevOps & CI/CD" },
      { name: "Git / GitHub", level: 90, category: "DevOps & CI/CD" }
    ],
    core: [
      { name: "Object-Oriented Programming", level: 88, category: "Core Engineering" },
      { name: "Data Structures & Algorithms", level: 85, category: "Core Engineering" }
    ],
    soft: [
      "Self-Learner",
      "Teamwork & Collaboration",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Communication"
    ]
  }
};

