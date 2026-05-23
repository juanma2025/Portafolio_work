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
        const iconClassName = `skill-badge__icon skill-badge__icon--${this.icon.toLowerCase()}`

        switch (this.icon.toLowerCase()) {
        case "html":
            return <span className={iconClassName}>H</span>
        case "css":
            return <span className={iconClassName}>C</span>
        case "javascript":
            return <span className={iconClassName}>JS</span>
        case "typescript":
            return <span className={iconClassName}>TS</span>
        case "nextjs":
            return <span className={iconClassName}>N</span>
        case "vite":
            return <span className={iconClassName}>V</span>
        case "react":
            return <span className={iconClassName}>R</span>
        case "figma":
            return <span className={iconClassName}>F</span>
        case "tailwind":
            return <span className={iconClassName}>T</span>
        case "python":
            return <span className={iconClassName}>P</span>
        default:
            return <span className="skill-badge__icon">?</span>
        }
    }
    
    render() {
        return (
        <article className="skill-badge">
            {this.getIconComponent()}
            <span>{this.name}</span>
        </article>
        )
    }
    }
    
    export default function SkillBadge({ icon, name }: SkillBadgeProps) {
    const badge = new SkillBadgeRenderer(icon, name)
    return badge.render()
    }   
