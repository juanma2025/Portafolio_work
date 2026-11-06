export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  category: string
  clientOrType: string
  role: string
  timeline: string
  tools: string[]
  coverImage?: string
  isMobileCover?: boolean
  videoDemo?: string
  externalUrl?: string
  externalLabel?: string
  shortSummary: string
  researchHighlight: string
  sectionTitles: {
    context: string
    problem: string
    research: string
    beforeAfter: string
    prototypeOrScreens: string
    system: string
    results: string
  }
  context: string
  problem: string
  research: {
    participants: string
    methodology: string
    insights: {
      title: string
      detail: string
    }[]
  }
  beforeAfter?: {
    beforeImage: string
    afterImage: string
    beforeLabel: string
    afterLabel: string
    caption: string
    isMobile?: boolean
    changes: string[]
  }
  textComparison?: {
    beforeTitle: string
    beforeItems: string[]
    afterTitle: string
    afterItems: string[]
    changes: string[]
  }
  designSystem: {
    summary: string
    principles: string[]
    components: string[]
  }
  results: {
    summary: string
    outcomes: string[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nova",
    title: "Nova · Nova Plata",
    subtitle: "Banca digital y finanzas personales para estudiantes",
    category: "Fintech · Producto Digital",
    clientOrType: "Proyecto personal (Nova Neobank y Nova Plata)",
    role: "Product Designer (UI/UX + Research)",
    timeline: "2025",
    tools: ["Figma", "Stitch", "React", "Tailwind CSS"],
    coverImage: "/projects/Novaplata.png",
    isMobileCover: false,
    videoDemo: "/projects/Novaplata.mp4",
    shortSummary:
      "Rediseño completo de dos productos financieros estudiantiles tras detectar baja aceptación en la propuesta visual inicial.",
    researchHighlight: "5 estudiantes entrevistados",
    sectionTitles: {
      context: "Finanzas cotidianas en la vida universitaria",
      problem: "Baja aceptación de la propuesta visual inicial",
      research: "Entrevistas con 5 estudiantes universitarios",
      beforeAfter: "De la propuesta inicial de MiPlata al rediseño de Nova Plata",
      prototypeOrScreens: "Prototipo funcional en movimiento",
      system: "Lenguaje minimalista y viabilidad técnica",
      results: "Rediseño validado en pruebas de usabilidad",
    },
    context:
      "Nova integra banca digital (Nova Neobank) y control de gastos diarios y tarjetas (Nova Plata) para estudiantes universitarios.",
    problem:
      "Al evaluar la primera versión con usuarios, la propuesta visual tuvo baja aceptación y no transmitía con claridad la información financiera.",
    research: {
      participants: "5 estudiantes universitarios",
      methodology:
        "Entrevistas con usuarios y pruebas de usabilidad para evaluar comprensión visual y flujo entre ambos productos.",
      insights: [
        {
          title: "Rechazo a la propuesta visual inicial",
          detail:
            "Los 5 estudiantes percibieron la primera interfaz pesada y poco clara para consultar su dinero del día a día.",
        },
        {
          title: "Falta de consistencia entre productos",
          detail:
            "Se necesitaba un lenguaje visual unificado entre la banca digital y el seguimiento de gastos diarios.",
        },
        {
          title: "Prioridad en la lectura financiera",
          detail:
            "Los usuarios buscaban identificar su presupuesto, hábitos y metas de ahorro sin distracciones visuales.",
        },
      ],
    },
    beforeAfter: {
      beforeImage: "/projects/Miplata.png",
      afterImage: "/projects/Novaplata.png",
      beforeLabel: "Antes · Propuesta inicial",
      afterLabel: "Después · Rediseño final",
      caption:
        "Arrastra el control para comparar la propuesta inicial (MiPlata) frente al rediseño final (Nova Plata).",
      isMobile: false,
      changes: [
        "Rediseñé por completo la interfaz de ambos productos con un lenguaje visual minimalista y consistente.",
        "Prioricé la claridad de la información financiera y la jerarquía de acciones principales.",
        "Incorporé el feedback de las pruebas de usabilidad en nuevas iteraciones de diseño.",
      ],
    },
    designSystem: {
      summary:
        "Llevé los diseños de Figma y Stitch a productos funcionales en React con apoyo de IA para validar cada decisión.",
      principles: [
        "Consistencia visual entre Nova Neobank y Nova Plata.",
        "Jerarquía tipográfica limpia para facilitar la lectura de presupuestos y metas.",
      ],
      components: [
        "Vistas de control de presupuestos y metas de ahorro",
        "Componentes funcionales en React y Tailwind CSS para validar viabilidad técnica",
      ],
    },
    results: {
      summary:
        "Validé el rediseño mediante pruebas de usabilidad con los estudiantes e iteré el producto hasta lograr una experiencia clara.",
      outcomes: [
        "Aceptación positiva del nuevo lenguaje visual tras las pruebas de usabilidad.",
        "Validación técnica completa al transformar el diseño en una interfaz funcional en React.",
      ],
    },
  },
  {
    slug: "parking-reserve",
    title: "Parking Reserve",
    subtitle: "App móvil de reserva de parqueaderos en Pasto",
    category: "Movilidad Urbana · App Móvil",
    clientOrType: "Proyecto personal",
    role: "Product Designer (UI/UX + Research)",
    timeline: "2025",
    tools: ["Figma", "Flutter"],
    coverImage: "/projects/paking.png",
    isMobileCover: true,
    shortSummary:
      "Rediseño mobile-first para reservar parqueadero en zonas de alta concurrencia de Pasto, eliminando el exceso de texto.",
    researchHighlight: "10 usuarios entrevistados",
    sectionTitles: {
      context: "Parqueo en zonas de alta concurrencia en Pasto",
      problem: "Ruido visual por exceso de texto en la vista principal",
      research: "Hallazgos con 10 usuarios en Pasto",
      beforeAfter: "Rediseño mobile-first: menos texto, acción más visible",
      prototypeOrScreens: "Vista móvil enfocada en la acción",
      system: "Jerarquía mobile-first y despliegue en Flutter",
      results: "Cambios validados con pruebas de usabilidad",
    },
    context:
      "Aplicación móvil pensada para reservar cupos de parqueadero en centros comerciales, hospitales y plazas de alta concurrencia en Pasto.",
    problem:
      "La vista principal original acumulaba demasiado texto e información secundaria que dificultaba encontrar y reservar un cupo rápidamente.",
    research: {
      participants: "10 usuarios",
      methodology:
        "Entrevistas con 10 usuarios y pruebas de usabilidad sobre las vistas principales y secundarias de la app.",
      insights: [
        {
          title: "Exceso de texto en la pantalla inicial",
          detail:
            "En las entrevistas con 10 usuarios detecté que la vista principal generaba ruido visual por tener demasiado texto.",
        },
        {
          title: "Acciones principales poco visibles",
          detail:
            "Los bloques explicativos largos restaban protagonismo a la selección de rol (Conductor / Parqueadero) y a la reserva.",
        },
      ],
    },
    beforeAfter: {
      beforeImage: "/projects/Parking_Resev.png",
      afterImage: "/projects/paking.png",
      beforeLabel: "Antes · Exceso de texto",
      afterLabel: "Después · Mobile-first",
      caption:
        "Comparación en proporción móvil real entre la versión inicial (Parking_Resev) y el rediseño final (paking).",
      isMobile: true,
      changes: [
        "Rediseñé la vista principal y las pantallas secundarias con enfoque mobile-first.",
        "Reduje el texto en pantalla para lograr una jerarquía visual clara.",
        "Hice más visibles las acciones principales para explorar y reservar cupo.",
      ],
    },
    designSystem: {
      summary:
        "Tras validar los prototipos en Figma, desarrollé y desplegué la aplicación en Flutter manteniendo la estructura mobile-first.",
      principles: [
        "Enfoque mobile-first con menos texto y lectura rápida.",
        "Acciones principales destacadas desde el primer vistazo.",
      ],
      components: [
        "Selector directo de perfil (Conductor / Parqueadero)",
        "Tarjeta compacta de beneficios clave y acceso rápido a la reserva en Flutter",
      ],
    },
    results: {
      summary:
        "Validé los cambios con pruebas de usabilidad, iteré según el feedback recibido y desplegué la aplicación funcional.",
      outcomes: [
        "Lectura más limpia y directa validada en pruebas de usabilidad.",
        "Aplicación móvil desarrollada y desplegada en Flutter.",
      ],
    },
  },
  {
    slug: "narino-cultura",
    title: "Corpocarnaval · Nariño Cultura",
    subtitle: "Plataforma digital cultural para Nariño",
    category: "Cultura · Cliente Real (Freelance)",
    clientOrType: "Corpocarnaval · Trabajo de grado",
    role: "Product Designer UI/UX y Frontend (Freelance)",
    timeline: "2025 – Actualidad",
    tools: ["Figma", "React", "Tailwind CSS", "Scrum / Kanban"],
    externalUrl: "https://github.com/juanma2025",
    externalLabel: "Ver repositorio y documentación del proyecto",
    shortSummary:
      "Rediseño completo de UI/UX centrado en la identidad cultural nariñense para Corpocarnaval, validado con usuarios reales.",
    researchHighlight: "7 usuarios entrevistados · Corpocarnaval",
    sectionTitles: {
      context: "Plataforma cultural junto a Corpocarnaval",
      problem: "Una interfaz inicial sin identidad cultural",
      research: "Entrevistas con 7 usuarios y trabajo con el cliente",
      beforeAfter: "Transformación hacia un lenguaje cultural nariñense",
      prototypeOrScreens: "Estado actual del proyecto",
      system: "Trabajo colaborativo y entregas iterativas",
      results: "Plataforma activa con mejoras continuas",
    },
    context:
      "Plataforma digital cultural desarrollada como freelance para Corpocarnaval y presentada también como proyecto de grado.",
    problem:
      "La interfaz inicial no representaba la identidad cultural que pedía Corpocarnaval ni conectaba con los usuarios.",
    research: {
      participants: "7 usuarios + cliente (Corpocarnaval)",
      methodology:
        "Entrevistas con 7 usuarios, sesiones con Corpocarnaval y pruebas de usabilidad con los mismos usuarios tras el rediseño.",
      insights: [
        {
          title: "Desconexión con la identidad regional",
          detail:
            "Al entrevistar a 7 usuarios encontré que la interfaz inicial no reflejaba la identidad cultural que buscaba Corpocarnaval.",
        },
        {
          title: "Alineación entre cliente y desarrollo",
          detail:
            "Era necesario traducir las necesidades de Corpocarnaval en flujos y pantallas claras para el equipo de desarrollo.",
        },
      ],
    },
    textComparison: {
      beforeTitle: "Antes · Interfaz inicial",
      beforeItems: [
        "Diseño genérico que no representaba la identidad cultural solicitada por Corpocarnaval.",
        "Baja conexión visual identificada durante las entrevistas con los 7 usuarios.",
      ],
      afterTitle: "Después · Rediseño cultural",
      afterItems: [
        "Rediseño completo de la UI/UX con un lenguaje visual centrado en la cultura nariñense.",
        "Pantallas iteradas a partir de pruebas de usabilidad con los mismos 7 usuarios.",
      ],
      changes: [
        "Convertí las necesidades del cliente en flujos y pantallas accionables para el equipo de desarrollo.",
        "Prioricé ajustes en entregas iterativas bajo metodologías Scrum y Kanban.",
        "Implementé el frontend responsivo en React y Tailwind CSS.",
      ],
    },
    designSystem: {
      summary:
        "Actué como puente entre Corpocarnaval y el equipo de desarrollo para asegurar que el diseño fuera viable y fiel a la identidad cultural.",
      principles: [
        "Lenguaje visual centrado en la identidad cultural de Nariño.",
        "Iteración continua basada en feedback de usuarios y prioridades del cliente.",
      ],
      components: [
        "Flujos de navegación y pantallas validadas con usuarios",
        "Frontend responsivo implementado con React y Tailwind CSS",
      ],
    },
    results: {
      summary:
        "El nuevo diseño fue validado con los mismos 7 usuarios mediante pruebas de usabilidad y continúa activo con el cliente.",
      outcomes: [
        "Validación positiva del nuevo lenguaje visual con usuarios y con Corpocarnaval.",
        "La plataforma sigue activa y recibe correcciones y actualizaciones continuas.",
      ],
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug)
}
