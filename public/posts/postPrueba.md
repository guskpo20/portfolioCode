---
title: "Guía Completa de Markdown"
date: "2024-10-27"
tags: ["markdown", "guía", "ejemplo"]
---

# Guía Completa de Markdown

Markdown es un lenguaje de marcado ligero que permite **dar formato** a texto de forma sencilla. Aquí tienes un ejemplo de cómo usar los elementos más comunes.

---

## Encabezados

Markdown soporta hasta 6 niveles de encabezados, desde `#` hasta `######`:

# Encabezado Nivel 1
## Encabezado Nivel 2
### Encabezado Nivel 3
#### Encabezado Nivel 4
##### Encabezado Nivel 5
###### Encabezado Nivel 6

---

## Énfasis

Puedes aplicar **negrita**, _cursiva_, o ~~tachado~~ al texto.

* **Negrita**: Usando `**texto**` o `__texto__`.
* *Cursiva*: Usando `*texto*` o `_texto_`.
* ~~Tachado~~: Usando `~~texto~~`.

---

## Listas

### Lista Desordenada
- Elemento 1
  - Sub-elemento 1.1
  - Sub-elemento 1.2
- Elemento 2
- Elemento 3

### Lista Ordenada
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
   1. Sub-elemento 3.1
   2. Sub-elemento 3.2

---

## Citas

> Esto es una cita en Markdown. Puedes citar una línea o incluso varios párrafos.

---

## Código

### Bloque de Código

Usa tres acentos invertidos para crear bloques de código con o sin resaltado de sintaxis:

```javascript
function saludo(nombre) {
  return `Hola, ${nombre}!`;
}
