---
title: "Infraestructura Dual: Cloud + On-Premise"
description: "Arquitectura híbrida que permite procesar documentos en la nube o localmente, según requisitos de privacidad y rendimiento."
diagramType: "cloud"
specs:
  - label: "Motor Cloud"
    value: "Gemini 3.1 Flash Lite"
  - label: "Motor Local"
    value: "LM Studio (GPU/CPU)"
  - label: "Orquestación"
    value: "Docker + Kubernetes"
  - label: "Escaneo"
    value: "WebRTC / eSCL / AirScan"
---
DocScan opera en dos modos: cloud para velocidad y escalabilidad, y on-premise para máxima privacidad. El motor de orquestación detecta automáticamente qué backend usar según la configuración del tenant, sin cambios en el frontend. En modo local, los documentos nunca salen de tu red.
