import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {Star} from 'lucide-react';


const skills = [
    // Frontend Technologies
    {name: "HTML/CSS", level: 2, state: "Junior", category: "Frontend"},
    {name: "JavaScript", level: 2,state: "Junior", category: "Frontend"},
    {name: "React", level: 1.5,state: "Begginer/Junior", category: "Frontend"},
    {name: "Tailwind CSS", level: 1,state: "Begginer", category: "Frontend"},
    
    // Backend and Programming Languages
    {name: "C++", level: 2,state: "Junior", category: "Programming"},
    {name: "C#", level: 2.5,state: "Junior/Mid", category: "Programming"},
    {name: "Java", level: 2.5,state: "Junior/Mid", category: "Programming"},
    {name: "Node.js", level: 2,state: "Junior", category: "Backend"},
    {name: "Express", level: 2,state: "Junior", category: "Backend"},
    // Databases
    {name: "MySQL", level: 2,state: "Junior", category: "Database"},
    {name: "MongoDB", level: 1,state: "Begginer", category: "Database"},

    // Tools and Technologies
    {name: "Git", level: 2,state: "Junior", category: "Tools"},
    {name: "Docker", level: 1,state: "Begginer", category: "Tools"},
    {name: "Linux", level: 2,state: "Junior", category: "Tools"},
    //Languages
    {name: "Polish", level: 5,state: "C2 - Native", category: "Languages"},
    {name: "English", level: 4,state: "C1 - Advanced", category: "Languages"},
    {name: "Spanish", level: 2,state: "A2 - Begginer", category: "Languages"},
    //Other Skills
    {name: "Driving License", level: 5,state: "B2", category: "Other"},
    {name: "Sailing License", level: 3,state: "Yacht sailor", category: "Other"},
    {name: "Motorboat License", level: 3,state: "Motorboat helmsman", category: "Other"},
    {name: "First Aid", level: 3,state: "First Aid Rescuer", category: "Other"},

]

const categories = ["All", "Frontend", "Backend", "Programming", "Database", "Tools", "Languages", "Other"];

const StarRating = ({rating, maxStars = 5}) => {
    const stars = [];
    for(let i=1; i<=maxStars; i++){
        const isFilled = i <= rating;
        const isHalfFilled = i - 0.5 === rating;

        stars.push(
            <div key={i} className="relative inline-block">
                <Star
                    size={20}
                    className ="text-muted-foreground/30 fill-current"
                />
                {isFilled && (
                    <Star
                        size={20}
                        className="absolute top-0 left-0 text-yellow-400 fill-current"
                    />
                )}
                {isHalfFilled && (
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                        <Star 
                            size={20} 
                            className="text-yellow-400 fill-current"
                        />
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className="flex items-center gap-1">
            <div className="flex">
                {stars}
            </div>
            <span className="text-sm text-muted-foreground ml-2">{rating}/{maxStars}</span>
        </div>
    )
}

export const SkillsSection = () =>{

    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}
                    </button>
                ))}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full">
                            <StarRating rating={skill.level} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.state}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </section>
}