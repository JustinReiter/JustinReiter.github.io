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
                href: 'http://wzclot.com/',
                type: 'link'
            }
        ],
        date: '2020 - Present',
        description: 'WZClot is a Django platform deployed on Azure to manage tournaments and leagues on the Risk-like game, Warzone. The platform boasts +40,000 games played across +500 events with 1,500 players signed onto the site.',
        subdescription: 'Personal contributions to the site include significant changes to the largest regularly-run event — Clan League, extensions to the discord integration to manage automated game updates, implementations of admin commands, and the creation of a joinable ladder through the Discord bot.',
        keywords: [
            'Django',
            'Azure',
            'Python',
            'PostgreSQL'
        ],
        img: { 
            src: 'wzclot.png',
            alt: 'WZClot event bracket'
        }
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
        date: '2021',
        description: 'WZ Statistics is platform to aggregate and track statistics covering the official ladders on the Risk-like game, Warzone. The platform contains data spanning 3,000 players and +110,000 games over 45 seasons of the Seasonal ladder.',
        subdescription: 'The front-end is created with React, while the back-end uses Express and CockroachDB to create a data-driven platform.',
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ],
        img: { 
            src: 'wzstatistics.png',
            alt: 'WZ Statistics graph'
        }
    },
    {
        name: 'Flock | HTN 2020++ Winner',
        links: [
            {
                href: 'https://github.com/SPriyaJain/movie-night-htn',
                type: 'github'
            },
            {
                href: 'https://devpost.com/software/flock-figure-out-what-film-to-watch-with-friends',
                type: 'devpost'
            }
        ],
        date: '2021',
        description: 'Developed in the Hack the North 2020++ hackathon, Flock is a mobile app to help friends discover mutually-liked movies. The platform consists of a React Native front-end, Express back-end and CockroachDB database to store 6,860 movies across 27 genres.',
        subdescription: 'This hack won the CockroachDB sponsor prize at the HTN 2020++ hackathon for the best use of the CockroachDB database!',
        keywords: [
            "React Native",
            "Express",
            "JavaScript",
            "CockroachDB"
        ],
        img: { 
            src: 'flock.jpg',
            alt: 'Picture of Flock graphic'
        }
    },
    {
        name: 'Sun King | Rocket League Bot',
        links: [
            {
                href: 'https://github.com/JustinReiter/RL-JBot',
                type: 'github'
            }
        ],
        date: '2022',
        description: "A machine learning bot created to play 1v1 games in Rocket League with supervised learning consisting of data from human players. The models were created with Tensorflow and required custom plugins to extract data from players in-game to construct the training datasets.",
        keywords: [
            "Python",
            "Machine Learning",
            "Tensorflow",
            "C++"
        ]
    },
    {
        name: 'JBot | Warlight.AI Bot',
        links: [
            {
                href: 'https://github.com/JustinReiter/WarLight.AI',
                type: 'github'
            }
        ],
        date: '2020',
        description: "JBot is an artificial intelligence bot developed to play the Risk-like game, Warzone. Among all existing bots, JBot achieves the strongest starting distribution with complex, dynamic decisions.",
        keywords: [
            "C#",
            "Artificial Intelligence"
        ],
        img: {
            src: 'jbot.png',
            alt: 'JBot starting picks on Strategic MME'
        }
    },
    {
        name: 'WZ Clan League Scripts',
        links: [
            {
                href: 'https://github.com/JustinR17/wzcl-scripts',
                type: 'github'
            }
        ],
        date: '2022',
        description: "This project is an assortment of scripts created to help manage the Clan League event on Warzone. Clan League is a Promotion/Relegation event where clans compete in different game modes for a trophy. The event spans 6 months, with the involvement of 25 clans and 500 players.",
        subdescription: "The scripts handle all aspects of the event lifecycle. This includes Google App Scripts to manage populating and tallying scores on a Google Sheets, Python scripts for scorekeepers to compose update reports, and JavaScript files to regularly update score results.",
        keywords: [
            "Python",
            "JavaScript",
            "Google App Scripts",
            "Web Scraping",
            "Automation"
        ],
        img: {
            src: 'wzcl.png',
            alt: 'Scorekeeper script output'
        }
    }
]

// WORK EXPERIENCE
export const experiences : Experience[] = [
    {
        company: 'Uplift',
        title: 'Software Engineer Intern',
        date: 'Jan 2022 - Present',
        description: [
            'Ported functionality of support tools to new React platform used by customer service representatives (CSR).',
            'Fixed and improved automated Jest & Pytest coverage of CSR tools from 50% to 95%.'
        ],
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ]

    },
    {
        company: 'Horizn',
        title: 'Software Developer Intern',
        date: 'May 2021 - Aug 2021',
        description: [
            'Expanded PHP Laravel digital learning platform with React components used by major banks',
            'Built new full-stack feature to email subscribed users weekly with new course content',
            'Developed functionality on React-based learning modules for non-linear story progression',
        ],
        keywords: [
            'PHP',
            'Laravel',
            'React'
        ]
    },
    {
        company: 'Bank of America',
        title: 'Software Developer Intern',
        date: 'Sep 2020 - Dec 2020',
        description: [
            'Created Java tool to automate Maven dependency versioning across 4 repos with 10 projects',
            'Updated legacy programs to utilize Kerberos and increased password encryptions',
        ],
        keywords: [
            'Java'
        ]
    },
    {
        company: 'IBM',
        title: 'Full-Stack Developer Intern',
        date: 'Jan 2020 - Apr 2020',
        description: [
            'Improved Anti-Money Laundering (AML) React application with Redux via new homepages generalizing key pipeline performance metrics for bank managers and analysts',
            'Automated unit and end-to-end testing of application through Cypress and Jest',
        ],
        keywords: [
            'React',
            'JavaScript',
            'Python',
            'MongoDB'
        ]
    }
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
    "NOR B": "38"
};

export const COURSES = [
    {
        "code": "SE350",
        "name": "Operating Systems",
        "desc": ""
    },
    {
        "code": "CS240",
        "name": "Data Structures",
        "desc": ""
    },
    {
        "code": "CS341",
        "name": "Algorithms",
        "desc": ""
    },
    {
        "code": "SE465",
        "name": "Software Testing & QA",
        "desc": ""
    },
    {
        "code": "CS343",
        "name": "Concurrent & Parallel Programming",
        "desc": ""
    }
]
