const musica = document.getElementById("musica");

const inicio = document.getElementById("inicio");
const jardin = document.getElementById("jardin");
const carta = document.getElementById("carta");
const final = document.getElementById("final");

const botonAbrir = document.getElementById("btnAbrir");
const botonCarta = document.getElementById("btnCarta");
const botonFinal = document.getElementById("btnFinal");
const botonRepetir = document.getElementById("btnRepetir");

const mensajeCarta = document.getElementById("mensajeCarta");

let temporizadorTypewriter;
let temporizadorBotonFinal;

const textoCarta = `Tal vez no te haya dado flores en físico, pero quise encontrar una forma diferente de darte este pequeño detalle. 🌻

Lo hice con mucho cariño, porque aunque parezca algo sencillo, detrás de estas flores hay un pedacito de mi tiempo y de mis sentimientos.

Espero que al verlas puedas sentir, aunque sea un poquito, el cariño con el que hice todo esto especialmente para ti.

Quizás unas flores duren unos días, pero quería regalarte un momento que puedas recordar con una sonrisa. 💛

Espero que te guste este pequeño detalle, Andrea.`;


// ==============================
// INICIO → JARDÍN
// ==============================

botonAbrir.addEventListener("click", () => {
    inicio.classList.remove("active");
    jardin.classList.add("active");

    musica.play();
});


// ==============================
// JARDÍN → CARTA
// ==============================

botonCarta.addEventListener("click", () => {

    clearTimeout(temporizadorTypewriter);
    clearTimeout(temporizadorBotonFinal);

    jardin.classList.remove("active");
    carta.classList.add("active");

    mensajeCarta.textContent = "";
    botonFinal.classList.remove("mostrar");

    let i = 0;

    function escribir() {
        if (i < textoCarta.length) {
            mensajeCarta.textContent += textoCarta.charAt(i);
            i++;

            temporizadorTypewriter = setTimeout(escribir, 45);
        } else {
            temporizadorBotonFinal = setTimeout(() => {
                botonFinal.classList.add("mostrar");

                console.log("🔥 BOTÓN MOSTRADO");
                console.log(botonFinal.className);
            }, 500);
        }
    }

    temporizadorTypewriter = setTimeout(escribir, 1200);
});


// ==============================
// CARTA → FINAL
// ==============================

botonFinal.addEventListener("click", () => {
    carta.classList.remove("active");
    final.classList.add("active");
});


// ==============================
// FINAL → INICIO
// ==============================

botonRepetir.addEventListener("click", () => {
    final.classList.remove("active");
    inicio.classList.add("active");
});


// ==============================
// PÉTALOS DEL JARDÍN
// ==============================

const petalsContainer = document.querySelector(".petals");

for (let i = 0; i < 15; i++) {
    const petal = document.createElement("span");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";

    petalsContainer.appendChild(petal);
}


// ==============================
// LUCIÉRNAGAS
// ==============================

const firefliesContainer = document.querySelector(".fireflies");

for (let i = 0; i < 8; i++) {
    const firefly = document.createElement("span");

    firefly.classList.add("firefly");

    firefly.style.left = Math.random() * 90 + "%";
    firefly.style.top = Math.random() * 70 + "%";

    firefliesContainer.appendChild(firefly);
}


// ==============================
// PÉTALOS FINALES
// ==============================

const finalPetalsContainer = document.querySelector(".final-petals");

for (let i = 0; i < 12; i++) {
    const petal = document.createElement("span");

    petal.classList.add("final-petal");

    petal.style.left = (10 + Math.random() * 80) + "%";
    petal.style.animationDelay = Math.random() * 5 + "s";

    finalPetalsContainer.appendChild(petal);
}
