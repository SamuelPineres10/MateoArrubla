let textKissMateo = document.getElementById("p1")
let buttonKissMateo = document.getElementById("b1")
let textTeo = document.getElementById("kissTeo")

let contador = 0
let limite = false
let hash = false
textKissMateo.textContent = contador
textKissMateo.style.fontSize = "60px" 
const pageContainer = document.querySelector('.page-container');
const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.container');
let noMoreMsg = document.getElementById('noMoreMsg');

function createKissAnimation(x, y) {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.className = 'kiss-animation';
    kiss.style.left = `${x}px`;
    kiss.style.top = `${y}px`;
    document.body.appendChild(kiss);
    
    kiss.addEventListener('animationend', () => {
        document.body.removeChild(kiss);
    });
}

buttonKissMateo.addEventListener('click', (event) => {
    if (contador < 10) {
        createKissAnimation(event.clientX - 25, event.clientY - 25);
        contador++
        textKissMateo.textContent = contador
        if (contador > 5) {
            textKissMateo.style.color = "#ff69b4"
            buttonKissMateo.classList.add('pink')
            textTeo.textContent = "¡Ehg, pero te gusto!"
            textTeo.classList.add('pinkText')
        }
    } else if (!limite) {
        // Mover la imagen arriba del texto y apilar el layout en columna
        if (pageContainer && imageContainer && textContainer) {
            // Si la imagen no está dentro del contenedor de texto, moverla y ajustarla
            if (!textContainer.contains(imageContainer)) {
                textContainer.prepend(imageContainer);
            }
            pageContainer.style.flexDirection = 'column';
            imageContainer.style.width = '200px';
            imageContainer.style.height = '200px';
            imageContainer.style.marginBottom = '20px';
        }
        textTeo.textContent = ""
        textKissMateo.textContent = "¡Ya no te lo puedes besar!"
        textKissMateo.style.color = "#FFFF"
        buttonKissMateo.classList.remove('pink')  // Remove pink class when limit reached
        limite = true
        if (noMoreMsg) noMoreMsg.style.display = 'none';
    } else {
        // Mostrar las dos fotos juntas con un corazón en el medio
        if (imageContainer) {
            // Si ya existe el layout .two-photos, no lo recreamos
            let two = imageContainer.querySelector('.two-photos');
            if (!two) {
                // Crear wrapper
                two = document.createElement('div');
                two.className = 'two-photos';

                // Seleccionar las dos imágenes disponibles (si existen), sino clonar la que haya
                const imgs = Array.from(imageContainer.querySelectorAll('img'));
                let img1 = imgs[0] ? imgs[0].cloneNode(true) : null;
                let img2 = imgs[1] ? imgs[1].cloneNode(true) : null;

                // Si no existen suficientes imágenes, crear al menos dos usando la primera
                if (!img1 && imgs[0]) img1 = imgs[0].cloneNode(true);
                if (!img2 && imgs[0]) img2 = imgs[0].cloneNode(true);

                // Vaciar imageContainer y poner el wrapper
                // Remove the `secondary` class from clones so they are visible when appended
                if (img1) img1.classList && img1.classList.remove && img1.classList.remove('secondary');
                if (img2) img2.classList && img2.classList.remove && img2.classList.remove('secondary');
                imageContainer.innerHTML = '';
                if (img1) two.appendChild(img1);
                if (img2) two.appendChild(img2);

                // Heart element
                const heart = document.createElement('div');
                heart.className = 'heart-center';
                heart.textContent = '❤️';

                imageContainer.appendChild(two);
                imageContainer.appendChild(heart);
            }
            // Aseguramos que pageContainer esté en columna para apilar imagen encima del texto si se desea
            if (pageContainer) pageContainer.style.flexDirection = 'column';
            // Ajustes de tamaño para que se vea bien
            imageContainer.style.width = '450px';
            imageContainer.style.height = '300px';
            imageContainer.style.borderRadius = '12px';
        }

        textKissMateo.style.fontSize = "40px";
        textKissMateo.textContent = "¿Por que te lo quieres seguir besando? ¡Es de Ximena Naranjo!";
        buttonKissMateo.textContent = "Cansona!";
        hash = true
        if (noMoreMsg) noMoreMsg.style.display = 'none';
    }
})

// Mostrar/ocultar mensaje al pasar el mouse por el botón cuando limite=true
buttonKissMateo.addEventListener('mouseenter', () => {
    if (hash && noMoreMsg) {
        noMoreMsg.style.display = 'block';
    }
});
buttonKissMateo.addEventListener('mouseleave', () => {
    if (hash && noMoreMsg) {
        noMoreMsg.style.display = 'none';
    }
});

// Also support touch devices: show the message on touchstart and hide shortly after touchend
buttonKissMateo.addEventListener('touchstart', () => {
    if (limite && noMoreMsg) {
        noMoreMsg.style.display = 'block';
    }
}, {passive: true});
buttonKissMateo.addEventListener('touchend', () => {
    if (limite && noMoreMsg) {
        // keep it visible briefly so the user notices it
        setTimeout(() => {
            noMoreMsg.style.display = 'none';
        }, 1400);
    }
});