
import React from 'react';
import { Code } from 'lucide-react';
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
                    <p className="text-muted-foreground">I'm a dedicated 4th-year Computer Science student at Silesian University of Technology with a global perspective, having recently completed an intensive English-language exchange program at a Spanish university. This international experience has enhanced my adaptability and cross-cultural communication skills—essential qualities in today's tech landscape.</p>
                    
                    <p className="text-muted-foreground">My passion lies in crafting innovative desktop and web applications that solve real problems. I thrive on transforming creative ideas into functional, user-friendly software solutions. Whether it's building responsive web interfaces or developing robust desktop applications, I approach each project with enthusiasm and attention to detail.
                        Beyond coding, I'm a creative problem-solver who draws inspiration from diverse sources. My love for RPGs has sharpened my strategic thinking and narrative design skills, while sailing has taught me patience, precision, and the importance of adapting to changing conditions—qualities that translate perfectly to software development.
                        I'm constantly exploring emerging technologies and staying current with industry trends. My international academic experience, combined with strong technical skills and creative mindset, positions me to contribute meaningfully to dynamic development teams.
                        Ready to bring fresh perspectives and innovative solutions to your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="#cv" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'> Web Development</h4>
                                <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, possimus odio incidunt ab beatae sapiente. Ipsa non voluptatibus aliquid unde, modi doloremque, ducimus fugit, et facilis ipsam recusandae enim dolore.</p>
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
                                <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, possimus odio incidunt ab beatae sapiente. Ipsa non voluptatibus aliquid unde, modi doloremque, ducimus fugit, et facilis ipsam recusandae enim dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'> Web Development</h4>
                                <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, possimus odio incidunt ab beatae sapiente. Ipsa non voluptatibus aliquid unde, modi doloremque, ducimus fugit, et facilis ipsam recusandae enim dolore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </div>
    </section>    
}