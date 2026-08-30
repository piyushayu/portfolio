
export interface Data extends Document {
  home : Object;
  projects : Object[];
  tech : Object;
  Contact : Object;
  footer : Object;
}

export interface link {
 platform : String,
 url : String,
 icon : String,
}

export interface Stack {
    name : String,
    image : String
}

export interface projecttech {
    name : string
}

export interface Dataschema extends Data {
   home : {
    name : String,
    description : String,
    avatar : String,
    homeimage : String,
    Role : String[],
    Sociallink : link[];
   },
    
   projects : [
    {
    title : String,
    shortdescription : String,
    description : String,
    image : String,
    link : String,
    githublink : String,
    tech : projecttech[]
    }
   ],

   tech : {
    Frontend : Stack[],
    Backend : Stack[],
    Stack : Stack[];
   },

   Contact : {
    Headline : String,
   }

   footer : {
    Quote : String,
    name : String,
    year : Number;
   }

} 




