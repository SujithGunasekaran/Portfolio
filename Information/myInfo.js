export const Logo = {
    HTML: {
        fontAwesomeIcon: "fab fa-html5",
        color: "rgb(227, 79, 38)",
        displayName: "HTML"
    },
    CSS: {
        fontAwesomeIcon: "fab fa-css3",
        color: "rgb(21, 114, 182)",
        displayName: "CSS"
    },
    Javascript: {
        fontAwesomeIcon: "fab fa-js",
        color: "#CCC608",
        displayName: "Javascript"
    },
    Nodejs: {
        fontAwesomeIcon: "fab fa-node-js",
        color: "rgb(51, 153, 51)",
        displayName: "Node.js"
    },
    React: {
        fontAwesomeIcon: "fab fa-react",
        color: "rgb(97, 218, 251)",
        displayName: "React.js"
    },
    Sql: {
        fontAwesomeIcon: "fas fa-database",
        color: "rgb(51, 103, 145)",
        displayName: "MySQL"
    },
    Book: {
        fontAwesomeIcon: "fas fa-book",
        color: "rgb(208, 0, 0)"
    },
    Economy: {
        fontAwesomeIcon: "fas fa-hand-holding-usd",
        color: "rgb(255, 153, 0)"
    }
}

export const navList = [
    {
        id: 'home',
        name: 'home',
        displayName: 'Home'
    },
    {
        id: 'about',
        name: 'about',
        displayName: 'About'
    },
    {
        id: 'experience',
        name: 'experience',
        displayName: 'Experience'
    },
    {
        id: 'project',
        name: 'project',
        displayName: 'Projects'
    },
    {
        id: 'blog',
        name: 'blog',
        displayName: 'Blogs'
    }
]


export const myInfo = {
    Header: {
        logoName: "Sujith Gunasekaran",
        componentsName: [
            {
                displayName: "About",
                labelName: "About",
                fontAwesomeIcon: "fa fa-home"
            },
            {
                displayName: "Work Experience",
                labelName: "Resume",
                fontAwesomeIcon: "fa fa-university"
            },
            {
                displayName: "Projects",
                labelName: "Project",
                fontAwesomeIcon: "fa fa-briefcase"
            },
            {
                displayName: "Contact Me",
                labelName: "Contact",
                fontAwesomeIcon: "fas fa-id-badge"
            }
        ]
    },
    Footer: {
        FooterInfo: "Made with ❤ by Sujith Gunasekaran"
    },
    Home: {
        myName: "Sujith Gunasekaran",
        myInfo: "Senior Software Engineer at Freshworks specializing in frontend development with expertise in React. Passionate about building exceptional digital experiences.",
        myImage: "/assert/Home_my_image.svg",
        myActivityHeading: "About Me",
        myActivityInfoOne: "Frontend Developer with 5 years of experience, I specialize in creating high-performance, accessible, and visually compelling web applications. My expertise lies in modern JavaScript frameworks and libraries, including React.js, Vue.js, and Next.js, paired with a deep understanding of JavaScript best practices. I bring both proven technical skills and a passion for continuous learning to the table..",
        myActivityInfoTwo: "What I bring to the team:",
        myActivityInfoTwoList: [
            "A commitment to delivering high-quality, scalable, and user-centric solutions.",
            "Exceptional communication skills to innovative ideas, align with cross-functional teams, and foster collaboration.",
            "A focus on building applications prioritizing performance, accessibility, and maintainability.",
            "I'm open to feedback and always looking to get better!",
            "Supportive mentor who can guide and motivate the team."
        ],
        myActivityInfoThree: "My goal is to leverage my skills to contribute to cutting-edge projects that make a meaningful impact. If you're seeking a front-end developer who thrives in dynamic environments and is dedicated to excellence, I'd love to connect and explore how I can add value to your team.",
    },
    Education: {
        EducationTitle: "Education and Work Experience",
        EducationHeading: "Education",
        EducationSubHeading: "Basic Qualification and Certificate",
        EducationImage: "/assert/Education_cap.svg",
        EducationInfo: "My Schoolings, and College Information. What i have done in College time etc.",
        EducationList: [
            {
                EducationInstituteHeading: "Degree Received",
                EducationInstituteName: "Bannari Amman Institute of Technology",
                EducationInstituteDegree: "B.Tech Information Technology",
                EducationInstituteList: [
                    {
                        Point: "I have Studied basic software engineering subject like C, Javascript, DBMS etc."
                    },
                    {
                        Point: "Apart from this i have done some projects."
                    }
                ]
            },
            {
                EducationInstituteHeading: "Schoolings",
                EducationInstituteName: "Srv Matriculation Hr.Sec School",
                EducationInstituteDegree: "CS / Maths"
            }
        ]
    },
    Experience: {
        ExperienceHeading: "Experience",
        ExperienceSubHeading: "Work and Internship",
        ExperienceInfo: "Currently I am working in Solartis as a Front-end Developer. TechStack : Javascript, React, Node.js, Express.js and Sql.",
        ExperienceImage: "assert/Career_home.svg",
        ExperienceList: [
            {
                ExperienceCompanyName: "Solartis",
                ExperienceWorkType: "Full Time",
                ExperienceWorkInformation: "I am Working on Front-end developer to build insurance product."
            },
            {
                ExperienceCompanyName: "Solartis",
                ExperienceWorkType: "Internship",
                ExperienceWorkInformation: "During Internship time I have learned about the How insurance product works, and also I have worked on project to change primary mongodb cluster to secondary cluster automatically. if any Error Occur during runtime"
            }
        ]
    },
    Skills: [
        {
            title: 'Frontend',
            name: 'frontend',
            knownSkills: [
                'React.js',
                'Vue.js',
                'Javascript',
                'Typescript',
                'Web Component',
                'HTML/CSS'
            ]
        },
        {
            title: 'Backend',
            name: 'backend',
            knownSkills: [
                'Node.js',
                'Express.js',
                'MongoDB',
                'MySql'
            ]
        },
        {
            title: 'Other',
            name: 'other',
            knownSkills: [
                'Git',
                'jenkins',
                'AWS',
                'REST APIs'
            ]
        }
    ],
    Project: {
        ProjectHeading: "Projects",
        ProjectSubHeading: "My Projects",
        ProjectInfo: "My projects makes use of vast variety of latest technology tools. My best experience is to create Reponsive web projects. Each and every project I will impletement some new concept and learning new technologies.",
        ProjectImage: "/assert/Project_home.svg",
        ProjectList: [
            {
                ProjectName: "HouseChat",
                ProjectDescription: "Free Knowledge sharing platform, Community platform to find and contribute answer to the technical challenges.",
                ProjectLanguage: "Next.js, graphql, Apollo, mongodb, React.js, Express.js",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
                ProjectLinkBtnDisplayName: "View Website"
            },
            {
                ProjectName: "DevBlog",
                ProjectDescription: "devBlog is an blog post web app, User can publish their blogs. user can able to like and save post for later purpose.",
                ProjectLanguage: "Javascript, Next.js, Express.js, mongodb, Apollo-Graphql",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
                ProjectLinkBtnDisplayName: "View Website"
            },
            {
                ProjectName: "React E-commerce",
                ProjectDescription: "This is a comprehensive e-commerce application built with React, providing a seamless shopping experience for users.",
                ProjectLanguage: "Javascript, React.js, Redux, dummyjson",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "https://react-ecommerce-sable.vercel.app/",
                ProjectLinkBtnDisplayName: "View Website"
            },
            {
                ProjectName: "YouTube Clone",
                ProjectDescription: "YouTube. This is my video corner website, I have build Youtube clone in React.js with the help of 'Youtube API V3'.",
                ProjectLanguage: "Javascript, React.js",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
                ProjectLinkBtnDisplayName: "View Website"
            },
            {
                ProjectName: "React Components",
                ProjectDescription: "Collections of react components, where user can download it has a npm packages and can be used in our projects.",
                ProjectLanguage: "Javascript, React.js",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
                ProjectLinkBtnDisplayName: "View Website"
            },
            {
                ProjectName: "React Gif Search",
                ProjectDescription: "An interactive React GIF search app that lets users explore trending, random, or specific GIFs with features to download, play, or pause animations.",
                ProjectLanguage: "Typescript, React.js, Gify",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "https://react-gify.vercel.app/",
                ProjectLinkBtnDisplayName: "View Website"
            }
        ],
        ProjectBtnName: "More Projects",
        ProjectBtnLink: "https://github.com/SujithGunasekaran"
    },
    Blog: {
        BlogHeading: "Blogs",
        BlogList: [
            {
                BlogName: "Progressive and lazy loading images in react.js",
                BlogDescription: "This blog explain about how lazy and progressive loading image improve performance and the implementation part",
                BlogTags: "Javascript, React.js, Performance",
                BlogLink: "https://medium.com/p/4bff31a66785",
                alt: 'medium-link-1',
            },
            {
                BlogName: "Throttling in Javascript",
                BlogDescription: "This blog explain in details about what is Throttling, Why it is used and how we can implement the throttling in javascript",
                BlogTags: "Javascript, Throttling, Performance",
                BlogLink: "https://medium.com/@sujithg1999/throttling-in-javascript-fde10f651f94",
                alt: 'medium-link-2',
            },
            {
                BlogName: "CSS-in-JS pros and cons for modern React Development",
                BlogDescription: "This blog explain in details about what is CSS-in-JS, pros and cons of using CSS-in-JS and When to use CSS-in-JS",
                BlogTags: "Javascript, CSS, React.js",
                BlogLink: "https://medium.com/@sujithg1999/css-in-js-pros-and-cons-for-modern-react-development-3e1cbc329eda",
                alt: 'medium-link-3',
            },
        ]
    },
    Contact: {
        ContactHeading: "Contact Me",
        ContactSocialIcon: [
            {
                fontAwesomeIcon: "fab fa-github",
                fontbackgroundColor: "#333",
                socailLink: "https://github.com/SujithGunasekaran"
            },
            {
                fontAwesomeIcon: "fab fa-linkedin-in",
                fontbackgroundColor: "#0e76a8",
                socailLink: "https://www.linkedin.com/in/sujith-g-3b21a4140/"
            },
            {
                fontAwesomeIcon: "fab fa-twitter",
                fontbackgroundColor: "#1da1f2",
                socailLink: "https://twitter.com/home?lang=en"
            },
            {
                fontAwesomeIcon: "fab fa-instagram",
                fontbackgroundColor: "#e4405f",
                socailLink: "https://www.instagram.com/sujith_guna_/"
            }
        ],
        ContactBtn: "View Github Profile",
        ContactAddressImage: "/assert/Contact_home.svg",
        ContactAddressHeading: "Address",
        ContactAddressInfo: "3/45A Parvana Nagar, Trichy",
        ContactPhoneHeading: "Phone Number",
        ContactPhoneInfo: "+91-9597873354",
        ContactEmailHeading: "Email Address",
        ContactEmailInfo: "sujithg1999@gmail.com"
    }
}

