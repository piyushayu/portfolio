export default function Navbar (){

    const navcomponent = [
     {name : "Home" , url : "#home"} , {name : "Projects" , url : "#projects"} , {name : "Contact" , url : "#contact"} , {name : "Blog" , url : "#blog"}
    ]

  return (
    <div className="flex items-center gap-4">
   {
    navcomponent.map((nav) => (
        <a className="text-neutral-500 text-sm hover:text-neutral-200 transition-colors duration-200"
        key={nav.name}
        href={nav.url}
        >
        {nav.name}
        </a>
    ))
   }
    </div>
  )
}