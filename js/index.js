const modal = document.getElementById("modal");
const contenedorModal = document.getElementById("contenedorModal");
const btnAbrirModal = document.getElementById("btnAbrirModal");
const btnCerrar = document.getElementById("btnCerrar");

btnAbrirModal.addEventListener("click", abrirModal);

function abrirModal() {
  console.log("a");
  contenedorModal.classList.add("modal-open");
  document.getElementById("container").style.opacity = 0.5;
  btnCerrar.addEventListener("click", cerrarModal);
}

function cerrarModal() {
  contenedorModal.classList.remove("modal-open");
  document.getElementById("container").style.opacity = 1;
}
