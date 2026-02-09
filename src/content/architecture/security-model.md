---
title: "Defense-in-Depth Security"
description: "Capas de seguridad concéntricas para proteger sus activos más valiosos."
imageUrl: "https://images.unsplash.com/photo-1558494949-efc535b5c47c?auto=format&fit=crop&q=80&w=800"
diagramType: "security"
specs:
  - label: "Encryption"
    value: "AES-256 (At rest)"
  - label: "Transit"
    value: "TLS 1.3"
  - label: "Auth"
    value: "OIDC / OAuth2"
  - label: "WAF"
    value: "ModSecurity"
---
La seguridad no es un add-on, es el núcleo. Implementamos un modelo de seguridad Zero Trust. Cada microservicio autentica y autoriza cada petición. Los datos están cifrados tanto en tránsito como en reposo con gestión de llaves HSM.
