
export const AppName = `Hospital Records Management System`;
export const AppCatch = `Efficient digital solution for storing, accessing, and managing comprehensive health records`;
export const ProjectDescription = `A strong interest in healthcare, medicine, or health-related issues is our significant motivator. we are passionate about improving healthcare delivery or solving healthcare-related problems and to create a system that addresses specific challenges`;

export const ProjectFeatures = [
    { id: 1, name: `User-Friendly Interface`, paragraph: `Our user-friendly interface makes navigating the system a breeze for all healthcare professionals. With an intuitive layout and easy-to-use design, you can access patient records, update information, and manage appointments effortlessly. Say goodbye to steep learning curves and hello to increased efficiency.`},
    { id: 2, name: `Secure Electronic Health Records (EHR)`, paragraph: `Security is paramount when it comes to healthcare records. Our system provides robust data protection mechanisms, ensuring the confidentiality and integrity of patient information. It offers role-based access control, audit trails, and encryption to safeguard sensitive data, keeping you compliant with healthcare regulations.`},
    { id: 3, name: `Digital Records Management`, paragraph: `You can then organize, search, and access these records at your fingertips, reducing the reliance on physical paperwork and ensuring quick retrieval of patient information.The Digital Records Management feature not only saves time and storage space but also enhances data accuracy and accessibility.`},
]


const getAge = (date) => {
    if (date) {
        const dt = new Date(date);
        const today = new Date();
        const age = (today.getFullYear() - dt.getFullYear())
        return age;
    }
};

const newAge = getAge("1994/08/13");
console.log(newAge)