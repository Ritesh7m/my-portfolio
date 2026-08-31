import profileImg from "../assets/profile.png";
import aboutImg from "../assets/about.jpg";
import cvPdf from "../assets/Ritesh-CV.pdf";

export const profile = {
  name: "Ritesh Maurya",
  pronouns: "He/Him",
  title: "Junior Developer",
  tagline: "FULL STACK • SYSTEMS • AUTOMATION",
  headline: "I build practical digital systems that solve real business problems.",
  location: "Mumbai, Maharashtra, India",
  timezone: "Asia/Kolkata",
  company: {
    name: "Amazia Fashion Pvt. Ltd.",
    role: "Junior Developer",
    startDate: "May 2026",
    status: "Present",
    mode: "On-site",
    workDescription:
      "Developed an ERP dashboard using Next.js, TypeScript and DuckDB/SQL for Etsy, FedEx, inventory and shipment data.",
  },
  freelance: {
    role: "Freelance Web Developer",
    status: "Active",
    mode: "Remote",
    description:
      "Building responsive promotional and business websites tailored to client requirements, handling full lifecycle development, deployment, and performance.",
  },
  about: {
    intro:
      "I’m Ritesh Maurya, a Junior Developer at Amazia Fashion Pvt. Ltd. working with Next.js, TypeScript, DuckDB, and Google Apps Script to build practical business solutions and automate workflows.",
    whoIAm:
      "A systems-minded developer based in Mumbai with an engineering background in Information Technology. I focus on developing reliable digital tools, dashboards, and scalable web solutions that optimize real-world operations.",
    whatIBuild:
      "Full-stack web applications, business dashboards, and automated workflows. My work spans high-throughput data dashboards (DuckDB/SQL, Next.js), customer-facing e-commerce platforms, and lightweight developer utilities.",
    howIWork:
      "I value type safety, intuitive user experience, and practical engineering over unnecessary complexity. Every interface I design is built to be resilient, fast, and maintainable.",
    whatImExploring:
      "Advanced analytical SQL patterns with DuckDB, server-side data streaming, enterprise automation pipelines, and high-performance frontend architectures.",
  },
  contact: {
    email: "maurya.ritesh2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/ritesh-maurya-7459s/",
    github: "https://github.com/Ritesh7m",
    twitter: "https://x.com/RiteshMaur78747",
    resumeUrl: cvPdf,
  },
  images: {
    avatar: profileImg,
    about: aboutImg,
  },
};
