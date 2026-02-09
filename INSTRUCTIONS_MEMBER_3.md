# INSTRUCCIONES TÉCNICAS - MIEMBRO 3 (ARQUITECTO SOFTWARE)

## OBJETIVO: DOCUMENTACIÓN TÉCNICA VISUAL
Eres responsable de la sección "Tecnología/Arquitectura".
Tu diseño debe comunicar: Robustez, Seguridad y Modernidad. Estilo **Dark Mode Tech**.

### 1. MODELADO DE DATOS (Content Collections)
**[COMPLETADO]** El schema `architecture` ya está definido en `src/content/config.ts`. NO LO MODIFIQUES.

### 2. CREACIÓN DE CONTENIDO
**[COMPLETADO]** Los archivos Markdown ya han sido generados en `src/content/architecture/`. Usa estos datos para tu UI.

### 3. COMPONENTES UI (src/features/architecture/)
Implementa la UI consumiendo los datos existentes.

#### `FlowDiagram.astro`
- **Referencia Visual:** Ver `src/features/landing/ArchitectureTeaser.astro`.
- **Estilo:** Usa el concepto de "Glassmorphism" oscuro o paneles técnicos.
- **Contenedores:** `bg-brand-dark` con bordes `border-white/10`.
- **Detalles:** Agrega "indicadores de estado" (luces verdes/rojas pequeñas) y tipografía monoespaciada (`font-mono`) para etiquetas técnicas.
- **Diagramas:** Si usas imágenes, envuélvelas en un marco que parezca una ventana de terminal o un plano.

#### `TechSpecs.astro`
- Lista de especificaciones técnicas. Usa iconos pequeños y texto denso pero legible.

### 4. PÁGINA (src/pages/arquitectura.astro)
- Implementa la página `/arquitectura`.
- **Atmósfera:** Puede ser más oscura que el resto del sitio. Usa `bg-brand-dark` como fondo principal de la página si es apropiado, o secciones intercaladas.

### REGLAS DE ESTILO (CRÍTICO)
- **Colores Tech:** Abusa del `brand-dark` (#020617) y el `brand-blue` (#0f172a).
- **Acentos:** Usa el `brand-accent` (#10b981) para denotar "Sistemas Operativos" o "Seguro".
- **Efectos:** Usa `backdrop-blur` y bordes semitransparentes (`border-white/10`) para dar profundidad sin ensuciar el diseño.

---
Tu trabajo da la credibilidad técnica. Inspírate en sitios como Vercel, Stripe o Railway.
