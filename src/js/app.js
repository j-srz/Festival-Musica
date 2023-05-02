document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

const iniciarApp = () => {
  navegacionFija();
  crearGaleria();
  // scrollNav();
};

const navegacionFija = () => {
  const barra = document.querySelector(".header");
  const lineup = document.querySelector(".lineup");
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    if (lineup.getBoundingClientRect().top < 0) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
};

const crearGaleria = () => {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
        <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
        <img
            loading="lazy"
            width="200"
            height="300"
            src="build/img/thumb/${i}.jpg"
            alt="imagen galeria"
        />
        `;
    imagen.onclick = () => mostrarImagen(i);
    galeria.appendChild(imagen);
  }
};

const mostrarImagen = (id) => {
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif" />
        <source srcset="build/img/grande/${id}.webp" type="image/webp" />
        <img
            loading="lazy"
            width="200"
            height="300"
            src="build/img/grande/${id}.jpg"
            alt="imagen galeria"
        />
        `;
  const overlay = document.createElement("div");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  const cerrarModal = document.createElement("p");
  cerrarModal.textContent = "X";
  cerrarModal.classList.add("btn-cerrar");
  cerrarModal.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };
  overlay.appendChild(cerrarModal);

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
};

// const scrollNav = () => {
//   const enlaces = document.querySelectorAll(".navegacion-principal a");
//   enlaces.forEach((enlace) => {
//     enlace.addEventListener("click", (e) => {
//       const seccionScroll = e.target.attributes.href.value;
//       const seccion = document.querySelector(seccionScroll);
//       seccion.scrollIntoview({behavior: "smooth"});
//     });
//   });
// };
