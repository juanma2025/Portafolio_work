"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const narrativeBlocks = [
    {
        subtitle: "Quién soy",
        body: "Soy Juan Manuel, Product Designer en Pasto, Colombia. Llegué al diseño desde la Ingeniería de Software. Empecé construyendo interfaces y terminé obsesionado con entender por qué algunas funcionan y otras no. Hoy diseño pensando en las personas que van a usar el producto y en el equipo que lo va a construir.",
    },
    {
        subtitle: "Lo que me ha enseñado diseñar",
        body: "Mis primeras versiones casi nunca fueron las correctas. Una interfaz que yo veía limpia, los usuarios la sentían saturada. Otra que me parecía moderna no conectaba con lo que el cliente quería transmitir. Aprendí a no enamorarme de mis diseños: a mostrarlos temprano, a escuchar sin defenderme y a rediseñar cuando hace falta. Para mí, la buena interfaz no es la que más impresiona, sino la que se entiende sin explicarla.",
    },
    {
        subtitle: "Cómo trabajo en equipo",
        body: "Como freelance para Corpocarnaval aprendí a moverme entre dos mundos: entender lo que el cliente necesita y traducirlo en algo que el equipo de desarrollo pueda construir. Hablo el idioma de los dos, y eso evita muchas idas y vueltas. Me adapto rápido cuando cambian las prioridades, propongo en vez de solo ejecutar y, cuando me toca liderar, prefiero que el equipo entienda el porqué de cada decisión.",
    },
]

const toolGroups = [
    {
        label: "Diseño",
        muted: false,
        items: [
            "Figma",
            "Stitch",
            "Diseño UI/UX",
            "Wireframes",
            "Prototipado",
            "User Flows",
            "Mobile-first",
        ],
    },
    {
        label: "Investigación",
        muted: false,
        items: [
            "Investigación de usuarios",
            "Entrevistas",
            "Pruebas de usabilidad",
            "Arquitectura de información",
            "Miro",
        ],
    },
    {
        label: "Base técnica",
        muted: true,
        items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind",
            "Vite",
            "Python",
        ],
    },
]

export default function AboutMe() {
    const shouldReduceMotion = useReducedMotion()

    const getRevealProps = (delay = 0) =>
        shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.25 },
                transition: {
                    type: "spring" as const,
                    stiffness: 85,
                    damping: 20,
                    mass: 0.85,
                    delay,
                },
            }

    return (
        <section className="about-minimal">
            <div className="about-minimal__container">
                {/* Encabezado: Foto circular + Título grande */}
                <motion.header
                    className="about-minimal__hero"
                    {...getRevealProps(0)}
                >
                    <figure className="about-minimal__avatar-wrap">
                        <Image
                            src="/image2.png"
                            alt="Juan Manuel Cabrera"
                            width={240}
                            height={240}
                            className="about-minimal__avatar"
                            priority
                        />
                    </figure>

                    <h1 className="about-minimal__title">
                        Diseño para que lo complejo se sienta simple.
                    </h1>
                </motion.header>

                {/* 3 Bloques principales de lectura */}
                <div className="about-minimal__blocks">
                    {narrativeBlocks.map((block, index) => (
                        <motion.article
                            key={block.subtitle}
                            className="about-minimal__block"
                            {...getRevealProps(index * 0.05)}
                        >
                            <h2 className="about-minimal__subtitle">{block.subtitle}</h2>
                            <p className="about-minimal__paragraph">{block.body}</p>
                        </motion.article>
                    ))}

                    {/* Cierre "Fuera del diseño" en tono más ligero */}
                    <motion.aside
                        className="about-minimal__block about-minimal__block--light"
                        {...getRevealProps(0.1)}
                    >
                        <h2 className="about-minimal__subtitle">Fuera del diseño</h2>
                        <p className="about-minimal__paragraph about-minimal__paragraph--light">
                            Toco en una banda y me presento en vivo. La música me enseñó lo
                            mismo que el diseño: escuchar a los demás, ensayar mucho y saber
                            improvisar sin perder el ritmo.
                        </p>
                    </motion.aside>
                </div>

                {/* Herramientas en chips monocromos agrupados */}
                <motion.section
                    className="about-minimal__tools"
                    aria-label="Herramientas y conocimientos"
                    {...getRevealProps(0.12)}
                >
                    <div className="about-minimal__tool-groups">
                        {toolGroups.map((group) => (
                            <div
                                key={group.label}
                                className={`about-minimal__tool-group ${group.muted ? "about-minimal__tool-group--muted" : ""
                                    }`}
                            >
                                <h3 className="about-minimal__tool-label">{group.label}</h3>
                                <ul className="about-minimal__chips">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className={`about-minimal__chip ${group.muted ? "about-minimal__chip--muted" : ""
                                                }`}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="about-minimal__actions">
                        <a
                            href="/cv_juan_manuel_cabrera_product_designer.pdf"
                            download
                            className="about-minimal__cta"
                        >
                            Descargar CV
                        </a>
                    </div>
                </motion.section>
            </div>
        </section>
    )
}
