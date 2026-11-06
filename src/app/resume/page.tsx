"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

const projects = [
  {
    slug: "narino-cultura",
    title: "Corpocarnaval · Nariño Cultura",
    meta: "Product Designer UI/UX y Frontend (Freelance) · Trabajo de grado",
    date: "2025 – Actualidad",
    items: [
      "Entrevisté a 7 usuarios y rediseñé por completo la UI/UX con un lenguaje visual centrado en la cultura nariñense.",
      "Validé el nuevo diseño con pruebas de usabilidad con los mismos usuarios e iteré las pantallas según su feedback.",
      "Colaboré con el cliente (Corpocarnaval) y el equipo de desarrollo en entregas iterativas (Scrum/Kanban).",
    ],
  },
  {
    slug: "nova",
    title: "Nova · Banca Digital (Fintech)",
    meta: "Nova Neobank y Nova Plata · Figma, Stitch, React, Tailwind CSS",
    date: "Proyecto de diseño",
    items: [
      "Entrevisté a 5 estudiantes universitarios y rediseñé por completo la interfaz de ambos productos ante la baja aceptación inicial.",
      "Diseñé las interfaces finales con un lenguaje visual minimalista y consistente, priorizando la claridad de la información financiera.",
      "Validé el rediseño con pruebas de usabilidad e incorporé el feedback de los usuarios en nuevas iteraciones.",
    ],
  },
  {
    slug: "parking-reserve",
    title: "Parking Reserve (Movilidad urbana)",
    meta: "App móvil de reserva de parqueaderos en Pasto · Figma, Flutter",
    date: "Proyecto de diseño",
    items: [
      "Entrevisté a 10 usuarios y detecté que la vista principal generaba ruido visual por exceso de texto.",
      "Rediseñé la vista principal y pantallas secundarias con enfoque mobile-first: menos texto, jerarquía visual clara y acciones más visibles.",
      "Validé los cambios con pruebas de usabilidad, iteré según el feedback y desplegué la app en Flutter.",
    ],
  },
]

const education = [
  {
    title: "Ingeniería de Software",
    date: "2023 – Actualidad",
    place: "Universidad Cooperativa de Colombia (8.º semestre)",
  },
  {
    title: "Tester QA Junior (capacitación)",
    date: "Formación",
    place: "Diseño de casos de prueba, validación funcional y reporte de errores",
  },
  {
    title: "Idiomas",
    date: "B1 / Nativo",
    place: "Español: nativo · Inglés: B1 (intermedio)",
  },
]

const skillCategories = [
  {
    category: "Diseño de producto",
    items:
      "Investigación de usuarios, entrevistas, pruebas de usabilidad, user flows, arquitectura de información, wireframes, diseño de interfaces (UI), prototipado, jerarquía visual, diseño mobile-first y responsive.",
  },
  {
    category: "Herramientas",
    items: "Figma, Stitch, Miro, herramientas de IA para diseño y validación.",
  },
  {
    category: "Metodologías y Habilidades blandas",
    items:
      "Scrum, Kanban, iteración basada en feedback de usuarios, colaboración multifuncional, comunicación con clientes, liderazgo de equipos y adaptabilidad.",
  },
  {
    category: "Base técnica",
    items:
      "React, Tailwind CSS, TypeScript, Flutter, testing y QA. Facilita la colaboración directa con ingeniería.",
  },
]

export default function ResumePage() {
  const shouldReduceMotion = useReducedMotion()

  const getReveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            type: "spring" as const,
            stiffness: 90,
            damping: 20,
            mass: 0.85,
            delay,
          },
        }

  return (
    <section className="apple-resume">
      <div className="apple-resume__container">
        {/* Encabezado del CV */}
        <motion.header className="apple-resume__header" {...getReveal(0)}>
          <div className="apple-resume__identity">
            <figure className="apple-resume__avatar-wrap">
              <Image
                src="/image3.png"
                alt="Juan Manuel Cabrera"
                width={160}
                height={160}
                className="apple-resume__avatar"
                priority
              />
            </figure>

            <div>
              <p className="apple-section-eyebrow">Currículum Vitae</p>
              <h1 className="apple-resume__name">Juan Manuel Cabrera</h1>
              <p className="apple-resume__role">
                Product Designer · UI/UX · Investigación de usuarios
              </p>
            </div>
          </div>

          <a
            href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf"
            download
            className="apple-btn apple-btn--primary"
          >
            <Download size={16} />
            <span>Descargar CV</span>
          </a>
        </motion.header>

        {/* Perfil */}
        <motion.section
          className="apple-resume__card"
          aria-label="Perfil profesional"
          {...getReveal(0.04)}
        >
          <span className="case-study__section-label">Perfil</span>
          <p className="apple-resume__bio">
            Product Designer con formación en Ingeniería de Software (8.º
            semestre). Diseño productos digitales de principio a fin, desde la
            investigación con usuarios y las pruebas de usabilidad hasta los
            flujos, la UI y la implementación, en fintech, movilidad urbana y
            cultura. He entrevistado y hecho pruebas con 22 usuarios en 3
            productos y, a partir de sus hallazgos, he rediseñado interfaces
            completas. Mi base técnica me permite colaborar de cerca con
            ingeniería y validar la viabilidad desde el inicio. Trabajo en
            equipos ágiles (Scrum/Kanban) con clientes reales y prioridades
            cambiantes.
          </p>
        </motion.section>

        {/* Experiencia y Proyectos de Diseño */}
        <motion.section
          className="apple-resume__section"
          aria-label="Experiencia y proyectos de diseño"
          {...getReveal(0.06)}
        >
          <h2 className="apple-resume__section-title">
            Experiencia y Casos de Estudio
          </h2>

          <div className="apple-resume__grid">
            {projects.map((project) => (
              <article key={project.slug} className="apple-resume__card">
                <header className="apple-resume__card-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.meta}</p>
                  </div>
                  <span className="apple-resume__badge">{project.date}</span>
                </header>

                <ul className="case-study__bullet-list">
                  {project.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="apple-resume__card-footer">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="apple-resume__case-link"
                  >
                    <span>Ver caso de estudio completo</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Formación y Habilidades */}
        <div className="case-study__two-col">
          <motion.section
            className="apple-resume__card"
            aria-label="Formación"
            {...getReveal(0.08)}
          >
            <span className="case-study__section-label">Formación</span>
            <h2 className="case-study__section-heading">Educación e Idiomas</h2>

            <div className="apple-resume__edu-list">
              {education.map((item) => (
                <div key={item.title} className="apple-resume__edu-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                  </div>
                  <span className="apple-resume__badge">{item.date}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="apple-resume__card"
            aria-label="Habilidades"
            {...getReveal(0.1)}
          >
            <span className="case-study__section-label">Competencias</span>
            <h2 className="case-study__section-heading">Habilidades</h2>

            <div className="apple-resume__edu-list">
              {skillCategories.map((skill) => (
                <div key={skill.category} className="apple-resume__skill-group">
                  <h3>{skill.category}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Datos de contacto */}
        <motion.section
          className="apple-resume__card apple-resume__details"
          aria-label="Detalles de contacto"
          {...getReveal(0.12)}
        >
          <a href="mailto:juanmatabanchoyc@gmail.com" className="apple-resume__pill">
            <Mail size={15} />
            <span>juanmatabanchoyc@gmail.com</span>
          </a>
          <a
            href="https://wa.me/573024993023"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-resume__pill"
          >
            <Phone size={15} />
            <span>+57 302 499 3023</span>
          </a>
          <span className="apple-resume__pill">
            <MapPin size={15} />
            <span>Pasto, Nariño, Colombia</span>
          </span>
          <a
            href="https://www.linkedin.com/in/juanmanuel0125"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-resume__pill"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/juanma2025"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-resume__pill"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
        </motion.section>
      </div>
    </section>
  )
}
