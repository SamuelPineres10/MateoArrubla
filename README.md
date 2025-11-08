# Contador de Besos Interactivo 💋

Una aplicación web interactiva y divertida que cuenta besos virtuales que le das a Mateo Arrubla con animaciones y efectos visuales. El proyecto usa HTML, CSS y JavaScript puro, con una interfaz atractiva y responsiva que funciona tanto en escritorio como en dispositivos móviles.

## ¡¡Te llevas una Sorpresa!!
## ✨ Características

- **Contador de Besos**: Registra hasta 10 besos con animaciones de emojis 💋
- **Efectos Visuales**:
  - Fondo animado con partículas
  - Transiciones suaves de colores
  - Animaciones de besos flotantes
  - Efectos de brillo y escala en botones
- **Estados Dinámicos**:
  - 0-5 besos: Estado inicial
  - 6-9 besos: Cambios de color y mensajes especiales
  - 8+ besos: Transformación completa con fotos dobles y corazón
- **Totalmente Responsivo**:
  - Diseño adaptable para todos los dispositivos
  - Soporte para interacciones táctiles y mouse
  - Layout optimizado para móvil y escritorio

## 🚀 Cómo Ejecutar el Proyecto

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/SamuelPineres10/MateoArrubla.git
   cd MateoArrubla
   ```

2. **Abrir el Proyecto**
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Usar un servidor local (recomendado)
     ```bash
     # Si tienes Python instalado:
     python -m http.server 8000
     # Luego abre http://localhost:8000 en tu navegador
     ```

3. **Ver la Versión en Vivo**
   - Visitar [https://samuelpineres10.github.io/MateoArrubla/](https://samuelpineres10.github.io/MateoArrubla/)

## 💻 Tecnologías Utilizadas

- HTML5
- CSS3 (con Flexbox y Media Queries)
- JavaScript (Vanilla)
- [Particles.js](https://vincentgarreau.com/particles.js/) para el fondo animado
- Google Fonts (Poppins)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS y Android
- ✅ Responsive desde 320px hasta 4K

## 🎮 Cómo Usar

1. Al cargar la página verás un botón "Besalo"
2. Cada clic genera una animación de beso y suma al contador
3. Después de 5 besos, la interfaz cambia de color
4. Al llegar a 8 besos, se activa una transformación especial
5. ¡Sigue interactuando para descubrir todos los estados!

## 🛠️ Estructura del Proyecto

```
MateoArrubla/
│
├── index.html          # Archivo principal HTML
├── Hola.js            # Lógica JavaScript
├── particles.json     # Configuración de partículas
└── photos/           # Directorio de imágenes
    └── ...
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ✨ Créditos

Desarrollado con 💖 por [SamuelPineres10](https://github.com/SamuelPineres10)
