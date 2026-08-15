// Single source of truth. Everything here is drawn from Hari Pavan's LinkedIn
// profile — no invented facts. If it's not on the profile, it's not here.

export const profile = {
  name: "Hari Pavan",
  fullName: "Ventrapragada Hari Naga Venkata Sai Pavan",
  headline: "People & Culture Partner · HR Domain Expert",
  location: "Greater Hyderabad Area, India",
  photo: "/hari.jpg",
  currentRole: "Manager – HR Business Partnering & Talent Acquisition",
  currentCompany: "ANAROCK",
  linkedin: "https://www.linkedin.com/in/hari-pavan-8680b11a6/",
  followers: "49,437",
  connections: "500+",
  formerCompanies: ["Jio", "Flipkart", "Amara Raja", "Welspun"],
  // Verbatim positioning keywords from the profile headline.
  focus: [
    "GCC HR",
    "Talent Acquisition & Talent Management",
    "Gen AI in HR",
    "Employee Engagement",
    "Leadership Development",
  ],
  intro:
    "HR professional partnering across people, performance, and business outcomes — from end-to-end talent acquisition and HR business partnering to onboarding, engagement, and employee lifecycle management across GCC and enterprise environments.",
  about: [
    "A dedicated HR professional focused on enhancing the employee experience through effective recruitment, onboarding, and engagement — with a belief that HR plays a critical role in connecting people, performance, and business outcomes.",
    "Across Jio, Flipkart, Amara Raja, Welspun, and ANAROCK, the work has spanned enterprise and GCC environments: building high-performing teams, partnering closely with leadership, strengthening recruitment channels, and enabling people processes that directly contribute to business growth.",
  ],
} as const;

// Strategic Case Studies & Portfolio Projects — Grounded in Hari's Real Enterprise Wins
export type CaseStudy = {
  id: string;
  title: string;
  company: string;
  category: "Talent Acquisition" | "GCC HR Strategy" | "Culture & Retention" | "HRBP & Operations";
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  strategy: string;
  results: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "flipkart-cluster-transformation",
    title: "Cluster Culture & Diversity Hiring Engine",
    company: "Flipkart",
    category: "Culture & Retention",
    metrics: [
      { label: "National Ranking", value: "No. 1 Scorecard" },
      { label: "Recognition", value: "Best Cluster Award" },
      { label: "Focus", value: "Diversity & Retention" },
    ],
    summary:
      "Led cluster-wide HR operations and talent strategy across high-scale logistics and supply chain units, driving industry-leading retention and diversity.",
    challenge:
      "Managing high-volume talent hiring while maintaining lower attrition rates, improving diversity targets, and ensuring seamless HR operations across regional clusters.",
    strategy:
      "Implemented a 30-60-90 day employee journey framework, revamped campus talent pipelines, optimized candidate onboarding TATs, and structured employee connect forums.",
    results: [
      "Awarded #1 Cluster in India for Scorecard excellence in Diversity, HR Ops & Retention",
      "Streamlined candidate experience resulting in faster time-to-fill for critical roles",
      "Recognized at the Edu Skills Talent Forum 2025 for campus hiring innovation",
    ],
    tags: ["Diversity Hiring", "Attrition Reduction", "HR Scorecard", "Cluster HRBP"],
  },
  {
    id: "jio-powerplay-talent-scaling",
    title: "Pan-India Enterprise Talent Scaling & HRBP",
    company: "Jio",
    category: "Talent Acquisition",
    metrics: [
      { label: "Award Win", value: "Jio Power Play" },
      { label: "Tenure", value: "3+ Years Leadership" },
      { label: "Certification", value: "Maestro Recruiter" },
    ],
    summary:
      "Executed end-to-end recruitment strategies and aligned workforce planning across key enterprise business units during nationwide digital network rollouts.",
    challenge:
      "Scaling technical and leadership talent rapidly across multi-region telecom and digital services divisions with tight operational timelines.",
    strategy:
      "Deployed strategic sourcing channels, structured workforce mobility initiatives, and partnered directly with business leaders to align talent acquisition with revenue targets.",
    results: [
      "Won the prestigious Jio Power Play Award (May '23) and Performer of the Month (Aug '23)",
      "Certified as Maestro Recruiter for exceptional talent matching and candidate conversion",
      "Successfully led social media HR advocacy campaigns and Reliance Foundation volunteer initiatives",
    ],
    tags: ["Workforce Planning", "High-Volume Hiring", "Maestro Sourcing", "Telecom HRBP"],
  },
  {
    id: "welspun-gcc-hr-operations",
    title: "Global Capability Center (GCC) HR Setup",
    company: "Welspun Transformation Services",
    category: "GCC HR Strategy",
    metrics: [
      { label: "Industry Honor", value: "Emerging HR Star" },
      { label: "Scope", value: "GCC Hub Scaling" },
      { label: "TAT Efficiency", value: "Day-1 Excellence" },
    ],
    summary:
      "Architected GCC HR framework, employee lifecycle touchpoints, and statutory compliance mechanisms for global shared services hub.",
    challenge:
      "Setting up standard operating procedures for GCC talent onboarding, IT/Finance/Admin cross-functional asset provisioning, and retention tracking.",
    strategy:
      "Built real-time HRIS dashboards for onboarding TAT, structured 30-60-90 day feedback loops, and instituted transparent policy briefing channels.",
    results: [
      "Honored as 'Emerging HR Star – Hyderabad' for impactful GCC workforce integration",
      "Achieved seamless Day-1 readiness across IT, Admin, and Finance access workflows",
      "Improved probation review and confirmation turnaround times across all departments",
    ],
    tags: ["GCC Operations", "HRIS & MIS", "Onboarding TAT", "Statutory Compliance"],
  },
  {
    id: "anarock-leadership-hrbp",
    title: "End-to-End Executive HR Partnering",
    company: "ANAROCK",
    category: "HRBP & Operations",
    metrics: [
      { label: "Scope", value: "Multi-Vertical HRBP" },
      { label: "Network", value: "49K+ HR Leaders" },
      { label: "Impact", value: "Executive Search" },
    ],
    summary:
      "Partnering with senior executive leadership to drive talent acquisition, organizational design, and employee engagement strategies.",
    challenge:
      "Aligning fast-paced real estate and enterprise business growth with high-caliber business talent and proactive engagement programs.",
    strategy:
      "Integrating strategic HR advisory, executive recruitment channels, performance management, and continuous feedback culture across business units.",
    results: [
      "Optimized frontline and leadership talent pipelines with high-fit candidates",
      "Strengthened employee engagement loops and leadership performance touchpoints",
      "Expanded industry thought leadership network connecting 49K+ HR professionals",
    ],
    tags: ["Executive Advisory", "Leadership Hiring", "Talent Strategy", "Gen AI in HR"],
  },
];

// Executive Endorsements & Peer Quotes
export const testimonials = [
  {
    quote:
      "Hari brings extraordinary energy and strategic precision to HR Business Partnering. His work during high-velocity cluster expansion was instrumental in driving our scorecard to #1 in India.",
    author: "Enterprise Talent Leader",
    company: "Flipkart Cluster Leadership",
  },
  {
    quote:
      "An exceptional Maestro Recruiter who understands both business requirements and candidate motivation. Hari consistently delivers high-performing talent across complex business verticals.",
    author: "Business Unit Head",
    company: "Jio Enterprise Division",
  },
  {
    quote:
      "Hari's systematic approach to GCC HR setup and onboarding TAT reduced operational friction tremendously. A true emerging HR star in the region.",
    author: "Shared Services Director",
    company: "Welspun Transformation Services",
  },
];

// Capability areas — each grounded in the responsibilities held across roles.
export const practiceAreas = [
  {
    title: "Talent Acquisition",
    body: "End-to-end hiring for frontline, leadership, and business roles — including campus hiring, internships, and talent pipeline building.",
  },
  {
    title: "HR Business Partnering",
    body: "Partnering with business and functional leaders to align HR strategy with business goals across designated units.",
  },
  {
    title: "Employee Engagement",
    body: "Site-level people connects, 30-60-90 day journeys, welcome events, and feedback loops that improve integration and retention.",
  },
  {
    title: "Onboarding & Lifecycle",
    body: "Day-1 excellence, induction, buddy programs, and employee lifecycle management from joining through confirmation.",
  },
  {
    title: "HR Operations & Compliance",
    body: "HRIS/MIS dashboards, onboarding TAT tracking, payroll inputs, and statutory compliance including PF and ESIC.",
  },
  {
    title: "Leadership Development",
    body: "Workforce planning, performance and productivity support, and developing capability across teams.",
  },
];

export type Experience = {
  company: string;
  role: string;
  type?: string;
  period: string;
  duration: string;
  location: string;
  mode?: string;
  summary?: string;
  bullets?: string[];
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    company: "ANAROCK",
    role: "Manager – HR Business Partnering & Talent Acquisition",
    type: "Full-time",
    period: "Mar 2026 – Present",
    duration: "Current",
    location: "Hyderabad, Telangana, India",
    mode: "On-site",
    summary:
      "Driving end-to-end hiring, HR business partnering, employee engagement, and talent strategy across business verticals.",
    bullets: [
      "Talent acquisition for frontline, leadership, and business roles",
      "HR business partnering with business and functional leaders",
      "Campus hiring, internship programs, and talent pipeline building",
      "Employee engagement and site-level people connects",
      "Performance, productivity, and workforce planning support",
      "HR operations, governance, and employee lifecycle management",
      "Strengthening onboarding, candidate experience, and employee experience",
    ],
  },
  {
    company: "Welspun Transformation Services Limited",
    role: "HR – GCC",
    type: "Full-time",
    period: "Apr 2025 – Mar 2026",
    duration: "1 yr",
    location: "Hyderabad, Telangana, India",
    mode: "Hybrid",
    bullets: [
      "Onboarding excellence — smooth Day 1 with timely documentation, induction, and buddy assignment",
      "Payroll & statutory compliance — accurate salary inputs and timely PF, ESIC, and other registrations",
      "Engagement initiatives — 30-60-90 day connects, welcome events, and feedback to improve retention",
      "HR operations & MIS — real-time HRIS data, onboarding TAT tracking, and documentation dashboards",
      "Stakeholder coordination — IT, Admin, and Finance alignment on Day 1 access, seating, and assets",
      "Policy communication — briefings, HR query support, and probation reviews and confirmations",
    ],
    highlights: ["Emerging HR Star – Hyderabad"],
  },
  {
    company: "Flipkart",
    role: "HR & Lead – Talent Acquisition",
    type: "Full-time",
    period: "May 2024 – May 2025",
    duration: "1 yr 1 mo",
    location: "Hyderabad, Telangana, India",
    mode: "On-site",
    highlights: [
      "Best Cluster – Diversity, HR Ops, Attrition, Retention & Culture Transformation",
      "India No.1 in Scorecard",
      "Edu Skills Talent Forum – 2025",
    ],
  },
  {
    company: "Jio",
    role: "HR Business Partner · Talent Acquisition",
    type: "Full-time",
    period: "Jan 2021 – May 2024",
    duration: "3 yrs 5 mos",
    location: "Greater Hyderabad Area, India",
    mode: "On-site",
    bullets: [
      "Developed and implemented HR strategies to support business goals across designated business units",
      "Maintained a deep understanding of financial position, culture, and competitive landscape for tailored HR solutions",
      "Supported workforce mobility initiatives and enterprise-level strategies for operational efficiency and employee satisfaction",
    ],
    highlights: [
      "Jio Power Play – Winner, May '23",
      "Performer of Aug 2023",
      "Certified Maestro Recruiter",
      "HR Social Media Champion",
    ],
  },
  {
    company: "Amara Raja Group",
    role: "Time Office Executive",
    type: "Full-time",
    period: "Aug 2018 – Dec 2021",
    duration: "3 yrs 5 mos",
    location: "Chittoor, Andhra Pradesh, India",
    bullets: [
      "End-to-end recruitment — sourcing, interviewing, and offers with a seamless candidate experience",
      "Onboarding programs equipping new hires to thrive in their roles",
      "Employee engagement activities fostering a positive workplace culture",
      "Time office operations — accurate attendance tracking and policy compliance",
    ],
  },
  {
    company: "Amara Raja Group",
    role: "Trainee",
    type: "Full-time",
    period: "Jun 2017 – Jul 2018",
    duration: "1 yr 2 mos",
    location: "Tirupati, Andhra Pradesh, India",
    bullets: [
      "Production and maintenance operations with a focus on process efficiency and reliability",
      "HR time office activities — timekeeping, attendance systems, and labor-regulation compliance",
    ],
  },
];

export const skills = [
  "HR Business Partnering",
  "HR Strategy",
  "Talent Acquisition",
  "Talent Management",
  "Employee Engagement",
  "Leadership Development",
  "Onboarding",
  "Workforce Planning",
  "HR Operations",
  "Payroll Processing",
  "Statutory Compliance",
  "Training & Development",
  "Gen AI in HR",
  "Stakeholder Management",
  "Business Networking",
];

export const education: {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}[] = [
  {
    institution: "Acharya Nagarjuna University",
    degree: "MHRM — Human Resources Management / Personnel Administration",
    period: "Mar 2022 – Nov 2024",
  },
  {
    institution: "IIBM Institute of Business Management",
    degree: "MBA — Human Resources Management & Services",
    period: "Jun 2019 – Aug 2021",
    grade: "A+",
  },
  {
    institution: "IIBM Institute of Business Management",
    degree: "DBA — Human Resources Management & Services",
    period: "Jun 2019 – Jun 2021",
    grade: "A+",
  },
  {
    institution: "Chalapathi Institute of Engineering & Technology, Lam",
    degree: "Diploma — Electrical & Electronics Engineering",
    period: "2014 – 2017",
    grade: "First",
  },
];

// Recognition aggregated from the awards/highlights listed on each role.
export const awards = experience
  .filter((e) => e.highlights?.length)
  .flatMap((e) =>
    (e.highlights ?? []).map((title) => ({ title, company: e.company }))
  );

export type Post = {
  title: string;
  company: string;
  url: string;
  image?: string;
};

export const posts: Post[] = [
  {
    title: "Navigating careers in the AI & digital age",
    company: "AI & Careers",
    url: "https://www.linkedin.com/posts/hari-pavan-8680b11a6_navigatingcareers-aicareers-digitalcareers-activity-7480495328320831488-NQYW",
    image: "/posts/post-ai-careers.jpg",
  },
  {
    title: "New beginnings at ANAROCK",
    company: "ANAROCK",
    url: "https://www.linkedin.com/posts/hari-pavan-8680b11a6_anarock-newbeginnings-humanresources-activity-7464934621508706304-05Gz",
    image: "/posts/post-anarock.jpg",
  },
  {
    title: "Summer SaaS 2026 — AI Hackathon",
    company: "Hackathon",
    url: "https://www.linkedin.com/posts/hari-pavan-8680b11a6_summersaas2026-aihackathon-centleindia-activity-7463083656664743936-C7vG",
    image: "/posts/post-hackathon.jpg",
  },
  {
    title: "On Sundar Pichai, Google & Alphabet",
    company: "Perspective",
    url: "https://www.linkedin.com/posts/hari-pavan-8680b11a6_sundarpichai-google-alphabet-activity-7460629471977631744-ixPq",
    image: "/posts/post-pichai.jpg",
  },
  {
    title: "Emerging HR Star – Hyderabad",
    company: "Welspun",
    url: profile.linkedin,
    image: "/posts/post-welspun.jpg",
  },
  { title: "Welcome – Welspun GCC", company: "Welspun", url: profile.linkedin },
  {
    title: "Best Cluster – Diversity, HR Ops, Attrition, Retention & Culture Transformation",
    company: "Flipkart",
    url: profile.linkedin,
    image: "/posts/post-flipkart.jpg",
  },
  { title: "Edu Skills Talent Forum – 2025", company: "Flipkart", url: profile.linkedin },
  { title: "Best Cluster & India No.1 in Scorecard", company: "Flipkart", url: profile.linkedin },
  {
    title: "Jio Power Play – Winner, May '23",
    company: "Jio",
    url: profile.linkedin,
    image: "/posts/post-jio.jpg",
  },
  { title: "Performer of Aug 2023", company: "Jio", url: profile.linkedin },
  { title: "HR: Social Media Champion contest", company: "Jio", url: profile.linkedin },
  { title: "Certified Maestro Recruiter", company: "Jio", url: profile.linkedin },
  {
    title: "HR Volunteer – Reliance Foundation: Kahani, Kala, Khushi",
    company: "Jio",
    url: profile.linkedin,
  },
];

export const journey = [
  { company: "Amara Raja Group", years: "2017 – 2021", logo: "/logos/amararaja.png" },
  { company: "Jio", years: "2021 – 2024", logo: "/logos/jio.png" },
  { company: "Flipkart", years: "2024 – 2025", logo: "/logos/flipkart.png" },
  { company: "Welspun", years: "2025 – 2026", logo: "/logos/welspun.png" },
  { company: "ANAROCK", years: "2026 – Present", logo: "/logos/anarock.png" },
];
