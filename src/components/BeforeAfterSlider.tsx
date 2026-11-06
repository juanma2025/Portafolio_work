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
  isMobile?: boolean
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  caption,
  isMobile = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)

  return (
    <figure className={`ba-slider ${isMobile ? "ba-slider--mobile" : ""}`}>
      <div
        className={`ba-slider__viewport ${
          isMobile
            ? "ba-slider__viewport--mobile"
            : "ba-slider__viewport--desktop"
        }`}
      >
        {/* Capa Después (Fondo) */}
        <div className="ba-slider__layer">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes={isMobile ? "(max-width: 768px) 88vw, 368px" : "(max-width: 960px) 100vw, 960px"}
            className="ba-slider__image"
          />
          <span className="ba-slider__badge ba-slider__badge--after">
            {afterLabel}
          </span>
        </div>

        {/* Capa Antes (Recortada según posición del slider) */}
        <div
          className="ba-slider__layer ba-slider__layer--before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes={isMobile ? "(max-width: 768px) 88vw, 368px" : "(max-width: 960px) 100vw, 960px"}
            className="ba-slider__image"
          />
          <span className="ba-slider__badge ba-slider__badge--before">
            {beforeLabel}
          </span>
        </div>

        {/* Línea divisora y control central */}
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
