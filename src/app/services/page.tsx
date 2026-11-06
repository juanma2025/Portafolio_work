import type React from "react"
import { Code2, Gauge, Globe2, LayoutDashboard, Palette, ServerCog } from "lucide-react"

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
      <article className="service-card">
        <span className="service-card__icon">{this.icon}</span>
        <h2>{this.title}</h2>
        <p>{this.description}</p>
      </article>
    )
  }
}

export default function ServicesPage() {
  const services = [
    new Service(
      "Desarrollo Web",
      "Creación de sitios modernos, rápidos y responsivos usando tecnologías como React, Next.js, Vite y JavaScript.",
      <Code2 size={27} />,
    ),
    new Service(
      "Diseño UI - UX",
      "Diseño de interfaces claras, atractivas y fáciles de usar, pensadas para mejorar la experiencia del usuario.",
      <LayoutDashboard size={27} />,
    ),
    new Service(
      "Frontend Interactivo",
      "Implementación de componentes dinámicos, navegación fluida, estados visuales y experiencias adaptadas al usuario.",
      <Palette size={27} />,
    ),
    new Service(
      "Diseño Responsivo",
      "Adaptación de interfaces para escritorio, tablet y móvil, cuidando legibilidad, espaciado y jerarquía visual.",
      <Globe2 size={27} />,
    ),
    new Service(
      "Integración de APIs",
      "Conexión de aplicaciones con servicios externos, consumo de datos y preparación de interfaces listas para escalar.",
      <ServerCog size={27} />,
    ),
    new Service(
      "Optimización y QA",
      "Revisión de rendimiento, pruebas funcionales, detección de errores y mejoras para una experiencia más estable.",
      <Gauge size={27} />,
    ),
  ]

  return (
    <section className="services-page">
      <div className="services-shell">
        <header className="services-hero">
          <span>Servicios</span>
          <h1>Soluciones digitales para interfaces modernas</h1>
          <p>
            Desarrollo experiencias web funcionales, responsivas y visualmente cuidadas, combinando frontend, diseño UI -
            UX y buenas prácticas de calidad.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title}>{service.render()}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
