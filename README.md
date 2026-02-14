# Nexo - Enterprise Document Management Platform

A professional-grade platform for document management and enterprise technology services.

## Overview

Nexo is a comprehensive solution designed to centralize, digitize, and secure corporate intellectual capital. The platform provides a robust infrastructure for managing document life cycles, electronic signatures, and process automation.

## Core Features

- **Document Management**: Centralized repository for critical business documentation.
- **Certified Digitization**: High-precision OCR processing for converting physical archives into searchable digital assets.
- **Electronic Signature**: Integrated workflow for legal document signing and timestamping.
- **Microservices Architecture**: Scalable and secure infrastructure designed for high availability.
- **Enterprise Services**: Additional solutions including E-commerce development and corporate web presence.

## Technical Architecture

The platform is built with a focus on modularity and maintenance:

- **Frontend**: Built with Astro and React components for optimal performance and developer experience.
- **Data Layer**: Content-driven architecture using Astro Content Collections with strict Zod validation.
- **Styling**: Modern, responsive UI implemented with Tailwind CSS and a curated design system.
- **Icons**: Standardized Lucide-based icon system for visual consistency.

## Project Structure

```text
src/
├── content/            # Data Layer (Collections: team, services, architecture)
├── features/           # Modular UI Components and Business Logic
├── pages/              # Routing and Page Templates
├── layouts/            # Global Shell and Common Layout Patterns
├── components/         # Shared UI Primitives
└── styles/             # Global CSS and Tailwind Configuration
```

## Development

### Prerequisites

- Node.js (Latest LTS recommended)
- PNPM (Recommended package manager)

### Commands

- `pnpm install`: Install project dependencies.
- `pnpm dev`: Start the local development server.
- `pnpm build`: Generate a production-ready static build.
- `pnpm preview`: Preview the production build locally.

---

Property of Nexo Inc. All rights reserved.
