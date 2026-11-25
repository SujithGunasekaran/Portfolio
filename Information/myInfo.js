export const NAV = [
    { href: '/', index: '00', label: 'home', lap: 'grid' },
    { href: '/about', index: '01', label: 'about', lap: 'pit wall' },
    { href: '/experience', index: '02', label: 'experience', lap: 'race history' },
    { href: '/projects', index: '03', label: 'projects', lap: 'garage' },
    { href: '/writing', index: '04', label: 'writing', lap: 'team radio' },
    { href: '/contact', index: '05', label: 'contact', lap: 'finish line' }
];

export const Socials = [
    { label: 'LinkedIn', handle: 'sujith-gunasekaran', href: 'https://www.linkedin.com/in/sujith-gunasekaran-3b21a4140/' },
    { label: 'GitHub', handle: 'SujithGunasekaran', href: 'https://github.com/SujithGunasekaran' },
    { label: 'Medium', handle: '@sujithg1999', href: 'https://medium.com/@sujithg1999' }
];

export const myInfo = {
    Home: {
        myName: "Sujith Gunasekaran",
        myInfo: "Sujith Gunasekaran is a Senior Software Engineer at Walmart Global Tech with 7+ years across insurance, B2B SaaS and B2C e-commerce serving millions.",
    },
    About: {
        heading: ["I own the outcome,", "not just the code."],
        lead: "Seven-plus years of frontend: I started in insurance product development with React, moved into B2B SaaS at Freshworks, and now build e-commerce experiences at Walmart Global Tech. The scale here is much bigger, reaching millions of people across B2C retail.",
        story: [
            "It started in 2020 with an insurance platform built from scratch in React, where I owned the quote flow end to end. Since then: a Vue 2 to Vue 3 migration, a Marketplace page that went from 8s to 2s render time, and a Nuxt SSG to SSR rebuild that cut build times by about 95%.",
            "Moving from SaaS to B2C retail brought a much bigger scale. I now work on e-commerce used by millions of customers every day, with demand rising up to 10x around major events. That makes availability and performance especially important: even small frontend improvements or decisions can improve the experience for millions of people."
        ],
        readouts: [
            ["role", "Senior software engineer"],
            ["team", "Walmart · e-commerce"],
            ["seasons", "7+ years"],
            ["stack", "React · Next · TypeScript · Node"]
        ],
        deltas: [
            { label: "marketplace render", before: 8, after: 2, max: 8, text: "8s to 2s" },
            { label: "build time, SSG to SSR", before: 100, after: 5, max: 100, text: "about 95% faster" },
            { label: "PR previews, review time", before: 100, after: 56, max: 100, text: "44% faster" },
            { label: "developer adoption, PoC to GA", before: 100, after: 143, max: 143, text: "+43%" }
        ],
        principlesHeading: "strategy calls",
        principles: [
            { title: "Engineering with the business in view", text: "Technical calls tied to product goals, shaped with design, product and backend from day one, so what we build moves the business, not just the codebase." },
            { title: "Architecture that ages well", text: "The right tool for the problem, not the trending one. Clear boundaries so teams ship independently, and decisions written down so the reasoning outlives the people who made them." },
            { title: "Performance you can measure", text: "Profile first, then fix what the numbers point at. Load only what users need, when they need it, and keep watching after release so speed stays a habit, not a one-time cleanup." },
            { title: "Standards that scale", text: "Code quality, accessibility and consistency as team defaults, enforced by automation instead of memory, so good practice doesn't depend on who's reviewing." },
            { title: "Mentorship with ownership", text: "Engineers grow fastest when the stakes are theirs. Pair, review, hand over real work, then give them room to own it." }
        ],
        closing: "Building something meaningful and want engineering leadership grounded in real execution? Let's talk."
    },
    Skills: [
        {
            title: 'Frontend',
            tagline: 'the craft',
            name: 'frontend',
            knownSkills: [
                'React.js',
                'Redux',
                'Next.js',
                'Vue.js',
                'Nuxt.js',
                'Javascript',
                'Typescript',
                'Web Component',
                'Micro-Frontend',
                'HTML/CSS',
                'Tailwind CSS',
                'Accessibility'
            ]
        },
        {
            title: 'Backend',
            tagline: 'the supporting cast',
            name: 'backend',
            knownSkills: [
                'Node.js',
                'Express.js',
                'GraphQL',
                'MongoDB',
                'MySql'
            ]
        },
        {
            title: 'Other',
            tagline: 'the pit crew',
            name: 'other',
            knownSkills: [
                'Git',
                'GitHub Actions',
                'jenkins',
                'CI/CD',
                'AWS',
                'Webpack',
                'Jest',
                'Vitest',
                'REST APIs'
            ]
        }
    ],
    Project: {
        ProjectHeading: "Projects",
        ProjectList: [
            {
                ProjectName: "HouseChat",
                ProjectDescription: "A free community platform where developers share knowledge, ask technical questions and contribute answers.",
                ProjectLanguage: "Next.js, graphql, Apollo, mongodb, React.js, Express.js",
                ProjectGitLink: "https://github.com/SujithGunasekaran",
                ProjectLink: "No",
            },
            {
                ProjectName: "DevBlog",
                ProjectDescription: "A blogging app where users can publish posts, like them, and save them to read later.",
                ProjectLanguage: "Javascript, Next.js, Express.js, mongodb, Apollo-Graphql",
                ProjectGitLink: "https://github.com/SujithGunasekaran/devblog",
                ProjectLink: "No",
            },
            {
                ProjectName: "React E-commerce",
                ProjectDescription: "A full-featured e-commerce app built with React that makes shopping smooth and simple.",
                ProjectLanguage: "Javascript, React.js, Redux, dummyjson",
                ProjectGitLink: "https://github.com/SujithGunasekaran/react-ecommerce",
                ProjectLink: "https://react-ecommerce-sable.vercel.app/",
            },
            {
                ProjectName: "Lazy Load Image",
                ProjectDescription: "A lightweight, framework-agnostic lazy loading image component built with Lit. Images load only when they come into view, which improves page performance and user experience.",
                ProjectLanguage: "lit, Typescript, WebComponent",
                ProjectGitLink: "https://github.com/SujithGunasekaran/lazy-load-image",
                ProjectLink: "https://www.npmjs.com/package/lazy-load-image-lit",
            },
            {
                ProjectName: "Frontend Mini Challenges",
                ProjectDescription: "A nested checkbox component where parent and child selections stay in sync, including the indeterminate state. Ideal for tree views and hierarchical lists.",
                ProjectLanguage: "Javascript, React.js",
                ProjectGitLink: "https://github.com/SujithGunasekaran/frontend-mini-challenges",
                ProjectLink: "https://sadanandpai.github.io/frontend-mini-challenges/react/#/nested-checkbox",
            },
            {
                ProjectName: "React Gif Search",
                ProjectDescription: "An interactive GIF search app built with React. Explore trending, random or specific GIFs, then download them or play and pause the animation.",
                ProjectLanguage: "Typescript, React.js, Gify",
                ProjectGitLink: "https://github.com/SujithGunasekaran/React-Gify",
                ProjectLink: "https://react-gify.vercel.app/",
            }
        ],
        ProjectBtnName: "More Projects",
        ProjectBtnLink: "https://github.com/SujithGunasekaran"
    },
    Blog: {
        BlogHeading: "Blogs",
        BlogList: [
            {
                BlogName: "Setting Up Sitespeed.io for Real Performance Testing",
                BlogSlug: "setting-up-sitespeed-io-for-real-performance-testing",
                BlogDescription: "Why Lighthouse alone can mislead, and how to set up Sitespeed.io with Podman and GitHub Actions for real browser performance testing.",
                BlogTags: "Sitespeed.io, Performance, Core Web Vitals",
                BlogLink: "https://medium.com/@sujithg1999/setting-up-sitespeed-io-for-real-performance-testing-227bcee9f68f",
                alt: 'medium-link-5',
            },
            {
                BlogName: "Stop fixing SonarQube issues after raising a PR, do it inside Cursor using MCP",
                BlogSlug: "stop-fixing-sonarqube-issues-after-raising-a-pr-in-cursor-using-mcp",
                BlogDescription: "Set up the SonarQube MCP server in Cursor, catch issues in the editor with SonarQube for IDE, and block bad code at commit time with a pre-commit hook.",
                BlogTags: "MCP, Cursor, SonarQube",
                BlogLink: "https://medium.com/@sujithg1999/stop-fixing-sonarqube-issues-after-raising-a-pr-do-it-inside-cursor-using-mcp-21ce34fa5e1f",
                alt: 'medium-link-4',
            },
            {
                BlogName: "CSS-in-JS: Pros and Cons for Modern React Development",
                BlogSlug: "css-in-js-pros-and-cons-for-modern-react-development",
                BlogDescription: "What CSS-in-JS is, its pros and cons for modern React development, and when it is the right choice.",
                BlogTags: "CSS-in-JS, Reactjs, CSS",
                BlogLink: "https://medium.com/@sujithg1999/css-in-js-pros-and-cons-for-modern-react-development-3e1cbc329eda",
                alt: 'medium-link-3',
            },
            {
                BlogName: "Throttling in JavaScript",
                BlogSlug: "throttling-in-javascript",
                BlogDescription: "What throttling is, why it is used, and how to implement it in JavaScript with setTimeout and with a time difference.",
                BlogTags: "JavaScript, Throttling, Performance",
                BlogLink: "https://medium.com/@sujithg1999/throttling-in-javascript-fde10f651f94",
                alt: 'medium-link-2',
            },
            {
                BlogName: "Progressive and lazy loading images in React.js",
                BlogSlug: "progressive-and-lazy-loading-images-in-react",
                BlogDescription: "How lazy and progressive loading improve image performance, and how to implement them in React.",
                BlogTags: "Lazy Loading, Reactjs, Performance",
                BlogLink: "https://medium.com/p/4bff31a66785",
                alt: 'medium-link-1',
            },
        ]
    },
    Education: [
        {
            year: "2020",
            type: "College",
            institute: "Bannari Amman Institute Of Technology",
            course: "B.Tech Information Technology"
        }
    ],
    Experience: [
        {
            company: "Walmart Global Tech",
            logo: "walmart-global-tech.svg",
            roles: [
                {
                    title: "Senior Software Engineer",
                    period: "Nov 2026 - Present",
                    highlights: []
                }
            ]
        },
        {
            company: "Freshworks",
            logo: "freshworks-logo.svg",
            roles: [
                {
                    title: "Lead Software Engineer - Frontend",
                    period: "Jan 2026 - Nov 2026",
                    highlights: [
                        "Led a Nuxt.js SSG-to-SSR migration, improving build times by ~95% and Core Web Vitals by ~30%",
                        "Introduced micro-frontend architecture and engineering standards, including AI-assisted development workflows, across the frontend team",
                        "Owned the technical roadmap and mentored engineers while driving cross-functional delivery in a fast-paced SaaS environment"
                    ]
                },
                {
                    title: "Senior Software Engineer - Frontend",
                    period: "Oct 2023 - Dec 2025",
                    highlights: [
                        "Optimised Marketplace Gallery performance using React profiling and code splitting, reducing page render time from 8s to 2s (75% improvement)",
                        "Designed and shipped the Review & Ratings feature across Marketplace Gallery, Website, and Developer Portal, increasing app adoption and engagement",
                        "Led a PoC for Meta Framework integration in FDK, improving third-party library compatibility and developer experience"
                    ]
                },
                {
                    title: "Software Engineer - Frontend",
                    period: "May 2022 - Oct 2023",
                    highlights: [
                        "Contributed to the Marketplace Gallery migration from Vue 2 to Vue 3, improving performance and maintainability",
                        "Designed and built 'App Referee,' an internal tool integrated into Freshdesk that streamlined app review workflows and reduced turnaround time",
                        "Led a PoC to migrate from Jest to Vitest, improving test execution speed and boosting code coverage from 60% to 97%",
                        "Contributed to Freshworks Crayons, an open-source UI framework"
                    ]
                }
            ]
        },
        {
            company: "Solartis",
            roles: [
                {
                    title: "Software Engineer",
                    period: "Aug 2021 - May 2022",
                    highlights: [
                        "Continued working on the same project and became part of a team focused on building reusable components that could be easily plugged into the main application.",
                        "Built and maintained reusable UI components such as tables, toast notifications, search bars, and more, ensuring consistency and ease of use across the application."
                    ]
                },
                {
                    title: "Associate Software Engineer",
                    period: "Jun 2020 - Jul 2021",
                    highlights: [
                        "Started by fixing bugs and handling small tasks to get familiar with the project and codebase.",
                        "Contributed to building the insurance product from scratch using React.js",
                        "Took full ownership of the quote creation and update flow, implementing the end-to-end experience for generating and modifying insurance quotes."
                    ]
                }
            ]
        }
    ]
}
