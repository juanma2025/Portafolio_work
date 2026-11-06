"use client"

import { useState } from "react"
import Image from "next/image"
import { MoveHorizontal } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
  caption?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  caption,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)

  return (
    <figure className="ba-slider">
      <div className="ba-slider__viewport">
        {/* Imagen Después (Fondo completo) */}
        <div className="ba-slider__layer">
          <Image
            src={afterImage}
            alt={afterLabel}
            width={1200}
            height={750}
            className="ba-slider__image"
            unoptimized
          />
          <span className="ba-slider__badge ba-slider__badge--after">
            {afterLabel}
          </span>
        </div>

        {/* Imagen Antes (Recortada según posición del slider) */}
        <div
          className="ba-slider__layer ba-slider__layer--before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            width={1200}
            height={750}
            className="ba-slider__image"
            unoptimized
          />
          <span className="ba-slider__badge ba-slider__badge--before">
            {beforeLabel}
          </span>
        </div>

        {/* Línea divisora y botón central */}
        <div
          className="ba-slider__divider"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="ba-slider__handle">
            <MoveHorizontal size={16} />
          </span>
        </div>

        {/* Control accesible por teclado, mouse y pantalla táctil */}
        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparar diseño antes y después"
          className="ba-slider__range"
        />
      </div>

      {caption && <figcaption className="ba-slider__caption">{caption}</figcaption>}
    </figure>
  )
}

