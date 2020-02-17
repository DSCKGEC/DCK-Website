import ayushman from '../Assets/profile_pic/Ayushman_Bilas_Thakur.jpeg';
import suchana from '../Assets/profile_pic/Suchana_Chakrabarti.jpg';
import ankit from '../Assets/profile_pic/Ankit_Kurmi.jpeg';
import soumik from '../Assets/profile_pic/Soumik Adhikary.jpeg';

import {
    mdiTwitter,
    mdiLinkedin,
    mdiWeb,
    mdiGithubCircle,
    mdiMail
} from "@mdi/js";

let current_team = [{
        name: "Ayushman Bilas Thakur",
        post: "DC Lead",
        picture: ayushman,
        links: [{
                to: 'twitter',
                icon: mdiTwitter,
                link: 'https://twitter.com/AyushmanBThakur'
            },
            {
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/ayushman-bilas-thakur-13162a16b/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/AyushmanBilasThakur'
            },
            {
                to: 'website',
                icon: mdiWeb,
                link: 'https://www.ayushmanbthakur.com/'
            },
            {
                to: 'email',
                icon: mdiMail,
                link: "mailto:ayushmanbilasthakur@gmail.com"
            }
        ]
    },
    {
        name: "Suchana Chakraborty",
        post: "Assistant Lead",
        picture: suchana,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/Suchana34'
            },
            {
                to: 'email',
                icon: mdiMail,
                link: "mailto:suchanachakraborty@gmail.com"
            }
        ]
    },
    {
        name: "Ankit Kurmi",
        post: "??",
        picture: ankit,
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/ankitk152"
            },
            {
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/Ankit152'
            },
            {
                to: 'email',
                icon: mdiMail,
                link: "mailto:ankitkurmi152@gmail.com"
            }
        ]
    },
    {
        name: "Soumik Adhikary",
        post: "??",
        picture: soumik,
        links: [{
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/soumik-devil'
            },
            {
                to: 'email',
                icon: mdiMail,
                link: "mailto:soumiknptel12@gmail.com"
            }
        ]
    }
]

export default current_team