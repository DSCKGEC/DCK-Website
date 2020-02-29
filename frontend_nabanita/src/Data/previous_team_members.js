import dipan from '../Assets/profile_pic/Dipan_Roy.jpeg'
import ritankar from '../Assets/profile_pic/Ritankar_Paul.jpeg'
import ramyajit from '../Assets/profile_pic/Ramyajit_Chowdhury.jpg'
import nabanita from '../Assets/profile_pic/Nabanita_Sarkar.jpeg'
import abhinav from '../Assets/profile_pic/Abhinav_Ghosh.jpeg'
import indrashis from '../Assets/profile_pic/Indrashis_Ghosh.jpeg'


import {
    mdiLinkedin,
    mdiWeb,
    mdiEmail,
    mdiGithubCircle
} from "@mdi/js";

let previous_members = [{
        name: "Dipan Roy",
        post: "Community Lead",
        picture: dipan,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/dipan29/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/dipan29"
            },
            {
                to: 'website',
                icon: mdiWeb,
                link: 'https://DipanRoy.com/'
            },
            {
                to: 'mail',
                icon: mdiEmail,
                link: "mailto:dipan.roy@kgec.edu.in"
            }

        ]
    },
    {
        name: "Ritankar Paul",
        post: "Assistant Lead",
        picture: ritankar,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/ritankar-paul-95269513a/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/xritzx"
            },
            {
                to: 'mail',
                icon: mdiEmail,
                link: "mailto:ritankar.paul@kgec.edu.in"
            },
        ]
    },
    {
        name: "Ramyajit Chowdhury",
        post: "Editorial Head",
        picture: ramyajit,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "http://www.linkedin.com/in/rey03"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/Ramyajit"
            }
        ]
    },
    {
        name: "Nabanita Sarkar",
        post: "Convenor",
        picture: nabanita,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/nabanita-sarkar"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/nabanita-sarkar"
            }
        ]
    },
    {
        name: "Abhinav Ghosh",
        post: "Lead Designer",
        picture: abhinav,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/abhinav-ghosh/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/abhinavgsh"
            }
        ]
    },
    {
        name: "Indrasish Ghosh",
        post: "Co-convenor",
        picture: indrashis,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/indrasish-ghosh-174825174"
            },
            {
                to: 'mail',
                icon: mdiEmail,
                link: "mailto:Indrasish2013@gmail.com"
            }
        ]
    },
    {
        name: "Krishna Bose",
        post: "Teaching Assistant",
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/krishnabose/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: "https://github.com/krishnabose02"
            }
        ]
    },
]

export default previous_members;