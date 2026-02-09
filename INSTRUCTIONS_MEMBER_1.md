# INSTRUCCIONES TÉCNICAS - MIEMBRO 1 (HR/ADMIN)

## OBJETIVO: GESTIÓN DE TALENTO Y UBICACIÓN
Eres responsable de implementar la sección "Nosotros" y la gestión del equipo.
La UI debe seguir estrictamente el tema **Dark & Minimalist** implementado en el Landing.

### 1. MODELADO DE DATOS (Content Collections)
**[COMPLETADO]** El schema `team` ya está definido en `src/content/config.ts`. NO LO MODIFIQUES.

### 2. CREACIÓN DE CONTENIDO
**[COMPLETADO]** Los archivos Markdown ya han sido generados en `src/content/team/`. Usa estos datos para tu UI.

### 3. COMPONENTES UI (src/features/company/)
Implementa la UI consumiendo los datos existentes.

#### `TeamGrid.astro`
- **Referencia de Estilo:** Ver `src/features/landing/StatsSection.astro` y `HeroSection.astro`.
- **Fondo:** Usa `bg-white` para las tarjetas con bordes muy sutiles (`border-gray-100`).
- **Tipografía:** Títulos en `text-brand-blue`, roles en `text-brand-accent` (verde esmeralda) con tracking amplio (`tracking-widest`).
- **Interacción:** Hover effects sutiles (elevación o borde `brand-blue`). No uses sombras pesadas.

#### `OfficeLocation.astro`
- Diseña una sección de contacto/ubicación.
- Usa un mapa (puede ser imagen estática estilizada o iframe con filtro grayscale) que encaje con el tema "Enterprise".

### 4. PÁGINA (src/pages/nosotros.astro)
- Implementa la página `/nosotros`.
- Usa un Header simple (similar al Hero pero más corto) con fondo `bg-brand-dark`.
- Compón la página usando `TeamGrid` y `OfficeLocation`.

### REGLAS DE ESTILO (CRÍTICO)
- **Colores:**
  - Fondo oscuro principal: `bg-brand-dark` (#020617) o `bg-brand-blue` (#0f172a).
  - Acentos: `text-brand-accent` (#10b981).
  - Texto suave: `text-gray-400` para descripciones sobre fondo oscuro.
- **Tipografía:** Usa fuentes Sans (Inter) limpias.
- **Espaciado:** Usa `py-24` para secciones principales. El aire es lujo.

---
NO MODIFIQUES `src/pages/index.astro` NI `src/layouts/Layout.astro`.
Crea tus propios componentes en `src/features/company/`.
