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
      "Creacion de sitios modernos, rapidos y responsivos usando tecnologias como React, Next.js, Vite y JavaScript.",
      <Code2 size={27} />,
    ),
    new Service(
      "Diseno UI - UX",
      "Diseno de interfaces claras, atractivas y faciles de usar, pensadas para mejorar la experiencia del usuario.",
      <LayoutDashboard size={27} />,
    ),
    new Service(
      "Frontend Interactivo",
      "Implementacion de componentes dinamicos, navegacion fluida, estados visuales y experiencias adaptadas al usuario.",
      <Palette size={27} />,
    ),
    new Service(
      "Diseno Responsivo",
      "Adaptacion de interfaces para escritorio, tablet y movil, cuidando legibilidad, espaciado y jerarquia visual.",
      <Globe2 size={27} />,
    ),
    new Service(
      "Integracion de APIs",
      "Conexion de aplicaciones con servicios externos, consumo de datos y preparacion de interfaces listas para escalar.",
      <ServerCog size={27} />,
    ),
    new Service(
      "Optimizacion y QA",
      "Revision de rendimiento, pruebas funcionales, deteccion de errores y mejoras para una experiencia mas estable.",
      <Gauge size={27} />,
    ),
  ]

  return (
    <section className="services-page">
      <article className="services-shell">
        <header className="services-hero">
          <span>Servicios</span>
          <h1>Soluciones digitales para interfaces modernas</h1>
          <p>
            Desarrollo experiencias web funcionales, responsivas y visualmente cuidadas, combinando frontend, diseno UI -
            UX y buenas practicas de calidad.
          </p>
        </header>

        <section className="services-grid">
          {services.map((service) => (
            <div key={service.title}>{service.render()}</div>
          ))}
        </section>
      </article>
    </section>
  )
}
