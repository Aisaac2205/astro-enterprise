# INSTRUCCIONES TÉCNICAS - MIEMBRO 2 (PRODUCT MANAGER)

## OBJETIVO: CATÁLOGO DE SERVICIOS Y PRODUCTO
Eres responsable de la sección "Servicios" y la presentación del producto.
La UI debe alinearse con el diseño **Dark & Minimalist** del Index.

### 1. MODELADO DE DATOS (Content Collections)
**[COMPLETADO]** El schema `services` ya está definido en `src/content/config.ts`. NO LO MODIFIQUES.

### 2. CREACIÓN DE CONTENIDO
**[COMPLETADO]** Los archivos Markdown ya han sido generados en `src/content/services/`. Usa estos datos para tu UI.

### 3. COMPONENTES UI (src/features/services/)
Implementa la UI consumiendo los datos existentes.

#### `ServiceList.astro`
- **Referencia de Estilo:** Ver `src/features/landing/FeaturesSection.astro`.
- **Diseño de Tarjetas:**
  - Fondo blanco (`bg-white`) con borde fino (`border-gray-100`).
  - Iconos: Usa `text-brand-blue` dentro de un contenedor `bg-brand-blue/5`.
  - Hover: Borde `border-brand-accent` o sombra suave `shadow-xl`.
- **Tipografía:** Headers en `text-brand-blue`. Texto de cuerpo gris y ligero (`font-light`).

#### `PricingTable.astro` (Opcional)
- Si incluyes precios, usa un diseño limpio.
- Destaca el plan "Enterprise" con un borde `brand-accent`.

### 4. PÁGINA (src/pages/servicios.astro)
- Implementa la página `/servicios`.
- **Hero de Servicios:** Fondo `bg-brand-light` con texto oscuro, diferente al Hero principal.
- Grid de servicios responsive (1 col móvil, 3 col desktop).

### REGLAS DE ESTILO (CRÍTICO)
- **Minimalismo:** Evita gradientes complejos. Prefiere colores sólidos y bordes sutiles.
- **Iconografía:** Usa SVGs de `heroicons.com` (outline version) con trazo `stroke-width="1.5"` para mantener elegancia.
- **Botones:** Usa el estilo "pill" (bordes totalmente redondeados) como en el Index.

---
NO MODIFIQUES EL INDEX. Trabaja exclusivamente en tu vertical `src/features/services/`.
