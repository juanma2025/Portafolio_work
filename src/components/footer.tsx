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
      "https://linkedin.com"
    ),
  ]

  return (
    <footer className="site-footer">
      <section className="site-footer__inner">
        <nav className="site-footer__socials" aria-label="Social links">
          {socialIcons.map((icon) => (
            <span key={icon.name}>{icon.render()}</span>
          ))}
        </nav>
      </section>
    </footer>
  )
}
