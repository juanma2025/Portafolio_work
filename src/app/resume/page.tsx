import Image from "next/image"
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Github,
  Mail,
  MapPin,
  Palette,
  Phone,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react"

const projects = [
  {
    title: "Crud Citas Medicas",
    meta: "Frontend",
    date: "2025",
    items: [
      "Diseno web para una plataforma de gestion de citas medicas.",
      "Interfaces responsivas enfocadas en claridad y flujo de usuario.",
      "Organizacion visual de formularios, estados y datos principales.",
    ],
  },
  {
    title: "Portafolio",
    meta: "Personal brand",
    date: "2026",
    items: [
      "Portafolio personal para mostrar habilidades y proyectos.",
      "Implementacion de dark mode, responsive design y componentes reutilizables.",
      "Mejora progresiva de UI con una paleta consistente.",
    ],
  },
  {
    title: "Narino Cultura",
    meta: "Proyecto de grado",
    date: "Actual",
    items: [
      "Desarrollo frontend para una experiencia digital cultural.",
      "Estructura visual para contenido, navegacion y exploracion.",
      "Trabajo con buenas practicas de componentes y mantenibilidad.",
    ],
  },
]

const education = [
  { title: "Ingenieria de Software", date: "8vo semestre", place: "En curso" },
  { title: "Python Level 2 Bootcamp", date: "2023", place: "Bootcamp" },
  { title: "Cisco Networking Academy", date: "2026", place: "Certificacion" },
  { title: "Colegio San Nicolas", date: "2022", place: "Bachiller" },
]

const skills = [
  { name: "Diseno web UI - UX", icon: Palette },
  { name: "Desarrollador Frontend", icon: Code2 },
  { name: "Trabajo en equipo", icon: Users },
  { name: "Tester QA", icon: ShieldCheck },
  { name: "Frameworks UI - UX", icon: Puzzle },
  { name: "Herramientas de Testing", icon: Wrench },
  { name: "JavaScript", icon: Sparkles },
  { name: "AI Inteligencia Artificial", icon: BrainCircuit },
]

export default function ResumePage() {
  return (
    <section className="resume-page">
      <article className="resume-shell">
        <section className="resume-intro">
          <figure className="resume-avatar">
            <Image src="/image3.png" alt="Juan Manuel" width={260} height={260} className="resume-avatar__image" priority />
          </figure>

          <section className="resume-bio resume-card">
            <p>
              My name is <strong>Juan Manuel</strong>, frontend developer and QA tester focused on building clean,
              responsive and usable digital products with a strong visual identity.
            </p>
          </section>
        </section>

        <section className="resume-strip resume-card" aria-label="Interests">
          <span>Interests</span>
          <p>Web Design</p>
          <p>UI - UX</p>
          <p>Frontend</p>
          <p>Testing QA</p>
        </section>

        <section className="resume-grid">
          {projects.map((project) => (
            <article className="resume-card resume-project" key={project.title}>
              <header className="resume-card__header">
                <section>
                  <h2>{project.title}</h2>
                  <p>{project.meta}</p>
                </section>
                <span>{project.date}</span>
              </header>
              <ul>
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="resume-card resume-education">
            <header className="resume-section-title">
              <GraduationCap size={19} />
              <h2>Education</h2>
            </header>
            {education.map((item) => (
              <section className="resume-education__item" key={item.title}>
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </section>
                <span>{item.date}</span>
              </section>
            ))}
          </article>
        </section>

        <section className="resume-card resume-skills">
          <header className="resume-section-title">
            <BriefcaseBusiness size={19} />
            <h2>Skills</h2>
          </header>
          <section className="resume-skill-list">
            {skills.map(({ name, icon: Icon }) => (
              <article className="resume-skill" key={name}>
                <Icon size={17} />
                <span>{name}</span>
              </article>
            ))}
          </section>
        </section>

        <section className="resume-card resume-details">
          <span>Details</span>
          <p>
            <Mail size={15} />
            juanmatabanchoyc@gmail.com
          </p>
          <p>
            <Phone size={15} />
            +57 3024993023
          </p>
          <p>
            <MapPin size={15} />
            Pasto, Colombia
          </p>
          <a href="https://github.com/juanma2025" target="_blank" rel="noreferrer">
            <Github size={15} />
            GitHub
          </a>
        </section>
      </article>
    </section>
  )
}
