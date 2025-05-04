import type React from "react"
import Link from "next/link"
import { Facebook, Linkedin, InstagramIcon } from "lucide-react"


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
      <Link href={this.href} className="text-white hover:text-red-500 transition-colors" aria-label={this.name}>
        {this.icon}
      </Link>
    )
  }
}

export default function Footer() {
  const socialIcons = [
    new SocialIcon("Instagram", <InstagramIcon size={20} />, "https://instagram.com"),
    new SocialIcon("Facebook", <Facebook size={20} />, "https://facebook.com/"),
    new SocialIcon("LinkedIn", <Linkedin size={20} />, "https://linkedin.com"),
  ]

  return (
    <footer className="bg-black text-white py-4 px-6 border-t border-zinc-800">
      <section className="max-w-screen-xl mx-auto flex justify-end">
        <nav className="flex items-center space-x-4">
          {socialIcons.map((icon) => (
            <span key={icon.name}>{icon.render()}</span>
          ))}
        </nav>
      </section>
    </footer>
  )
}
