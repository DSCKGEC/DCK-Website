import dipan from '../Assets/profile_pic/Dipan_Roy.jpeg'
import ritankar from '../Assets/profile_pic/Ritankar_Paul.jpeg'
import puja from '../Assets/profile_pic/Puja_Sarkar.jpeg'
import indrashis from '../Assets/profile_pic/Indrashis_Ghosh.jpeg'

import {
    mdiTwitter,
    mdiLinkedin,
    mdiWeb,
    mdiMail,
    mdiGithubCircle
} from "@mdi/js";

let previous_members = [{
        name: "Dipan Roy",
        post: "DC KGEC Lead",
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
                icon: mdiMail,
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
                icon: mdiMail,
                link: "mailto:ritankar.paul@kgec.edu.in"
            },
        ]
    },
    {
        name: "Puja Sarkar",
        post: "??",
        picture: puja,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/ritankar-paul-95269513a/"
            },
            {
                to: 'mail',
                icon: mdiMail,
                link: "mailto:pujasarkar6054@gmail.com"
            }
        ]
    },
    {
        name: "Indrasish Ghosh",
        post: "??",
        picture: indrashis,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/indrasish-ghosh-174825174"
            },
            {
                to: 'mail',
                icon: mdiMail,
                link: "mailto:Indrasish2013@gmail.com"
            }
        ]
    }
]

export default previous_members;