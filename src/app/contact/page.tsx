"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const whatsappNumber = "573024993023"
        const text = `Hola Juan Manuel, mi nombre es ${name.trim()} (${email.trim()}).\n\n${message.trim()}`
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

        window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    }

    return (
        <section className="contact-page max-w-screen-xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contáctame</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p className="contact-muted">
                        No dudes en contactarme para cualquier consulta u oportunidad laboral. Te responderé lo antes posible.
                    </p>

                    <div className="space-y-2">
                        <p className="font-medium">Correo electrónico</p>
                        <p className="contact-muted">juanmatabanchoyc@gmail.com</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">Teléfono</p>
                        <p className="contact-muted">+57 3024993023</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">Ubicación</p>
                        <p className="contact-muted">Pasto, Colombia</p>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium">
                            Nombre
                        </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="contact-input w-full p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">
                            Correo electrónico
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="contact-input w-full p-2 rounded-md"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block font-medium">
                            Mensaje
                        </label>
                        <textarea 
                            id="message"
                            name="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="contact-input w-full p-2 rounded-md"
                            required
                        />
                    </div>

                    <Button type="submit" className="bg-blue-500 hover:bg-red-600 text-white px-8 py-2">
                        Enviar Mensaje
                    </Button>
                </form>
            </div>
        </section>
    )
}
