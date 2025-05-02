import type { ReactNode } from "react"
import { User, BookOpen, Briefcase, Languages, Heart, Code, Github } from "lucide-react"

interface ResumeSectionProps {
    icon: string
    title: string
    content: ReactNode
}

// Clase para representar una sección del CV
class ResumeSectionRenderer {
    constructor(
    private icon: string,
    private title: string,
    private content: ReactNode,
    ) {}

    getIconComponent() {
    switch (this.icon.toLowerCase()) {
        case "profile":
        return <User className="text-red-600" size={24} />
        case "education":
        return <BookOpen className="text-red-600" size={24} />
        case "work":
        return <Briefcase className="text-red-600" size={24} />
        case "languages":
        return <Languages className="text-red-600" size={24} />
        case "soft-skills":
        return <Heart className="text-red-600" size={24} />
        case "technical":
        return <Code className="text-red-600" size={24} />
        case "github":
        return <Github className="text-red-600" size={24} />
        default:
        return <User className="text-red-600" size={24} />
    }
    }

    render() {
    return (
        <article className="space-y-4">
        <header className="flex items-center gap-2">
            {this.getIconComponent()}
            <h2 className="text-xl font-semibold">{this.title}</h2>
        </header>
        <section className="text-zinc-300 pl-8">{this.content}</section>
        </article>
    )
    }
}

export function ResumeSection({ icon, title, content }: ResumeSectionProps) {
    const section = new ResumeSectionRenderer(icon, title, content)
    return section.render()
}

