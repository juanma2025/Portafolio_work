"use client"

import type React from "react"
import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const shouldReduceMotion = useReducedMotion()

  const springTransition = {
    type: "spring" as const,
    stiffness: 90,
    damping: 20,
    mass: 0.85,
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const whatsappNumber = "573024993023"
    const text = `Hola Juan Manuel, mi nombre es ${name.trim()} (${email.trim()}).\n\n${message.trim()}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="apple-contact">
      <div className="apple-contact__container">
        <motion.header
          className="apple-contact__header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
        >
          <p className="apple-section-eyebrow">Contacto</p>
          <h1 className="apple-contact__title">
            Hablemos sobre tu próximo producto.
          </h1>
          <p className="apple-contact__lead">
            Disponible para roles como Product Designer (UI/UX + Research) y
            proyectos de diseño de producto. Respondo rápido por correo o
            WhatsApp.
          </p>
        </motion.header>

        <div className="apple-contact__grid">
          {/* Información directa */}
          <motion.div
            className="apple-contact__info"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springTransition, delay: shouldReduceMotion ? 0 : 0.05 }}
          >
            <div className="apple-contact__card">
              <h2 className="apple-contact__card-title">Canales directos</h2>

              <ul className="apple-contact__list">
                <li>
                  <span className="apple-contact__icon">
                    <Mail size={17} />
                  </span>
                  <div>
                    <span className="apple-contact__label">Correo electrónico</span>
                    <a
                      href="mailto:juanmatabanchoyc@gmail.com"
                      className="apple-contact__value"
                    >
                      juanmatabanchoyc@gmail.com
                    </a>
                  </div>
                </li>

                <li>
                  <span className="apple-contact__icon">
                    <Phone size={17} />
                  </span>
                  <div>
                    <span className="apple-contact__label">WhatsApp / Teléfono</span>
                    <a
                      href="https://wa.me/573024993023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-contact__value"
                    >
                      +57 302 499 3023
                    </a>
                  </div>
                </li>

                <li>
                  <span className="apple-contact__icon">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <span className="apple-contact__label">Ubicación</span>
                    <p className="apple-contact__value">
                      Pasto, Nariño, Colombia
                    </p>
                  </div>
                </li>
              </ul>

              <div className="apple-contact__links">
                <a
                  href="https://www.linkedin.com/in/juanmanuel0125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn apple-btn--secondary"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/juanma2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn apple-btn--secondary"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf"
                  download
                  className="apple-btn apple-btn--secondary"
                >
                  <Download size={15} />
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            className="apple-contact__form apple-contact__card"
            onSubmit={handleSubmit}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <h2 className="apple-contact__card-title">Enviar un mensaje</h2>

            <div className="apple-form-field">
              <label htmlFor="name" className="apple-form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre o empresa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="apple-form-input"
                required
              />
            </div>

            <div className="apple-form-field">
              <label htmlFor="email" className="apple-form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nombre@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="apple-form-input"
                required
              />
            </div>

            <div className="apple-form-field">
              <label htmlFor="message" className="apple-form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntame sobre el proyecto, equipo o vacante..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="apple-form-input"
                required
              />
            </div>

            <button type="submit" className="apple-btn apple-btn--primary">
              <Send size={15} />
              <span>Enviar mensaje</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
