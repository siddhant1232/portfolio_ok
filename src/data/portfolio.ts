export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problem: string;
  implementation: string[];
  keyDecisions: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  type: "ai-agents" | "distributed-systems" | "full-stack";
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  venue?: string;
  date: string;
  description: string;
  badge: string;
  highlight?: boolean;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Siddhant Gupta",
  title: "Full Stack Developer | Backend Engineering | AI-Powered Applications",
  roleHeadline: "Full Stack Developer",
  location: "Bhopal, Madhya Pradesh, India",
  timezone: "IST (UTC+5:30)",
  availability: "OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES",
  email: "siddhantgupta797400@gmail.com",
  phone: "+91 62632 11405",
  github: "https://github.com/siddhant1232",
  linkedin: "https://www.linkedin.com/in/siddhant62632",
  bio: {
    hero: "Hi, I'm Siddhant Gupta — a Full Stack Developer passionate about building scalable backend systems, intuitive user experiences, and AI-powered applications.",
    supporting: "From designing responsive interfaces to engineering distributed backend architectures, I enjoy turning complex problems into practical software solutions.",
    aboutHeading: "Curiosity drives the build.",
    aboutParagraphs: [
      "I'm a Computer Science undergraduate at Technocrats Institute of Technology, Bhopal, graduating in 2027.",
      "I enjoy developing complete software products and exploring the engineering decisions behind them.",
      "My interests include full-stack development, backend engineering, distributed systems, system design, and applied AI.",
      "During my internship at Codec Technologies India, I worked on an e-commerce platform, developed reusable React components, integrated production APIs, and implemented backend functionality.",
      "I also enjoy participating in hackathons, experimenting with emerging technologies, and building projects that solve practical problems.",
    ],
  },
  highlights: [
    {
      title: "B.Tech CSE — 2027",
      subtitle: "Technocrats Institute of Technology",
      description: "Undergraduate degree focusing on core CS fundamentals, algorithms, and distributed systems.",
    },
    {
      title: "SIH 2025 National Round",
      subtitle: "Smart India Hackathon Finalist",
      description: "Presented hardware solution at IIT Roorkee as part of a 6-member team advancing past national selection.",
    },
    {
      title: "Full Stack Development",
      subtitle: "End-to-End Product Lifecycle",
      description: "Comfortable spanning UI design, typed REST APIs, caching, asynchronous jobs, and cloud deployment.",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Technocrats Institute of Technology",
    location: "Bhopal, Madhya Pradesh, India",
    period: "August 2023 – May 2027",
    status: "Graduation Expected May 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Codec Technologies India",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 mos",
    period: "October 2025 – December 2025",
    description:
      "Contributed to core e-commerce platform architecture, building modular React interfaces, secure payment and authentication pipelines, and scalable backend REST APIs.",
    responsibilities: [
      "Developed 8 reusable React.js components across 6 modules of an e-commerce platform using modern ES6+ patterns.",
      "Integrated 3 production APIs, including Stripe payment workflows, Clerk authentication, and JWT-based role authorization.",
      "Developed backend REST APIs using Node.js and Express.js for gamification and digital wallet features.",
      "Collaborated with a 3-member development team, addressing code review feedback and resolving cross-browser UI issues using Chrome DevTools.",
      "Prepared production-ready code for deployment on AWS EC2 and integrated Amazon S3 for application asset storage.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Stripe",
      "Clerk",
      "JWT",
      "AWS EC2",
      "Amazon S3",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "multi-agent-system",
    title: "Multi-Agent Research & Report System",
    subtitle: "Autonomous Research Orchestration Engine",
    tagline: "LangGraph-powered collaborative agents with deterministic typed state transitions",
    description:
      "An AI-powered multi-agent research system designed to coordinate specialized agents for research planning, information gathering, and report synthesis.",
    problem:
      "Single-prompt LLM interactions fail when tasked with multi-step technical investigations. They hallucinate citations, lack structured research methodologies, and cannot self-correct during exploration.",
    implementation: [
      "Architected a 3-agent orchestration pipeline using LangGraph.",
      "Implemented Planner, Researcher, and Synthesizer agents.",
      "Used structured state handoffs through typed schemas instead of unstructured free text.",
      "Engineered an API client with exponential backoff retry logic.",
      "Created an offline-runnable unit test suite.",
    ],
    keyDecisions: [
      "State Isolation: Typed Pydantic models enforce schema guarantees between agent nodes, preventing hallucinated keys from breaking downstream tasks.",
      "Resilience Strategy: Configured exponential backoff with jitter on LLM API calls to gracefully absorb provider rate limits.",
      "Testability: Decoupled agent decision logic from network calls to enable 100% offline unit testing of state transitions.",
    ],
    techStack: ["Python", "LangGraph", "Google Gemini API", "Pydantic"],
    githubUrl: "https://github.com/siddhant1232",
    featured: true,
    type: "ai-agents",
  },
  {
    id: "rate-limiter-microservices",
    title: "Distributed API Rate Limiter & Microservices Platform",
    subtitle: "High-Throughput Traffic Management & Service Mesh",
    tagline: "Redis-backed distributed rate limiting with sliding window counter & asynchronous BullMQ workers",
    description:
      "A backend engineering project focused on API traffic management, distributed rate limiting, and scalable microservice communication.",
    problem:
      "Standard in-memory rate limiters fail across horizontally scaled container instances, causing either inconsistent quotas or single points of failure under peak traffic bursts.",
    implementation: [
      "Designed a Redis-backed distributed rate limiter.",
      "Implemented Token Bucket, Fixed Window, and Sliding Window algorithms.",
      "Designed a containerized microservices architecture.",
      "Developed API Gateway, Authentication, User, and Notification services.",
      "Implemented JWT authentication.",
      "Integrated BullMQ for asynchronous job processing.",
    ],
    keyDecisions: [
      "Atomic Redis Primitives: Used Redis Sorted Sets and Lua scripts to execute sliding window counter operations atomically in sub-millisecond latency.",
      "Service Decoupling: Offloaded email notifications and heavy audit logging to BullMQ background workers, keeping gateway p99 response times minimal.",
      "Independent Persistence: Segmented relational user profiles into PostgreSQL and high-volume unstructured activity logs into MongoDB.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "BullMQ",
    ],
    githubUrl: "https://github.com/siddhant1232",
    featured: true,
    type: "distributed-systems",
  },
  {
    id: "conciso-ai-summarizer",
    title: "Conciso — AI PDF Summarizer",
    subtitle: "Intelligent Document Analysis Engine",
    tagline: "End-to-end full-stack Next.js application processing 50+ page technical publications",
    description:
      "An AI-powered document summarization application designed to simplify the process of understanding lengthy PDF documents.",
    problem:
      "Engineers and researchers frequently face dense 50+ page technical documents, whitepapers, and manuals where extracting actionable executive summaries manually requires hours.",
    implementation: [
      "Developed a full-stack Next.js and TypeScript application.",
      "Implemented PDF upload and summarization workflows.",
      "Supported summarization of documents exceeding 50 pages.",
      "Created a responsive interface with reusable components.",
      "Implemented a PostgreSQL-backed data layer.",
    ],
    keyDecisions: [
      "Hierarchical Chunking: Designed a two-stage sliding window text extraction pipeline that preserves structural section headings before calling LLM summaries.",
      "PostgreSQL Metadata & History: Persisted user document metadata, processing status, and generated summaries with indexed relational schemas.",
      "Type-Safe Server Actions: Leveraged Next.js Server Actions with TypeScript validation for seamless client-to-backend data flow.",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AI APIs"],
    githubUrl: "https://github.com/siddhant1232",
    featured: true,
    type: "full-stack",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "PROGRAMMING LANGUAGES",
    description: "Core languages used across frontend, backend systems, and data pipelines.",
    skills: [
      { name: "JavaScript (ES6+)", focus: "Modern asynchronous idioms & closures" },
      { name: "TypeScript", focus: "Strict typing, generics & schemas" },
      { name: "Java", focus: "OOP, multithreading & collections" },
      { name: "Python", focus: "AI tooling, LangGraph & scripting" },
      { name: "SQL", focus: "Relational queries, indexing & schema design" },
      { name: "HTML5", focus: "Semantic markup & accessibility" },
      { name: "CSS3", focus: "Modern layouts, Flexbox & CSS Grid" },
    ],
  },
  {
    category: "FRONTEND",
    description: "Component-driven client architecture and responsive user interfaces.",
    skills: [
      { name: "React.js", focus: "Hooks, state management & reusable design" },
      { name: "Next.js", focus: "App Router, SSR & Server Actions" },
      { name: "Tailwind CSS", focus: "Utility-first design systems" },
      { name: "Responsive Design", focus: "Mobile-first layouts & viewport optimization" },
    ],
  },
  {
    category: "BACKEND",
    description: "Server architecture, API design, and distributed service communication.",
    skills: [
      { name: "Node.js", focus: "Event loop, non-blocking I/O & streams" },
      { name: "Express.js", focus: "Middleware, routing & REST APIs" },
      { name: "REST APIs", focus: "Resource design, status codes & specs" },
      { name: "Microservices", focus: "Service segregation & decoupled gateways" },
      { name: "JWT Authentication", focus: "Token signing, verification & RBAC" },
    ],
  },
  {
    category: "DATABASES",
    description: "Data storage, in-memory caching, and vector persistence.",
    skills: [
      { name: "PostgreSQL", focus: "Relational modeling, indexing & ACID" },
      { name: "MongoDB", focus: "Document storage & flexible schemas" },
      { name: "Redis", focus: "Distributed caching, rate limiting & sorted sets" },
      { name: "ChromaDB", focus: "Vector embeddings for AI retrieval" },
      { name: "Firebase", focus: "Realtime data sync & serverless features" },
    ],
  },
  {
    category: "DEVOPS AND CLOUD",
    description: "Containerization, cloud infrastructure, and version control.",
    skills: [
      { name: "Docker", focus: "Multi-stage builds & container orchestration" },
      { name: "AWS EC2", focus: "Compute instances, security groups & SSH" },
      { name: "AWS S3", focus: "Object storage & asset distribution" },
      { name: "Git", focus: "Version control, branching & PR workflows" },
    ],
  },
  {
    category: "AI AND LLM",
    description: "Applied generative AI, multi-agent frameworks, and retrieval pipelines.",
    skills: [
      { name: "Google Gemini API", focus: "Multimodal prompting & streaming" },
      { name: "Retrieval-Augmented Generation (RAG)", focus: "Chunking, vector search & grounding" },
      { name: "Prompt Engineering", focus: "Few-shot schemas & deterministic outputs" },
    ],
  },
  {
    category: "ENGINEERING CONCEPTS",
    description: "Underlying principles for building scalable and reliable software.",
    skills: [
      { name: "System Design", focus: "Architectural blueprints & trade-off analysis" },
      { name: "Distributed Systems", focus: "Consistency, latency & fault tolerance" },
      { name: "Debugging", focus: "Chrome DevTools, profilers & root cause analysis" },
      { name: "Performance Optimization", focus: "Asset compression & caching strategies" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Smart India Hackathon 2025 — National Round",
    organization: "Ministry of Education & AICTE",
    venue: "IIT Roorkee",
    date: "2025",
    badge: "National Finalist",
    highlight: true,
    description:
      "Presented a hardware solution at IIT Roorkee as part of a 6-member team, advancing from competitive college-level internal selection to the national round.",
    tags: ["National Finalist", "IIT Roorkee", "Hardware Solution", "Team Leadership"],
  },
  {
    title: "Hack-AI-thon — SBI Life",
    organization: "SBI Life Insurance",
    venue: "National Hackathon",
    date: "2025",
    badge: "Finalist / Presenter",
    highlight: false,
    description:
      "Designed 4 wireframes for an AI-driven UI/UX redesign of the SBI Life platform, converted them into functional webpages, and presented the solution to a 2-judge panel.",
    tags: ["UI/UX Redesign", "Functional Webpages", "Panel Presentation", "AI Integration"],
  },
  {
    title: "NPTEL Certification — Programming in Java",
    organization: "IIT Kharagpur / NPTEL",
    venue: "National Certification",
    date: "2024",
    badge: "Elite Certification",
    highlight: false,
    description:
      "Completed comprehensive curriculum and rigorous proctored examination covering Object-Oriented Programming, multithreading, collections framework, and robust application design.",
    tags: ["Java", "OOP", "Data Structures", "Verified Credential"],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

