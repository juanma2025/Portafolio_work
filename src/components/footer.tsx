import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="apple-footer__inner">
        <div className="apple-footer__brand">
          <p className="apple-footer__name">
            Juan Manuel Cabrera — Product Designer
          </p>
          <p className="apple-footer__copy">
            UI/UX · Investigación de usuarios · Pasto, Colombia
          </p>
        </div>

        <nav className="apple-footer__links" aria-label="Enlaces del pie de página">
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/resume">Currículum</Link>
          <Link href="/contacto">Contacto</Link>
          <a href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf" download>
            Descargar CV
          </a>
        </nav>

        <div className="apple-footer__socials" aria-label="Redes profesionales">
          <a
            href="mailto:juanmatabanchoyc@gmail.com"
            className="apple-footer__social"
            aria-label="Enviar correo electrónico"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/juanmanuel0125"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-footer__social"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/juanma2025"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-footer__social"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
