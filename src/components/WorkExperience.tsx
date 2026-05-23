interface WorkExperienceItemProps {
    title: string
    description: string
    }
    
  // Clase para representar un elemento de experiencia laboral
    class WorkExperienceItemRenderer {
    constructor(
        private title: string,
        private description: string,
    ) {}
    
    render() {
        return (
        <article className="mb-4">
            <section className="flex items-start">
            <span className="min-w-2 mr-2">•</span>
            <section>
                <h3 className="font-medium">{this.title}</h3>
                <p className="text-zinc-500">{this.description}</p>
            </section>
            </section>
        </article>
        )
    }
    }
    
    export function WorkExperienceItem({ title, description }: WorkExperienceItemProps) {
    const item = new WorkExperienceItemRenderer(title, description)
    return item.render()
    }
