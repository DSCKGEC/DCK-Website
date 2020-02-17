import ayushman from '../Assets/profile_pic/Ayushman_Bilas_Thakur.jpeg';
import suchana from '../Assets/profile_pic/Suchana_Chakrabarti.jpg';
import ankit from '../Assets/profile_pic/Ankit_Kurmi.jpeg';
import soumik from '../Assets/profile_pic/Soumik Adhikary.jpeg';

import {
    mdiTwitter,
    mdiLinkedin,
    mdiWeb,
    mdiGithubCircle,
    mdiEmail
} from "@mdi/js";

let current_team = [{
        name: "Ayushman Bilas Thakur",
        post: "Community Lead",
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
                icon: mdiEmail,
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
                icon: mdiEmail,
                link: "mailto:suchanachakraborty@gmail.com"
            }
        ]
    },
    {
        name: "Ankit Kurmi",
        post: "Technical Co-ordinator",
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
                icon: mdiEmail,
                link: "mailto:ankitkurmi152@gmail.com"
            }
        ]
    },
    {
        name: "Manojit Roy",
        post: "Convenor & Human Resource Lead",
        links: [{
            to: 'linkedin',
            icon: mdiLinkedin,
            link: 'https://www.linkedin.com/in/manojit-roy-8a93a1183/'
        }, ]
    },
    {
        name: "Soumik Adhikary",
        post: "Head of Content & Event Co-ordinator",
        picture: soumik,
        links: [{
                to: 'github',
                icon: mdiGithubCircle,
                link: 'https://github.com/soumik-devil'
            },
            {
                to: 'email',
                icon: mdiEmail,
                link: "mailto:soumiknptel12@gmail.com"
            }
        ]
    },
]

export default current_team