export interface CaseStudyScreen {
  title: string
  description: string
  image: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  category: string
  clientOrType: string
  role: string
  timeline: string
  tools: string[]
  coverImage: string
  shortSummary: string
  researchHighlight: string
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
  beforeAfter: {
    beforeImage: string
    afterImage: string
    beforeLabel: string
    afterLabel: string
    caption: string
    changes: string[]
  }
  screens: CaseStudyScreen[]
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
    title: "Nova",
    subtitle: "Banca digital y finanzas personales para estudiantes universitarios",
    category: "Fintech · Producto Digital",
    clientOrType: "Proyecto de diseño (Nova Neobank & Nova Plata)",
    role: "Product Designer (UI/UX + Research)",
    timeline: "2025",
    tools: ["Figma", "Stitch", "React", "Tailwind CSS"],
    coverImage: "/projects/nova-cover.svg",
    shortSummary:
      "Rediseño integral de un ecosistema financiero estudiantil (banca digital y control de gastos diarios) validado mediante entrevistas y pruebas de usabilidad.",
    researchHighlight: "5 estudiantes entrevistados · 2 productos unificados",
    context:
      "Los estudiantes universitarios gestionan presupuestos ajustados entre transporte, alimentación, materiales y transferencias cotidianas. Nova nació como un ecosistema de dos productos complementarios: Nova Neobank (banca digital) y Nova Plata (control de gastos diarios y tarjetas), buscando ofrecer una experiencia financiera sin fricción ni lenguaje bancario intimidante.",
    problem:
      "La propuesta visual inicial tenía baja aceptación: presentaba demasiados indicadores financieros al mismo tiempo, carecía de una jerarquía clara entre el dinero realmente disponible y los gastos comprometidos, y no mantenía un lenguaje visual coherente entre ambos productos.",
    research: {
      participants: "5 estudiantes universitarios",
      methodology:
        "Entrevistas semiestructuradas, evaluación de la propuesta inicial y pruebas de usabilidad iterativas sobre prototipos interactivos.",
      insights: [
        {
          title: "Saturación cognitiva al abrir la app",
          detail:
            "Los estudiantes solo querían responder una pregunta en los primeros 3 segundos: «¿Cuánto puedo gastar hoy sin descuadrar mi semana?».",
        },
        {
          title: "Desconexión entre banca y gastos diarios",
          detail:
            "Pasar de Nova Neobank a Nova Plata se sentía como usar dos aplicaciones distintas, generando desconfianza en el seguimiento del saldo.",
        },
        {
          title: "Rechazo a la jerga financiera tradicional",
          detail:
            "Términos técnicos dificultaban entender movimientos simples como transferencias entre compañeros o pagos recurrentes.",
        },
      ],
    },
    beforeAfter: {
      beforeImage: "/projects/nova-before.svg",
      afterImage: "/projects/nova-after.svg",
      beforeLabel: "Antes · Propuesta inicial saturada",
      afterLabel: "Después · Rediseño minimalista",
      caption:
        "Desliza para comparar la propuesta inicial sobrecargada frente al rediseño minimalista enfocado en claridad financiera.",
      changes: [
        "Priorización del «Saldo disponible para hoy» como punto focal único en la vista de inicio.",
        "Reducción de acciones simultáneas a las 2 tareas críticas: transferir y registrar gasto.",
        "Unificación del sistema visual entre Nova Neobank y Nova Plata con superficies limpias y alto contraste.",
      ],
    },
    screens: [
      {
        title: "Vista principal de Nova Neobank",
        description:
          "Resumen inmediato del saldo disponible, tarjeta universitaria digital y estado de metas de ahorro sin ruido visual.",
        image: "/projects/nova-cover.svg",
      },
      {
        title: "Control diario en Nova Plata",
        description:
          "Categorización automática de gastos cotidianos (transporte, campus, alimentación) con barras de presupuesto semanal fáciles de escanear.",
        image: "/projects/nova-after.svg",
      },
    ],
    designSystem: {
      summary:
        "Construí un lenguaje visual minimalista compartido por ambos productos, donde la tipografía y el espacio en blanco reemplazan los bordes innecesarios.",
      principles: [
        "Escala tipográfica de alto contraste para cifras financieras.",
        "Paleta neutra con un único acento funcional para acciones primarias.",
        "Estados vacíos y de confirmación redactados en lenguaje cercano.",
      ],
      components: [
        "Tarjeta de saldo principal con indicador de presupuesto semanal",
        "Ítems de transacción con iconografía monocroma y lectura en dos columnas",
        "Flujo de transferencia rápida en 3 pasos con validación inmediata",
        "Prototipos funcionales validados en React para comprobar viabilidad técnica",
      ],
    },
    results: {
      summary:
        "El rediseño fue validado nuevamente con los estudiantes mediante pruebas de usabilidad, logrando una comprensión inmediata de la información financiera.",
      outcomes: [
        "Comprensión sin ayuda del saldo disponible y presupuesto semanal desde la primera pantalla.",
        "Transición fluida y consistente entre Nova Neobank y Nova Plata.",
        "Validación de la viabilidad técnica llevando el sistema de diseño a componentes funcionales.",
      ],
    },
  },
  {
    slug: "parking-reserve",
    title: "Parking Reserve",
    subtitle: "App móvil de reserva de parqueaderos en zonas de alta concurrencia",
    category: "Movilidad Urbana · App Móvil",
    clientOrType: "Proyecto de diseño (Pasto, Colombia)",
    role: "Product Designer (UI/UX + Research)",
    timeline: "2025",
    tools: ["Figma", "Flutter"],
    coverImage: "/projects/parking-cover.svg",
    shortSummary:
      "Rediseño mobile-first para encontrar y reservar cupos de parqueo en centros comerciales, hospitales y plazas de Pasto sin distracciones.",
    researchHighlight: "10 usuarios entrevistados · Enfoque mobile-first",
    context:
      "En zonas de alta concurrencia de Pasto —como centros comerciales, hospitales y plazas principales— encontrar parqueadero disponible genera filas, pérdida de tiempo y estrés para los conductores. Parking Reserve permite consultar disponibilidad en tiempo real y asegurar un cupo desde el teléfono.",
    problem:
      "La vista principal original contenía bloques extensos de texto descriptivo, reglamentos y detalles secundarios que generaban ruido visual e impedían identificar rápidamente cuántos cupos libres había y dónde estaba el botón para reservar.",
    research: {
      participants: "10 usuarios conductores en Pasto",
      methodology:
        "Entrevistas contextuales y pruebas de usabilidad en escenarios móviles evaluando tiempo de escaneo y claridad de las acciones.",
      insights: [
        {
          title: "Ruido visual por exceso de texto",
          detail:
            "Los 10 usuarios señalaron que leer párrafos largos mientras buscaban parqueadero era incómodo y retrasaba la decisión.",
        },
        {
          title: "Acción principal poco visible",
          detail:
            "El botón de reserva competía visualmente con información secundaria de horarios y direcciones.",
        },
        {
          title: "Necesidad de respuestas de un vistazo",
          detail:
            "Los usuarios priorizaban tres datos exactos: cupos disponibles ahora, tarifa por hora y distancia.",
        },
      ],
    },
    beforeAfter: {
      beforeImage: "/projects/parking-before.svg",
      afterImage: "/projects/parking-after.svg",
      beforeLabel: "Antes · Vista saturada de texto",
      afterLabel: "Después · Enfoque mobile-first",
      caption:
        "Desliza para ver cómo se eliminó el ruido textual para priorizar disponibilidad, tarifa y reserva en un toque.",
      changes: [
        "Eliminación de párrafos extensos en la vista principal a favor de indicadores numéricos directos.",
        "Nueva jerarquía visual mobile-first: mapa superior, tarjeta de disponibilidad y botón primario fijo al alcance del pulgar.",
        "Simplificación de pantallas secundarias para mostrar el código QR de ingreso y el temporizador de reserva.",
      ],
    },
    screens: [
      {
        title: "Exploración y reserva en un toque",
        description:
          "Vista principal limpia con pines de disponibilidad en tiempo real, tarifa por hora y CTA de alto contraste en la zona inferior.",
        image: "/projects/parking-cover.svg",
      },
      {
        title: "Tarjeta de reserva activa",
        description:
          "Pantalla secundaria rediseñada con temporizador claro, ubicación de bahía y acceso rápido al código QR.",
        image: "/projects/parking-after.svg",
      },
    ],
    designSystem: {
      summary:
        "Sistema de interfaz móvil diseñado para lectura rápida en exteriores, con áreas táctiles amplias y contraste superior al estándar AA.",
      principles: [
        "Regla de 3 datos por tarjeta: disponibilidad, precio y distancia.",
        "Áreas táctiles mínimas de 48px pensadas para uso con una sola mano.",
        "Retroalimentación visual inmediata en cada estado de la reserva.",
      ],
      components: [
        "Bottom sheet de parqueadero con resumen condensado",
        "Píldoras de disponibilidad en tiempo real sobre el mapa",
        "Tarjeta de pase activo con temporizador y acceso QR",
        "Implementación y despliegue del flujo completo en Flutter",
      ],
    },
    results: {
      summary:
        "Las pruebas de usabilidad posteriores al rediseño confirmaron que la reducción de texto aceleró la toma de decisión y eliminó los errores al reservar.",
      outcomes: [
        "Identificación inmediata de cupos libres y tarifas sin necesidad de hacer scroll.",
        "Flujo de reserva completado con éxito por los usuarios durante las sesiones de prueba.",
        "Aplicación desarrollada y desplegada en Flutter manteniendo fidelidad total con el diseño en Figma.",
      ],
    },
  },
  {
    slug: "narino-cultura",
    title: "Nariño Cultura",
    subtitle: "Plataforma digital cultural para Corpocarnaval y el patrimonio de Nariño",
    category: "Cultura · Cliente Real (Freelance)",
    clientOrType: "Corpocarnaval · Proyecto de grado",
    role: "Product Designer UI/UX & Frontend (Freelance)",
    timeline: "2025 – Actualidad",
    tools: ["Figma", "React", "Tailwind CSS", "Scrum / Kanban"],
    coverImage: "/projects/narino-cover.svg",
    shortSummary:
      "Rediseño completo de experiencia e identidad visual para la plataforma cultural de Corpocarnaval, alineando las expectativas del cliente con hallazgos de usuarios reales.",
    researchHighlight: "7 usuarios entrevistados · Cliente real Corpocarnaval",
    context:
      "Nariño Cultura es una plataforma digital creada en colaboración con Corpocarnaval (y presentada también como trabajo de grado) para difundir el patrimonio cultural nariñense, las modalidades artísticas del Carnaval de Negros y Blancos, sus artesanos y su programación.",
    problem:
      "La primera versión de la interfaz lucía genérica y fría: no representaba la riqueza ni la identidad cultural que Corpocarnaval necesitaba proyectar, y la estructura de navegación dificultaba explorar la historia, las sendas y las obras.",
    research: {
      participants: "7 usuarios + sesiones con el cliente (Corpocarnaval)",
      methodology:
        "Entrevistas con usuarios, sesiones de alineación con Corpocarnaval y pruebas de usabilidad comparativas antes y después del rediseño.",
      insights: [
        {
          title: "Falta de identidad cultural en la interfaz inicial",
          detail:
            "Los 7 usuarios entrevistados coincidieron en que el diseño inicial parecía un portal administrativo y no transmitía la esencia de Nariño.",
        },
        {
          title: "Arquitectura de información dispersa",
          detail:
            "Los visitantes no sabían cómo pasar de la agenda de eventos a las historias de las modalidades y maestros artesanos.",
        },
        {
          title: "Necesidad de entregas iterativas con el cliente",
          detail:
            "Corpocarnaval requería priorizar ajustes de forma ágil a medida que surgían nuevas necesidades editoriales.",
        },
      ],
    },
    beforeAfter: {
      beforeImage: "/projects/narino-before.svg",
      afterImage: "/projects/narino-after.svg",
      beforeLabel: "Antes · Plantilla fría sin identidad",
      afterLabel: "Después · Diseño editorial cultural",
      caption:
        "Desliza para comparar la versión inicial genérica frente al rediseño editorial centrado en la cultura nariñense.",
      changes: [
        "Rediseño completo de la UI/UX con un lenguaje visual editorial que destaca la obra de los artesanos y el patrimonio regional.",
        "Reestructuración de la navegación en tres ejes claros: Modalidades artísticas, Programación interactiva y Archivo cultural.",
        "Traducción de los requerimientos de Corpocarnaval en flujos claros y priorizados por entregas iterativas.",
      ],
    },
    screens: [
      {
        title: "Portada editorial y exploración por modalidades",
        description:
          "Jerarquía visual amplia que da protagonismo a las carrozas, murgas y relatos del Carnaval de Negros y Blancos.",
        image: "/projects/narino-cover.svg",
      },
      {
        title: "Rutas culturales y agenda validada con usuarios",
        description:
          "Flujo rediseñado tras las pruebas de usabilidad para consultar eventos, sendas e historia sin fricción.",
        image: "/projects/narino-after.svg",
      },
    ],
    designSystem: {
      summary:
        "Lenguaje de diseño editorial adaptable que equilibra el protagonismo visual del patrimonio cultural con una lectura limpia y accesible en móvil y escritorio.",
      principles: [
        "Diseño editorial donde la fotografía y las historias culturales tienen el rol principal.",
        "Navegación predecible y accesible para todo tipo de público ciudadano y turista.",
        "Componentes modulares pensados para evolución continua junto al equipo de desarrollo.",
      ],
      components: [
        "Tarjetas editoriales de modalidades artísticas y maestros artesanos",
        "Navegador de programación y sendas del Carnaval",
        "Módulos de relato histórico con lectura cómoda en dispositivos móviles",
        "Implementación responsiva en producción con React y Tailwind CSS",
      ],
    },
    results: {
      summary:
        "El nuevo diseño fue validado con pruebas de usabilidad con los mismos 7 usuarios y aprobado por Corpocarnaval, manteniéndose activo y en evolución continua.",
      outcomes: [
        "Aprobación de la nueva identidad visual por parte de Corpocarnaval y los usuarios evaluados.",
        "Colaboración fluida entre cliente y desarrollo mediante entregas iterativas (Scrum/Kanban).",
        "Plataforma activa en producción recibiendo actualizaciones y mejoras continuas.",
      ],
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug)
}

