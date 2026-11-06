import Image from "next/image"
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
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
    title: "Corpocarnaval · Nariño Cultura",
    meta: "Product Designer UI/UX y Frontend (Freelance) · Trabajo de grado",
    date: "2025 – Actualidad",
    items: [
      "Entrevisté a 7 usuarios y rediseñé por completo la UI/UX con un lenguaje visual centrado en la cultura nariñense.",
      "Validé el nuevo diseño con pruebas de usabilidad con los mismos usuarios e iteré las pantallas según su feedback.",
      "Colaboré con el cliente y el equipo en entregas iterativas (Scrum/Kanban) e implementé el frontend responsivo (React, Tailwind CSS).",
    ],
  },
  {
    title: "Nova · Banca Digital (Fintech)",
    meta: "Nova Neobank y Nova Plata · Figma, Stitch, React, Tailwind CSS",
    date: "Proyecto personal",
    items: [
      "Entrevisté a 5 estudiantes universitarios y rediseñé por completo la interfaz de ambos productos ante la baja aceptación inicial.",
      "Diseñé las interfaces finales con un lenguaje visual minimalista y consistente, priorizando la claridad de la información financiera.",
      "Validé el rediseño con pruebas de usabilidad y llevé los diseños a productos funcionales en React con apoyo de IA.",
    ],
  },
  {
    title: "Parking Reserve (Movilidad urbana)",
    meta: "App móvil de reserva de parqueaderos en Pasto · Figma, Flutter",
    date: "Proyecto personal",
    items: [
      "Entrevisté a 10 usuarios y detecté que la vista principal generaba ruido visual por exceso de texto.",
      "Rediseñé la vista principal y pantallas secundarias con enfoque mobile-first: menos texto, jerarquía visual clara y acciones más visibles.",
      "Validé los cambios con pruebas de usabilidad, iteré según el feedback y desarrollé y desplegué la app en Flutter.",
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

const skills = [
  { name: "Diseño de Producto (UI/UX)", icon: Palette },
  { name: "Investigación y Pruebas con Usuarios", icon: Users },
  { name: "User Flows, Wireframes y Prototipado", icon: Puzzle },
  { name: "Figma, Stitch y Miro", icon: Wrench },
  { name: "React, Tailwind CSS y TypeScript", icon: Code2 },
  { name: "Desarrollo Mobile-First y Flutter", icon: Sparkles },
  { name: "Testing y Control de Calidad (QA)", icon: ShieldCheck },
  { name: "Scrum, Kanban y Herramientas de IA", icon: BrainCircuit },
]

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="resume-shell">
        <h1 className="sr-only">Currículum de Juan Manuel Cabrera</h1>
        <div className="resume-intro">
          <figure className="resume-avatar">
            <Image src="/image3.png" alt="Juan Manuel Cabrera" width={260} height={260} className="resume-avatar__image" priority />
          </figure>

          <div className="resume-bio resume-card">
            <p>
              Soy <strong>Juan Manuel Cabrera</strong>, Product Designer con formación en Ingeniería de Software (8.º semestre). Diseño productos digitales de principio a fin, desde la investigación con usuarios y las pruebas de usabilidad hasta los flujos, la UI y la implementación en fintech, movilidad urbana y cultura. He entrevistado y hecho pruebas con 22 usuarios en 3 productos, rediseñando interfaces completas y colaborando de cerca con ingeniería bajo metodologías ágiles (Scrum/Kanban).
            </p>
          </div>
        </div>

        <section className="resume-strip resume-card" aria-label="Intereses">
          <span>Intereses</span>
          <p>Product Design</p>
          <p>UI / UX</p>
          <p>Investigación de Usuarios</p>
          <p>Fintech y Movilidad</p>
          <p>Música (Banda en vivo)</p>
        </section>

        <div className="resume-grid">
          {projects.map((project) => (
            <article className="resume-card resume-project" key={project.title}>
              <header className="resume-card__header">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.meta}</p>
                </div>
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
              <h2>Formación</h2>
            </header>
            {education.map((item) => (
              <div className="resume-education__item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <span>{item.date}</span>
              </div>
            ))}
          </article>
        </div>

        <section className="resume-card resume-skills">
          <header className="resume-section-title">
            <BriefcaseBusiness size={19} />
            <h2>Habilidades</h2>
          </header>
          <div className="resume-skill-list">
            {skills.map(({ name, icon: Icon }) => (
              <div className="resume-skill" key={name}>
                <Icon size={17} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-card resume-details" aria-label="Detalles de contacto">
          <span>Detalles</span>
          <p>
            <Mail size={15} />
            juanmatabanchoyc@gmail.com
          </p>
          <p>
            <Phone size={15} />
            +57 302 499 3023
          </p>
          <p>
            <MapPin size={15} />
            Pasto, Nariño, Colombia
          </p>
          <a href="https://www.linkedin.com/in/juanmanuel0125" target="_blank" rel="noopener noreferrer">
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a href="https://github.com/juanma2025" target="_blank" rel="noopener noreferrer">
            <Github size={15} />
            GitHub
          </a>
        </section>
      </div>
    </section>
  )
}
