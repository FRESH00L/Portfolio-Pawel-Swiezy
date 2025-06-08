import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
                variant: "default",
            });
            setIsSubmitting(false)
        }, 1500);

        
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. If you have any questions, feedback, or just want to say hello, feel free to reach out to me via email or connect with me on social media.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Lewa strona - Informacje kontaktowe */}
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">
                       Contact Information 
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:pawel.swiezy0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    pawel.swiezy0@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+48608567930" className="text-muted-foreground hover:text-primary transition-colors">
                                    +48 608567390
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <span className="text-muted-foreground">
                                    Chorzów, Poland
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Dodatkowe informacje dla wyrównania wysokości */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <h4 className="font-medium mb-4">Let's Connect</h4>
                        <p className="text-muted-foreground mb-4">
                            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
                        </p>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of the contact methods above, and I'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Prawa strona - Formularz */}
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                                placeholder="Enter your message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                        >
                            {isSubmitting ? "Sending...": "Send Message"}
                            <Send size={16}/>    
                        </button>
                    </form>
                </div>
                
            </div>
            <div className="pt-8">
                        <h4 className="font-medium mb-4">
                            Connect With Me
                        </h4>
                        <div className="flex space-x-4 mx-auto max-w-max">
                            <a href="#" target="_blank" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors ">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" target="_blank" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors ">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" target="_blank" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
        </div>
    </section>
}