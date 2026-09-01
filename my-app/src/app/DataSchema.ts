import { StaticImageData } from "next/image";

export interface link {
 platform : string,
 url : string,
 icon : string,
}

export interface Stack {
    name : string,
    image : string
}

export interface projecttech {
    name : string
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

   tech : {
    Frontend : Stack[],
    Backend : Stack[],
    Stack : Stack[];
   },

   Contact : {
    Headline : string,
   }

   footer : {
    Quote : string,
    Quotename : string,
    name : string,
    year : number;
   }

} 
