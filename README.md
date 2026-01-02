# Proyecto Angular 17 – Chat Interactivo

## Descripción
Este proyecto es una aplicación de chat desarrollada en **Angular 25**. Permite interactuar con múltiples chats de manera fluida, sin necesidad de recargar la página. Cada chat puede mostrar **avatares para las IAs**, mantener un **modo oscuro**, y la interfaz está diseñada para ocupar **toda la pantalla**.

Mi objetivo es practicar y aplicar conceptos de Angular como **componentes**, **servicios**, **data binding**, **event binding** y **gestión de estados**.

---

## Funcionalidades

- **Cambio de chat sin recargar la página:** Navega entre distintas conversaciones sin perder el historial.  
- **Modo oscuro:** Estilo visual adaptable para mejorar la experiencia.  
- **Pantalla completa:** La app se ajusta automáticamente al tamaño de la ventana.  
- **Interacción dinámica:** Los usuarios envían mensajes y reciben respuestas de los bots.  

---

##Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>

npm install

ng serve

## Uso:
Seleccionar un chat desde la lista.
Escribir un mensaje en el input y presionar Enter o el botón de enviar.
La IA responderá automáticamente.
Cambiar entre chats sin recargar la página.
Activar el modo oscuro/gamer desde el botón correspondiente.

##Personalización

Avatares: Coloca tus imágenes en public/ y actualiza la ruta en chat.service.ts.
Respuestas de IA: Modifica la función de generación de respuestas  en chat.service.ts.
Estilos: Ajusta styles.css o app.component.css para cambiar la apariencia general.

Tecnologías utilizadas
Angular 25.0.1
TypeScript 5.9.2
HTML / CSS
Node.js / npm

Autor: Octavio Sebastian Tabbia
Curso / Desarrollo de Angular
Fecha: 2026
