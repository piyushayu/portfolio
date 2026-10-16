import { StaticImageData } from "next/image";

export interface link {
 platform : string,
 url : string,
 icon : string,
}

export interface Stack {
    name : string,
    icons : string,
    category?: "frontend" | "backend" | "technologies",
}

export interface projecttech {
    name : string
}

export interface BlogItem {
    title : string,
    shortdescription : string,
    description : string,
    image : StaticImageData | string,
    link : string,
    date : string
}

export interface ContactLink {
  name: string;
  url: string;
  platform?: string;
}

export interface Dataschema {
   home : {
    name : string,
    description : string[],
    avatar : string,
    homeimage : string,
    Role : string[],
    Sociallink : link[];
   },
    
   projects : [
    {
    title : string,
    shortdescription : string,
    description : string,
    image : StaticImageData | string,
    link : string,
    githublink : string,
    tech : projecttech[]
    }
   ],

   blogs : BlogItem[],

   tech : {
    Frontend : Stack[],
    Backend : Stack[],
    Technologies: Stack[]
   },

   Contact : {
    Headline : string,
    links : ContactLink[],
   }

   footer : {
    Quote : string,
    Quotename : string,
    name : string,
    year : number;
   }

} 
