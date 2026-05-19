---
title: "Flujo de Procesamiento OCR"
description: "Secuencia completa desde la captura del documento hasta la extracción estructurada de datos vía IA."
diagramType: "sequence"
specs:
  - label: "Fuentes"
    value: "Cámara / eSCL / Upload"
  - label: "Pre-procesamiento"
    value: "Rotación, recorte, mejora"
  - label: "Extracción IA"
    value: "Gemini Flash / LM Studio"
  - label: "Salida"
    value: "JSON / CSV / XML / Webhook"
---
El flujo comienza con la captura: cámara del dispositivo, escáner de red compatible eSCL/AirScan, o carga de archivos. El backend pre-procesa la imagen (rotación automática, recorte de márgenes, mejora de contraste) y la envía al motor OCR seleccionado. El resultado estructurado se entrega vía API REST o webhook en tiempo real.
