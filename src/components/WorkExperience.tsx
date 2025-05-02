interface WorkExperienceItemProps {
    title: string
    company: string
    }
    
  // Clase para representar un elemento de experiencia laboral
    class WorkExperienceItemRenderer {
    constructor(
        private title: string,
        private company: string,
    ) {}
    
    render() {
        return (
        <article className="mb-4">
            <section className="flex items-start">
            <span className="min-w-2 mr-2">•</span>
            <section>
                <h3 className="font-medium">{this.title}</h3>
                <p className="text-zinc-500">{this.company}</p>
            </section>
            </section>
        </article>
        )
    }
    }
    
    export function WorkExperienceItem({ title, company }: WorkExperienceItemProps) {
    const item = new WorkExperienceItemRenderer(title, company)
    return item.render()
    }
