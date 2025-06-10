import { ExternalLink } from "lucide-react"
import { Github } from "lucide-react"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        id:1,
        title: "The Bubbling of Frog",
        description: "This is a 2D Game that won 2nd place on Beskid GameJam 2024 - basing on The binding of Isaac, where players control a frog and navigate through various levels. The project uses Unity and C#.",
        image: "/projects/gameJam.jpg",
        tags: ["Unity", "C#", "Game Development", "2D Game"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id:2,
        title: "Space Shooter Game",
        description: "This is a web game that allows players to control a spaceship and shoot enemies in space. The project uses JavaScript and ASP.NET.",
        image: "/projects/space_game_js.png",
        tags: ["JavaScript", "ASP.NET", "HTML", "CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/FRESH00L/space_game",
    },
    {
        id:3,
        title: "Badminton Toournament Management System",
        description: "This is computer aplication that can simulate badminton tournaments and manages data, project uses C# and MVC as its architecture.",
        image: "/projects/db_badminton.png",
        tags: ["C#", "MVC", "SQL", "Visual Studio","Entity Framework"],
        demoUrl: "#",
        githubUrl: "https://github.com/FRESH00L/badmintonDBapp",
    },
    {
        id:4,
        title: "Weather Web Aplication",
        description: "This is a web application that allows users to check the weather in different locations. The project uses React, JavaScript, Tailwind and API.",
        image: "/projects/weatherApp.png",
        tags: ["React", "JavaScript", "tailwind", "API", "Web Development"],
        demoUrl: "#",
        githubUrl: "https://github.com/FRESH00L/weatherApp",
    },
    
    
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity. Click on the links to view the live demos or the source code on GitHub.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-3">
                            {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                            <div className="flex space-x-3"> 
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    
    <div className="text-center mt-12">
        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Fresh00l"
            target="_blank"
            >
            Check My Github <ArrowRight size={16} />
        </a>
    </div>

        

    </section>
}