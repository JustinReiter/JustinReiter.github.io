import {Project, Experience} from './types';

// PROJECTS
export const projects : Project[] = [
    {
        name: 'WZClot',
        links: [
            {
                href: 'https://github.com/brendanfly/wzclot',
                type: 'github',
            },
            {
                href: 'http://wzclot.eastus.cloudapp.azure.com/',
                type: 'link'
            }
        ],
        date: '2020 - Present',
        short_desc: 'A platform for running complex tournaments & leagues for Warzone. Incorporates a Discord bot and platform that integrates with Warzone through APIs.',
        description: 'WZClot is a Django platform deployed on Azure to manage tournaments and leagues on the Risk-like game, Warzone. The platform manages +44,000 games played across +500 events with +1,400 players signed onto the site.',
        subdescription: 'Personal contributions to the site include significant changes to the largest regularly-run event — Clan League, extensions to the discord integration to manage automated game updates, implementations of admin commands, and the creation of a joinable ladder through the Discord bot. I also help lead an annual event that yields 500 players facing off against each other in clan-based games.',
        keywords: [
            'Django',
            'Azure',
            'Python',
            'PostgreSQL'
        ],
        priority: 7,
        img: { 
            src: 'wzclot.png',
            alt: 'WZClot event bracket'
        },
    },
    {
        name: 'Warzone Statistics',
        links: [
            {
                href: 'https://github.com/JustinReiter/warzone-statistics',
                type: 'github',
            },
            {
                href: 'https://warzone-statistics.herokuapp.com/',
                type: 'link'
            }
        ],
        date: '2021 - 2022',
        short_desc: 'Site aggregating statistics and data across the Seasonal ladder on Warzone.',
        description: 'WZ Statistics is platform to aggregate and track statistics covering the official ladders on the Risk-like game, Warzone. The platform contains data spanning 3,000 players and +117,000 games over +45 seasons of the Seasonal ladder. Users can view stats regarding a specific season or player with details of every game.',
        subdescription: 'The front-end is created with React, while the back-end uses Express and CockroachDB to create a data-driven platform.',
        priority: 3,
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ],
        img: { 
            src: 'wzstatistics.png',
            alt: 'WZ Statistics graph'
        },
    },
    // {
    //     name: 'Flock | HTN 2020++ Winner',
    //     links: [
    //         {
    //             href: 'https://github.com/SPriyaJain/movie-night-htn',
    //             type: 'github'
    //         },
    //         {
    //             href: 'https://devpost.com/software/flock-figure-out-what-film-to-watch-with-friends',
    //             type: 'devpost'
    //         }
    //     ],
    //     date: '2021',
    //     description: 'Developed in the Hack the North 2020++ hackathon, Flock is a mobile app to help friends discover mutually-liked movies. The platform consists of a React Native front-end, Express back-end and CockroachDB database to store 6,860 movies across 27 genres.',
    //     subdescription: 'This hack won the CockroachDB sponsor prize at the HTN 2020++ hackathon for the best use of the CockroachDB database!',
    //     priority: 2,
    //     keywords: [
    //         "React Native",
    //         "Express",
    //         "JavaScript",
    //         "CockroachDB"
    //     ],
    //     img: { 
    //         src: 'flock.jpg',
    //         alt: 'Picture of Flock graphic'
    //     },
    // },
    // {
    //     name: 'JBot | Warlight.AI Bot',
    //     links: [
    //         {
    //             href: 'https://github.com/JustinReiter/WarLight.AI',
    //             type: 'github'
    //         }
    //     ],
    //     date: '2020',
    //     description: "JBot is an artificial intelligence bot developed to play the Risk-like game, Warzone. Among all existing bots, JBot achieves the strongest starting distribution with complex, dynamic decisions.",
    //     priority: 1,
    //     keywords: [
    //         "C#",
    //         "Artificial Intelligence"
    //     ],
    //     img: {
    //         src: 'jbot.png',
    //         alt: 'JBot starting picks on Strategic MME'
    //     },
    // },
    {
        name: 'Wombat SymX (Capstone Project)',
        links: [
            {
                href: 'https://github.com/JustinReiter/wombat-symx',
                type: 'github',
            }
        ],
        date: '2022 - 2023',
        short_desc: 'A Rust symbolic executor for LLVM bytecode to verify program safety.',
        description: 'Wombat SymX is a symbolic execution tool for LLVM bytecode that is written in Rust. The project performs static analysis on languages that compile to LLVM bytecode to determine function safety.',
        subdescription: 'This project is developed as the fourth-year design capstone project for the Software Engineering program at the University of Waterloo.',
        priority: 8,
        keywords: [
            'Rust',
        ],
    },
    {
        name: 'Warzone Game Engine',
        links: [
            {
                href: 'https://github.com/JustinReiter/WarzoneEngine',
                type: 'github',
            }
        ],
        date: '2023 - Present',
        short_desc: 'A game engine to run customizable Warzone games without APIs.',
        description: 'Warzone Game Engine is a project designed at emulating Warzone games across a variety of settings with the intent on being used for creating an ML bot. Warzone currently does not have an effective way to train on real games as this relies on an API to progress turns.',
        subdescription: 'Currently in-progress.',
        priority: 9,
        keywords: [
            'Python',
        ],
    },
    // {
    //     name: 'Sun King | Rocket League Bot',
    //     links: [
    //         {
    //             href: 'https://github.com/JustinReiter/RL-JBot',
    //             type: 'github'
    //         }
    //     ],
    //     date: '2022',
    //     description: "A machine learning bot created to play 1v1 games in Rocket League with supervised learning consisting of data from human players. The models were created with Tensorflow and required custom plugins to extract data from players in-game to construct the training datasets.",
    //     priority: 4,
    //     keywords: [
    //         "Python",
    //         "Machine Learning",
    //         "Tensorflow",
    //         "C++"
    //     ],
    // },
    // {
    //     name: 'WZ Clan League Scripts',
    //     links: [
    //         {
    //             href: 'https://github.com/JustinR17/wzcl-scripts',
    //             type: 'github'
    //         }
    //     ],
    //     date: '2022',
    //     description: "This project is an assortment of scripts created to help manage the Clan League event on Warzone. Clan League is a Promotion/Relegation event where clans compete in different game modes for a trophy. The event spans 6 months, with the involvement of 25 clans and 500 players.",
    //     subdescription: "The scripts handle all aspects of the event lifecycle. This includes Google App Scripts to manage populating and tallying scores on a Google Sheets, Python scripts for scorekeepers to compose update reports, and JavaScript files to regularly update score results.",
    //     priority: 6,
    //     keywords: [
    //         "Python",
    //         "JavaScript",
    //         "Google App Scripts",
    //         "Web Scraping",
    //         "Automation"
    //     ],
    //     img: {
    //         src: 'wzcl.png',
    //         alt: 'Scorekeeper script output'
    //     },
    // },
]

// WORK EXPERIENCE
export const experiences : Experience[] = [
    {
        company: 'Splunk',
        title: 'Software Engineer Intern',
        date: 'Sep 2022 - Dec 2022',
        location: 'San Jose, CA',
        short_desc: 'Member of the Core Enterprise UI team. Migrated existing Backbone.js to React and patched severe & critical accessibility bugs.',
        description: [
            'Upgraded page in the Core Enterprise platform from Backbone.js to React for improved accessibility & unified experience',
            'Improved team dependency vulnerability response via Gitlab pipeline jobs for security scans & dependency updates',
            'Fixed severe accessibility bugs in the Core platform preventing users from navigating table views',
        ],
        keywords: [
            'React',
            'TypeScript',
            'Backbone.js',
            'Gitlab CI',
        ],
        link: 'https://www.splunk.com/',
    },
    {
        company: 'Uplift',
        title: 'Software Engineer Intern',
        date: 'Jan 2022 - Apr 2022',
        location: 'Toronto, ON',
        short_desc: 'Member of the Consumer Products Squad. Developed new homepage for customer support portal to improve on-boarding. Patched bugs in customer portal & added functionality to new customer support portal.',
        description: [
            'Ported account & loan functionality of customer support (CSR) tools to new React platform',
            'Redesigned and maximized automated Jest & Pytest coverage of CSR tools from 50% to 95%',
            'Implemented new landing page accessing AWS Cognito to streamline developer & CSR on-boarding',
            'Optimized React platform through Redux store workflow changes & parallel back-end API queries',
        ],
        keywords: [
            'React',
            'JavaScript',
            'Python',
            'AWS',
        ],
        link: 'https://www.uplift.com/',
    },
    {
        company: 'Horizn',
        title: 'Software Developer Intern',
        date: 'May 2021 - Aug 2021',
        location: 'Toronto, ON',
        short_desc: 'Implemented non-linear story progression to learning modules & worked with product managers and clients to update content. Migrated content for major banks to new universal platform.',
        description: [
            'Developed non-linear story progression functionality on React-based learning modules',
            'Built full-stack subscription feature to notify customers weekly regarding new course content',
            'Optimized accessibility of PHP Laravel & React platform used by international major banks',
        ],
        keywords: [
            'PHP',
            'Laravel',
            'React',
        ],
        link: 'https://horizn.com/',
    },
    // {
    //     company: 'Bank of America',
    //     title: 'Software Developer Intern',
    //     date: 'Sep 2020 - Dec 2020',
    //     location: 'Toronto, ON',
    //     short_desc: '',
    //     description: [
    //         'Created Java tool to automate Maven dependency versioning across 4 repos with 10 projects',
    //         'Updated legacy programs to utilize Kerberos and increased password encryptions',
    //     ],
    //     keywords: [
    //         'Java',
    //     ],
    //     link: 'https://www.bankofamerica.com/',
    // },
    {
        company: 'IBM',
        title: 'Full-Stack Developer Intern',
        date: 'Jan 2020 - Apr 2020',
        location: 'Toronto, ON',
        short_desc: 'Developed homepage for new fraud detection program to summarize performance metrics.',
        description: [
            'Developed homepage generalizing fraud pipeline performance metrics for bank managers & analysts',
            'Automated unit & end-to-end testing of React application through Cypress and Jest',
        ],
        keywords: [
            'React',
            'JavaScript',
            'Python',
            'MongoDB',
        ],
        link: 'https://www.ibm.com/ca-en',
    },
]


// NATIONS CUP
export const NC_TEAM_MAPPING: {[k in string]: string} = {
    "IRL": "1",
    "GER D": "2",
    "SPA&POR": "3",
    "SWI": "4",
    "BEL": "5",
    "NL A": "6",
    "NL B": "7",
    "NL C": "8",
    "NL D": "9",
    "ITA": "10",
    "UK A": "11",
    "UK B": "12",
    "UK C": "13",
    "HEL": "14",
    "GER A": "15",
    "GER B": "16",
    "GER C": "17",
    "CZE A": "18",
    "CZE B": "19",
    "POL A": "20",
    "POL B": "21",
    "POL C": "22",
    "POL D": "23",
    "FIN": "24",
    "AUS&NZ A": "25",
    "AUS&NZ B": "26",
    "CAN": "27",
    "S AME": "28",
    "USA A": "29",
    "USA B": "30",
    "USA C": "31",
    "USA D": "32",
    "FRA A": "33",
    "FRA B": "34",
    "FRA C": "35",
    "FRA D": "36",
    "NOR A": "37",
    "NOR B": "38",
};

export const COURSES = [
    {
        "code": "CS451",
        "name": "Data-Intensive Distributed Computing",
        "desc": "",
    },
    {
        "code": "ECE459",
        "name": "Programming for Performance",
        "desc": "",
    },
    {
        "code": "CO487",
        "name": "Applied Cryptography",
        "desc": "",
    },
    {
        "code": "SE350",
        "name": "Operating Systems",
        "desc": "",
    },
    {
        "code": "CS240",
        "name": "Data Structures",
        "desc": "",
    },
    {
        "code": "CS341",
        "name": "Algorithms",
        "desc": "",
    },
    {
        "code": "CS486",
        "name": "Introduction to Artificial Intelligence",
        "desc": "",
    },
    {
        "code": "CS370",
        "name": "Numerical Computation",
        "desc": "",
    },
    {
        "code": "SE465",
        "name": "Software Testing & QA",
        "desc": "",
    },
    {
        "code": "SE463",
        "name": "Software Requirements Specification",
        "desc": "",
    },
    {
        "code": "CS343",
        "name": "Concurrent & Parallel Programming",
        "desc": "",
    },
]
