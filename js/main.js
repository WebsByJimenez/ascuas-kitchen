// Slider de la cabecera
new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".mySwiper-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper-1 .swiper-button-next",
    prevEl: ".mySwiper-1 .swiper-button-prev",
  },
});

// Sliders de productos (uno por pestaña)
document.querySelectorAll(".mySwiper-2").forEach((el) => {
  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
    },
  });
});

// Modal de "Dejanos la reseña" (simulado: no se guarda nada)
const modal = document.getElementById("modal-resena");
const form = document.getElementById("form-resena");
const pasoForm = document.getElementById("paso-form");
const pasoGracias = document.getElementById("paso-gracias");
const error = document.getElementById("modal-error");
let cierreAuto;

document.getElementById("abrir-resena").addEventListener("click", () => {
  clearTimeout(cierreAuto);
  form.reset();
  error.hidden = true;
  pasoForm.hidden = false;
  pasoGracias.hidden = true;
  modal.showModal();
});

document.getElementById("cerrar-resena").addEventListener("click", () => modal.close());

// Cerrar al hacer clic en el fondo oscuro
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const texto = form.texto.value.trim();

  if (!nombre || !form.estrellas.value || !texto) {
    error.textContent = "Completa tu nombre, la valoración y la reseña.";
    error.hidden = false;
    return;
  }

  // Aquí no se envía a ningún sitio: solo se simula
  pasoForm.hidden = true;
  pasoGracias.hidden = false;
  cierreAuto = setTimeout(() => modal.close(), 2500);
});

/* Cerrar el menú*/
document.querySelectorAll(".navbar a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    document.getElementById("menu").checked = false;
  });
});

// Botones de ejemplo: muestran un aviso al pulsar
const toast = document.getElementById("toast");
let temporizadorToast;

document
  .querySelectorAll(".botones .btn-1, .info-txt .btn-2, .horario-info .btn-2")
  .forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      toast.textContent = "Demo: este botón no está activo en este proyecto de práctica.";
      toast.classList.add("visible");
      clearTimeout(temporizadorToast);
      temporizadorToast = setTimeout(() => toast.classList.remove("visible"), 3000);
    });
  });
