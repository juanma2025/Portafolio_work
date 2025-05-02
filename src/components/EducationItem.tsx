import * as React from "react"
interface EducationItemProps {
    title: string
    date: string
    }
    
  // Clase para representar un elemento de educación
    class EducationItemRenderer {
        constructor(
        private title: string,
        private date: string,
    ) {}
    
    render() {
        return (
        <article className="mb-4">
            <section className="flex items-start">
            <span className="min-w-2 mr-2">•</span>
            <section>
                <h3 className="font-medium">{this.title}</h3>
                <p className="text-zinc-500">{this.date}</p>
            </section>
            </section>
        </article>
        )
    }
    }
    
    export function EducationItem({ title, date }: EducationItemProps) {
    const item = new EducationItemRenderer(title, date)
    return item.render()
    }
