
import React from 'react';
import { Code, Download } from 'lucide-react';
import { User } from 'lucide-react';
import { Briefcase } from 'lucide-react';


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container max-auto max-w-5xl">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">I’m a programmer with a focus on designing computer and web applications, as well as 2D games. I enjoy blending creativity with problem-solving to build meaningful and engaging projects.</p>
                    
                    <p className="text-muted-foreground">
                        I spent half a year abroad on the Erasmus program, where I enhanced both my computer science skills and language abilities through international collaboration and study.
                    </p>

                    <p className="text-muted-foreground">
                        Beyond coding, I enjoy sailing, tabletop RPGs, and chasing side quests — both in games and in life. Whether it's unlocking new achievements or taking on unexpected challenges, I’m always up for a new adventure.
                        I'm also the vice-president of a sailing association - SAILESIA, where I combine leadership with my love for the sails.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a 
                        href="/CV_Pawel_Swiezy.pdf"
                        download="CV_Pawel_Swiezy.pdf"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                           <div className='flex items-center gap-2 mx-auto'>
                            Download CV <Download size={16} />
                            </div> 
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'> Coding Skills</h4>
                                <p className='text-muted-foreground'>As a fourth-year Computer Science student, I’ve gained solid experience in a wide range of programming languages. From low-level problem-solving in C++ to building desktop applications with C# and developing backend systems in Java</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'> Web Development</h4>
                                <p className='text-muted-foreground'>Throughout my education, I’ve gained hands-on experience in both technical and customer-facing roles. I worked as a mechatronics technician at Prototype, a company focused on developing and improving technology solutions. Additionally, I worked on the customer support line for an energy emergency service, where I developed strong communication skills and learned to stay calm and efficient under pressure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'> Education</h4>
                                <p className='text-muted-foreground'> I am currently pursuing a Bachelor’s degree in Computer Science, with a focus on software development, and systems design at Sailesian University of Technology. During my Erasmus exchange, I studied at a partner university abroad, expanding both my technical knowledge and language skills in an international environment.
                                            I graduated from a technical high school specializing in Mechatronics, where I gained a solid foundation in electronics, programming, and mechanical systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </div>
    </section>    
}