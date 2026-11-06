import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"


class SocialIcon {
  name: string
  icon: React.ReactNode
  href: string

  constructor(name: string, icon: React.ReactNode, href: string) {
    this.name = name
    this.icon = icon
    this.href = href
  }

  render() {
    return (
      <Link
        href={this.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`footer-social footer-social--${this.name.toLowerCase()}`}
        aria-label={this.name}
      >
        {this.icon}
      </Link>
    )
  }
}

export default function Footer() {
  const socialIcons = [
    new SocialIcon(
      "Instagram",
      <Instagram size={17} strokeWidth={2.4} />,
      "https://instagram.com"
    ),
    new SocialIcon(
      "Facebook",
      <Facebook size={17} strokeWidth={2.4} />,
      "https://facebook.com"
    ),
    new SocialIcon(
      "LinkedIn",
      <Linkedin size={17} strokeWidth={2.4} />,
      "https://www.linkedin.com/in/juanmanuel0125"
    ),
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Juan Manuel. Todos los derechos reservados.
        </p>
        <nav className="site-footer__socials" aria-label="Enlaces de redes sociales">
          {socialIcons.map((icon) => (
            <span key={icon.name}>{icon.render()}</span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
