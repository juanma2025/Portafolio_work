interface SkillBadgeProps {
    icon: string
    name: string
    }
    
  // Clase para representar una insignia de habilidad
    class SkillBadgeRenderer {
    constructor(
        private icon: string,
        private name: string,
    ) {}
    
    getIconComponent() {
        switch (this.icon.toLowerCase()) {
        case "html":
            return <span className="text-orange-500">H</span>
        case "css":
            return <span className="text-blue-500">C</span>
        case "typescript":
            return <span className="text-blue-600">TS</span>
        case "nextjs":
            return <span className="text-white">N</span>
        case "react":
            return <span className="text-blue-400">R</span>
        case "figma":
            return <span className="text-purple-500">F</span>
        default:
            return <span>?</span>
        }
    }
    
    render() {
        return (
        <article className="flex items-center gap-2 bg-zinc-800 rounded px-4 py-2">
            <span className="w-6 h-6 flex items-center justify-center">{this.getIconComponent()}</span>
            <span>{this.name}</span>
        </article>
        )
    }
    }
    
    export default function SkillBadge({ icon, name }: SkillBadgeProps) {
    const badge = new SkillBadgeRenderer(icon, name)
    return badge.render()
    }   