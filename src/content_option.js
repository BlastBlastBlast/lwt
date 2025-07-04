const logotext = "LARS";
const meta = {
    title: "Lars Wien Tynes",
    description: "I'm Lars Wien Tynes, a passionate developer and technology enthusiast",
};

const introdata = {
    title: "I'm Lars Wien Tynes",
    animated: {
        first: "I build code and custom motorcycles",
        second: "I’ve led teams, projects, and powder days",
        third: "I blend logic, leadership, and a bit of grease",
    },
    description: "Leadership graduate turned code wrangler. \n\n Former extreme sports athlete (yes, I did hurl myself off cliffs on skis). Now studying IT at the University of Oslo while moonlighting as a hobby motorcycle mechanic and designer.",
    your_img_url: "/img_assets/LWT_Transparent.png",
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "I solve problems — whether it’s a broken line of code, a logistics chain, or an old motorcycle. I’ve managed projects, led teams, and built tech with a purpose. These days I’m diving deep into programming, but I bring with me a toolbox full of real-world experience, creative grit, and way too many hex keys.",
  };
  
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java", icon: "FaJava" },
            { name: "Kotlin", icon: "SiKotlin" },
            { name: "C", icon: "FaCodeC" }, // Using FaCodeC for C
            { name: "Python", icon: "FaPython" },
            { name: "JavaScript", icon: "FaJs" },
            { name: "TypeScript", icon: "SiTypescript" },
            { name: "HTML", icon: "FaHtml5" },
            { name: "CSS", icon: "FaCss3" },
            { name: "SQL", icon: "FaCode" }
        ]
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", icon: "FaReact" },
            { name: "Node.js", icon: "FaNodeJs" },
            { name: "Spring", icon: "SiSpring" },
            { name: "Express", icon: "SiExpress" },
            { name: "Tailwind CSS", icon: "SiTailwindcss" },
            { name: "Vite", icon: "FaBolt" },
            { name: "Jetpack Compose", icon: "SiJetpackcompose" },
            { name: "Gradle", icon: "FaCode" },
            { name: "Maven", icon: "FaCode" }
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "Git", icon: "FaGitAlt" },
            { name: "GitHub", icon: "img:github.svg" },
            { name: "PostgreSQL", icon: "SiPostgresql" },
            { name: "Ghidra", icon: "img:ghidra.svg" },
            { name: "Ida", icon: "img:ida.svg" }
        ]
    }
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "lw.tynes@gmail.com",
    YOUR_FONE: "+47 922 80 935",
    // EmailJS configuration (optional)
    // Create an account at https://www.emailjs.com/ to enable the contact form
    YOUR_SERVICE_ID: "",
    YOUR_TEMPLATE_ID: "",
    YOUR_USER_ID: "",
};

const socialprofils = {
    github: "https://github.com/blastblastblast",
    linkedin: "https://www.linkedin.com/in/wien/",
    email: "mailto:lw.tynes@gmail.com",
    phone: "tel:+4792280935"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};