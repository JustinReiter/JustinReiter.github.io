import {Project, Experience} from './types';

export const projects : Project[] = [
    {
        name: 'WZClot',
        links: [
            {
                href: 'https://github.com/brendanfly/wzclot',
                type: 'github',
            }
        ],
        description: 'Test hello1',
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ]
    },
    {
        name: 'Warzone Statistics',
        links: [
            {
                href: 'https://github.com/JustinReiter/WarzoneScripts',
                type: 'github',
            }
        ],
        description: 'Test hello2',
        keywords: [
            'React',
            'JavaScript',
            'Python'
        ]
    }
]

export const experiences : Experience[] = [
    {
        company: 'Uplift',
        title: 'Software Engineer Intern',
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
        description: 'PHP stuff',
        keywords: [
            'PHP',
            'Laravel',
            'React'
        ]
    }
]
