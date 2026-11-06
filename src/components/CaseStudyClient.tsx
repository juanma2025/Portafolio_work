"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import type { CaseStudy } from "@/data/projects"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

interface CaseStudyClientProps {
  study: CaseStudy
  nextStudy: CaseStudy
}

export default function CaseStudyClient({
  study,
  nextStudy,
}: CaseStudyClientProps) {
  const shouldReduceMotion = useReducedMotion()

  const getReveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
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
    <article className="case-study">
      <div className="case-study__container">
        {/* Navegación de regreso */}
        <motion.div className="case-study__back-wrap" {...getReveal(0)}>
          <Link href="/#proyectos" className="case-study__back">
            <ArrowLeft size={16} />
            <span>Volver a casos de estudio</span>
          </Link>
        </motion.div>

        {/* 1. PORTADA */}
        <motion.header className="case-study__hero" {...getReveal(0.04)}>
          <p className="case-study__eyebrow">{study.category}</p>
          <h1 className="case-study__title">{study.title}</h1>
          <p className="case-study__subtitle">{study.subtitle}</p>

          <dl className="case-study__meta-grid">
            <div className="case-study__meta-item">
              <dt>Rol</dt>
              <dd>{study.role}</dd>
            </div>
            <div className="case-study__meta-item">
              <dt>Contexto / Cliente</dt>
              <dd>{study.clientOrType}</dd>
            </div>
            <div className="case-study__meta-item">
              <dt>Investigación</dt>
              <dd>{study.research.participants}</dd>
            </div>
            <div className="case-study__meta-item">
              <dt>Herramientas</dt>
              <dd>{study.tools.join(" · ")}</dd>
            </div>
          </dl>

          {study.coverImage ? (
            <figure
              className={`case-study__cover ${
                study.isMobileCover ? "case-study__cover--mobile" : ""
              }`}
            >
              <Image
                src={study.coverImage}
                alt={`Portada del caso de estudio ${study.title}`}
                width={study.isMobileCover ? 328 : 1881}
                height={study.isMobileCover ? 717 : 1001}
                className={
                  study.isMobileCover
                    ? "case-study__cover-img--mobile"
                    : "case-study__cover-img"
                }
                priority
              />
            </figure>
          ) : (
            <div className="case-study__clean-showcase">
              <div className="case-study__clean-showcase-inner">
                <span className="case-study__section-label">
                  Corpocarnaval · Trabajo de grado (2025 – Actualidad)
                </span>
                <h2>
                  Plataforma digital cultural activa con lenguaje visual
                  nariñense
                </h2>
                <p>
                  Proyecto desarrollado como freelance junto a Corpocarnaval y
                  el equipo de ingeniería mediante entregas iterativas
                  (Scrum/Kanban).
                </p>
                {study.externalUrl && (
                  <a
                    href={study.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-btn apple-btn--secondary"
                  >
                    <span>{study.externalLabel || "Ver proyecto"}</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.header>

        {/* 2. CONTEXTO Y 3. PROBLEMA */}
        <motion.section
          className="case-study__two-col"
          aria-label="Contexto y problema"
          {...getReveal(0.06)}
        >
          <div className="case-study__panel">
            <span className="case-study__section-label">01 · Contexto</span>
            <h2 className="case-study__section-heading">
              {study.sectionTitles.context}
            </h2>
            <p className="case-study__body">{study.context}</p>
          </div>

          <div className="case-study__panel">
            <span className="case-study__section-label">02 · Problema</span>
            <h2 className="case-study__section-heading">
              {study.sectionTitles.problem}
            </h2>
            <p className="case-study__body">{study.problem}</p>
          </div>
        </motion.section>

        {/* 4. INVESTIGACIÓN CON USUARIOS */}
        <motion.section
          className="case-study__section"
          aria-label="Investigación con usuarios"
          {...getReveal(0.08)}
        >
          <div className="case-study__section-header">
            <span className="case-study__section-label">
              03 · Investigación ({study.research.participants})
            </span>
            <h2 className="case-study__section-title">
              {study.sectionTitles.research}
            </h2>
            <p className="case-study__section-lead">
              {study.research.methodology}
            </p>
          </div>

          <div className="case-study__insights-grid">
            {study.research.insights.map((insight, idx) => (
              <div key={insight.title} className="case-study__insight-card">
                <span className="case-study__insight-index">
                  Hallazgo 0{idx + 1}
                </span>
                <h3>{insight.title}</h3>
                <p>{insight.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. ANTES Y DESPUÉS */}
        <motion.section
          className="case-study__section"
          aria-label="Comparación antes y después"
          {...getReveal(0.1)}
        >
          <div className="case-study__section-header">
            <span className="case-study__section-label">
              04 · Antes y Después
            </span>
            <h2 className="case-study__section-title">
              {study.sectionTitles.beforeAfter}
            </h2>
          </div>

          {study.beforeAfter ? (
            <>
              <BeforeAfterSlider
                beforeImage={study.beforeAfter.beforeImage}
                afterImage={study.beforeAfter.afterImage}
                beforeLabel={study.beforeAfter.beforeLabel}
                afterLabel={study.beforeAfter.afterLabel}
                caption={study.beforeAfter.caption}
                isMobile={study.beforeAfter.isMobile}
              />

              <ul className="case-study__changes-list">
                {study.beforeAfter.changes.map((change) => (
                  <li key={change} className="case-study__change-item">
                    <CheckCircle2 size={18} className="case-study__check-icon" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : study.textComparison ? (
            <>
              <div className="case-study__two-col">
                <div className="case-study__panel">
                  <span className="case-study__section-label">
                    {study.textComparison.beforeTitle}
                  </span>
                  <ul className="case-study__bullet-list">
                    {study.textComparison.beforeItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study__panel">
                  <span className="case-study__section-label">
                    {study.textComparison.afterTitle}
                  </span>
                  <ul className="case-study__bullet-list">
                    {study.textComparison.afterItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="case-study__changes-list">
                {study.textComparison.changes.map((change) => (
                  <li key={change} className="case-study__change-item">
                    <CheckCircle2 size={18} className="case-study__check-icon" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </motion.section>

        {/* 6. PROTOTIPO EN MOVIMIENTO (si cuenta con videoDemo) */}
        {study.videoDemo && (
          <motion.section
            className="case-study__section"
            aria-label="Prototipo en movimiento"
            {...getReveal(0.1)}
          >
            <div className="case-study__section-header">
              <span className="case-study__section-label">
                05 · Prototipo e Interacción
              </span>
              <h2 className="case-study__section-title">
                {study.sectionTitles.prototypeOrScreens}
              </h2>
            </div>

            <div className="case-study__video-wrap">
              <video
                src={study.videoDemo}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-2xl w-full case-study__video"
              />
            </div>
          </motion.section>
        )}

        {/* 7. COMPONENTES Y SISTEMA */}
        <motion.section
          className="case-study__section"
          aria-label="Componentes y sistema de diseño"
          {...getReveal(0.1)}
        >
          <div className="case-study__section-header">
            <span className="case-study__section-label">
              {study.videoDemo ? "06" : "05"} · Componentes y Sistema
            </span>
            <h2 className="case-study__section-title">
              {study.sectionTitles.system}
            </h2>
            <p className="case-study__section-lead">
              {study.designSystem.summary}
            </p>
          </div>

          <div className="case-study__two-col">
            <div className="case-study__panel">
              <h3 className="case-study__sub-heading">Criterios de diseño</h3>
              <ul className="case-study__bullet-list">
                {study.designSystem.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>

            <div className="case-study__panel">
              <h3 className="case-study__sub-heading">
                Componentes e implementación
              </h3>
              <ul className="case-study__bullet-list">
                {study.designSystem.components.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 8. RESULTADOS */}
        <motion.section
          className="case-study__section case-study__results"
          aria-label="Resultados"
          {...getReveal(0.1)}
        >
          <div className="case-study__section-header">
            <span className="case-study__section-label">
              {study.videoDemo ? "07" : "06"} · Resultados
            </span>
            <h2 className="case-study__section-title">
              {study.sectionTitles.results}
            </h2>
            <p className="case-study__section-lead">{study.results.summary}</p>
          </div>

          <ul className="case-study__changes-list">
            {study.results.outcomes.map((outcome) => (
              <li key={outcome} className="case-study__change-item">
                <CheckCircle2 size={18} className="case-study__check-icon" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Siguiente caso de estudio */}
        <motion.footer className="case-study__next" {...getReveal(0.12)}>
          <span className="case-study__section-label">Siguiente proyecto</span>
          <Link
            href={`/proyectos/${nextStudy.slug}`}
            className="case-study__next-link"
          >
            <div>
              <h3>{nextStudy.title}</h3>
              <p>{nextStudy.subtitle}</p>
            </div>
            <span className="case-study__next-icon">
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </motion.footer>
      </div>
    </article>
  )
}
