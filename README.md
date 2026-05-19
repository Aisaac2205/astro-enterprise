# DocScan — Sistema Web OCR con IA

Landing page de producto para DocScan, un sistema de reconocimiento óptico de caracteres (OCR) potenciado por inteligencia artificial con arquitectura dual: procesamiento en la nube y on-premise.

## Propuesta de Valor

DocScan transforma documentos físicos y digitales en datos estructurados, accionables y seguros mediante motores de IA de última generación. Diseñado para empresas que necesitan precisión, privacidad y flexibilidad.

## Motor Dual de IA

- **Cloud**: Gemini 3.1 Flash Lite — velocidad y escalabilidad para volúmenes altos.
- **On-Premise**: LM Studio — privacidad total, datos que nunca salen de tu infraestructura.

## Stack Técnico

- **Framework**: Astro 5 con React islands
- **Styling**: Tailwind CSS v4 con design system propio (DocScan Design System)
- **Tipografía**: Geist Sans + Geist Mono
- **Icons**: Lucide React
- **Build**: Static site, optimizado para performance y SEO

## Estructura del Proyecto

```text
src/
├── content/            # Data Layer (Collections: team, services, architecture)
│   ├── team/            # Perfiles del equipo
│   ├── services/        # Servicios/productos ofrecidos
│   └── architecture/    # Diagramas y especificaciones técnicas
├── features/            # Componentes modulares UI + lógica de negocio
├── pages/               # Routing y templates de página
├── layouts/             # Shells globales y patrones de layout
├── components/          # Primitives UI compartidos
└── styles/              # Global CSS y configuración Tailwind
```

## Design System

El sistema de diseño DocScan está definido en `src/styles/global.css` e incluye:

- **Raw colors**: rampas `brand-ink`, `brand`, `accent`, `neutral`
- **Semantic tokens**: surfaces, borders, foregrounds, info/success/warning/danger
- **Typography**: escala tipográfica con pesos 400/500 únicamente
- **Shadows**: tinte brand-ink, sin negro puro
- **Radii**: máximo 12px para mantener consistencia sutil
- **Animations**: fade, slide, toast, bar-rise — con `prefers-reduced-motion` support
- **Dark mode**: preparado en estructura, no implementado aún

## Desarrollo

### Requisitos

- Node.js (Latest LTS)
- PNPM (recomendado)

### Comandos

```bash
pnpm install    # Instalar dependencias
pnpm dev       # Servidor de desarrollo local
pnpm build     # Build estático para producción
pnpm preview   # Previsualizar build de producción
```

---

DocScan Inc. Todos los derechos reservados.
