import { Dataschema } from "./DataSchema";
import vetshaathi from "../../public/vetsaathi.png"

export const Data : Dataschema = {
    home : {
        name : "Piyush",
        description : ["I build scalable, high-performance web applications with a strong focus on backend development." , "I’m a passionate developer focused on building things that are useful, reliable, and thoughtfully designed."],
        avatar : "",
        homeimage : "",
        Role : ["Full Stack Developer", "A Frontend Developer" , "A Backend Developer"],
        Sociallink : [
        {
            platform : "Twitter",
            url : "https://twitter.com/confusedpiyush",
            icon : "",
        },
        {
            platform : "Github",
            url : "https://github.com/piyushayu",
            icon : "",
        },
        {
            platform : "Linkedin",
            url : "https://www.linkedin.com/in/piyush-singh-1b9a0036a/",
            icon : "",
        }
        ]
    },

    projects : [
        {
            title : "Vetshaathi",
            shortdescription : "A virtual consultant for animal disease",
            description : "It helps to find the disease on the basis of suitable symptoms and give the medicine details to cure it",
            image : vetshaathi, 
            link : "",
            githublink : "",
            tech : [
                {
                    name : "React"
                },
                {
                    name : "Supabase"
                },
                {
                    name : "Tailwind"
                }
            ]
        }
    ],

    tech : {
        Frontend: [
            { name: "TypeScript", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "React", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
            { name: "Next.js", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
            { name: "TailwindCSS", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "ShadcnUI", icons: "https://cdn.simpleicons.org/shadcnui" },
            { name: "Redux", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
            { name: "Zustand", icons: "https://cdn.simpleicons.org/Zustand" },
            { name: "HTML", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
            { name: "CSS", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        ],
        Backend: [
            { name: "Node.js", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
            { name: "Bun", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bun/bun-original.svg" },
            { name: "Express", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
            { name: "Socket.io", icons: "https://cdn.simpleicons.org/socket.io"},
            { name: "MongoDB", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
            { name: "Prisma", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" },
            { name: "Drizzle", icons: "https://cdn.simpleicons.org/Drizzle" },
        ],
        Technologies: [
            { name: "Cloudflare", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg" },
            { name: "Docker", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
            { name: "Git", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
            { name: "Postman", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
            { name: "Cloudinary", icons: "https://cdn.simpleicons.org/cloudinary" },
            { name: "Vercel", icons: "https://cdn.simpleicons.org/vercel" },
            { name: "VS Code", icons: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
        ]
    },

    Contact : {
        Headline : "Wanna Share your thoughts with me"
    },

    footer :{
        Quote : "Your every thought becomes quote when you become successfull",
        Quotename : "Piyush Singh",
        name : "Piyush",
        year : 2026
    }

}

