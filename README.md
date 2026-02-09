# Enterprise - Gestión Documental

Plataforma comercial para la gestión documental y servicios tecnológicos empresariales.

## Misión del Proyecto

Desarrollar un portal web corporativo que comunique eficazmente:
1.  **Equipo:** Roles y perfiles profesionales de una empresa de software.
2.  **Producto:** Sistema de Gestión Documental (características y beneficios).
3.  **Arquitectura:** Diagramas técnicos y flujos de proceso visuales.
4.  **Servicios:** Catálogo de servicios tecnológicos adicionales.
5.  **Corporativo:** Ubicación física y estructura organizacional.

## Distribución de Tareas

| Miembro | Rol | Responsabilidades Clave (Requisitos) | Instrucciones |
| :--- | :--- | :--- | :--- |
| **Miembro 1** | RRHH / Admin | **Puestos de Trabajo (Req 1)**, **Ubicación y Organigrama (Req 5)** | [`INSTRUCTIONS_MEMBER_1.md`](./INSTRUCTIONS_MEMBER_1.md) |
| **Miembro 2** | Producto | **Características del Producto (Req 2)**, **Servicios Tecnológicos (Req 4)** | [`INSTRUCTIONS_MEMBER_2.md`](./INSTRUCTIONS_MEMBER_2.md) |
| **Miembro 3** | Arquitecto | **Arquitectura de Software y Flujo del Proceso (Req 3)** | [`INSTRUCTIONS_MEMBER_3.md`](./INSTRUCTIONS_MEMBER_3.md) |

## Estructura del Proyecto

```text
src/
├── content/            # Capa de Datos
│   ├── team/           # Perfiles del equipo (JSON)
│   ├── services/       # Productos y Servicios (Markdown)
│   └── architecture/   # Diagramas y Procesos (Markdown)
├── features/           # Componentes UI
├── pages/              # Rutas
└── layouts/            # Plantillas
```

## Comandos

*   `pnpm install`: Instalar dependencias.
*   `pnpm dev`: Iniciar servidor local.
*   `pnpm build`: Compilar para producción.
