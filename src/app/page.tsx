"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { caseStudies } from "@/data/projects"

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const springTransition = {
    type: "spring" as const,
    stiffness: 90,
    damping: 20,
    mass: 0.85,
  }

  return (
    <div className="apple-home">
      {/* HERO */}
      <section className="apple-hero">
        <motion.div
          className="apple-hero__container"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
        >
          <h1 className="apple-hero__title">
            Diseño productos claros a partir de usuarios reales.
          </h1>

          <p className="apple-hero__subtitle">
            Juan Manuel Cabrera — Product Designer (UI/UX + Research) en Pasto,
            Colombia. Entrevistas, pruebas de usabilidad e interfaces en
            fintech, movilidad urbana y cultura.
          </p>

          <div className="apple-hero__actions">
            <Link href="#proyectos" className="apple-btn apple-btn--primary">
              <span>Ver casos de estudio</span>
            </Link>

            <a
              href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf"
              download
              className="apple-btn apple-btn--secondary"
            >
              <Download size={16} />
              <span>Descargar CV</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3 TARJETAS DE CASOS DE ESTUDIO */}
      <section
        id="proyectos"
        className="apple-projects"
        aria-label="Casos de estudio seleccionados"
      >
        <div className="apple-projects__container">
          <motion.header
            className="apple-section-header"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={springTransition}
          >
            <p className="apple-section-eyebrow">Casos de estudio</p>
            <h2 className="apple-section-title">
              Productos rediseñados escuchando a las personas.
            </h2>
          </motion.header>

          <div className="apple-projects__grid">
            {caseStudies.map((project, index) => (
              <motion.article
                key={project.slug}
                className="apple-case-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  ...springTransition,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.01,
                        y: -4,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        },
                      }
                }
              >
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="apple-case-card__link"
                >
                  <div
                    className={`apple-case-card__media ${
                      project.isMobileCover
                        ? "apple-case-card__media--mobile"
                        : ""
                    }`}
                  >
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={`Vista previa del caso de estudio ${project.title}`}
                        width={project.isMobileCover ? 328 : 1881}
                        height={project.isMobileCover ? 717 : 1001}
                        className={
                          project.isMobileCover
                            ? "apple-case-card__image--mobile"
                            : "apple-case-card__image"
                        }
                        priority={index === 0}
                      />
                    ) : (
                      <div className="apple-case-card__clean-preview">
                        <span className="apple-case-card__clean-kicker">
                          Corpocarnaval · Trabajo de grado
                        </span>
                        <p className="apple-case-card__clean-headline">
                          Identidad cultural nariñense llevada a una plataforma
                          digital viva.
                        </p>
                        <span className="apple-case-card__clean-cta">
                          Explorar caso de estudio →
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="apple-case-card__body">
                    <div className="apple-case-card__meta">
                      <span className="apple-case-card__category">
                        {project.category}
                      </span>
                      <span className="apple-case-card__research">
                        {project.researchHighlight}
                      </span>
                    </div>

                    <div className="apple-case-card__heading-row">
                      <div>
                        <h3 className="apple-case-card__title">
                          {project.title}
                        </h3>
                        <p className="apple-case-card__subtitle">
                          {project.subtitle}
                        </p>
                      </div>
                      <span
                        className="apple-case-card__arrow"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={20} />
                      </span>
                    </div>

                    <p className="apple-case-card__summary">
                      {project.shortSummary}
                    </p>

                    <ul
                      className="apple-case-card__tags"
                      aria-label="Herramientas utilizadas"
                    >
                      {project.tools.map((tool) => (
                        <li key={tool} className="apple-case-card__tag">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
