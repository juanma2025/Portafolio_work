import type React from "react"
import { Code, Layout, Palette, Globe, Server, Zap  } from "lucide-react"

class Service {
    title: string 
    description: string
    icon: React.ReactNode

    constructor(title: string, description: string, icon: React.ReactNode) {
        this.title = title
        this.description = description
        this.icon = icon
    }

    render() {
        return (
            <span className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-600 transition-colors" >
                <section className="text-red-600 mb-4 flex-1">{this.icon}</section>
                <h3 className="text-xl font-bold mb-2 flex-1 ">{this.title}</h3>
                <p className="text-zinc-300 flex-1 ">{this.description}</p>
            </span>
        )
    }
}

export default function Servicespage() {
    const Services = [
        new Service(
            "Web Development",
            "Creation of modern and responsive websites using the latest technologies like React, Next.js and Tailwind CSS.",
            <Code size={32} />,
            ),
            new Service(
            "UI/UX Design",
            "Design of intuitive and attractive user interfaces that provide an excellent user experience.",
            <Layout size={32} />,
            ),
            new Service(
            "Frontend Development",
            "Implementation of interactive and dynamic user interfaces with modern JavaScript frameworks.",
            <Palette size={32} />,
            ),
            new Service(
            "Responsive Design",
            "Creation of websites that adapt perfectly to all devices and screen sizes.",
            <Globe size={32} />,
            ),
            new Service(
            "API Integration",
            "Connection of your website with external services and APIs to extend its functionality.",
            <Server size={32} />,
            ),
            new Service(
            "Performance Optimization",
            "Improvement of website loading speed and overall performance for a better user experience.",
            <Zap size={32} />,
            ),
    ]

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Services</h1>
        <p className="text-zinc-300 mb-8 max-w-2xl">
            I offer a variety of web development services to help you create a modern, functional and visually appealing
            online presence.
        </p>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Services.map((service) => (
            <div key={service.title}>{service.render()}</div>
            ))}
        </div>
        </section>
    )
}