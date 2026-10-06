export type ExternalLink = {
  label: string;
  href: string | null;
  placeholder: string;
};
export type Profile = {
  name: string;
  role: string;
  location: string;
  degree: string;
  university: string;
  faculty: string;
  educationYears: string;
  graduation: number;
  description: string;
};
export const profile: Profile = {
  name: "Răzvan Neamțu",
  role: "Artificial Intelligence student & software builder",
  location: "Cluj-Napoca, Romania",
  degree: "BSc Artificial Intelligence",
  university: "Babeș-Bolyai University",
  faculty: "Faculty of Mathematics and Computer Science",
  educationYears: "2025 — 2028",
  graduation: 2028,
  description:
    "Artificial Intelligence student at Babeș-Bolyai University, exploring machine learning, software engineering, and the systems underneath them.",
};
// All outbound URLs live here. Replace null with your real URL; never use a fake account.
export const links = {
  email: {
    label: "Email",
    href: "mailto:razvan2006razvan@gmail.com",
    placeholder: "Email not added yet",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/neamturazvan",
    placeholder: "GitHub profile not added yet",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/r%C4%83zvan-%C8%99tefan-neam%C8%9Bu-837a68422/",
    placeholder: "LinkedIn profile not added yet",
  },
  cv: { label: "Download CV", href: null, placeholder: "CV not added yet" },
} satisfies Record<string, ExternalLink>;
export const siteConfig = {
  origin: "https://neamturazvan.github.io",
  language: "en",
  title: `${profile.name} — Artificial Intelligence Student & Software Builder`,
};
export const repositories: Record<
  string,
  { github: string | null; demo: string | null }
> = {
  "c-ml": { github: "https://github.com/neamturazvan/MLC", demo: null },
  "image-processing": {
    github: "https://github.com/neamturazvan/GrayLib",
    demo: null,
  },
  huffman: { github: "https://github.com/neamturazvan/HuffZip", demo: null },
};
export const currentActivities = [
  "Developing stronger practical machine-learning skills",
  "Studying Artificial Intelligence at UBB",
  "Exploring applied ML and software engineering opportunities",
];
export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "SQL", "Shell", "HTML"],
  },
  { category: "Tools & environments", items: ["Git", "CMake", "Linux"] },
  {
    category: "ML & data",
    items: [
      "NumPy",
      "pandas",
      "Machine learning",
      "Numerical computing",
      "Applied ML",
    ],
  },
];
export const interests = [
  "Algorithms & data structures",
  "Mathematics",
  "Performance optimization",
  "Engineering systems",
  "Telemetry & motorsport technology",
];

