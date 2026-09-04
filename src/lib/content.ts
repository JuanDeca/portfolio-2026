export type Lang = "es" | "en";

export const ACCENT = "#00ff9d";

export const NAME = { first: "Juan", last: "Decastelli" };

export const CONTACT = {
  email: "juandecaw@gmail.com",
  github: "github.com/JuanDeca",
  githubUrl: "https://github.com/JuanDeca",
  linkedin: "linkedin.com/in/juan-decastelli",
  linkedinUrl: "https://www.linkedin.com/in/juan-decastelli/",
};

export const CV_URL = "/cv/Juan-Decastelli-CV.pdf";

export const TECH_LIST = [
  { name: "React", category: "FRONTEND" },
  { name: "Next.js", category: "FRONTEND" },
  { name: "TypeScript", category: "FRONTEND" },
  { name: "Python", category: "BACKEND" },
  { name: "FastAPI", category: "BACKEND" },
  { name: "Django", category: "BACKEND" },
  { name: "PostgreSQL", category: "DATA" },
  { name: "Docker", category: "TOOLS" },
  { name: "Git", category: "TOOLS" },
];

export const TEXTS: Record<Lang, Record<string, string>> = {
  es: {
    navTech: "Tecnologías",
    navExp: "Experiencia",
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroKicker: "desarrollador fullstack",
    heroBio:
      "4 años de experiencia construyendo productos de punta a punta — del modelo de datos a la interfaz. Me gusta resolver problemas reales con herramientas simples.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactame",
    techLabel: "stack",
    techTitle: "Tecnologías con las que suelo trabajar",
    expLabel: "trayectoria",
    expTitle: "Experiencia",
    expPeriod: "Ago 2022 — presente",
    expOrg: "Municipalidad de Avellaneda",
    expRole: "Desarrollador Fullstack",
    expDesc:
      "Diseño y desarrollo de sistemas internos de gestión para distintas áreas del municipio, desde la arquitectura de datos hasta la interfaz final, integrando IA en flujos de atención y trámites.",
    projLabel: "trabajo",
    projTitle: "Proyectos destacados",
    contactLabel: "contacto",
    contactTitle: "¿Charlamos sobre tu próximo proyecto?",
    footerNote: "Diseñado y desarrollado por mí.",
    placeholderNote: "Captura próximamente",
    downloadCv: "Descargar CV",
  },
  en: {
    navTech: "Tech Stack",
    navExp: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    heroKicker: "fullstack developer",
    heroBio:
      "4 years of experience building end-to-end products — from the data model to the interface. I like solving real problems with simple tools.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    techLabel: "stack",
    techTitle: "Technologies I usually work with",
    expLabel: "background",
    expTitle: "Experience",
    expPeriod: "Aug 2022 — present",
    expOrg: "Municipality of Avellaneda",
    expRole: "Fullstack Developer",
    expDesc:
      "Design and development of internal management systems for various municipal departments, from data architecture to the final interface, integrating AI into service and paperwork workflows.",
    projLabel: "work",
    projTitle: "Featured projects",
    contactLabel: "contact",
    contactTitle: "Let's talk about your next project.",
    footerNote: "Designed & built by me.",
    placeholderNote: "Screenshot coming soon",
    downloadCv: "Download CV",
  },
};

export type Project = {
  slotId: string;
  index: string;
  tags: string[];
  images: string[];
  es: { title: string; desc: string };
  en: { title: string; desc: string };
};

export const PROJECTS: Project[] = [
  {
    slotId: "proj-rag",
    index: "01",
    tags: ["Next.js", "PostgreSQL", "pgvector", "OpenAI API"],
    images: [
      "/projects/rag/chat.png",
      "/projects/rag/documento.png",
      "/projects/rag/corpus.png",
    ],
    es: {
      title: "RAG Municipal",
      desc: "Asistente conversacional (RAG) sobre trámites y normativa municipal, que indexa 210 documentos oficiales (ordenanzas y trámites) en PostgreSQL con pgvector. Cada respuesta cita la fuente exacta por fragmento, con un visor de PDF que resalta el pasaje usado, y un chequeo previo por LLM que evita responder cuando el contexto no alcanza.",
    },
    en: {
      title: "Municipal RAG",
      desc: "Conversational RAG assistant over municipal procedures and regulations, indexing 210 official documents (ordinances and procedures) in PostgreSQL with pgvector. Every answer cites the exact source fragment, with a PDF viewer that highlights the passage used, and an LLM-based check that avoids answering when the retrieved context falls short.",
    },
  },
  {
    slotId: "proj-hr",
    index: "02",
    tags: ["Flask", "PostgreSQL", "React", "Redis/RQ"],
    images: [
      "/projects/sgp/login.png",
      "/projects/sgp/modulos.png",
      "/projects/sgp/liquidaciones-v2.png",
    ],
    es: {
      title: "Gestión de Personal",
      desc: "Motor de liquidación de haberes y gestión de RRHH para la Municipalidad de Avellaneda: legajos, licencias, asistencia y estructura organizacional. Genera los recibos en PDF vía JasperReports con un pipeline asincrónico de colas (Redis/RQ) y autenticación contra Active Directory.",
    },
    en: {
      title: "Personnel Management",
      desc: "Payroll settlement and HR engine for the Municipality of Avellaneda: employee records, leave, attendance and org structure. Generates PDF payslips through JasperReports via an async job pipeline (Redis/RQ), with Active Directory authentication.",
    },
  },
  {
    slotId: "proj-receipts",
    index: "03",
    tags: ["Flask", "PostgreSQL", "React", "JasperReports"],
    images: [
      "/projects/recibos/listado-v2.png",
      "/projects/recibos/detalle-v2.png",
      "/projects/recibos/dashboard-v2.png",
    ],
    es: {
      title: "Sistema de Recibos",
      desc: "Portal de autoconsulta de recibos de sueldo que unifica el sistema de RRHH moderno con un sistema legado en una sola vista para el empleado. Resuelve los PDFs en cascada vía JasperReports con caché en disco, y expone un dashboard propio de uso (logins, descargas, fallbacks).",
    },
    en: {
      title: "Payroll Receipts",
      desc: "Employee self-service payslip portal that unifies the modern HR system with a legacy payroll source into a single view. Resolves PDFs through a cascading JasperReports + disk-cache pipeline, and exposes a custom usage dashboard (logins, downloads, fallback rates).",
    },
  },
  {
    slotId: "proj-stock",
    index: "04",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Docker"],
    images: [
      "/projects/stock/dashboard.png",
      "/projects/stock/articulos.png",
      "/projects/stock/movimientos.png",
    ],
    es: {
      title: "Sistema de Stock",
      desc: "Control de stock multi-depósito para las distintas dependencias municipales: catálogo de artículos con variantes, trazabilidad de lotes con vencimiento, y movimientos de stock (ingresos, egresos y transferencias con confirmación) sobre un libro mayor inmutable. Alertas automáticas de stock mínimo y vencimientos próximos.",
    },
    en: {
      title: "Inventory System",
      desc: "Multi-warehouse stock control across municipal departments: article catalog with variants, lot/batch traceability with expiration dates, and stock movements (entries, exits and transfers with confirmation) over an immutable ledger. Automatic alerts for low stock and upcoming expirations.",
    },
  },
];
