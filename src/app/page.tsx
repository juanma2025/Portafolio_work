import Image from "next/image"
import Link from "next/link"

import { Facebook, Linkedin, Instagram } from "lucide-react"
export default function Home() {
  return (
    <section className="home-hero">
      <article className="home-hero__content">
        <section className="home-hero__copy">
          <p className="home-hero__eyebrow">JUAN MANUEL</p>
          <h1 className="home-hero__title">
            HI! I'M JUAN
            <span>I'M A DESIGNER</span>
          </h1>
          <p className="home-hero__description">
            Desarrollador web junior apasionado, especializado en interfaces front-end modernas, diseños responsivos y experiencias digitales impecables.
          </p>
          <div className="home-hero__actions">
            <Link href="/contact" className="home-hero__button">
              GET IN TOUCH
            </Link>

            <div className="home-hero__socials">
              <Link
                href="https://instagram.com"
                className="home-hero__social"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="https://facebook.com"
                className="home-hero__social home-hero__social--pink"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="home-hero__social home-hero__social--blue"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </section>

        <figure className="home-hero__visual">
          <span className="home-hero__rings" aria-hidden="true" />
          <span className="home-hero__accent home-hero__accent--one" aria-hidden="true" />
          <span className="home-hero__accent home-hero__accent--two" aria-hidden="true" />
          <span className="home-hero__photo">
            <Image
              src="/image.JPG"
              alt="Juan Manuel"
              width={520}
              height={640}
              className="home-hero__image"
              priority
            />
          </span>
        </figure>
      </article>
    </section>
  )
}
