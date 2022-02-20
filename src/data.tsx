import {Project, Experience} from './types';

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
        description: 'Test hello1',
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ],
        img: 'wzclot.png'
    },
    {
        name: 'Warzone Statistics',
        links: [
            {
                href: 'https://github.com/JustinReiter/WarzoneScripts',
                type: 'github',
            },
            {
                href: 'https://warzone-statistics.herokuapp.com/',
                type: 'link'
            }
        ],
        description: 'Test hello2',
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ],
        img: 'wzstatistics.png'
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
                type: 'link'
            }
        ],
        description: "Test hello3",
        keywords: [
            "React Native",
            "Express",
            "JavaScript",
            "CockroachDB"
        ],
        img: 'flock.jpg'
    },
    {
        name: 'Sun King | Rocket League Bot',
        links: [
            {
                href: 'https://github.com/JustinReiter/RL-JBot',
                type: 'github'
            }
        ],
        description: "Test hello3",
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
        description: "Test hello3",
        keywords: [
            "C#",
            "Artificial Intelligence"
        ]
    }
]

export const experiences : Experience[] = [
    {
        company: 'Uplift',
        title: 'Software Engineer Intern',
        date: 'Jan 2022 - Present',
        description: 'React something something',
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
        description: 'PHP stuff',
        keywords: [
            'PHP',
            'Laravel',
            'React'
        ]
    },
    {
        company: 'Bank of America',
        title: 'Software Developer Intern',
        date: 'Sep 2020 - Dec 2022',
        description: 'Java stuff',
        keywords: [
            'Java'
        ]
    },
    {
        company: 'IBM',
        title: 'Full-Stack Developer Intern',
        date: 'Jan 2020 - Apr 2020',
        description: 'React stuff',
        keywords: [
            'React',
            'JavaScript',
            'Python',
            'MongoDB'
        ]
    }
]
