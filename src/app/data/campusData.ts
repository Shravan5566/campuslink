export interface Subject {
  id: string;
  name: string;
  driveLink: string;
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  pixelColors: string[];
  description: string;
  subjects: Subject[];
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
  icon: string;
}

export const branches: Branch[] = [
  {
    id: "fe",
    name: "Engineering Science",
    shortName: "FE",
    icon: "⚗️",
    color: "from-violet-600 to-indigo-600",
    pixelColors: ["#7c3aed", "#6366f1", "#a78bfa"],
    description: "First Year Engineering",
    subjects: [
      { id: "fe-1", name: "Engineering Mathematics I", driveLink: "https://drive.google.com/placeholder" },
      { id: "fe-2", name: "Engineering Physics", driveLink: "https://drive.google.com/drive/folders/1_7KcUA00tUOwQgoK925B8OnvLAU0LLaL?usp=drive_link" },
      { id: "fe-3", name: "Engineering Chemistry", driveLink: "https://drive.google.com/drive/folders/1QN39POqpvUOW4Ab13vVCipQyL07c-isF?usp=drive_link" },
      { id: "fe-4", name: "Basic Electrical Engineering", driveLink: "https://drive.google.com/drive/folders/1s1EZz-NLf6Zmq9Nhcy6ysISwMckEsDOk?usp=drive_link" },
      { id: "fe-4b", name: "Basic Electronics Engineering", driveLink: "https://drive.google.com/drive/folders/1UZXuir_1WA2VrXbgYjtLNtXjL3QyAdfD?usp=drive_link" },
      { id: "fe-5", name: "Engineering Mechanics", driveLink: "https://drive.google.com/drive/folders/1Kj6rpllp2UlCwXqhpMQ2ClHolYl5yNwk?usp=drive_link" },
      { id: "fe-6", name: "Programming & Problem Solving", driveLink: "https://drive.google.com/placeholder" },
      { id: "fe-6b", name: "Fundamentals of Programming Languages", driveLink: "https://drive.google.com/drive/folders/1lT04y4n6GzaNB4f034xeArBedBC6XSdb?usp=drive_link" },
      { id: "fe-7", name: "Engineering Graphics", driveLink: "https://drive.google.com/placeholder" },
      { id: "fe-8", name: "Communication Skills", driveLink: "https://drive.google.com/placeholder" },
    ],
  },
  {
    id: "comp",
    name: "Computer Engineering",
    shortName: "COMP",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
    pixelColors: ["#0891b2", "#2563eb", "#67e8f9"],
    description: "SE / TE / BE Full Curriculum",
    subjects: [
      { id: "comp-1", name: "Data Structures & Algorithms", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-2", name: "Database Management Systems", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-3", name: "Operating Systems", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-4", name: "Computer Networks", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-5", name: "Theory of Computation", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-6", name: "Software Engineering", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-7", name: "Machine Learning", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-8", name: "Web Technology", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-9", name: "Compiler Design", driveLink: "https://drive.google.com/placeholder" },
      { id: "comp-10", name: "Cryptography & System Security", driveLink: "https://drive.google.com/placeholder" },
    ],
  },
  {
    id: "entc",
    name: "Electronics & TC",
    shortName: "ENTC",
    icon: "📡",
    color: "from-orange-500 to-pink-600",
    pixelColors: ["#ea580c", "#db2777", "#fb923c"],
    description: "SE / TE / BE Full Curriculum",
    subjects: [
      { id: "entc-1", name: "Analog Electronics", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-2", name: "Digital Electronics", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-3", name: "Signals & Systems", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-4", name: "Microprocessors & Microcontrollers", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-5", name: "Electronic Instrumentation", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-6", name: "Communication Systems", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-7", name: "VLSI Design", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-8", name: "Embedded Systems", driveLink: "https://drive.google.com/placeholder" },
      { id: "entc-9", name: "Digital Signal Processing", driveLink: "https://drive.google.com/placeholder" },
    ],
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "MECH",
    icon: "⚙️",
    color: "from-emerald-500 to-teal-600",
    pixelColors: ["#059669", "#0d9488", "#6ee7b7"],
    description: "SE / TE / BE Full Curriculum",
    subjects: [
      { id: "mech-1", name: "Engineering Thermodynamics", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-2", name: "Fluid Mechanics", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-3", name: "Theory of Machines", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-4", name: "Strength of Materials", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-5", name: "Machine Design", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-6", name: "Heat Transfer", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-7", name: "Manufacturing Processes", driveLink: "https://drive.google.com/placeholder" },
      { id: "mech-8", name: "Industrial Engineering", driveLink: "https://drive.google.com/placeholder" },
    ],
  },
];

export const whatsappGroups: WhatsAppGroup[] = [
  {
    id: "wa-fe",
    name: "FE Engineering (1st Year)",
    category: "Branch-wise",
    description: "Notes, updates & doubt clearing for FE students",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "⚗️",
  },
  {
    id: "wa-comp",
    name: "Computer Engineering",
    category: "Branch-wise",
    description: "Assignments, projects & exam resources for COMP",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "💻",
  },
  {
    id: "wa-entc",
    name: "Electronics & TC",
    category: "Branch-wise",
    description: "Notes, lab work & exam prep for ENTC",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "📡",
  },
  {
    id: "wa-mech",
    name: "Mechanical Engineering",
    category: "Branch-wise",
    description: "Drawings, theory & practicals for MECH",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "⚙️",
  },
  {
    id: "wa-se",
    name: "Second Year (SE)",
    category: "Year-wise",
    description: "Common resources for SE students across all branches",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "📚",
  },
  {
    id: "wa-te",
    name: "Third Year (TE)",
    category: "Year-wise",
    description: "Mini projects, internships & notes for TE students",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "🎓",
  },
  {
    id: "wa-be",
    name: "Final Year (BE)",
    category: "Year-wise",
    description: "Major projects, placements & exams for BE students",
    link: "https://chat.whatsapp.com/placeholder",
    icon: "🏆",
  },
];
