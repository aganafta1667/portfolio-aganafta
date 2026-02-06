import HeroImage from "./assets/profil.png";

const Image = {
  HeroImage,
};

export default Image;

// LIST TOOLS
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  // {
  //   id: 5,
  //   gambar: Tools5,
  //   nama: "Bootstrap",
  //   ket: "Framework",
  //   dad: "500",
  // },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

// LIST PROYEK
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];


// PENDIDIKAN
import Edu1 from "/assets/education/logo-its.png";
import Edu2 from "/assets/education/smada.png";

export const listEdu = [
  {
    id: 1,
    gambar: Edu1,
    nama: "Institut Teknologi Sepuluh Nopember",
    desk: "Bachelor’s Degree in Informatics Engineering (2025-Present)",
    dad: "200",
  },
  {
    id: 2,
    gambar: Edu2,
    nama: "SMA Negeri 2 Madiun",
    desk: "Science and Economics Stream (2022-2025)",
    dad: "300",
  },
];

// ORGANISASI
import Orga1 from "/assets/organization/osis.png";
import Orga2 from "/assets/organization/pcc.png";

export const listOrga = [
  {
    id: 1,
    gambar: Orga1,
    nama: "OSIS SMA Negeri 2 Madiun",
    desk: "Head of Christian Spiritual Division (2022 - 2024)",
    dad: "200",
  },
  {
    id: 2,
    gambar: Orga1,
    nama: "OSIS SMA Negeri 2 Madiun",
    desk: "Head of Physical & Mental Health Division (2023-2024)",
    dad: "300",
  },
  {
    id: 3,
    gambar: Orga2,
    nama: "Personal Computer and Cinematography",
    desk: "Graphic Design Division (2023-2024)",
    dad: "300",
  },
];

// PELATIHAN
import Train1 from "/assets/trainings/revou.png"
import Train2 from "/assets/trainings/dicoding.png"
import Train3 from "/assets/trainings/special.png"


export const listTrain = [
  {
    id: 1,
    gambar: Train1,
    nama: "Software Engineering Essentials",
    desk: "Studied basic web development and software project collaboration.",
    dad: "200",
  },
  {
    id: 2,
    gambar: Train2,
    nama: "Artificial Intelligence Fundamentals",
    desk: "Learned the basics of AI, simple machine learning, and ethical implementation.",
    dad: "300",
  },
  {
    id: 3,
    nama: "Data Analyst",
    gambar: Train3,
    desk: "Focused on data analysis fundamentals and data visualization.",
    dad: "300",
  },
];

// ACHIEVMENTS
import Pres1 from "/assets/achievments/osn-1.png"
import Pres2 from "/assets/achievments/sma-awards.png"
import Pres3 from "/assets/achievments/musik.png"

export const listPres = [
  {
    id: 1,
    gambar: Pres1,
    nama: "1st Place – National Science Olympiad (City Level, Physics)",
    desk: "Organized by the Indonesian Talent Development Center (KEMENDIKBUDRISTEK) in collaboration with the Madiun Regional Education Office, 2024.",
    dad: "200",
  },
  {
    id: 2,
    gambar: Pres2,
    nama: "Top 5 Finalist - East Java Science Competition (SMA Awards)",
    desk: "Organized by the East Java Provincial Education Department in collaboration with Jawa Pos Newspaper, 2024.",
    dad: "300",
  },
  {
    id: 3,
    gambar: Pres3,
    nama: "3rd Place – “Muda Beda Berkarya” Youth Band Competition (City Level)",
    desk: "Organized by the Department of Culture, Tourism, Youth, and Sports of Madiun City, 2024.",
    dad: "300",
  },
];

