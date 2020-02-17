import ayushman from '../Assets/profile_pic/ayushman.jpeg'

import {
    mdiTwitter,
    mdiLinkedin,
    mdiWeb
} from "@mdi/js";

let current_team = [{
        name: "Ayushman Bilas Thakur",
        post: "Random DC Member",
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
                to: 'website',
                icon: mdiWeb,
                link: 'https://www.ayushmanbthakur.com/'
            }

        ]
    },
    {
        name: "Suchana Chakraborty",
        post: "Random DC Member",
        links: [{
                to: 'linkedin',
                icon: mdiLinkedin,
                link: "https://www.linkedin.com/in/suchana-chakrabarti-770b5616b/"
            },
            {
                to: 'website',
                icon: mdiWeb,
                link: 'http://suchana.cf/'
            }

        ]
    }
]

export default current_team