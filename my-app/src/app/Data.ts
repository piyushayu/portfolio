import { Dataschema } from "./DataSchema";

export const Data : Dataschema = {
    home : {
        name : "Piyush",
        description : ["I'm a web developer" , "I'm a software engineer"],
        avatar : "",
        homeimage : "",
        Role : ["Full Stack Developer", "A Frontend Developer" , "A Backend Developer"],
        Sociallink : [
        {
            platform : "Twitter",
            url : "https://twitter.com/piyush",
            icon : "",
        },
        {
            platform : "Github",
            url : "https://github.com/piyuayu",
            icon : "",
        },
        {
            platform : "Linkedin",
            url : "www.linkedin.com/in/piyush-singh-1b9a0036a",
            icon : "",
        }
        ]
    },

    projects : [
        {
            title : "Vetshaathi",
            shortdescription : "A virtual consultant for animal disease",
            description : "It helps to find the disease on the basis of suitable symptoms and give the medicine details to cure it",
            image : "",
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
            { name: "HTML", image: "" },
            { name: "CSS", image: "" },
            { name: "JavaScript", image: "" },
            { name: "TypeScript", image: "" },
            { name: "React", image: "" },
            { name: "Next.js", image: "" },
            { name: "Tailwind CSS", image: "" },
            { name: "Redux", image: "" },
          ],
          Backend: [
            { name: "Node.js", image: "" },
            { name: "Express", image: "" },
            { name: "MongoDB", image: "" },
          ],
          Stack: [
            { name: "VS Code", image: "" },
            { name: "Git", image: "" },
          ],
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

