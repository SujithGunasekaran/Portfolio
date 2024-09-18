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
        displayName: 'Blog'
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
        myInfo: "As a front-end developer, I enjoy turning project requirements into simple, easy-to-use features and applications. I'm excited about contributing to a positive and productive work environment where we can achieve our goals together.",
        myImage: "/assert/Home_my_image.svg",
        mySocialIcon: [
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
        myResumeBtn: {
            myResumeName: "View Resume",
            myResumeLink: "/resume/my Resume.pdf"
        },
        myActivityHeading: "About Me",
        myActivityInfoOne: "As a collaborative front-end developer, I excel at transforming complex requirements into intuitive user experiences. With a strong problem-solving mindset, I enjoy working with cross-functional teams to deliver high-quality products. I am confident in my ability to contribute to a positive and productive work environment.",
        myActivityInfoTwo: "I always want to take new challenges and opportunity for my personal and professional development more importantly I will always aim to expand my skills set and take greater responsibilities",
        myActivityTechInfo: [
            {
                techName: "Javascript"
            },
            {
                techName: "React.js"
            },
            {
                techName: "Next.js"
            },
            {
                techName: "Express.js"
            },
            {
                techName: "Node.js"
            },
            {
                techName: "HTML, Css"
            },
            {
                techName: "mongodb"
            }
        ],
        myActivity: [
            {
                ActivityHeading: "Full Stack Development",
                ActivityImage: "/assert/Home_frelancer.svg",
                ActivityLogos: [
                    Logo.HTML,
                    Logo.CSS,
                    Logo.Javascript,
                    Logo.React,
                    Logo.Nodejs,
                    Logo.Sql
                ],
                ActivityPoints: [
                    {
                        Point: "Building resposive website front end using React-Redux"
                    },
                    {
                        Point: "Creating application backend in Node & Express"
                    },
                    {
                        Point: "Storing Datas in mongodb"
                    }
                ]
            },
            {
                ActivityHeading: "Reading Books",
                ActivityImage: "/assert/Home_reading2.svg",
                ActivityLogos: [
                    Logo.Book,
                    Logo.Economy
                ],
                ActivityPoints: [
                    {
                        Point: "I will make seperate time for reading books in my life. Apart from my work"
                    },
                    {
                        Point: "I mostly read books based on Economy while reading these type of books i can get knowledge about how to save money, how to Overcome Problems, and many more"
                    },
                    {
                        Point: "My most liked author 'Warren Buffet'"
                    }
                ]
            },
        ]
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
                ProjectName: "Warehouse",
                ProjectDescription: "E-Commerce Web application, Products are listed. By creating account user can store product in cart, To store data I have used mongodb",
                ProjectLanguage: "Javascript, React.js, Express.js, Node.js, Mongodb",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
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
                ProjectName: "Song API",
                ProjectDescription: "This API is used to get song data and anyone can add song data with post method, and also Developed UI to test this API.",
                ProjectLanguage: "Javascript, Express.js, Mongodb",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
                ProjectLinkBtnDisplayName: "View Website"
            }
        ],
        ProjectBtnName: "More Projects",
        ProjectBtnLink: "https://github.com/SujithGunasekaran"
    },
    Blog: {
        BlogHeading: "Blog",
        BlogList: [
            {
                BlogName: "Progressive and lazy loading images in react.js",
                BlogDescription: "This blog explain about how lazy and progressive loading image improve performance and the implementation part",
                BlogTags: "Javascript, React.js, Performance",
                BlogLink: "https://medium.com/me/stats/post/4bff31a66785",
                alt: 'medium-link-1',
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

